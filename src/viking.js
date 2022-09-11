// Soldier
class Soldier {

    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){ 
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }
    
}

// Viking
class Viking extends Soldier{
    constructor(name,health, strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health <= 0){
            return `${this.name} has died in act of combat`;
        }else{
            return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
    
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health <= 0){
            return `A Saxon has died in combat`;
        }else{
            return `A Saxon has received ${damage} points of damage`
        }
    }

}

// War
class War{
    

    constructor() { 
        this.vikingArmy = [];
        this.saxonArmy =[];
    }

addViking(v){
    const vin = new Viking(v.name,v.health,v.strength);
    this.vikingArmy.push(vin);
}
addSaxon(s){
    const sax = new Saxon(s.health,s.strength);
    this.saxonArmy.push(sax);
}
vikingAttack(){
    let rs = Math.floor(Math.random() * this.saxonArmy.length);
    let rv = Math.floor(Math.random() * this.vikingArmy.length);
    
    const saxon = this.saxonArmy[rs];
    const viking = this.vikingArmy[rv];
    

    let res = saxon.receiveDamage(viking.attack());

    if (saxon.health <= 0){
        this.saxonArmy.splice(rs,1);
    }

    return res;

}

saxonAttack(){
    let rs = Math.floor(Math.random() * this.saxonArmy.length);
    let rv = Math.floor(Math.random() * this.vikingArmy.length);
    
    const saxon = this.saxonArmy[rs];
    const viking = this.vikingArmy[rv];

    let dmgv = this.saxonArmy[rs].strength;
    let res = viking.receiveDamage(dmgv);

    if (viking.health <= 0){
        this.vikingArmy.splice(rv,1);
    }

    return res;

}
showStatus(){

    if(this.vikingArmy.length == 0){
        return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length == 0){
        return "Vikings have won the war of the century!";
    }else{
        return "Vikings and Saxons are still in the thick of battle.";
    }


}

}

