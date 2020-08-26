exports.SendEmail = true;
exports.EmailSettings = {
    service: 'smtp',
    auth: {
        // user: '27828926369@vodamail.co.za',
        // pass: 'migtan123'
    },
    secure: false,
    host: 'smtp.vodamail.co.za',
    port: 25,
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
};
