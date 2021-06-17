<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
            <h1>Usuarios do Git</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 form-group">
            <div class="input-group mb-3">
                <input  type="text" 
                        v-model="text" 
                        class="form-control" 
                        placeholder="Nome do usuario" 
                        aria-label="Nome do usuario" 
                        aria-describedby="button-search">
                <button class="btn btn-primary" 
                        @click="search(text)" 
                        type="button" 
                        id="button-search">
                        Buscar
                </button>
            </div>
        </div>
      </div>
      <div class="row" v-if="page == 1">
        <div v-for="user of users" :key="user.id" class="card col-6 m-2" style="width: 15rem;">
          <img class="card-img-top" :src="user.avatar_url" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">#{{user.id}} - {{user.login}}</h5>
            <a :href="user.html_url" class="btn btn-primary">Link do GitHub</a>
          </div>
        </div>
      </div>
      <div class="row card" v-if="page==2">
          <img class="card-img-user" :src="users.avatar_url" alt="Card image cap">
          <div class="card-body">
            <h4>{{users.name}}</h4>
            <h5 class="card-title">#{{users.id}} - {{users.login}}</h5>
            <a :href="users.html_url" class="btn btn-primary">Link do GitHub</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from './services/users'

export default {

  data(){
    return{
      text: '',
      page:1,
      search: (text) => {
        User.buscar(text).then(resposta => {
            console.log(resposta.data);
            this.users = resposta.data;
            this.page = 2;
        })
      },
      users: this.users,
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
