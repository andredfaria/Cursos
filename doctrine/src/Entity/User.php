<?php 

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
* @ORM\Entity
* @ORM\table(name="userDoctrine")
*/

class User {
	/**
	* @ORM\Id
	* @ORM\colum(type = "integer", name="id")
	* @ORM\GenerateValue
	*/
	private $id;


	/**
	* @ORM\colum(type="String", nome="nome")
	*/
	private $nome;
}