import GameObject from "./GameObject.js";
import assetsConfig from "./assetsConfig.js";
import gameContainer from "./gameContainer.js";

export default class Bullet extends GameObject{
    constructor(x,y){
        let img=assetsConfig.imgList[2];
        super(x,y,img);
        this.width=img.width/2;
        this.height=img.height/2;
        this.speed=20;
    }
    move(){
        this.y-=this.speed;
        if(this.y<0){
            let index=gameContainer.bulletList.indexOf(this);
            if(index!=-1){
                gameContainer.bulletList.splice(index,1);
            }
        }
    }
    draw(){
        this.move();
        super.draw(ctx);
    }
}