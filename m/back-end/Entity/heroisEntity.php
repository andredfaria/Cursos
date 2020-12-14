<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity
 * @ORM\table(name="herois")
 */

class heroisEntity
{
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

    /**
     * @ORM\colum(type="String", nome="olho")
     */
    private $olho;

    /**
     * @ORM\colum(type="String", nome="raça")
     */
    private $raça;

    /**
     * @ORM\colum(type="String", nome="cabelo")
     */
    private $cabelo;

    /**
     * @ORM\colum(type="String", nome="altura")
     */
    private $altura;

    /**
     * @ORM\colum(type="String", nome="editora")
     */
    private $editora;

    /**
     * @ORM\colum(type="String", nome="pele")
     */
    private $pele;

    /**
     * @ORM\colum(type="String", nome="vertente")
     */
    private $vertente;


    /**
     * @ORM\colum(type="String", nome="peso")
     */
    private $peso;


    public function getId()
    {
        return $this->$id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome()
    {
        $this->nome = $nome;
    }

    /**
     * Get 	* @ORM\colum(type="String", nome="olho")
     */
    public function getOlho()
    {
        return $this->olho;
    }

    /**
     * Set 	* @ORM\colum(type="String", nome="olho")
     *
     * @return  self
     */
    public function setOlho($olho)
    {
        $this->olho = $olho;

        return $this;
    }

    /**
     * Get 	* @ORM\colum(type="String", nome="raça")
     */
    public function getRaça()
    {
        return $this->raça;
    }

    /**
     * Set 	* @ORM\colum(type="String", nome="raça")
     *
     * @return  self
     */
    public function setRaça($raça)
    {
        $this->raça = $raça;

        return $this;
    }

    /**
     * Get 	* @ORM\colum(type="String", nome="cabelo")
     */
    public function getCabelo()
    {
        return $this->cabelo;
    }

    /**
     * Set 	* @ORM\colum(type="String", nome="cabelo")
     *
     * @return  self
     */
    public function setCabelo($cabelo)
    {
        $this->cabelo = $cabelo;

        return $this;
    }

    /**
     * Get 	* @ORM\colum(type="String", nome="altura")
     */
    public function getAltura()
    {
        return $this->altura;
    }

    /**
     * Set 	* @ORM\colum(type="String", nome="altura")
     *
     * @return  self
     */
    public function setAltura($altura)
    {
        $this->altura = $altura;

        return $this;
    }

    /**
     * Get 	* @ORM\colum(type="String", nome="editora")
     */
    public function getEditora()
    {
        return $this->editora;
    }

    /**
     * Set 	* @ORM\colum(type="String", nome="editora")
     *
     * @return  self
     */
    public function setEditora($editora)
    {
        $this->editora = $editora;

        return $this;
    }

    /**
     * Get 	* @ORM\colum(type="String", nome="pele")
     */
    public function getPele()
    {
        return $this->pele;
    }

    /**
     * Set 	* @ORM\colum(type="String", nome="pele")
     *
     * @return  self
     */
    public function setPele($pele)
    {
        $this->pele = $pele;

        return $this;
    }

    /**
     * Get 	* @ORM\colum(type="String", nome="vertente")
     */
    public function getVertente()
    {
        return $this->vertente;
    }

    /**
     * Set 	* @ORM\colum(type="String", nome="vertente")
     *
     * @return  self
     */
    public function setVertente($vertente)
    {
        $this->vertente = $vertente;

        return $this;
    }

    /**
     * Get 	* @ORM\colum(type="String", nome="peso")
     */
    public function getPeso()
    {
        return $this->peso;
    }

    /**
     * Set 	* @ORM\colum(type="String", nome="peso")
     *
     * @return  self
     */
    public function setPeso($peso)
    {
        $this->peso = $peso;

        return $this;
    }
}
