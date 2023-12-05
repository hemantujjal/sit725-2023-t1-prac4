var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'Virtus',
    path: 'images/virtus.avif',
    link: 'About Virtus',
    description: 'Description of Cat 2'
},
{
    title: 'Rapid',
    path: 'images/virtus.avif',
    link: 'About Rapid',
    description: 'Description of Cat 3'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});
