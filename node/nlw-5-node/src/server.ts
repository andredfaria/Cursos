import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({massage: 'Olá'})
});

app.post("/", (request, response) => {
  return response.send('Olá')
});

app.listen(3333, () => {console.log("Server is running on port 3333")});