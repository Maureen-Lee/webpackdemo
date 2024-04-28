import assetsConfig from"./assetsConfig.js";
import Background from "./background.js";
import Hero from"./hero.js";
import gameContainer from "./gameContainer.js";
import GameObject from "./GameObject.js";
import gameConfig from "./gameConfig.js";
import Enemy from "./Enemy.js";
const gameControl={
    dom:{
        game:document.querySelector("#game")
    },
    data:{
         gameWidth:512,
         gameHeight:768,
         ctx:null,
         p1FireTimeID:null
    },
    bindEvent(){
        this.dom.game.addEventListener("mousemove", event => {
        event = event || window.event;
        let {offsetX,offsetY} = event;
        this.gameContainer.p1.move(offsetX,offsetY);
        })
        },
    async init(){
          this.dom.game.width=gameConfig.gameWidth;
          this.dom.game.height=gameConfig.gameHeight;
          this.data.ctx=this.dom.game.getContext("2d");
          await assetsConfig.loadAssets();  //调用加载资源的方法
          //this.gameContainer.bg=new Background();
          gameContainer.bg=new Background();
        gameContainer.p1=new Hero();
          console.log('gameContainere',gameContainer)
          console.log('gameContainere__p1',gameContainer.p1)
        
          this.bindEvent();
          this.addEnemy();
          this.draw();         
    },
    draw(){
        setInterval(()=>{
            Reflect.ownKeys(gameContainer).forEach(item=>{
                if(gameContainer[item]&&gameContainer[item]
                    instanceof GameObject){
                        console.log("gameContainer",   gameContainer[item])
                        //从gameContainer里面找到bulletList,然后把里面的子弹都画出来
                        gameContainer[item].draw(this.data.ctx);
                    }else if(gameContainer[item] instanceof Array){
                        gameContainer[item].forEach(item2=>{
                            console.log("gameContainer2222", gameContainer[item])
                            item2.draw(this.data.ctx);
                        })
                    }
                 
            })
        },20)
    },
    //添加敌机的方法
    addEnemy(){
        setInterval(()=>{
            let {maxEnemyCount}=gameConfig;
            let count=maxEnemyCount -  gameContainer.enemyList.length;
            for(let i=0;i<count;i++){
                let e=new Enemy();
                gameContainer.enemyList.push(e);
            }
        },200)
    },
    //玩家p1开火方法
    p1Fire(){
        this.data.p1FireTimeID=setInterval(()=>{
            if(gameContainer.p1){
                gameContainer.p1.fire();
            }
        },100)
    },
    //玩家p1停止开火方法
    p1StopFire(){
        clearInterval(this.data.p1FireTimeID);
    },
    checkCrash(a,b){
        if(a.x+a.width<b.x||b.x+b.width<a.x||a.y+a.height<b.y||b.y+b.height<a.y){
            return false;
        }else{
            return true;
        }
    },
    checkBulletAndCrash(){
        for(let i=gameContainer.bulletList.length-1;i>=0;i--){
            for(let j=gameContainer.enemyList.length-1;j>=0;j--){
                let b=gameContainer.bulletList[i];
                let e=gameContainer.enemyList[j];
                let result=this.checkCrash(b,e);
                if(result){
                    gameContainer.bulletList.splice(i,1);
                    gameContainer.enemyList.splice(j,1);
                    break;
                }
            }
        }
    }
}

gameControl.init();


//init----->
//gameControl.draw()---->
//setInterval()每隔20ms---->
//bg.draw()==Background.js文件中的draw()---->
//move()+drawImage()
//y修改+绘制修改了y值之后的图像





















