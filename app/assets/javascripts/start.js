$(document).ready(function(){
    $("button.zad2").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });

    $("#hide").click(function(){
        $("p.zad1").hide();
    });
    $("#show").click(function(){
        $("p.zad1").show();
    });

    $("p#ajdik").click(function(){
        $(this).remove();
    });
    $("p#kidja").click(function(){
        $(this).hide();
    });

});

