var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors());
app.use(express.json());
var nodemailer = require('nodemailer')
app.use(bodyParser.urlencoded({extended:true}));



app.post('/form', function (req, res) {
    const data = req.body
    
    if(data){
        console.log(data)
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "0d9b71b511d489",
              pass: "1f8b22160a6a74"
            }
          });
        
          var mailOptions = {
            from: data.email,
            to: 'febinbijupuickal1@gmail.com',
        
            html: data.note
          };
          transport.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }

 });
 

app.listen(5000,function(req,res){
    console.log('server started');
}); 


