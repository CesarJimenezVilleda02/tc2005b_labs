const fs = require('fs');

class Information {
    constructor(name = 'Anonimo', email, asunto) {
        (this.email = email), (this.asunto = asunto), (this.name = name);
        this.id =
            JSON.parse(fs.readFileSync(`${__dirname}/../data/information.json`)).length +
            1;
        this.date = Date.now();
    }

    static getAll() {
        return JSON.parse(fs.readFileSync(`${__dirname}/../data/information.json`));
    }
    static postReq(request) {
        let current = JSON.parse(
            fs.readFileSync(`${__dirname}/../data/information.json`)
        );
        current.push(request);
        fs.writeFileSync(
            `${__dirname}/../data/information.json`,
            JSON.stringify(current)
        );
        return current;
    }
    static getOne(id) {
        return JSON.parse(
            fs.readFileSync(`${__dirname}/../data/information.json`)
        ).filter((infoReq) => infoReq.id == id)[0];
    }
}

module.exports = Information;
