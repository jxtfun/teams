const subscription = async ( req,res) => {
    console.log('Executing Webhook endpoint…');

    // Validate the subscription creation
    if (req.query.validationToken) {
        console.log('Validating new subscription…');
        console.log('Validation token:');
        console.log(req.query.validationToken);
        const response = {
            headers: {
                'Content-Type': 'text/plain'
            },
            body: req.query.validationToken
        };
        res.send(response); 
        
    }
    else {
        console.log('Received new notification…');
        console.log('Notification: ');
        console.log(JSON.stringify(req.body));
        const response = {
            body: ""
        };
        res.send(response); 
    }
};

module.exports = subscription;