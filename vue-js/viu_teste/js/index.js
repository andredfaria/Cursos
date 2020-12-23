new Vue({
    el: '#app',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('https://api.github.com/users')
            .then(response => (this.info = response))
    }
})