//Class global
class Person{

    _life = 1;
    maxLife = 1;

    constructor(id){
        this.id = id;
    }

    get life(){
        return this._life;
    }
    set life(newLife){
        this._life = newLife < 0 ? 0: newLife;
    }
};

class Player extends Person{
    constructor(id){
        super(id);
        this.life = 30;
        this.maxLife = 30;
        this.defense = 15;
    }

    coin = 0;
    pa = 0;
    medic = 3;

    shot(){

        let number = Math.random();
        var damageProcess;
        if(this.life > 0 && enemyOne.life > 0){
            if(stage.weapon.currentAmmo >= 1){
                if(number <= stage.weapon.criticalChance){
                    damageProcess = stage.weapon.damage * stage.weapon.criticalMultiplier;
                } else{
                    damageProcess = stage.weapon.damage
                }
            
                enemyOne.life -= damageProcess;
                stage.weapon.currentAmmo --;
                playerOne.pa ++;
                stage.battle();
            }
        } 
    }

    healing(){
        if(this.life < this.maxLife){
        this.medic --;
        this.life = this.maxLife;
        stage.upDate();
        }
    }

    get def(){
        return this.defense;
    }
    set def(newDefense){
        this.defense = newDefense < 0 ? 0 : newDefense;
    }
};

class inventory {
    constructor(item){
        this.weapon = item;
    }
    weapons = {
        pistol,
    }
}

class weapon{
    constructor(name,damage,maxAmmo,currentAmmo,criticalChance,criticalMultiplier,price){
        this.name = name;
        this.damage = damage;
        this.maxAmmo = maxAmmo;
        this.currentAmmo = currentAmmo;
        this.criticalChance = criticalChance;
        this.criticalMultiplier = criticalMultiplier;
        this.price = price;
    }

    reloading(){
        this.currentAmmo = this.maxAmmo;
        log.innerHTML += ` Enquanto você recarregava o atirador desfiriu um tiro em você, deu ${enemyOne.pistol} de dano!`;
    }
}

class Enemy extends Person{
    constructor(life){
        super();
        this.life = life;
        this.maxLife = life;
    }

    pistol = 5;
    knife = 3;
    shotgun = 15;

    attack(){
        var number = Math.floor(Math.random() * 3);
        var critical = Math.floor(Math.random() * 2 + 0.1).toFixed(2);

        switch (number) {
            case 0:
                const atualDamagep = this.pistol * critical;
                return atualDamagep;
            break;
            
            case 1:
                const atualDamagek = this.knife * critical;    
                return atualDamagek;
            break;

            case 2:
                const atualDamages = this.shotgun * critical;
                return atualDamages;
            break;
        }
    }
};