@include ('layout.header')

<div class="container">
    <div class="row">
        <div class="col-md-6">
            <h2>Castanho</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Genero</th>
                        <th scope="col">olho</th>
                        <th scope="col">Vertente</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($registros['brown'] as $key => $registro)
                        @if ($key > 10)
                            @continue;
                        @endif

                        <tr>
                            <th scope="row">{{ $registro['id'] }}</th>

                            <td>{{ $registro['nome'] }}</td>
                            <td>{{ $registro['genero'] }}</td>
                            <td>{{ $registro['olho'] }}</td>
                            <td>{{ $registro['vertente'] }}</td>
                        </tr>

                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="col">
            <h2>Preto</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Genero</th>
                        <th scope="col">olho</th>
                        <th scope="col">Vertente</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($registros['black'] as $key => $registro)
                        @if ($key > 10)
                            @continue;
                        @endif

                        <tr>
                           <th scope="row">{{ $registro['id'] }}</th>

                            <td>{{ $registro['nome'] }}</td>
                            <td>{{ $registro['genero'] }}</td>
                            <td>{{ $registro['olho'] }}</td>
                            <td>{{ $registro['vertente'] }}</td>
                        </tr>

                    @endforeach
                </tbody>
            </table>
        </div>

        <div class="col-md-6">
            <h2> Verde </h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Genero</th>
                        <th scope="col">olho</th>
                        <th scope="col">Vertente</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($registros['green'] as $key => $registro)
                        @if ($key > 10)
                            @continue;
                        @endif

                        <tr>
                            <th scope="row">{{ $registro['id'] }}</th>

                            <td>{{ $registro['nome'] }}</td>
                            <td>{{ $registro['genero'] }}</td>
                            <td>{{ $registro['olho'] }}</td>
                            <td>{{ $registro['vertente'] }}</td>
                        </tr>

                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="col-md-6">
            <h2> Azul </h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Genero</th>
                        <th scope="col">olho</th>
                        <th scope="col">Vertente</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($registros['blue'] as $key => $registro)
                        @if ($key > 10)
                            @continue;
                        @endif
                        <tr>
                            <th scope="row">{{ $registro['id'] }}</th>

                            <td>{{ $registro['nome'] }}</td>
                            <td>{{ $registro['genero'] }}</td>
                            <td>{{ $registro['olho'] }}</td>
                            <td>{{ $registro['vertente'] }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

    </div>
    </main>

    @include ('layout.footer')
