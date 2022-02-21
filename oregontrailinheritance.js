class Traveler {
    constructor(name) {
        this._name      = name
        this._food      = 1
        this._isHealthy = true
    }

    hunt (){
        this._food += 2
        return this._food
    }

    set name (novoNome){
        this._name = novoNome
    }

    get name (){
        return this._name
    }

    eat(){
        if(this._food <= 0 ){
            this._isHealthy = false
        }else{
            this._food = this._food - 1
        }
    }
    
}
class Wagon {

    constructor(capacity) {
        this._capacity = capacity
        this._passageiros = []
    }

    getAvailableSeatCount() {
        return this._capacity - this._passageiros.length
    }

    join(passageiro){
        if(this.getAvailableSeatCount() > 0){
            this._passageiros.push(passageiro)
        }
    }

    shouldQuarantine(){
        for(let i = 0; i < this._passageiros.length; i++){
            let passageiro = this._passageiros[i]
            if(passageiro._isHealthy === false){
                return true
            }
        }
        return false
    }

    totalFood(){
        let totalFood = 0
        for(let i = 0; i < this._passageiros.length; i++){
            totalFood += this._passageiros[i]._food
        }
        return totalFood
    }
}

class Doctor extends Traveler{
    constructor(nome){
        super(nome)
        this._food      = 1
        this._isHealthy = true
    }

    heal(Traveler){
        if(Traveler._isHealthy === false){
            Traveler._isHealthy = true
        }
    }
}

class Hunter extends Traveler{
    
    constructor(nome){
        super(nome)
        this._food = 2
        this._isHealthy = true
    }

    hunt (){
        this._food += 5
        return this._food
    }

    eat(){
        if(this._food <= 1){
            this._isHealthy = false
            this._food = 0
        }else{
            this._food = this._food - 2
        }
    }

    giveFood(Traveler, numOfFoodUnits){
        if(this._food >= numOfFoodUnits){
            Traveler._food += numOfFoodUnits
            this._food = this._food - numOfFoodUnits
        }
    }
    
}

// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');

console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter); 

wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);

sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();

console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);

henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)

console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);

drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);

sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente

console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);