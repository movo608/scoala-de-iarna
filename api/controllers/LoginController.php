<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\auth\HttpBasicAuth;
use app\models\User;
use yii\helpers\Json;
use app\components\SecurityServiceComponent;
use yii\web\HttpException;
use yii\filters\Cors;
use yii\web\Response;

class LoginController extends Controller 
{
	/**
	 * Initialization: disables session
	 */
	public function init()
	{
		parent::init();

		Yii::$app->user->enableSession = false;
	}

	/**
	 * @inheritdoc
	 */
	public function behaviors()
	{
        $behaviors = parent::behaviors();
        $behaviors['corsFilter'] = [
            'class' => Cors::className(),
            'cors' => [
                'Origin' => ['*'],
                'Access-Control-Request-Method' => [
                	'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'
                ],
                'Access-Control-Request-Headers' => ['*'],
                'formats' => [
                	'application/json' => Response::FORMAT_JSON,
            	],
            ],
        ];

        return $behaviors;
    }

	/**
	 * Before action, disables CSRF validation
	 */
	public function beforeAction($action)
	{            
	    if ($action->id == 'login') {
	        $this->enableCsrfValidation = false;
	    }
	    if ($action->id == 'logout') {
	    	$this->enableCsrfValidation = false;
	    }
	    if ($action->id == 'store-login') {
	    	$this->enableCsrfValidation = false;
	    }

	    return parent::beforeAction($action);
	}

	/**
	 * Logs in the user. Theoretically.
	 */
	public function actionLogin($credentials = [])
	{
		$request = Yii::$app->request;

		if ($request->get()) {	
			$credentials = [
				'email' => $request->get('email'),
				'password' => $request->get('password')
			];

			if (!$user = $this::findUser($credentials['email'])) {
				return Json::encode(['status' => false, 'data' => 'error_email_not_found']);
			}

			if (!$user->is_logged) {
				if ($this->validatePassword($credentials['password'], $user)) {
					$user->is_logged = 1;
					$user->save(false, ['is_logged']);
					
					return Json::encode(['status' => true, 'data' => 'success', 'userId' => $user->id, 'username' => $user->email]);
				} else {
					return Json::encode(['status' => false, 'data' => 'error_invalid_credentials']);
				}
			} else {
				return Json::encode(['status' => false, 'data' => 'error_already_logged']);
			}

		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}

	/**
	 * Sends a user login request, if the app's cache has the preferred info
	 */
	public function actionStoreLogin()
	{
		$request = Yii::$app->request;

		if ($request->get()) {
			if ($user = $this::findUser($request->get('email'))) {
				if (!$user->is_logged) {
					$user->is_logged = 1;
					if ($user->save(false, ['is_logged'])) {
						return Json::encode([
							'status' => true, 
							'data' => 'success_user_logged_on_cache', 
							'message' => 'success_user_logged_on_cache', 
							'userId' => $user->id,
							'username' => $user->email
						]);
					} else {
						return Json::encode(['status' => false, 'data' => 'error_internal_error']);
					}
				} else {
					return Json::encode(['status' => false, 'data' => 'error_user_already_logged']);
				}
			} else {
				return Json::encode(['status' => false, 'data' => 'error_user_not_found']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}

	/**
	 * Logs an user out, rendering the (model)$user -> `is_logged` to 0 
	 */
	public function actionLogout() {

		if (Yii::$app->request->get()) {
			$model = User::find()->where(['id' => Yii::$app->request->get('id')])->one();
			$model->is_logged = 0;
			if ($model->save(false)) {
				return Json::encode(['status' => true, 'data' => 'success_user_user_logged_out']);
			} else {
				return Json::encode(['status' => false, 'data' => 'error_user_not_logged_out']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'error_not_request']);
		}
	}

	/**
	 * Finds the user with the specified email address
	 */
	private static function findUser($email)
	{
		return User::find()->where(['email' => $email])->one();
	}

	/**
	 * Checks the submitted password's constructed hash and the one in the database
	 */
	private function validatePassword($password, $user)
	{
		return SecurityServiceComponent::generatePasswordHash($user->access_token, $password) === $user->password;
	}
}