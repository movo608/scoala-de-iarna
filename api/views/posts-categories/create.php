<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\PostsCategories */

$this->title = 'Create Posts Categories';
$this->params['breadcrumbs'][] = ['label' => 'Posts Categories', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="posts-categories-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
