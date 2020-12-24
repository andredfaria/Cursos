<template>
  <div id="app">
    <div class="container">
      <h1>Usuarios do Gist</h1>
      <div class="row">
        <div v-for="user of users" :key="user.id" class="card col-6 m-2" style="width: 15rem;">
          <img class="card-img-top" :src="user.avatar_url" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">#{{user.id}} - {{user.login}}</h5>
            <a :href="user.html_url" class="btn btn-primary">Link do GitHub</a>
          </div>
        </div>
      </div>
            <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Buscar Usuario</label>
            <input type="text" class="form-control" id="buscar" aria-describedby="buscarUsuario" placeholder="Buscar">
        </div>
        <button type="submit" class="btn btn-primary">Buscar</button>
      </form>
    </div>
  </div>
</template>

<script>
import User from './services/users'

export default {

  data(){
    return{
      users: this.users
    }
  },

  mounted(){
    User.listar().then(resposta => {
      console.log(resposta.data);
      this.users = resposta.data;
    })
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
