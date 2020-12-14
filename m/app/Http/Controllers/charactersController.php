<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\Request;

use App\herois;

class charactersController extends Controller
{
    public function tela()
    {
        return view('index');
    }

    public function listar($id = 0, $param = '')
    {

        if ($id === 0 && $param === '') {

            $registros = herois::all();
            return view('characters', compact('registros'));
        } elseif ((int)$id !== 0 && $param === '') {

            // Busca por string retorna outra estrutura por isso não usada
            // $registros = herois::select('*')->where('nome', 'like', '%' . $id . '%')->get();

            $registros = herois::all()->where('id', '=', $id);
            return view('characters', compact('registros'));
        } elseif ($id === 'comics') {

            $registros = herois::all()->groupBy('editora')->toArray();
            dd($registros);
        } elseif ((int)$id !== 0 && $param == 'comics') {

            $registros = herois::all()->where('id', '=', $id)->groupBy('editora')->toArray();
            dd($registros);
        } elseif ($id === 'events') {

            $registros = herois::all()->groupBy('vertente')->toArray();
        } elseif ((int)$id !== 0 && $param === 'events') {

            $registros = herois::all()->where('id', '=', $id)->groupBy('vertente')->toArray();
        } elseif ($id === 'series') {

            $registros = herois::all()->groupBy('genero')->toArray();
        } elseif ((int)$id !== 0 && $param === 'series') {

            $registros = herois::all()->where('id', '=', $id)->groupBy('genero')->toArray();
        } elseif ($id === 'stories') {

            $registros = herois::all()->groupBy('olho')->toArray();
        } elseif ((int)$id !== 0 && $param === 'stories') {

            $registros = herois::all()->where('id', '=', $id)->groupBy('olho')->toArray();
        } else {
            abort(404);
        }

        $view = (int) $param != 0 || $param == '' ? $id : $param;

        return view($view, compact('registros'));
    }
}
