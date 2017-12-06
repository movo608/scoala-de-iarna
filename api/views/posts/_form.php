<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\PostsCategories;

/* @var $this yii\web\View */
/* @var $model app\models\Posts */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="posts-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'category_id')->dropDownList(
        ArrayHelper::map(PostsCategories::find()->all(), 'id', 'name'),
        ['onchange' => '$( "#'.Html::getInputId($model, 'category_name').'").val($(this).val());']
    ) ?>

    <?= $form->field($model, 'category_name')->textInput(['maxlength' => true, 'class' => 'hidden']) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'body')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'image1')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'image2')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
