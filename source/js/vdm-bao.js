(function($) {
  // Text field labels toggle
  // Toggle the 'used' class for textfields w/ & w/out content
  $("input.vdm-form-control, textarea.vdm-form-control").blur(function() {
    $(this).val() ? $(this).addClass("used") : $(this).removeClass("used");
  });

  // Add remove an open state class for the <select> wrapper
  // $( "select.vdm-select", ".vdm-select-wrapper > label" )
  // @to-do - implement a 'has-label' class? Inline vs block label?
  $("select.vdm-select")
    .mouseup(function() {
      $parent = $(this).parents(".vdm-select-wrapper");
      $parent.hasClass("select-open")
        ? $parent.removeClass("select-open")
        : $parent.addClass("select-open");
    })
    .blur(function() {
      $parent = $(this).parents(".vdm-select-wrapper");
      $parent.removeClass("select-open");
    });

  // ******************************
  // Begin side menu push

  var $menuOpen = $(".hamburger");
  var $menuClose = $(".btn-side-menu-close")

  $menuOpen.on("click", function() {
    $('#navbarSideMenu').addClass('is-open');
    $("#navbarSideMenu").attr("aria-expanded", "true");
    $('.overlay').show();
  });

  // Close navbarSide when the overlay is clicked
  $('.overlay').on('click', function(){
    $('#navbarSideMenu').removeClass('is-open');
    $('.overlay').hide();
  });

  $menuClose.on("click", function() {
    $('#navbarSideMenu').removeClass('is-open');
    $("#navbarSideMenu").attr("aria-expanded", "false");
    $('.overlay').hide();
  });

  // ******************************
  // Begin side submenus interactivity

  var $menuRoot = $(".side-menu.wrapper > .menu-links");
  var $submenuTriggers = $menuRoot.find(".has-children > .menu-link");
  var $childrenLinks = $(".side-menu.wrapper > .menu-links .child-link");
  var $closeLinks = $(".menu-link")
    .not(".parent-link")
    .not(".back-link");
  var $subMenu = null;
  var $backLink = null;

  if (!$subMenu && !$backLink && $menuRoot) {
    // Set actions for all sub-menu links
    findSubMenuLinks($menuRoot, setActiveSubmenuLinks);

    // Close sub-menu when the link clicked was the last tip of a branch : there is nowhere else to go
    $closeLinks.on("click", function() {
      if ($("body").hasClass("menu-open")) {
        // Close second level menus inside side menus
        $subMenu = $(this)
          .parents(".has-children")
          .find(".submenu");
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
    $submenuTriggers.on("click", function() {
      $submenuToggleLink = $(this);
      $subMenu = $(this)
        .parent(".has-children")
        .find(".submenu");

      // Call active function
      if (typeof setActiveSubmenuLinks == "function") {
        setActiveSubmenuLinks.call(this, $submenuToggleLink, $subMenu);
      }
    });
  }

  function setActiveSubmenuLinks($object, $subject, resetActiveSubmenuLinks) {
    $backLink = $subject.find(".back-link");
    showChildMenu($subject, $backLink);
  }

  function showChildMenu($subMenu, $backlink) {
    $menuRoot.addClass("invisible");
    $subMenu.addClass("show");

    // Attach hide events once show events are completed
    $backLink.on("click", function() {
      hideChildMenu($subMenu, resetActiveSubmenuLinks);
    });
  }

  function hideChildMenu($subMenu, resetActiveSubmenuLinks) {
    $menuRoot.removeClass("invisible");
    $subMenu.removeClass("show");
    // Reset active items
    if (typeof resetActiveSubmenuLinks == "function") {
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
  $("#passwordfield").on("keyup", function() {
    if ($(this).val()) $(".glyphicon-eye-open").show();
    else $(".glyphicon-eye-open").hide();
  });
  $(".glyphicon-eye-open")
    .mousedown(function() {
      $("#passwordfield").attr("type", "text");
    })
    .mouseup(function() {
      $("#passwordfield").attr("type", "password");
    })
    .mouseout(function() {
      $("#passwordfield").attr("type", "password");
    });

  function getActive() {
    return $(document.activeElement);
  }

  // Toggle popover from data-toggle
  $('[data-toggle="popover"]').popover();


  // Wizard
  $('a[data-toggle="tab"]').on("show.bs.tab", function(e) {
    var $target = $(e.target);
    if ($target.parent().hasClass("disabled")) {
      return false;
    }
  });

  $(".next-step").click(function(e) {
    var $active = $(".nav-steps li>a.active");
    $active.addClass("complete");
    $active.parent().next().removeClass("disabled");
    nextTab($active);
  });

  $(".prev-step").click(function(e) {
    var $active = $(".nav-steps li>a.active");
    prevTab($active);
  });

  function nextTab(elem) {
    $(elem).parent().next().find('a[data-toggle="tab"]').click();
  }
  function prevTab(elem) {
    $(elem).parent().prev().find('a[data-toggle="tab"]').click();
  }

  // Nav-tabs-dropdown
  $('.nav-tabs-dropdown').each(function(i, elm) {
    $(elm).next('ul').find('li a.active').text().length == 0 ? $(elm).text($(elm).next('ul').find('li a:first').text()) : $(elm).text($(elm).next('ul').find('li a.active').text());
    //$(elm).text($(elm).next('ul').find('li a.active').text());

  });

  $('.nav-tabs-dropdown-menu .dropdown-item').on('click', function(e) {
      e.preventDefault();
      $(e.target).closest('ul').prev('a').text($(this).text());
      $(this).siblings().removeClass('active');

      // Remove active class for all items and add it to current active item
      $(this).siblings().children().removeClass('active');
      $(this).children().addClass('active');
  });


})(jQuery);
