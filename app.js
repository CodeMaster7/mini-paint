$(document).ready(function() {
    
    var color = 'white';
    var colors = 'red blue green yellow white';
    
    $(".box").on("mouseover", function() {
        $(this).addClass(color);
    });
    
    $(".box").on("dblclick", function() {
        $(this).removeClass(color);
    });
    
    $('#reset').on('click', function() {
        $('.box').removeClass(color);
    });
    
    $('.box').on('dblclick', function() {
        $(this).removeClass(colors);
    });
    
    $('#reset').on('click', function() {
        $('.box').removeClass(colors);
    });
    
    //changes color variable on 'click'
    
    $("#red").on("click", function() {
        color = "red";  
    });
    
    $("#green").on("click", function() {
        color = "green";  
    });
    
    $("#blue").on("click", function() {
        color = "blue";  
    });
    
    $("#yellow").on("click", function() {
        color = "yellow";  
    });
    
    $("#white").on("click", function() {
        color = "white";  
    });
});