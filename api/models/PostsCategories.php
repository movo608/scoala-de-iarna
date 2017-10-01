<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "posts_categories".
 *
 * @property integer $id
 * @property string $name
 */
class PostsCategories extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'posts_categories';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name'], 'string', 'max' => 32],
            [['name'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
        ];
    }
}
