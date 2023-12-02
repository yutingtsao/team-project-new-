
var main_bt = document.querySelector('.main_bt');
main_bt.addEventListener('click',function(){
    window.location.href = 'file:///C:/Users/T14%20Gen%203/OneDrive/UIUX%E8%AA%B2%E7%A8%8B/team%20project/team-project-new-/Register/Register.html'; // 在这里指定您想要跳转的 URL
})
   

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

$('.login_page').click(function(e){
    e.stopPropagation()
})


