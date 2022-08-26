const fs = require('fs/promises');

const filename = 'src/talker.json';

const readFile = async () => {
    const arrTalker = await fs.readFile(filename, 'utf8');
    console.log(arrTalker);

    return JSON.parse(arrTalker);
};

module.exports = {
    readFile,
};