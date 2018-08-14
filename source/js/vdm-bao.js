(function ($) {


  // ******************************
  // Begin side menu push

  var $menuOpen = $(".menu-toggler");
  var $buttonClose = $(".js-button-close")

  $menuOpen.on("click", function () {
    $("#navbarSideMenu").attr("aria-expanded", "true");
    $('.overlay').show();
  });

  // Close navbarSide when the overlay is clicked
  $('.overlay').on('click', function () {
    $('#slide-menu-left').data('slide-menu').close();
    $('#navbar-search').hide();
    $('.overlay').hide();
  });

  $buttonClose.on("click", function () {
    $('#slide-menu-left').data('slide-menu').close();
    $("#navbarSideMenu").attr("aria-expanded", "false");
    $('#navbar-search').hide();
    $('.overlay').hide();
  });


  var $navbarSearchToggler = $(".navbar-search-toggler");

  $navbarSearchToggler.on("click", function() {
    $('#navbar-search').show();
    $('input').focus();
    $('.overlay').show();
  });


  // Nav search input-group focus
  //
  $( ".js-nav-search .form-control" ).on("focus", function() {
    $('#slide-menu-left').addClass('js-search-focus');
    $('.slide-menu-header').addClass('invisible');
    $('.slider').addClass('invisible');
    $('.js-button-close-search').removeClass('d-none');
  });

  $('.js-button-close-search').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('d-none');
    $(this).siblings('input').val('');
    $(this).siblings('.btn-clear').addClass('d-none');
    $('#slide-menu-left').removeClass('js-search-focus');
    $('.slide-menu-header').removeClass('invisible');
    $('.slider').removeClass('invisible');
  })


  // Clear input
  //
  $('.has-clear input').on('input propertychange', function() {
    var $this = $(this);
    var visible = Boolean($this.val());
    $this.siblings('.btn-clear').toggleClass('d-none', !visible);
  }).trigger('propertychange');
  
  $('.btn-clear').on('click', function(e) {
    e.preventDefault();
    $(this).siblings('input').val('')
      .trigger('propertychange').focus();
  });

  // Toggle popover from data-toggle
  //
  $('[data-toggle="popover"]').popover();


  // Whole clickable div with links inside
  //
  $('.card-inception').click(function(evnt) {
    var $originatingTarget = $(evnt.target);
    if ($originatingTarget && $originatingTarget.is('a')) {
      evnt.stopPropagation(); // Allows other handlers on the event.target to be executed.
    } else {
      window.location = $(this).data("href");
    }
  });
  

  // Wizard
  //
  $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
    var $target = $(e.target);
    if ($target.parent().hasClass("disabled")) {
      return false;
    }
  });

  $(".next-step").click(function (e) {
    var $active = $(".nav-steps li>a.active");
    $active.addClass("complete");
    $active.parent().next().removeClass("disabled");
    nextTab($active);
  });

  $(".prev-step").click(function (e) {
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
  //
  $('.nav-tabs-dropdown').each(function (i, elm) {
    $(elm).next('ul').find('li a.active').text().length == 0 ? $(elm).text($(elm).next('ul').find('li a:first').text()) : $(elm).text($(elm).next('ul').find('li a.active').text());
    //$(elm).text($(elm).next('ul').find('li a.active').text());

  });

  $('.nav-tabs-dropdown-menu .dropdown-item').on('click', function (e) {
    e.preventDefault();
    $(e.target).closest('ul').prev('a').text($(this).text());
    $(this).siblings().removeClass('active');

    // Remove active class for all items and add it to current active item
    $(this).siblings().children().removeClass('active');
    $(this).children().addClass('active');
  });

  // Slide-menu initialisation
  // @see slide-menu.js 
  //
  if($('#slide-menu-left').length != 0) {

    var menuLeft = $('#slide-menu-left').slideMenu({
      submenuLinkAfter: '<span class="vdm vdm-063-fleche-droite" aria-hidden="true"></span>',
      backLinkTitle: 'Back',
      backLinkClass: 'back-link',
      backLinkBefore: '<span class="vdm vdm-058-chevron-gauche" aria-hidden="true"></span> '
    });
  }

})(jQuery);
