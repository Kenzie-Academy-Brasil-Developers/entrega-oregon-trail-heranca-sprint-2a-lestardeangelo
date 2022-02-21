import Traveler from './traveler.js'

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
export default Hunter