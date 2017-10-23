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
use app\models\Workshops;
use app\models\SignupForm;
use app\models\Sponsors;
use app\models\Contributors;
use yii\web\UploadedFile;

class ConfigController extends Controller {

	/**
	 * Public function that truncates the table
	 */
	public function actionTruncateTable($tableName)
	{
			
	}

}