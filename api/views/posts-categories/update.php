<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\PostsCategories */

$this->title = 'Update Posts Categories: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Posts Categories', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="posts-categories-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
