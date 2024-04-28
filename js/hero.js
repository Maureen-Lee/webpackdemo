import assetsConfig from "./assetsConfig.js";
import GameObject from "./GameObject.js";
import Bullet from "./bullet.js";
import gameContainer from "./gameContainer.js";

class Hero extends GameObject{
         constructor(){
            let img=assetsConfig.imgList[1];
            super(200,500,img)
         }
         //飞机移动方法
         move(x,y){
            this.x=x;
            this.y=y;
         }
         //玩家发射子弹
         fire(){
            let b=new Bullet(this.x,this.y);
            //修正子弹的坐标
            b.x=b.x+this.width/2-b.width/2;
            gameContainer.bulletList.push(b);
         }
}
export default Hero;