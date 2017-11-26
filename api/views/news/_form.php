<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\News */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="news-form">

    <p>
        TIP: Ca sa introduci un paragraf nou, pune textul acelui paragraf intre <code><?= Html::encode('<p>') ?></code> si <code><?= Html::encode('</p>') ?></code>.
    </p>

    <p>
        La fel de bine merge cu orice alt element HTML. Le gasesti pe net, in cazul in care vrei sa te mai documentezi putin. ;)
    </p>

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'body')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'image_url')->fileInput() ?>

    <?= $form->field($model, 'active')->dropDownList(
        [0, 1]
    ) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
