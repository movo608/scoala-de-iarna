<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
// JSON Helper
use yii\helpers\Json;
// Models
use app\models\ButtonsNavbar;
use app\models\ButtonsNavbarNotLogged;

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
	    	case 'create-cat':
	    		$this->enableCsrfValidation = false;
	    		break;
	    	case 'create-website':
	    		$this->enableCsrfValidation = false;
	    		break;
	    }

	    return parent::beforeAction($action);
	}

	/**
	 * Extracts the entries from the `buttons_navbar_logged` table
	 */
	public function actionGetNavbar()
	{
		$buttonsModel = ButtonsNavbar::find()->all();

		return Json::encode($buttonsModel);
	}

	/**
	 * Extracts the entries from the `buttons_navbar_not_logged` table
	 */
	public function actionGetLoggedNavbar()
	{
		$loggedButtonsModel = ButtonsNavbarNotLogged::find()->all();

		return Json::encode($loggedButtonsModel);
	}

	/**
	* Gets the posts from a category.
	* Category id provided in URL.
	* URL format: web/api/get-web-from-cat?id={:id}
	*/
	public function actionGetWebFromCat($id, $result = [])
	{
		$links = CategoriesWebsitesLink::find()->where(['category_id' => $id])->all();

		$iterator = (int) 0;
		foreach ($links as $link) {
			$result[$iterator] = Websites::find()->where(['id' => $link->website_id])->one();
			$iterator++;
		}

		return Json::encode($result);
	}
}