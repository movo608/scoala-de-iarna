<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "posts".
 *
 * @property integer $id
 * @property integer $category_id
 * @property string $category_name
 * @property string $name
 * @property string $body
 * @property string $image1
 * @property string $image2
 */
class Posts extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'posts';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['category_id', 'category_name', 'name', 'body', 'image1', 'image2'], 'required'],
            [['category_id'], 'integer'],
            [['body'], 'string'],
            [['category_name'], 'string', 'max' => 32],
            [['name'], 'string', 'max' => 64],
            [['image1', 'image2'], 'string', 'max' => 256],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'category_id' => 'Category ID',
            'category_name' => 'Category Name',
            'name' => 'Name',
            'body' => 'Body',
            'image1' => 'Image1',
            'image2' => 'Image2',
        ];
    }
}
