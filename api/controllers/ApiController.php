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
	    	case 'get-logged-navbar':
	    		$this->enableCsrfValidation = false;
	    		break;
	    	case 'get-not-logged-navbar':
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
}