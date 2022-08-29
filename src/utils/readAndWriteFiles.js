const fs = require('fs/promises');

const filename = 'src/talker.json';

const readJson = async () => {
    const arrTalker = await fs.readFile(filename, 'utf8');
    return JSON.parse(arrTalker);
};

const writeFile = async (post) => {
    try {
        const arrFile = await readJson();
        const newID = arrFile.length + 1;
        const newTalker = { id: newID, ...post };
        arrFile.push(newTalker);

        await fs.writeFile(filename, JSON.stringify(arrFile));
        return newTalker;
    } catch (error) {
        console.log(error);
    }
};

const getById = async (personId) => {
    const allTalkers = await readJson();
    const talker = allTalkers.filter(({ id }) => id === personId);
    return talker[0];
};

const changeTalker = async (data, id) => {
    const arrAll = await readJson();
    const rmvTalker = arrAll.filter((person) => person.id !== id);
    const editedTalker = { id, ...data };
    rmvTalker.push(editedTalker);
    await fs.writeFile(filename, JSON.stringify(rmvTalker));
    return editedTalker;
};

const removeTalker = async (talkerId) => {
    const allTalkers = await readJson();

    const talker = allTalkers.filter(({ id }) => id !== talkerId);

    await fs.writeFile(filename, JSON.stringify(talker));
};

// const searchByTerms = async (query) => {
//     const allTalkers = await readJson();

//     const filterQuery = allTalkers.filter(
//         ({ name }) => name.toLowerCase().includes(query.toLowerCase()),
//         );
//     if (!filterQuery) return [];

//     return filterQuery;
// };

module.exports = {
    readJson,
    getById,
    writeFile,
    changeTalker,
    removeTalker,
    // searchByTerms,
};