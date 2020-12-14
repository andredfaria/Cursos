<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get(
    '/v1/public/characters/{id?}/{param?}',
    ['as' => 'characters.listar', 'uses' => 'App\Http\Controllers\charactersController@listar']
);

// Route::get(
//     '/v1/public/characters/comics/{id?}',
//     ['as' => 'characters.comics', 'uses' => 'App\Http\Controllers\charactersController@comics']
// );

// Route::get(
//     '/v1/public/characters/{id?}/events',
//     ['as' => 'characters.events', 'uses' => 'App\Http\Controllers\charactersController@events']
// );

// Route::get(
//     '/v1/public/characters/{id?}/series',
//     ['as' => 'characters.series', 'uses' => 'App\Http\Controllers\charactersController@series']
// );

// Route::get(
//     '/v1/public/characters/{id?}/stories',
//     ['as' => 'characters.stories', 'uses' => 'App\Http\Controllers\charactersController@stories']
// );

// Route::get(
//     '/v1/public/characters/{id?}/{$param}',
//     ['as' => 'characters.stories', 'uses' => 'App\Http\Controllers\charactersController@buscar']
// );
