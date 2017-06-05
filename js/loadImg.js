/**
 * Created by tsing on 2017/6/2.
 */
/**
 * 功能 : 可以用来监听多个图片的加载完成
 * @param prefix 图片的路径
 * @param imgArr 多个图片的名字组成的数组
 * @param callback 多个图片加载完成回调的函数
 */
function loadImgs(prefix,imgArr, callback) {
    //记录图片的个数
    var count=0;
    var imgs={};

    for (var i = 0; i < imgArr.length; i++) {

        var img=new Image();
        img.src=prefix+imgArr[i];

        imgs[imgArr[i]]=img;

        img.onload=function () {
            count++;
            if(count>=imgArr.length){
                callback(imgs);
            }
        }
    }
}