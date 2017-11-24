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
            [['title', 'body', 'image_url'], 'required'],
            [['body'], 'string'],
            [['image_url'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg'],
            [['title'], 'string', 'max' => 128]
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
        ];
    }

    /**
     * Uploads the image to the server and saves the path into the database.
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
}
