//javascript object
//JSON
const user = { id: 11, name: 'gorib', job: 'actor' };
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profiit: 34500,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        job: 'Actor'
    },
    inExpensive: false
};
const shopStringify = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringify);
const converted = JSON.parse(shopStringify);
console.log(converted.owner);