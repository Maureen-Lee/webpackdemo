//游戏模块的基础对象
class GameObject{
    constructor(x,y,img){
        this.x=x;
        this.y=y;
        this.img=img;
        this.width=this.img.width;
        this.height=this.img.height;
    }
    draw(ctx){
        ctx.drawImage(
            this.img,
            this.width,
            this.height,
            this.x,
            this.y,
        )
    }
}
export default GameObject;