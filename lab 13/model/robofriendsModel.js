const fs = require('fs');

class Robofriend {
    constructor(name, bio, picture) {
        (this.name = name), (this.bio = bio);
        this.picture = 'https://robohash.org/' + picture;
        this.id =
            JSON.parse(fs.readFileSync(`${__dirname}/../data/robofriends.json`)).length +
            1;
    }

    static getAll() {
        return JSON.parse(fs.readFileSync(`${__dirname}/../data/robofriends.json`));
    }
    static postRobot(request) {
        let current = JSON.parse(
            fs.readFileSync(`${__dirname}/../data/robofriends.json`)
        );
        current.push(request);
        fs.writeFileSync(
            `${__dirname}/../data/robofriends.json`,
            JSON.stringify(current)
        );
        return current;
    }
    static getOne(id) {
        return JSON.parse(
            fs.readFileSync(`${__dirname}/../data/robofriends.json`)
        ).filter((infoReq) => infoReq.id == id)[0];
    }
}

module.exports = Robofriend;
