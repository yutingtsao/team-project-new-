$(document).ready(function() {
    // 加載標頭內容
    $("#headerContainer").load("./header.html");

    // 加載頁腳內容
    $("#footerContainer").load("./footer.html");
});

$('.add_info').click(function(){
    $('.completed_').css('display','block')
})

$('.completed_').click(function(){
    $(this).removeAttr('style')
})

$('.completed_area').click(function(e){
    e.stopPropagation()
})
