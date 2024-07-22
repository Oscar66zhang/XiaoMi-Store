var index=0
function getpage(){
    index++;
    $('.imgs').removeClass('active') // 移除它们的 active 类。这样可以隐藏之前显示的图片
    if(index>4){
        index=0
    }
    $('.imgs').eq(index).addClass('active') 
    // .eq(index)用于从选中的元素集合中,选择指定索引位置的元素
}
var time=setInterval(getpage,1000)
// 轮播图切换
function next(){
 clearInterval(time)
 getpage()
 time = setInterval(getPage, 1000)
}

function pre(){
    clearInterval(time)
    index--;
    $('.imgs').removeClass('active') 
    if(index<0){
        index=4
    }
    $('.imgs').eq(index).addClass('active') 
    time = setInterval(getPage, 1000)
}