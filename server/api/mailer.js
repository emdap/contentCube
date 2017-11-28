var nodemailer = require("nodemailer");

Meteor.methods({
	handleMail: function (sub, msg, fromAdd) {
	    var transporter = nodemailer.createTransport({
	        service: 'Gmail',
	        auth: {
	            user: 'contentcuber@gmail.com',
	            pass: 'sbjskgiyggsfjifc' 
	        }
	    });

		var mailOptions = {
		    from: 'contentcuber@gmail.com',
		    to: 'emma.daponte@mail.utoronto.ca', 
		    cc: fromAdd,
		    subject: sub,
		    text: msg
		};

		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return error;
		    }else{
		        return 'Message Sent';
		    };
		});
	}
});