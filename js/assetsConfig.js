//配置的是需要加载的资源图片
const assetsList=[
    "./img/bg1.jpg",
    "./img/plane_0.png",
    "./img/fire.png"
]

//资源管理对象,所有加载好的资源都通过这个对象来管理
const assetsConfig={
    imgList:[],//存放已经加载好的图片资源
    loadAssets(){//loadAssets方法将准备的图片资源转换为已经加载好的状态
        let p =new Promise((resolve,reject)=>{
            let count=0;
            for(let i=0;i<assetsList.length;i++){
                let img=new Image();//创建了一个img的dom对象
                img.src=assetsList[i];
                this.imgList.push(img);
                img.onload=event=>{
                    count++;
                    if(count==assetsList.length){
                        console.log("资源加载完毕")
                        resolve();//将承诺的等待状态转换为成功状态
                    }
                }
                img.onerror=event=>{
                        reject();
                }
            }
        })
        return p;
    }
}
export default assetsConfig;