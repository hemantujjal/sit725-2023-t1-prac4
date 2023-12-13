var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'Virtus',
    path: 'images/virtus.jpg',
    link: 'About Virtus',
    description: 'Description of Virtus'
},
{
    title: 'Rapid',
    path: 'images/rapid.jpg',
    link: 'About Rapid',
    description: 'Description of Rapid'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});
