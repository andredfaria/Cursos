@include ('layout.header')

<div class="container">
    <div class="row">
        @if (isset($registros['Male']))
            <div class="col-md-6">
                <h2>Masculino</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Vertente</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($registros['Male'] as $key => $registro)
                            @if ($key > 10)
                                @continue;
                            @endif

                            <tr>
                                <th scope="row">{{ $registro['id'] }}</th>

                                <td>{{ $registro['nome'] }}</td>
                                <td>{{ $registro['genero'] }}</td>
                                <td>{{ $registro['editora'] }}</td>
                                <td>{{ $registro['vertente'] }}</td>
                            </tr>

                        @endforeach
                    </tbody>
                </table>
            </div>
        @endif
        @if (isset($registros['Female']))
            <div class="col-md-6">
                <h2>Feminino</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Vertente</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($registros['Female'] as $key => $registro)
                            @if ($key > 10)
                                @continue;
                            @endif

                            <tr>
                                <th scope="row">{{ $registro['id'] }}</th>

                                <td>{{ $registro['nome'] }}</td>
                                <td>{{ $registro['genero'] }}</td>
                                <td>{{ $registro['editora'] }}</td>
                                <td>{{ $registro['vertente'] }}</td>
                            </tr>

                        @endforeach
                    </tbody>
                </table>
            </div>
        @endif
        @if (isset($registros['-']))
            <div class="col-md-6">
                <h2> - </h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Vertente</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($registros['-'] as $key => $registro)
                            @if ($key > 10)
                                @continue;
                            @endif

                            <tr>
                                <th scope="row">{{ $registro['id'] }}</th>

                                <td>{{ $registro['nome'] }}</td>
                                <td>{{ $registro['genero'] }}</td>
                                <td>{{ $registro['editora'] }}</td>
                                <td>{{ $registro['vertente'] }}</td>
                            </tr>

                        @endforeach
                    </tbody>
                </table>
            </div>
        @endif
    </div>
    </main>

    @include ('layout.footer')
