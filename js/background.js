import assetsConfig from "./assetsConfig.js";
import GameObject from "./GameObject.js";


class Background extends GameObject{
    constructor(){
        let img=assetsConfig.imgList[0];
        super(0,100,img);

        this.speed=1;
    }
    //重写draw方法
    draw(ctx){
        this.move();
        super.draw(ctx);
    }
    //地图移动的方法
    move(){
        this.y+=this.speed;
        // if(this.y>0){
        //     this.y-=this.height/2;
        // }
    }
}
export default Background;