const fs = require('fs');
const db = require('../utils/databse');

class Information {
    constructor(name = 'Anonimo', email, asunto) {
        (this.email = email), (this.asunto = asunto), (this.name = name);
        this.id =
            JSON.parse(fs.readFileSync(`${__dirname}/../data/information.json`)).length +
            1;
        this.date = Date.now();
    }

    static async getAll() {
        const allInformation = await db.execute('SELECT * FROM information');
        return allInformation[0];
    }
    static async postReq({ email, asunto, name }) {
        await db.execute(
            'INSERT INTO information (email, name, asunto) VALUES (?, ?, ?)',
            [email, name, asunto]
        );
    }
    static async getOne(id) {
        return (await db.execute(`SELECT * FROM information WHERE id=${id}`))[0];
    }
}

module.exports = Information;
