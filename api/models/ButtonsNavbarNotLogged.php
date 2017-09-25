<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "buttons_navbar_not_logged".
 *
 * @property integer $id
 * @property string $name
 * @property string $value_en
 * @property string $value_ro
 * @property string $value_hu
 */
class ButtonsNavbarNotLogged extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'buttons_navbar_not_logged';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'value_en', 'value_ro', 'value_hu'], 'required'],
            [['name', 'value_en', 'value_ro', 'value_hu'], 'string', 'max' => 32],
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
            'value_en' => 'Value En',
            'value_ro' => 'Value Ro',
            'value_hu' => 'Value Hu',
        ];
    }
}
