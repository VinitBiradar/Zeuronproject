const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

function authenticate(username, password, callback) {
    db.get("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, row) => {
        if (err) {
            return callback(err);
        }
        if (row) {
            callback(null, row);
        } else {
            callback(new Error('User not found'));
        }
    });
}

module.exports = { authenticate };
