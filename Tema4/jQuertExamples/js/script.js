$(document).ready(function() {
    let control = false;
    $("#but1").click(function() {
        if (!control) {
            control = !control;
            $("#n1").hide(2000);
            $("#but1").html("Show block1");
        } else {
            control = !control;
            $("#n1").show(2000);
            $("#but1").html("Hide block1");
        }
    });
    
    $("#but2").click(function() {
        $("#n2").toggle(2500);
    });
    
    $("#n4").css("display", "none");
    $("#n5").css("display", "none");
    
    $("#but3").click(function() {
        $("#n3").fadeIn(2500);
        $("#n4").hide();
        $("#n5").hide();
    });
    
    $("#but4").click(function() {
        $("#n4").fadeIn(2500);
        $("#n3").hide();
        $("#n5").hide();
    });

    $("#but5").click(function() {
        $("#n5").fadeIn(2500);
        $("#n3").hide();
        $("#n4").hide();
    });

    $("#result").text("Введено символов: " + $(this).val().length);
    $("#username").keyup(function() {
        let k = $(this).val().length;
        $("#result").text("Введено символов: " + k);
        let l = $("#username").attr("maxlength");
        $("#counter").text("Осталось символов для ввода: " + (l-k) + "из" + l);
    });
});