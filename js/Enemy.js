//敌机
import GameObject from "./GameObject.js";
import assetsConfig from "./assetsConfig.js";
import gameConfig from "./gameConfig.js";
import gameContainer from "./gameContainer.js";

export default class Enemy extends GameObject{
    constructor(){
        let temp=parseInt(Math.random()*100);
        let img=null;
        if(temp<15){
            img=assetsConfig.imgList[3];
        }else{
            img=assetsConfig.imgList[4];
        }
        let x=parseInt(Math.random()*gameConfig.gameWidth);
        super(x,0,img);
        this.speed=parseInt(Math.random()*3)+1;
    }
    move(){
        this.y+=this.speed;
        if(this.y>gameConfig.gameHeight){
            //移除自己
            let index=gameContainer.enemyList.indexOf(this);
            if(index!=-1){
                gameContainer.enemyList.splice(index,1);
            }
        }
    }
}