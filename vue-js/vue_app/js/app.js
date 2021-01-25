const app = new Vue({
    el: '#app',
    data: {
        contact: {
            name:'eu mesmo',
            email: '',
            phone:''
        },
        msg: 'Hello World!',
        image: '/icon.png',
        visible: true,
        name: 'Contatos App'

    },
    methods: {
        saveContact(contact) {
            console.log(this.contact)
        }
    }
})