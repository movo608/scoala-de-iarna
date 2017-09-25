<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "user".
 *
 * @property integer $id
 * @property string $email
 * @property string $access_token
 * @property string $password
 * @property integer $is_logged
 */
class User extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'user';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['email', 'access_token', 'password', 'is_logged'], 'required'],
            [['is_logged'], 'integer'],
            [['email'], 'string', 'max' => 32],
            [['access_token', 'password'], 'string', 'max' => 256],
            [['email'], 'unique'],
        ];
    }
}