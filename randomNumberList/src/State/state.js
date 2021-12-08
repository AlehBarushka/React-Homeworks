let rerenderEntireTree = () => {
    console.log('state was changed');
};

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
};

export let randomNumbers = [...new Array(getRandomNumber(5, 15))].map(() =>
    getRandomNumber(1, 10));


export const handleAddNewNumber = () => {
    const newArray = [...randomNumbers, getRandomNumber(1, 10)];
    randomNumbers = newArray;
    rerenderEntireTree();
};


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};