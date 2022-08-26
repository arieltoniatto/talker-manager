const fs = require('fs/promises');

const filename = 'src/talker.json';

const readFile = async () => {
    const arrTalker = await fs.readFile(filename, 'utf8');
    return JSON.parse(arrTalker);
};

const getById = async (personId) => {
    const allTalkers = await readFile();
    const talker = allTalkers.filter(({ id }) => id === personId);
    return talker[0];
};

module.exports = {
    readFile,
    getById,
};