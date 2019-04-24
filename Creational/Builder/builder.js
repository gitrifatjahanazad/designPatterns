const BurgerOptions = {
    BeefBurger:   Symbol("BeefBurger"),
    ChickenBurger:  Symbol("ChickenBurger"),
    KidChickenBurger: Symbol("KidChickenBurger")
};

BurgerOptions.asNumber = function(toNumberItem) {
    var counter = 0;
    var result = -1; // not found
    var items = Object.values(this);
    items.forEach(item => {
        if(item === toNumberItem)
        result = counter;
        counter++;
    });
    return result;
}

BurgerOptions.asString = function(toStringItem) {
    var keys = Object.keys(this);
    return keys[this.asNumber(toStringItem)]
}

class BurgerInterface {
    constructor() {
        this.name = null;
        this.buntype = null;
        this.withKidToy = false;
    }
    
    serveBurger() {

    }
}


class BeefBurger extends BurgerInterface {
    constructor() {
        super();
        this.update();
    }
    update() {
        this.name = 'BeefBurger';
        this.buntype = 'Big';
        this.withKidToy = false;
    }
    serveBurger() {
        return this;
    }
}

class ChickenBurger extends BurgerInterface {
    constructor() {
        super();
        this.update();
    }
    update() {
        this.name = 'ChickenBurger';
        this.buntype = 'Big';
        this.withKidToy = false;
    }
    serveBurger() {
        return this;
    };
}

class KidChickenBurger extends BurgerInterface {
    constructor() {
        super();
        this.update();
    }
    update() {
        this.name = 'KidChickenBurger';
        this.buntype = 'Small';
        this.withKidToy = false;
    }
    serveBurger() {
        return this;
    };
}

class FoodServiceDirector {
    constructor(burgerType) {
        return this.myBurger = eval('new ' + burgerType + '()').serveBurger();
    }
}


class ClientEnd {
    constructor() {
        this.clientOrder = BurgerOptions.KidChickenBurger
    }

    deliverOrder (){
        return console.log(new FoodServiceDirector(BurgerOptions.asString(this.clientOrder)));
    }
}

new ClientEnd().deliverOrder()
