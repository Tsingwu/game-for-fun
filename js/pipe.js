/**
 * Created by tsing on 2017/6/3.
 */
function Pipe(option) {
    this.ctx = option.ctx;
    this.x = option.x;


    //上面管道的坐标,取值范围控制在(-150,-300) 之间
    this.y = -(180 + Math.random()*150); //(-150 ~ -300)

    this.topImage = option.topImage;
    this.bottomImage = option.bottomImage;


    this.imgW = this.topImage.width;


    //上面管道与下面的管道之间的空隙距离
    this.spaceY = 120;

    //下面管道的坐标
    this.bottomY = this.y + this.topImage.height + this.spaceY;

    this.speed = 2;

    this.draw=function() {
        this.x -= this.speed;

        // this.ctx.beginPath();
        this.ctx.rect(this.x,this.y,this.imgW,this.topImage.height);
        this.ctx.rect(this.x,this.bottomY,this.imgW,this.bottomImage.height);
        // this.ctx.stroke();


        this.ctx.drawImage(this.topImage, this.x, this.y);
        this.ctx.drawImage(this.bottomImage, this.x, this.bottomY);
        

        if(this.x < -this.imgW) {
            this.x += 8 * 200;
            

            //管道出去之后,下次再使用的时候,坐标需要重新产生
            this.y = -(150 + Math.random()*150);
            this.bottomY = this.y + this.topImage.height + this.spaceY;
        }



    }
}


