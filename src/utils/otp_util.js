const crypto = require('crypto');

function generateSecureOTP(length = 6) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        const index = crypto.randomInt(0, digits.length);
        otp += digits[index];
    }
    return otp;
}

module.exports = {
    generateSecureOTP
};