const fs = require('fs');
const db = require('../utils/databse');

class Robofriend {
    constructor(name, bio, picture) {
        (this.name = name), (this.bio = bio);
        this.picture = 'https://robohash.org/' + picture;
        this.id =
            JSON.parse(fs.readFileSync(`${__dirname}/../data/robofriends.json`)).length +
            1;
    }

    static async getAll() {
        const allInformation = await db.execute('SELECT * FROM robofriends');
        return allInformation[0];
    }
    static async postRobot({ name, bio, picture }) {
        await db.execute(
            'INSERT INTO robofriends (name, bio, picture) VALUES (?, ?, ?)',
            [name, bio, picture]
        );
    }
    static async getOne(id) {
        return (await db.execute(`SELECT * FROM robofriends WHERE id=${id}`))[0];
    }
}

module.exports = Robofriend;
