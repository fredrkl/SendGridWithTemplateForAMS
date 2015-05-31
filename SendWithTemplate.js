    var sendGridPackage = require('sendgrid'); 
    var SendGrid = require('sendgrid').SendGrid;
    var sendgrid = new SendGrid('SendGridUsername', 'SendGridPassword');
    var email = new sendGridPackage.Email();
    email.addTo('receiver@greceiver.com');
    email.subject = "Send with templates app";
    email.from = 'from@example.com';
    email.text = 'Hi there!';
    email.html = '<h1>Hi there!</h1>';
    
    // or set a filter using an object literal.
    email.smtpapi.filters = {
        'templates': {
            'settings': {
                'enable': 1,
                'template_id' : 'TheTemplateIdYouFindInTheSendGridAdminSite',
            }
        }
    }
    
    sendgrid.send(email, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });
