const express = require('express');
const port = 3001;
const app = express();


// app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json({ limit: '50mb' }))

app.post('/data', (req,res) => {
   console.log(req.body)
    res.send(`Your name is: ${req.body.name}, your email is: ${req.body.email}, and your message is: ${req.body.text}. Thank you for your message!`)

})


app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
  })