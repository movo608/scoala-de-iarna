<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "posts".
 *
 * @property integer $id
 * @property integer $category_id
 * @property string $category_name
 * @property string $name
 * @property string $body
 * @property string $image1
 * @property string $image2
 */
class Posts extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'posts';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['category_id', 'category_name', 'name', 'body', 'image1', 'image2'], 'required'],
            [['category_id'], 'integer'],
            [['body'], 'string'],
            [['category_name'], 'string', 'max' => 32],
            [['name'], 'string', 'max' => 64],
            [['image1', 'image2'], 'string', 'max' => 256],
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
            'category_name' => 'Category Name',
            'name' => 'Name',
            'body' => 'Body',
            'image1' => 'Image1',
            'image2' => 'Image2',
        ];
    }

    /**
     * Uploads the image to the server and saves the path into the database
     */
    public function upload()
    {
        $time = time();
        if ($this->validate()) {
            //saves image1
            $this->image1->saveAs('uploads/' . 'file_image_type' . $time . '.' . $this->image1->extension);
            $this->image1 = 'file_image_type' . $time . '.' . $this->image1->extension;

            //saves image2
            $this->image2->saveAs('uploads/' . 'file_image_type' . $time . '.' . $this->image2->extension);
            $this->image2 = 'file_image_type' . $time . '.' . $this->image2->extension;

            if ($this->save(false)) {
                return true;
            }
        }
        return false;
    }
}
