class Traveler {
    constructor(name) {
        this._name      = name
        this._food      = 1
        this._isHealthy = true
    }

    hunt(){
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
export default Traveler