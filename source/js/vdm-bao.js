(function ($) {

    // Text field labels toggle
    // Toggle the 'used' class for textfields w/ & w/out content
    $("input.vdm-form-control, textarea.vdm-form-control").blur(function() {
        $(this).val() ? $(this).addClass('used') : $(this).removeClass('used');
    });



    // Add remove an open state class for the <select> wrapper
    // $( "select.vdm-select", ".vdm-select-wrapper > label" )
    // @to-do - implement a 'has-label' class? Inline vs block label?
    $( "select.vdm-select" )
        .mouseup(function() {
            $parent = $( this ).parents(".vdm-select-wrapper");
            $parent.hasClass("select-open") ? $parent.removeClass("select-open") : $parent.addClass("select-open");
        }
    )
        .blur(function() {
            $parent = $( this ).parents(".vdm-select-wrapper");
            $parent.removeClass("select-open");
        }
    );

    // Password visibility (type toggle) - adapt & knit this
    // https://bootsnipp.com/snippets/featured/show-password
    $("#passwordfield").on("keyup",function(){
        if($(this).val())
            $(".glyphicon-eye-open").show();
        else
            $(".glyphicon-eye-open").hide();
        });
    $(".glyphicon-eye-open").mousedown(function(){
        $("#passwordfield").attr('type','text');
    }).mouseup(function(){
        $("#passwordfield").attr('type','password');
    }).mouseout(function(){
        $("#passwordfield").attr('type','password');
    });



    function getActive(){
        return $(document.activeElement);
    }



})(jQuery);