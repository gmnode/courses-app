const keys = require('../keys')

module.exports = function(email, token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Restoring access',
        html: `
            <h1>Forgot your password ?</h1>
            <p>Click on the link to restore</p>
            <hr/>
            <a href="${keys.BASE_URL}/auth/password/${token}">Restore access</a>
        `
    }
}