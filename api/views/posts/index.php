<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\PostsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Posts';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="posts-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Posts', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'category_id',
            'category_name',
            'name',
            'body' => [
                'attribute' => 'body',
                'value' => function($value) {
                    return strlen($value->body) > 50 ? substr($value->body, 0, 50) . '...' : $value->body;
                }
            ],
            'image1',
            'image2',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
