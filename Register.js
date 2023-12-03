   // 按下按鈕可以打開小視窗
$('button').click(function(){
    $('.mask').css('display','block')
})
$('.main_bt').click(function(){
    $('.register_page').hide()
    $('.mask1').show()
})

// 秒數倒數
$('.main_bt').click(function() {
    var countdownElement = $(".second_5");
    var seconds = 5;
    updateCountdown();
    var countdownInterval = setInterval(function() {
        seconds-=1;
        updateCountdown();
        if (seconds === 0) {
            clearInterval(countdownInterval); 
            window.location.href = './login.html';
        }
    }, 1000);
    
    function updateCountdown() {
        countdownElement.text(seconds);
    }
});

var second_bt = document.querySelector('.second_bt');
second_bt.addEventListener('click',function(){
    window.history.back(); // 在这里指定您想要跳转的 URL
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