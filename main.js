const playerHp = document.getElementById("player-health");
const playerMana = document.getElementById("player-mana");
const bossHp = document.getElementById("boss-health");
// Player stuff
var player = {
    health: 0,
    mana: 0,
    def: 0,
    str: 0,
    dmg: 0,
    specialcount: 0,
    attacking: false,
    turn: false
};

// boss-stuff
var boss = {
    health: 0,
    def: 0,
    str: 0,
    dmg: 0
};

// initalize player and boss stats
function init() {

    // player
    player.health = 100;
    player.mana = 75;
    player.def = 0.9;
    player.str = 1.25;
    player.dmg = 25;
    player.turn = true;

    // boss
    boss.health = 500;
    boss.def = 1;
    boss.str = 1.2;
    boss.dmg = 15;
    
    updateStats();

}

function bossTurn() {
    if (player.turn === false) {

        var options = Math.random();
        /*
            attack: 50%
            special-attack: 20%
            def-up: 10%
            buff: 10%
            def-up: 10%
        */
    }
}

function crit(amt) {

    var rand = Math.random();
    if(rand >= 0.75) {
        return amt * 1.5;
    }
    return amt;

}

function attack(obj, special) {

    // enemy attack
    if(obj == "player") {

        var amt = boss.str * Math.random() * boss.str;
        if(special === true) {
            amt *= 1.25;
        }  

        amt *= player.def;
        player.health -= amt;

    } else if (obj == "enemy" && player.attacking === true) {

        var amt = player.str * player.dmg;

        if(special === true) {
            amt *= 1.3;
        }

        amt = crit(amt);

        amt *= boss.def;
        boss.health -= amt;

        player.attacking == false;

    }

    updateStats();

}

function playerAttack() {
    if(player.turn === true) {
        player.attacking = true;
        attack("enemy", false);
        player.turn = false;
    }
}

function updateStats() {
    playerHp.innerHTML = "HP: " + player.health;
    playerMana.innerHTML = "MP: " + player.mana;
    bossHp.innerHTML = "HP: " + boss.health;
}

function start() {
    init();
}

