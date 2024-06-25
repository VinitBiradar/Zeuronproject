const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id INT, username TEXT, password TEXT, score INT)");

    const stmt = db.prepare("INSERT INTO users VALUES (?, ?, ?, ?)");
    stmt.run(1, 'player1', 'password1', 0);
    stmt.finalize();
});

db.close();
