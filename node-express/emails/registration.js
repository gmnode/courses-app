const keys = require('../keys')

module.exports = function(email) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Account created',
        html: `
            <h1>Hi</h1>
            <p>Thank you</p>
            <p>Your email: ${email}</p>
            <hr/>
            <a href="${keys.BASE_URL}">Courses App</a>
        `
    }
}