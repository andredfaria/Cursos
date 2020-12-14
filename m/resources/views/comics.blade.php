@include ('layout.header')

<main role="main" class="inner cover">
    <table class="table">
        @foreach ($registros as $key => $registro)
            <thead>
                <tr>
                    <th scope="col">{{ $key }}</th>
                    <th scope="col">{{ $registro[$key] }}</th>
                </tr>
            </thead>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Cor do olho</th>
                        <th scope="col">Raça</th>
                        <th scope="col">Cor do Cabelo</th>
                        <th scope="col">Altura</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Vertente</th>
                        <th scope="col">Peso</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($registro[$key] as $reg)
                        <tr>
                            <th scope="row">{{ $reg->id }}</th>
                            <td>{{ $reg->nome }}</td>
                            <td>{{ $reg->genero }}</td>
                            <td>{{ $reg->olho }}</td>
                            <td>{{ $reg->raça }}</td>
                            <td>{{ $reg->cabelo }}</td>
                            <td>{{ $reg->altura }}</td>
                            <td>{{ $reg->editora }}</td>
                            <td>{{ $reg->vertente }}</td>
                            <td>{{ $reg->peso }}</td>
                        </tr>
                        <tr>
                    @endforeach
                </tbody>
            </table>
        @endforeach
    </table>
</main>

@include ('layout.footer')
