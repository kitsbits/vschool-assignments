// ONE
var waterBottle = {
    color: "green",
    liquidIn: {
        water: true,
        lemonade: false,
        gatorade: false
    },
    percentFull: 90,
    isFull: function() {
        if (this.percentFull > 75) {
            return true;
        } else {
            return false;
        }
    }
};

// TWO
var onNightStand = {
    pens: 2,
    lipBalm: true,
    waterBottle: true,
    lampOnOrOff: ["off", "on"],
    clock: function() {
        var monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var date = new Date();
        var day = date.getDate();
        var month = monthsArray[date.getMonth + 1];
        var year = date.getFullYear();
        
        return month + " " + day + ", " + year;
    }
};

// THREE
var candyStars = {
    colors: ["pink", "dark pink", "orange", "purple"],
    areYummy: true,
    whileEating: function() {
        this.areYummy = true;
    }
};

// FOUR
var schoolBag = {
    laptop: false,
    lunch: false,
    keys: false,
    isHeavy: function() {
        if (this.laptop === true && this.keys === true && this.lunch === true) {
            return true;
        } else {
            return false;
        }
    },
    isFull: function () {
        if (this.isHeavy === true) {
            return true;
        } else {
            return false;
        }
    }
};

// FIVE
var glasses = {
    onFace: false,
    hasLenses: true,
    canSee: function() {
        if (this.onFace === true && this.hasLenses === true) {
            return true;
        } else {
            return false;
        }
    }
};

// SIX
var beats = {
    color: "red",
    wordsOnArray: ["beats", "solo", "(PRODUCT)RED"],
    writeWords: function() {
        return this.wordsOnArray.join(" ");
    }
};

// SEVEN
var iPhone = {
    model: "7",
    color: "black",
    caseOn: true,
    caseColor: "yellow",
    caseColorOption: ["stone", "blush", "yellow", "navy", "black", "red"],
    getCaseColorIndex: function() {
        return this.caseColorOption.indexOf("yellow");
    }
};

// EIGHT
var peopleInRoom = {
    men: 0,
    women: 0,
    names: {
        women: [
            "Lainey",
            "Osha",
            "Kit"
        ],
        men: [
            "John",
            "Dallon",
            "Adam",
            "Nonni",
            "Dylan",
            "Dylan",
            "Mak",
            "Calvin",
            "Aman"
        ]
    },
    countPeople: function() {
        var menCount = 0;
        var womenCount = 0;
        this.names.men.forEach(function() {
            menCount ++;
        });
        this.men = menCount;
        this.names.women.forEach(function() {
            womenCount ++;
        });
        this.women = womenCount;
        
        console.log(this.men);
        console.log(this.women);
    }
};

// NINE
var inputsFull = {
    inputs: 4,
    rightTop: true,
    rightBottom: true,
    leftTop: false,
    leftBottom: false,
    isFull: function() {
        if (this.rightTop === true && this.rightBottom === true && this.leftTop === true && this.leftBottom === true) {
            return true;
        }
    }
    
    
};

// TEN
var isBobHere = {
    name: "Bob",
    location: true,
    isHere: function() {
        if (this.name[0] !== -1 && this.location !== false) {
            return true;
        }
    }
}
