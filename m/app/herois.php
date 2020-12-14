<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class herois extends Model
{
  protected $fillable = [
    'nome',  'id' , 'nome', 'genero','olho' ,'raça' ,'cabelo' ,'altura','editora' ,'pele' ,'vertente','peso'
  ];
}