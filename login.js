

var main_bt = document.querySelector('.main_bt');
main_bt.addEventListener('click',function(){
    window.location.href = 'https://www.google.com.tw/?hl=zh_TW'; // 在这里指定您想要跳转的 URL
})

var second_bt = document.querySelector('.second_bt');
second_bt.addEventListener('click',function(){
    window.location.href = './Register.html'; // 在这里指定您想要跳转的 URL
})

 // 按下按鈕可以打開小視窗
$('document').ready(function(){
    $('.mask_login').css('display','block')
})
// 按下x可以關閉小視窗
$('.bi').click(function(){
    $('.mask_login').css('display','none')
})
 // 按下外面空白處可以關閉小視窗
$('.mask_login').click(function(){
    $(this).removeAttr('style')
})

$('.login_page').click(function(e){
    e.stopPropagation()
})

// 還在處理這一段
$('.forgot_p').click(function(){
    $('.login_page').hide()
    
})

$('.forgot_p').click(function(){
    window.location.href = './forgot_password.html'; 
})