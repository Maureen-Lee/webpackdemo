const gameConfig={
    gameWidth:512,
    gameHeight:768,
    maxEnemyCount:5,
    _level:1,
    get level(){
        return this._level;
    },
    set level(v){
        this._level=v;
        switch(v){
            case 1:
                this.maxEnemyCount=5;
                break;
                case 2:
                    this.maxEnemyCount=10;
                    break; 
                    case 3:
     this.maxEnemyCount=15;
     break;   
     default:
        this.maxEnemyCount=5;
        break;
        }
    }
}
export default gameConfig;