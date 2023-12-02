   // 按下按鈕可以打開小視窗
$('button').click(function(){
    $('.mask').css('display','block')
})
// 按下x可以關閉小視窗
$('.bi').click(function(){
    $('.mask').css('display','none')
})
 // 按下外面空白處可以關閉小視窗
 $('.mask').click(function(){
    $(this).removeAttr('style')
})

$('.register_page').click(function(e){
    e.stopPropagation()
})