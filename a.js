// const teo = {
//     name: 'Teo Nguyen',
//     age: 10,
//     sayHello: function() {
//         console.log(`Xin chao, toi la ${this.name}`);
//     }
// }

// const onClick = teo.sayHello;

// onClick.bind({ name: 'Haha' })();

// const people = [
//     { name: 'Ti', age: 10, height: 100 },
//     { name: 'Teo', age: 13, height: 150 },
//     { name: 'Tun', age: 15, height: 90 },
//     { name: 'Tuan', age: 12, height: 180 },
// ];

// const x = people.filter(person => person.age > 13);
// console.log(x);
function doSth(fn) {
    fn(1);
}

doSth(console.log)
