// Registration page modals

$(function(){
    $("#release-agree1").click(function(){
        let agree1 = true;
        $('#release1').modal("hide");
        $('#registerModal1').modal("show");
    });
});

$(function(){
    $("#release-agree2").click(function(){
        let agree2 = true;
        $('#release2').modal("hide");
        $('#registerModal2').modal("show");
    });
});

$(function(){
    $("#release-agree3").click(function(){
        let agree3 = true;
        $('#release3').modal("hide");
        $('#registerModal3').modal("show");
    });
});

// Tournament schedule page modals

$(function(){
    $("#release-agree4").click(function(){
        let agree4 = true;
        $('#release4').modal("hide");
        $('#registerModal4').modal("show");
    });
});

$(function(){
    $("#release-agree5").click(function(){
        let agree5 = true;
        $('#release5').modal("hide");
        $('#registerModal5').modal("show");
    });
});

$(function(){
    $("#release-agree6").click(function(){
        let agree6 = true;
        $('#release6').modal("hide");
        $('#registerModal6').modal("show");
    });
});

// Community events schedule modals

$(function(){
    $("#release-agree7").click(function(){
        let agree4 = true;
        $('#release7').modal("hide");
        $('#registerModal7').modal("show");
    });
});

$(function(){
    $("#release-agree8").click(function(){
        let agree5 = true;
        $('#release8').modal("hide");
        $('#registerModal8').modal("show");
    });
});

$(function(){
    $("#release-agree9").click(function(){
        let agree6 = true;
        $('#release9').modal("hide");
        $('#registerModal9').modal("show");
    });
});

// Tool tips

  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//Dummy button

function dummyButton(){
    alert("This isn't linked to anything yet!")
}

