import express from 'express';

const app = express();

app.listen(3000, () => console.log('server is running !'));

app.get('/', (req, res) => {
    return res.send('primeira rota get')
});

app.post('/', (req, res) => {
    return res.send('primeira rota post')
})