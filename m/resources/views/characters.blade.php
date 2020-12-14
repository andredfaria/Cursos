@include ('layout.header')

<main role="main" class="inner cover">
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
            @foreach ($registros as $registro)
                <tr>
                    <th scope="row">{{ $registro->id }}</th>
                    <td>{{ $registro->nome }}</td>
                    <td>{{ $registro->genero }}</td>
                    <td>{{ $registro->olho }}</td>
                    <td>{{ $registro->raça }}</td>
                    <td>{{ $registro->cabelo }}</td>
                    <td>{{ $registro->altura }}</td>
                    <td>{{ $registro->editora }}</td>
                    <td>{{ $registro->vertente }}</td>
                    <td>{{ $registro->peso }}</td>
                </tr>
                <tr>
            @endforeach
        </tbody>
    </table>
</main>

@include ('layout.footer')
