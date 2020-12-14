@include ('layout.header')

<main role="main" class="container inner cover mb-5">
    <div class="row mt-5">
        <div class="input-group input-group-sm mb-3 col-12">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Buscar por ID</span>
            </div>
            <input type="text" class="form-control" onchange="setBusca(value)" name="characters" aria-label="Buscar">
            <div class="input-group-prepend">
                <button class="btn btn-primary rounded" onclick="buscar()">Enviar</button>
            </div>
        </div>

        <div class="input-group col-3">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="radio" onclick="setRota(value)" value="comics" name="route">
                </div>
            </div>
            <input disabled type="text" value="Comics" class="form-control">
        </div>
        <div class="input-group col-3">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="radio" onclick="setRota(value)" value="events" name="route">
                </div>
            </div>
            <input disabled type="text" value="Events" class="form-control">
        </div>
        <div class="input-group col-3">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="radio" onclick="setRota(value)" value="series" name="route">
                </div>
            </div>
            <input disabled type="text" value="Series" class="form-control">
        </div>
        <div class="input-group col-3">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="radio" onclick="setRota(value)" value="stories" name="route">
                </div>
            </div>
            <input disabled type="text" value="Stories" class="form-control">
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12">
            <h1 class="cover-heading">Herois.</h1>
        </div>
        <div class="col-12">
            <p class="lead">API dos herois.</p>
            <p class="lead">
                <a href="documents/Teste.pdf" class="btn btn-lg btn-secondary">Saiba mais</a>
            </p>
        </div>
    </div>
</main>

<script>
    var rota = '';
    var busca = '';

    function setRota(name) {
        rota = name;
    }

    function setBusca(name) {
        busca = name;
    }

    function buscar() {
        window.location.replace("http://localhost:8000/v1/public/characters/" + busca + '/' + rota);
    }

</script>

@include ('layout.footer')
