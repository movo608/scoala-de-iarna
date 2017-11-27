<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "sponsors".
 *
 * @property integer $id
 * @property string $name
 * @property string $image
 */
class Sponsors extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'sponsors';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'image'], 'required'],
            [['image'], 'file', 'skipOnEmpty' => false, 'extensions' => 'jpg, png'],
            [['name'], 'string', 'max' => 128],
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
            'image' => 'Image',
        ];
    }

    /**
     * Uploads the image to the server and saves the path into the database
     */
    public function upload()
    {
        $time = time();
        if ($this->validate()) {
            $this->image->saveAs('uploads/' . 'file_image_type' . $time . '.' . $this->image->extension);
            $this->image = 'file_image_type' . $time . '.' . $this->image->extension;

            if ($this->save(false)) {
                return true;
            }
        }
        return false;
    }
}
