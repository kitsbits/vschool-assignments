function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Player {
    constructor(name, totalCoins, status, star, gameActive = true) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.star = star;
    }
    addCoin() {
        return this.totalCoins + 1;
    }
    setName(namePicked) {
        return this.name = namePicked;
    }
    print() {
        console.log(`
Name: ${this.name}
Status: ${this.status}
Total Coins: ${this.totalCoins}
Have A Star? ${this.star}
`)
    }
    gotHit() {
        if (this.status === "Powered Up") {
            this.star = false;
            return this.status = "Big";
        } else if (this.status === "Big") {
            return this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
            return this.gameActive = false;
        }
    }
    gotPowerUp() {
        this.status = "Powered Up";
        return this.star = true;
    }
}

// name, totalCoins, status, star, gameActive = true

const kit = new Player ("Kit", "100", "Small", false);
kit.setName("Luigi");

const callMethodAndPrint = () => {
    var randomNum = random(0, 2);
    if (randomNum === 0) {
        kit.gotHit();
    } else if (randomNum === 1) {
        kit.gotPowerUp();
    } else if (randomNum === 3) {
        kit.addCoin();
    }
    kit.print();
}

callMethodAndPrint();
