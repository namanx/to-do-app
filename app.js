const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const product = [];


app.use(bodyParser.urlencoded({extended : true})); // encoding the requests
app.use(express.static(path.join(__dirname, 'public')));



// templating engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


 // for loading static css files
app.get('/',(req,res)=>{
    res.render('todo');
});

app.post('/list',(req,resp)=>{
    product.push({title : req.body.title});
    resp.render('list',{prods : product})
    console.log(product)
});


app.listen(3000);