<?php

namespace app\components;

use Yii;
use yii\base\Component;

class SecurityServiceComponent extends Component {
    /**
	 * Generates a random sha256 hash
	 * 
	 * @return string
	 */
	public static function generateHash()
	{
		return hash('sha256', time() . rand(1,999));
	}
    /**
     * Generates a password hash from the user hash and the requested password
     *
     * @param string $userHash The user hash from account security
     * @param string $password The password what you want to encode
     *
     * @return string
     */
    public static function generatePasswordHash($userHash, $password)
    {
        return hash('sha256', $password . $userHash);
    }
    /**
     * Generates a sha256 hash token from the requested string
     *
     * @param string $data The string what you want to hash into a token
     *
     * @return string
     */
    public static function generateTokenHash($data)
    {
        return hash('sha256', $data);
    }
    /**
     * Generates a random password
     *
     * @return string
     **/
    public static function generateRandomPassword()
    {
        $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        for ($i = 0; $i < 8; $i++) {
            $n = rand(0, count($alphabet)-1);
            $pass[$i] = $alphabet[$n];
        }
        return $pass;
    }
}