import Traveler from './traveler.js'

class Doctor extends Traveler{
    constructor(nome){
        super(nome)
    }

    heal(Traveler){
        if(Traveler._isHealthy === false){
            Traveler._isHealthy = true
        }
    }

}
export default Doctor