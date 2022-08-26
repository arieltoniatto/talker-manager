const fs = require('fs/promises');

const filename = 'src/talker.json';

const readJson = async () => {
    const arrTalker = await fs.readFile(filename, 'utf8');
    return JSON.parse(arrTalker);
};

const writeFile = async (post) => {
    try {
        const arrFile = await readJson();
        // console.log(arrFile);
        arrFile.push(post);

        // const content = 
        await fs.writeFile(filename, JSON.stringify(arrFile));
        // return content;
    } catch (error) {
        console.log(error);
    }
};

const clearJson = async () => {
    await fs.writeFile(filename, JSON.stringify([]));
};

const getById = async (personId) => {
    const allTalkers = await readJson();
    const talker = allTalkers.filter(({ id }) => id === personId);
    return talker[0];
};

module.exports = {
    readJson,
    getById,
    writeFile,
    clearJson,
};