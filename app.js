var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
   service : 'gmail',
   auth: {
       user: 'ansari.arooj32@gmail.com',
       pass : '5090509011'
   }
});

var mailOption = {
    from : 'ansari.arooj32@gmail.com',
    to: 'ansari.arooj32@gmail.com',
    subject : 'Sending mail through nodejs test',
    text: `Hello There! This is Arooj Azhar future backend developer`
    //htmL : '<h1>Hii </h1> <p>hello</p>'
};

transporter.sendMail(mailOption, function(error, Info) {
    if(error) {
        console.log(error);
    }
    else {
        console.log('Email Send:' , +info.response);
    }
});
















