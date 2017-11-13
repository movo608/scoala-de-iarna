<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "signup_form".
 *
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string $facebook_link
 * @property string $city
 * @property string $region
 * @property string $workshop
 * @property string $found_out
 * @property string $motivation
 * @property string $expectations
 * @property string $personal_project
 * @property string $personal_experience
 * @property string $personal_values
 * @property string $random_question
 * @property string $good_deed
 * @property string $future_view
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
            [['name', 'email', 'phone', 'facebook_link', 'city', 'region', 'workshop', 'found_out', 'motivation', 'expectations', 'personal_project', 'personal_experience', 'personal_values', 'random_question', 'good_deed', 'future_view'], 'required'],
            [['found_out', 'motivation', 'expectations', 'personal_project', 'personal_experience', 'personal_values', 'random_question', 'good_deed', 'future_view'], 'string'],
            [['name', 'facebook_link'], 'string', 'max' => 128],
            [['email', 'city', 'region'], 'string', 'max' => 64],
            [['phone'], 'string', 'max' => 16],
            [['workshop'], 'string', 'max' => 32],
            [['email'], 'unique'],
            [['facebook_link'], 'unique'],
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
            'phone' => 'Phone',
            'facebook_link' => 'Facebook Link',
            'city' => 'City',
            'region' => 'Region',
            'workshop' => 'Workshop',
            'found_out' => 'Found Out',
            'motivation' => 'Motivation',
            'expectations' => 'Expectations',
            'personal_project' => 'Personal Project',
            'personal_experience' => 'Personal Experience',
            'personal_values' => 'Personal Values',
            'random_question' => 'Random Question',
            'good_deed' => 'Good Deed',
            'future_view' => 'Future View',
        ];
    }
}
