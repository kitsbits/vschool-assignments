function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class WarParty {
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }
}

const penguins = new WarParty("Penguins", 1000000);
const communists = new WarParty("Communists", 1000000);

const hit = (party, otherParty) => {
    let damage = random(0, 500000);
    party.population -= damage;
    return console.log(`
The ${party.name} nuke hit the ${otherParty.name} and killed ${damage} people. 
Their population is now ${party.population}. 
This is why nuclear war is pretty damn stupid.`);

};
const miss = (party, otherParty) => {
    return console.log(`
The ${party.name} nuke missed the ${otherParty.name}- 
instead damaging countless ecosystems outside of the ${otherParty.name}'s territory. 
This is why, hit or miss, nuclear war is pretty damn stupid.`)
};

const sendNuke = (party, otherParty, onHit, onMiss) => {
    let hitOrMiss = random(0, 1);
    if (hitOrMiss === 1) {
        onHit(party, otherParty);
    } else {
        onMiss(party, otherParty);
    }
};

let penguinsNuke = random(0, 1);

while (penguins.population >= 0 && communists.population >= 0) {

    if (penguinsNuke === 1) {
        sendNuke(penguins, communists, hit, miss);
        penguinsNuke = 0;
    } else {
        sendNuke(communists, penguins, hit, miss);
        penguinsNuke = 1;
    }

    if (penguins.population < 0) {
        console.log(`
Looks like the Communists nuked the Penguins to death.
Again, nuclear war is stupid.`);
    }
    if (communists.population < 0) {
        console.log(`
Looks like the Penguins nuked the Communists to death.
Again, nuclear war is stupid.`);
    }
}
