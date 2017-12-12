<?php

/* @var $this yii\web\View */
/* use yii\helpers\Html */
/* use yii\bootstrap\nav */

use yii\helpers\Html;

$this->title = 'My Yii Application';
?>
<div class="site-index">
    <div class="jumbotron">
        <div class="page-header">
            <h3>
                This is the admin panel for <em>www.scoala-aga.ro</em>
                namely resided on <em>api.scoala-aga.ro</em>.
            </h3>
        </div>

        <div class="container">
            <table class="table table-hover">
                <thead>
                    <td>Path</td>
                    <td>Component Name</td>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <?= Html::a('/news', ['/news']) ?>
                        </td>
                        <td>
                            News
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <?= Html::a('/sponsors', ['/sponsors']) ?>
                        </td>
                        <td>
                            Sponsors
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <?= Html::a('/posts-categories', ['/posts-categories']) ?>
                        </td>
                        <td>
                            Posts Categories
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <?= Html::a('/posts', ['/posts']) ?>
                        </td>
                        <td>
                            Posts
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
