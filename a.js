const teo = {
    name: 'Teo Nguyen',
    age: 10,
    sayHello: function() {
        console.log(`Xin chao, toi la ${this.name}`);
    }
}

const onClick = teo.sayHello;

onClick.bind({ name: 'Haha' })();