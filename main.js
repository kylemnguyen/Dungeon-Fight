
var playerHp = document.getElementById("player-health");
var playerMana = document.getElementById("player-mana");
var bossHp = document.getElementById("boss-health");
var atkBtn = document.getElementById("attack");
var begin = document.getElementById("begin");

// Player stuff
var health;
var mana;
var deff;
var str;
var specialcounter;
var turn = false;

// boss-stuff
var enemHp;
var enemDeff;
var enemStr;

// initalize player and boss stats
function init() {

    // player
    health = 100;
    mana = 100;
    def = 10;
    str = 15;
    specialcounter = 0;

    // boss
    enemHp = 500;
    enemDeff = 25;
    enemStr = 30;

    updateStats();

}

function updateStats() {
    playerHp.innerHTML = "HP: " + health;
    playerMana.innerHTML = "MP: " + mana;
    bossHp.innerHTML = "HP: " + health;
}

function start() {
    init();
}


begin.addEventListener("click", start());