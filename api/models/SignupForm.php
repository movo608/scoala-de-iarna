<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "signup_form".
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $city
 * @property string $region
 * @property string $workshop
 */
class SignupForm extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'signup_form';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'email', 'city', 'region', 'workshop'], 'required'],
            [['name'], 'string', 'max' => 128],
            [['email', 'city', 'region'], 'string', 'max' => 64],
            [['workshop'], 'string', 'max' => 32],
            [['email'], 'unique'],
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
            'email' => 'Email',
            'city' => 'City',
            'region' => 'Region',
            'workshop' => 'Workshop',
        ];
    }
}
