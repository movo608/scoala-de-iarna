<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "news".
 *
 * @property integer $id
 * @property string $title
 * @property string $body
 * @property string $image_url
 * @property integer $active
 */
class News extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'news';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'body', 'image_url', 'active'], 'required'],
            [['body'], 'string'],
            [['image_url'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg'],
            [['active'], 'string'],
            [['title'], 'string', 'max' => 128],
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
            'body' => 'Body',
            'image_url' => 'Image',
            'active' => 'Active',
        ];
    }

    /**
     * Uploads the image to the server and saves the path into the database
     */
    public function upload()
    {
        $time = time();
        if ($this->validate()) {
            $this->image_url->saveAs('uploads/' . 'file_image_type' . $time . '.' . $this->image_url->extension);
            $this->image_url = 'file_image_type' . $time . '.' . $this->image_url->extension;

            if ($this->save(false)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Define scenarios
     */
    public function scenarios()
    {
        $scenarios = parent::scenarios();

        $scenarios['create'] = ['title', 'body', 'image_url', 'active'];
        $scenarios['update'] = [];

        return $scenarios;
    }
}
