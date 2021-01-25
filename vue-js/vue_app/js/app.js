const app = new Vue({
    el: '#app',
    data: {
        contacts: [],
        contact: {
            id: '',
            name:'',
            email: '',
            phone:''
        },
        edit: false,
        name: 'Contatos App'
    },
    computed: {
        contactsCount() {
            return `Total de contatos é ${this.contacts.length}`
        }
    },
    methods: {
        saveContact(c) {
            let contacts = localStorage.getItem('contactsApp');

            c.id = new Date().getTime();

            if (contacts) {
                contacts = JSON.parse(contacts);
                contacts.push(c);
            } else {
                contacts = [c];
            }
            
            this.contacts = contacts;

            localStorage.setItem('contactsApp', JSON.stringify(contacts));

            location.reload();  
            
            this.contacts = [];
        },

        deleteContact(id) {
            let contacts = localStorage.getItem('contactsApp')
            
            if (!contacts)
                return;
            
            contacts = JSON.parse(contacts);

            contacts = contacts.filter((c) => {
                return c.id != id;
            });
            
            this.contacts = contacts;

            localStorage.setItem('contactsApp', JSON.stringify(contacts))
        },

        editContact(contact) {
            this.contact = contact;     
            this.edit = true;
        },

        updateContact(contact) {
            let contacts = this.contacts.map(c => {
                if (c.id == contact.id)
                    return contact;
                
                return c;
            });

            this.edit = false;

            this.contacts = contacts;

            localStorage.setItem('contactsApp').JSON.stringify(contacts);

            location.reload();
            
        }
    },
    created() {
        this.contacts = JSON.parse(localStorage.getItem('contactsApp'));
    }
})