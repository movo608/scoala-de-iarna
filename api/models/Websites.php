<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "websites".
 *
 * @property integer $id
 * @property string $title
 * @property string $url
 * @property string $img_url
 * @property string $description_en
 * @property string $description_ro
 * @property string $description_hu
 * @property integer $score_in
 * @property integer $score_out
 * @property integer $premium
 */
class Websites extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'websites';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'url', 'img_url', 'description_en', 'description_ro', 'description_hu', 'score_in', 'score_out', 'premium'], 'required'],
            [['description_en', 'description_ro', 'description_hu'], 'string'],
            [['score_in', 'score_out', 'premium'], 'integer'],
            [['title', 'url', 'img_url'], 'string', 'max' => 256],
            [['url'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'url' => 'Url',
            'img_url' => 'Img Url',
            'description_en' => 'Description En',
            'description_ro' => 'Description Ro',
            'description_hu' => 'Description Hu',
            'score_in' => 'Score In',
            'score_out' => 'Score Out',
            'premium' => 'Premium',
        ];
    }
}
