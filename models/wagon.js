import Traveler from './traveler.js'

class Wagon extends Traveler{

    constructor(capacity) {
        super()
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
export default Wagon