// const e = require('express');
const fs = require('fs/promises');

const filename = 'src/talker.json';

const readJson = async () => {
    const arrTalker = await fs.readFile(filename, 'utf8');
    return JSON.parse(arrTalker);
};

const writeFile = async (post) => {
    try {
        const arrFile = await readJson();

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
    // console.log(talker[0]);
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
// try {
//     const allTalkers = await readJson();

//     let alteredTalker;
//     for (let i = 0; i < allTalkers.length; i += 1) {
//         if (allTalkers[i].id === Number(ids)) {
//             allTalkers[i].name = name,
//             allTalkers[i].age = age,
//             allTalkers[i].talk = talk,
//             alteredTalker = allTalkers[i],
//         }
//         await fs.writeFile(filename, JSON.stringify(alteredTalker));
//         return allTalkers;
//     }
    
// } catch (error) {
//     console.log(error);
//     return null;
// }

const removeTalker = async (talkerId) => {
    const allTalkers = await readJson();
    // console.log(allTalkers);
    const talker = allTalkers.filter(({ id }) => id !== talkerId);
    // console.log(talker);
    await fs.writeFile(filename, JSON.stringify(talker));
    // await writeFile(talker);
};

const searchByTerms = async (query) => {
    const allTalkers = await readJson();
    if (!query) {
        return [];
    }
    // console.log(allTalkers);
    return Object.values(allTalkers[0]).filter((term) => term.includes(query));
};

module.exports = {
    readJson,
    getById,
    writeFile,
    clearJson,
    changeTalker,
    removeTalker,
    searchByTerms,
};