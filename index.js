const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.send("Welcome Home Page! GET");
});

// app.all()表示可以接受任意类型的请求-get,post,update,delete,options
app.all('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.send("Welcome Home Page! POST");
})

// app.all()表示可以接受任意类型的请求-get,post,update,delete,options
app.all('/json', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = {
    name: "Welcome Home Page! POST JSON DATA"
  }
  const str = JSON.stringify(data);
  res.send(str);
})

app.all('/ie', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("IE Cache problem");
})

app.get('/delay', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  setTimeout(() => {
    res.send("Handle Request Delay Problem")
  }, 3000);
})

app.listen(80, () => {
  console.log("Running on 80 port...");
})
