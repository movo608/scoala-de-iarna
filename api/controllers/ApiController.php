<?php

namespace app\controllers;

/**
 * Allow all-cross-origin AJAX-let request.
 * Headers allowance for the header type.
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

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
use app\models\Contributors;
use yii\web\UploadedFile;
use app\components\ImageUploadComponent;

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
	    	case 'delete-category':
	    		$this->enableCsrfValidation = false;
	    		break;
	    	case 'create-post':
	    		$this->enableCsrfValidation = false;
	    		break;
	    	case 'delete-post':
	    		$this->enableCsrfValidation = false;
	    		break;
	    	case 'get-category':
	    		$this->enableCsrfValidation = false;
	    		break;
	    	case 'get-workshops':
	    		$this->enableCsrfValidation = false;
	    		break;
	    	case 'submit-form':
	    		$this->enableCsrfValidation = false;
				break;
			case 'delete-workshop':
				$this->enableCsrfValidation = false;
				break;
			case 'create-workshop':
				$this->enableCsrfValidation = false;
				break;
			case 'create-contributor':
				$this->enableCsrfValidation = false;
				break;
			case 'delete-contributor':
				$this->enableCsrfValidation = false;
				break;
			case 'get-submissions':
				$this->enableCsrfValidation = false;
				break;
			case 'delete-submission':
				$this->enableCsrfValidation = false;
				break;
			case 'get-sponsors':
				$this->enableCsrfValidation = false;
				break;
			case 'get-contributor':
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

	/**
	 * Deletes a category from the database
	 */
	public function actionDeleteCategory()
	{
		$request = Yii::$app->request;

		if ($request->get()) {

			if ($model = PostsCategories::find()->where(['id' => $request->get('id')])->one()) {
				if ($model->delete()) {
					return Json::encode(['status' => true, 'data' => 'success_entry_deleted']);
				} else {
					return Json::encode(['status' => false, 'data' => 'error_entry_not_deleted']);
				}
			} else {
				return Json::encode(['status' => false, 'data' => 'error_category_not_found']);
			}

		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}

	/**
	 * Creates a post
	 */
	public function actionCreatePost()
	{
		$request = Yii::$app->request;

		if ($request->get()) {
			$model = new Posts();

			$model->category_id 	= $request->get('category_id');
			$model->category_name 	= $request->get('category_name');
			$model->name = $request->get('name');
			$model->body = $request->get('body');

			if ($model->save(false)) {
				return Json::encode(['status' => true, 'data' => 'success_post_created']);
			} else {
				return Json::encode(['status' => false, 'data' => 'error_post_not_created']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}

	/**
	 * Deletes a post from the database
	 */
	public function actionDeletePost()
	{
		$request = Yii::$app->request;

		if ($request->get()) {
			if ($model = Posts::find()->where(['id' => $request->get('id')])->one()) {
				if ($model->delete()) {
					return Json::encode(['status' => false, 'data' => 'success_post_deleted']);
				} else {
					return Json::encode(['status' => false, 'data' => 'error_could_not_be_deleted']);
				}
			} else {
				return Json::encode(['status' => false, 'data' => 'error_post_not_found']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}

	/**
	 * Gets all the workshops from the database
	 */
	public function actionGetWorkshops()
	{
		$workshopsModel = Workshops::find()->all();

		return Json::encode($workshopsModel);
	}

	/**
	 * Gets all the submissions from the database
	 */
	public function actionGetSubmissions()
	{
		$model = SignupForm::find()->all();

		return Json::encode($model);
	}

	/**
	 * Saves te submitted form
	 */
	public function actionSubmitForm()
	{
		$request = Yii::$app->request;
		
		if ($request->get()) {
			$information = [
				'name' => $request->get('name'),
				'email' => $request->get('email'),
				'city' => $request->get('city'),
				'region' => $request->get('region'),
				'workshop' => $request->get('workshop'),
				'phone' => $request->get('phone'),
				'facebook_link' => $request->get('facebook_link'),
				'found_out' => $request->get('found_out'),
				'motivation' => $request->get('motivation'),
				'expectations' => $request->get('expectations'),
				'personal_project' => $request->get('personal_project'),
				'personal_experience' => $request->get('personal_experience'),
				'personal_values' => $request->get('personal_values'),
				'random_question' => $request->get('random_question'),
				'good_deed' => $request->get('good_deed'),
				'future_view' => $request->get('future_view')
			];

			if (SignupForm::find()->where(['email' => $information['email']])->one()) {
				return Json::encode(['status' => false, 'data' => 'error_email_found']);
			} elseif (SignupForm::find()->where(['facebook_link' => $information['facebook_link']])->one()) {
				return Json::encode(['status' => false, 'data' => 'facebook_link_found']);
			}

			$model = new SignupForm();

			$model->name 				= $information['name'];
			$model->email 				= $information['email'];
			$model->city 				= $information['city'];
			$model->region 				= $information['region'];
			$model->workshop 			= $information['workshop'];
			$model->phone				= $information['phone'];
			$model->facebook_link 		= $information['facebook_link'];
			$model->found_out			= $information['found_out'];
			$model->motivation			= $information['motivation'];
			$model->expectations		= $information['expectations'];
			$model->personal_project	= $information['personal_project'];
			$model->personal_experience = $information['personal_experience'];
			$model->personal_values		= $information['personal_values'];
			$model->good_deed			= $information['good_deed'];
			$model->future_view			= $information['future_view'];
			$model->random_question 	= $information['random_question'];

			if ($model->save(false)) {
				return Json::encode(['status' => true, 'data' => 'success_submission_saved']);
			} else {
				return Json::encode(['status' => false, 'data' => 'error_not_saved']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_connection']);
		}
	}

	/**
	 * Deletes a form submission from the database
	 */
	public function actionDeleteSubmission()
	{
		$request = Yii::$app->request;

		if ($request->get()) {
			$model = SignupForm::find()->where(['id' => $request->get('id')])->one();
			$model->delete();

			return Json::encode(['status' => true, 'data' => 'success']);
		} else {
			return Json::encode(['status' => false, 'data' => 'no_request']);
		}
	}

	/**
	 * Creates a workshop entry in the database
	 */
	public function actionCreateWorkshop()
	{
		$request = Yii::$app->request;

		if ($request->get()) {
			if (Workshops::find()->where(['name' => $request->get('name')])->one()) {
				return Json::encode(['status' => false, 'data' => 'error_name_exists']);
			}

			$model = new Workshops();
			$model->name = $request->get('name');

			if ($model->save(false)) {
				return Json::encode(['status' => true, 'data' => 'success']);
			} else {
				return Json::encode(['status' => false, 'data' => 'error_not_saved']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}

	/**
	 * Deletes a workshop entry from the database
	 */
	public function actionDeleteWorkshop()
	{
		$request = Yii::$app->request;

		if ($request->get()) {
			$model = Workshops::find()->where(['id' => $request->get('id')])->one();
			$model->delete();
			return Json::encode(['status' => true, 'data' => 'success']);
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}

	/**
	 * Gets the contributors from the database
	 */
	public function actionGetContributors()
	{
		$model = Contributors::find()->all();

		return Json::encode($model);
	}

	/**
	 * Gets the sponsors from the database
	 */
	public function actionGetSponsors()
	{
		$model = Sponsors::find()->all();

		return Json::encode($model);
	}

	/**
	 * Creates a contributor entry in the database
	 */
	public function actionCreateContributor()
	{
		$request = Yii::$app->request;

		if ($request->get()) {
			if (Contributors::find()->where(['name' => $request->get('name')])->one()) {
				return Json::encode(['status' => false, 'data' => 'error_name_exists']);
			}

			$model = new Contributors();
			$model->name = $request->get('name');

			if ($model->save(false)) {
				return Json::encode(['status' => true, 'data' => 'success']);
			} else {
				return Json::encode(['status' => false, 'data' => 'error_not_saved']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}

	/**
	 * Deletes a contributor entry from the database
	 */
	public function actionDeleteContributor()
	{
		$request = Yii::$app->request;
		
		if ($request->get()) {
			$model = Contributors::find()->where(['id' => $request->get('id')])->one();
			$model->delete();

			return Json::encode(['status' => true, 'data' => 'success']);
		}
	}

	/**
	 * Exports the form submissions table to sql files
	 */
	public function actionExportTable()
	{	
		$file = \Yii::createObject([
			'class' => 'codemix\excelexport\ExcelFile',
			'sheets' => [
				'FormSubmissions' => [
					'class' => 'codemix\excelexport\ActiveExcelSheet',
					'query' => SignupForm::find()
				]
			]
		]);
		$file->send('FormSubmissions.xlsx');
	}
}