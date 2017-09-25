<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "categories_websites_link".
 *
 * @property integer $id
 * @property integer $category_id
 * @property integer $website_id
 */
class CategoriesWebsitesLink extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'categories_websites_link';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['category_id', 'website_id'], 'required'],
            [['category_id', 'website_id'], 'integer'],
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
            'website_id' => 'Website ID',
        ];
    }
}
