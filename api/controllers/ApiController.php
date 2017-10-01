<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
// JSON Helper
use yii\helpers\Json;
// Models
use app\models\ButtonsNavbar;
use app\models\ButtonsNavbarNotLogged;
use app\models\Posts;
use app\models\PostsCategories;

/**
* ApiController class, has a collection of all the possible API calls
*/
class ApiController extends Controller
{
	/**
	 * Before action, disables CSRF validation
	 */
	public function beforeAction($action)
	{            
	    switch ($action->id) {
	    	case 'get-logged-navbar':
	    		$this->enableCsrfValidation = false;
	    		break;
	    	case 'get-not-logged-navbar':
	    		$this->enableCsrfValidation = false;
	    		break;
	    	case 'create-category':
	    		$this->enableCsrfValidation = false;
	    		break;
	    }

	    return parent::beforeAction($action);
	}

	/**
	 * Extracts the entries from the `buttons_navbar_logged` table
	 */
	public function actionGetLoggedNavbar()
	{
		$buttonsModel = ButtonsNavbar::find()->all();

		return Json::encode($buttonsModel);
	}

	/**
	 * Exracts the entries from the `categories` table.
	 */
	public function actionGetCategories()
	{
		$categoriesModel = PostsCategories::find()->all();

		return Json::encode($categoriesModel);
	}

	/**
	 * Extracts the entries from the `posts` table.
	 */
	public function actionGetPosts()
	{
		$postsModel = Posts::find()->all();

		return Json::encode($postsModel);
	}

	/**
	 * Creates a category
	 */
	public function actionCreateCategory()
	{
		$request = Yii::$app->request;
		
		if ($request->get()) {
			if ($model_exists = PostsCategories::find()->where(['name' => $request->get('name')])->one()) {
				return Json::encode(['status' => false, 'data' => 'error_name_exists']);
			}
			$model = new PostsCategories();
			$model->name = $request->get('name');
			if ($model->save(false)) {
				return Json::encode(['status' => true, 'data' => 'success_category_created', 'name' => $model->name]);
			} else {
				return Json::encode(['status' => false, 'data' => 'error_category_not_saved']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}
}