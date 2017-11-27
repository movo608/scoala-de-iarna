<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Sponsors */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Sponsors', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="sponsors-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'name',
            'image' => [
                'attribute' => 'image',
                'value' => function($value) {
                    return 'http://127.0.0.1/scoala-de-iarna/api/web/uploads/' . $value->image;
                },
                'format' => ['image', ['class' => 'col-md-7 col-lg-7 col-xs-7']]
            ],
        ],
    ]) ?>

</div>
