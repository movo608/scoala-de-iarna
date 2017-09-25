<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\helpers\Json;
use yii\web\HttpException;
use app\components\SecurityServiceComponent;
use app\models\User;

class SignupController extends Controller 
{
	/**
	 * Before action, disables CSRF validation
	 */
	public function beforeAction($action)
	{            
	    if ($action->id == 'signup') {
	        $this->enableCsrfValidation = false;
	    }

	    return parent::beforeAction($action);
	}

	/**
	 * Handles the POST request.
	 * Checks if the e-mail address already exists.
	 */
	public function actionSignup()
	{
		$model = new User();

		if (Yii::$app->request->post()) {
			$model->email = Yii::$app->request->post('email');

			if (User::find()->where(['email' => $model->email])->one()) {
				return Json::encode(['status' => false, 'data' => 'Email address already exists']);
			}

			$model->password = Yii::$app->request->post('password');
			$model->access_token = SecurityServiceComponent::generateHash();
			$model->password = SecurityServiceComponent::generatePasswordHash($model->access_token, $model->password);

			if ($model->save(false)) {
				return Json::encode(['status' => true, 'data' => 'User successfully signed up.']);
			} else {
				return Json::encode(['status' => false, 'data' => 'User could not be saved.']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'No request has been made.']);
		}
	}
}