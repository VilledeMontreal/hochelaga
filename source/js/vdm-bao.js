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

    
    // ******************************
    // Begin side menu push
    
    var $menuTrigger = $(".menu-trigger");

    $menuTrigger.on( "click", function() { 
       $("body").toggleClass("menu-open");
        if($("body").hasClass("menu-open")) {
                $(this).attr("aria-expanded", "true");
        }else {
            $(this).attr("aria-expanded", "false");
        }
    });

     

    // ******************************
    // Begin side submenus interactivity

    var $menuRoot = $(".side-menu.wrapper > .menu-links");
    var $submenuTriggers = $menuRoot.find(".has-children > .menu-link");
    var $childrenLinks = $(".side-menu.wrapper > .menu-links .child-link");
    var $closeLinks = $(".menu-link").not(".parent-link").not(".back-link");
    var $subMenu = null;
    var $backLink = null;
    
    if(!$subMenu && !$backLink && $menuRoot) {
        // Set actions for all sub-menu links
        findSubMenuLinks($menuRoot, setActiveSubmenuLinks); 

        // Close sub-menu when the link clicked was the last tip of a branch : there is nowhere else to go
        $closeLinks.on( "click", function() { 
            if($("body").hasClass("menu-open")) {

                // Close second level menus inside side menus
                $subMenu = $(this).parents(".has-children").find(".submenu");
                hideChildMenu($subMenu, resetActiveSubmenuLinks);

                // Hide menu sidebar
                $menuTrigger.attr("aria-expanded", "true");
                $("body").removeClass("menu-open");
            }
        });
    }

    

    
    // Find all link submenu links, set callback functions for child elements
    function findSubMenuLinks($menu, setActiveSubmenuLinks) {
        $submenuTriggers = $menu.find(".has-children > .menu-link");
        $submenuTriggers
            .on( "click", function() {
                $submenuToggleLink = $(this);
                $subMenu = $(this).parent(".has-children").find(".submenu");
                

                // Call active function 
                if(typeof setActiveSubmenuLinks == 'function') {
                    setActiveSubmenuLinks.call(this, $submenuToggleLink, $subMenu );
                }
            }
        );
    }

    function setActiveSubmenuLinks($object, $subject, resetActiveSubmenuLinks) {
        $backLink = $subject.find(".back-link");
        showChildMenu($subject, $backLink);
    }

    function showChildMenu($subMenu, $backlink ) {
        $menuRoot.addClass("invisible");
        $subMenu.addClass("show");

        // Attach hide events once show events are completed
        $backLink
            .on( "click", function() {
                hideChildMenu($subMenu, resetActiveSubmenuLinks)
            }
        );

    }

    function hideChildMenu($subMenu, resetActiveSubmenuLinks) {
        $menuRoot.removeClass("invisible");
        $subMenu.removeClass("show");
        // Reset active items
        if(typeof resetActiveSubmenuLinks == 'function') {
            resetActiveSubmenuLinks.call(this);
        }
    }

    function resetActiveSubmenuLinks() {
        $subMenu = null;
        $backLink = null;
    }

    // ******************************
    // End side submenus interactivity



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


    // Toggle popover from data-toggle
    $('[data-toggle="popover"]').popover();



})(jQuery);