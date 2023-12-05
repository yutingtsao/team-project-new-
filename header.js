//  登入
 // 按下按鈕可以打開小視窗
 $(function(){
    $('.login_bt').click(function(){
        $('.mask_login').css('display','block')
    })
        // 按下x可以關閉小視窗
        $('.bi.bi-x').click(function(){
            $('.mask_login').css('display','none')
        })
})

$(function(){
    $('.register_bt').click(function(){
        $('.mask_register').css('display','block')
        $('.mask_login').css('display','none')
    })
        // 按下x可以關閉小視窗
        $('.bi.bi-x').click(function(){
            $('.mask_register').css('display','none')
        })
        
})

$(function(){
    $('.login_bt').click(function(){
        $('.mask_register').css('display','none')
    })
    $('.mask_register').click(function(){
        $('.mask_login').css('display','none')
    })
})


var main_bt = document.querySelector('.main_bt');
main_bt.addEventListener('click',function(){
    window.location.href = 'https://www.google.com.tw/?hl=zh_TW'; // 在这里指定您想要跳转的 URL
})

var second_bt = document.querySelector('.second_bt');
second_bt.addEventListener('click',function(){
    window.location.href = './Register.html'; // 在这里指定您想要跳转的 URL
})

 // 按下外面空白處可以關閉小視窗
$('.mask_login').click(function(){
    $(this).removeAttr('style')
})

$('.login_page').click(function(e){
    e.stopPropagation()
})

// 忘記密碼
// 還在處理這一段
$('.forgot_p').click(function(){
    $('.login_page').hide()
    
})

$('.forgot_p').click(function(){
    window.location.href = './forgot_password.html'; 
})


// 改密碼

// 註冊
$('.register_completed').click(function(){
    $('.register_page').hide()
    $('.mask1').show()
})

$('.register_completed').click(function() {
    var countdownElement = $(".second_5");
    var seconds = 5;
    updateCountdown();
    var countdownInterval = setInterval(function() {
        seconds-=1;
        updateCountdown();
        if (seconds === 0) {
            clearInterval(countdownInterval); 
            $('.mask1').css('display','none');
            $('.mask_register').css('display','none'); 
            $('.mask_login').css('display','block'); 
        }
    }, 1000);
    
    function updateCountdown() {
        countdownElement.text(seconds);
    }
});

var second_bt = document.querySelector('.cancel_');
second_bt.addEventListener('click',function(){
    window.history.back(); // 在这里指定您想要跳转的 URL
})

// 按下x可以關閉小視窗
$('.bi').click(function(){
    $('.mask_register').css('display','none')
})
 // 按下外面空白處可以關閉小視窗
 $('.mask_register').click(function(){
    $(this).removeAttr('style')
})

$('.register_page').click(function(e){
    e.stopPropagation()
})

// $('.mask1').click(function(e){
//     e.stopPropagation()
// })