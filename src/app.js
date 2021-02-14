const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, '../public'));

const app = express();

const publicDirectory = path.join(__dirname, '../public')

app.set('view engine','hbs')

app.use(express.static(publicDirectory))

// app.get('', (req,res) => {
//     res.render('index')
// })

app.get('/',(req,res) => {
    res.send('Hello express!')
})

app.get('/weather', (req,res) => {
    res.send({
        forecast : "25.6",
        location : {
            latitude : 256.112,
            logitude : -5587.6
        }
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});