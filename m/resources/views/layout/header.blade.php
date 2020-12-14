<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Herois</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link href="/resources/css/app.css">

    <!-- Styles -->
    <style></style>

    <style>
        body {
            font-family: 'Nunito';
        }
    </style>
</head>

<body class="antialiased">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Marvel</h1>
            </div>
        </div>

        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header class="masthead mb-auto">
                <div class="inner">
                    <nav class="nav nav-masthead justify-content-center">
                        <a class="nav-link active" href="/">Home</a>
                        <a class="nav-link" href="/v1/public/characters">Characters</a>
                        <a class="nav-link" href="/v1/public/characters/comics/">Comics</a>
                        <a class="nav-link" href="/v1/public/characters/stories">Stories</a>
                        <a class="nav-link" href="/v1/public/characters/series">Series</a>
                        <a class="nav-link" href="/v1/public/characters/events">Events</a>
                    </nav>
                </div>
            </header>