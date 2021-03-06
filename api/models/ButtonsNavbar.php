<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "buttons_navbar".
 *
 * @property integer $id
 * @property string $name
 * @property string $value_en
 * @property string $value_ro
 * @property string $value_hu
 */
class ButtonsNavbar extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'buttons_navbar_logged';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'value'], 'required'],
            [['name', 'value'], 'string', 'max' => 32],
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
            'value' => 'Value'
        ];
    }
}
