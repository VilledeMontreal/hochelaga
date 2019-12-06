(function ($) {

   
  // ******************************
  // PL-internal Icon modal handling
  $('[id^="linkModalIcon"]').click(function() {

    var title = $(this).next(".ic-name").html();
    var nameFileSvg = $(this).next(".ic-name").attr("id");
    var textModalUtility = '&lt;span class="icon icon-'+nameFileSvg+'" role="icon"&gt;&lt;/span&gt;';
    var textModalEditorial = '&lt;img src="pathtosvg/'+nameFileSvg+'.svg" role="icon" width="40" height="40" /&gt;';

    $("#exampleModalIconUtilityLabel").text(title);
    $("#exampleModalIconEditorialLabel").text(title);
    $("#exampleModalIconUtility .modal-body .select-all").html(textModalUtility);
    $("#exampleModalIconEditorial .modal-body").html("<p class='select-all'>"+textModalEditorial+"</p> <p>ou<p> <p class='select-all'>"+textModalUtility+"</p>");
    
  });


  // ******************************
  // Begin Menu push

  const ESCAPE_KEYCODE  = 'Escape' // KeyboardEvent.which value for Escape (Esc) key
  const TAB_KEYCODE     = 'Tab' // KeyboardEvent.which value for tab key

  // Main Menu
  var $menuToggler = $("#main-menu-toggler");
  var $mainMenu = $("#main-menu");

  // Menu interne
  var $menuInterneToggler = $("#menu-interne-toggler");
  var $slideMenu = $("#slide-menu-left");

  // Navbar search
  var $navbarSearchToggler = $(".navbar-search-toggler");
  var $navbarSearch = $("#navbar-search");

  // Close navbarSide when the overlay is clicked
  $('.overlay').on('click', function () {
    if($mainMenu.hasClass('show')) {
      $mainMenu.removeClass('show');
      // Return focus to the element that invoked it
      $menuToggler.attr("aria-expanded", "false").toggleClass('active').focus();
      $('body').toggleClass('modal-open');
    }
    if($slideMenu.hasClass('show')) {
      $slideMenu.removeClass('show');
      // Return focus to the element that invoked it
      $menuInterneToggler.attr("aria-expanded", "false").focus();
      $('body').toggleClass('modal-open');
    }
    if($navbarSearch.hasClass('show')) {
      $navbarSearch.removeClass('show');
      $navbarSearchToggler.attr("aria-expanded", "false");
    }
    if($('.overlay').hasClass('show')) {
      $('.overlay').removeClass('show');
    }
  });

  // Main menu close button (Mobile)
  $("#main-menu .js-button-mobile-close").on("click", function (e) {
    $mainMenu.removeClass('show');
    $('.overlay').removeClass('show');
    // Return focus to the element that invoked it
    $menuToggler.attr("aria-expanded", "false").toggleClass('active').focus();
  });

  // Navbar search Close button
  $("#navbar-search .js-button-close").on('click', function(e) {
    $navbarSearch.removeClass('show');
    $navbarSearchToggler.attr("aria-expanded", "false").focus();
    if(!$mainMenu.hasClass('show')) {
      $('.overlay').removeClass('show');
    }
  });

  // Sous-categories Close button
  $('.main-menu-categories > .main-menu-level1-item .main-menu-level2-close .js-button-close').on('click', function(e) {
    e.stopPropagation();
    $(this).parent().siblings('.main-menu-level2').addClass('main-menu-level2-hidden');
    $(this).parent().siblings('.btn-main-menu-toggle').removeClass('active').attr('aria-expanded', false).focus();
  });


  // Flyout Main Menu
  $menuToggler.on("click", function () {
    $('body').toggleClass('modal-open');
    $mainMenu.toggleClass('show');
    $('.overlay').toggleClass('show');
    $(this).toggleClass('active');
    // Set aria-expanded attribute on toggled button
    if($mainMenu.hasClass('show')) {
      $(this).attr("aria-expanded", "true");
    } else {
      $(this).attr("aria-expanded", "false");
    }
  });

  $navbarSearchToggler.on("click", function() {
    $(this).attr("aria-expanded", "true");
    $navbarSearch.addClass('show');
    $('#input-navbar-search').focus();
    if(!$('.overlay').hasClass('show')) {
      $('.overlay').addClass('show');
    }
    if($mainMenu.hasClass('show')) {
      $mainMenu.toggleClass('show');
      $mainMenu.attr("aria-expanded", "false");
    }
  });

  // Handle esc key on menu
  $mainMenu.keydown(function(e) {
    if (e.key === ESCAPE_KEYCODE) {
      // Close the menu and overlay
      $mainMenu.toggleClass("show");
      $('.overlay').removeClass('show');
      // Return focus to the element that invoked it
      $menuToggler.attr("aria-expanded", "false").toggleClass('active').focus();
    }
  });


  // Handle esc key on sub-menu
  $('.main-menu-categories > .main-menu-level1-item > .main-menu-level2').keydown(function(e) {
    e.stopPropagation();
    if (e.key === ESCAPE_KEYCODE) {
      // Close the menu and overlay
      $(this).addClass("main-menu-level2-hidden");
      // Return focus to the element that invoked it
      $(this).siblings('.btn-main-menu-toggle').attr("aria-expanded", "false").toggleClass('active').focus();
    }
  });

  // Handle esc key on navbar search
  $navbarSearch.keydown(function(e) {
    if (e.key === ESCAPE_KEYCODE) {
      // Close the menu and overlay
      $navbarSearch.toggleClass("show");
      $('.overlay').removeClass('show');
  
      // Return focus to the element that invoked it
      $navbarSearchToggler.attr("aria-expanded", "false").focus();
    }
  });

  // Handle second level for Categories
  $('.btn-main-menu-toggle').on('click', function() {
    $(this).parent('li').siblings().find('.main-menu-level2').addClass('main-menu-level2-hidden');
    $(this).parent('li').siblings().find('.btn-main-menu-toggle').removeClass('active').attr('aria-expanded', false);
    $(this).attr('aria-expanded', $(this).attr('aria-expanded') == 'true' ? 'false' : 'true');
    $(this).toggleClass('active');
    $(this).next('.main-menu-level2').toggleClass('main-menu-level2-hidden');
  });

  // Handle leaving submenu
  // If key is pressed while on the last link in a sub menu
  $('.main-menu-categories > .main-menu-level1-item > .main-menu-level2 > li:last-child > a').on('keydown', function(e) {
    // If tabbing out of the last link in a sub menu AND NOT tabbing into another sub menu
    if (e.key === TAB_KEYCODE) {
      // Close this sub menu
      $(this).parent('li').parent('ul').toggleClass('main-menu-level2-hidden');
      $(this).parent('li').parent('ul').siblings('.btn-main-menu-toggle').removeClass('active').attr('aria-expanded', false);
    }
  })

  // If key is pressed while on the first link in a sub menu
  $('.main-menu-categories > .main-menu-level1-item > .main-menu-level2 > li:first-child > a').on('keydown', function(e) {
    // If tabbing out of the last link in a sub menu AND NOT tabbing into another sub menu
    if (e.shiftKey && e.key === TAB_KEYCODE) {
      // Close this sub menu
      $(this).parent('li').parent('ul').toggleClass('main-menu-level2-hidden');
      $(this).parent('li').parent('ul').siblings('.btn-main-menu-toggle').removeClass('active').attr('aria-expanded', false);
    }
  })



  // Slide-menu interne
  //

  if($('#slide-menu-left').length != 0) {
    
    $menuInterneToggler.on("click", function () {
      $('body').toggleClass('modal-open');
      $slideMenu.toggleClass('show');
      $('.overlay').toggleClass('show');
      // Set aria-expanded attribute on toggled button
      if($slideMenu.hasClass('show')) {
        $(this).attr("aria-expanded", "true");
      } else {
        $(this).attr("aria-expanded", "false");
      }
    });

    // Handle esc key on menu
    $slideMenu.keydown(function(e) {
      if (e.key === ESCAPE_KEYCODE) {
        // Close the menu and overlay
        $slideMenu.toggleClass("show");
        $('.overlay').removeClass('show');
        // Return focus to the element that invoked it
        $menuInterneToggler.attr("aria-expanded", "false").focus();
      }
    });

    // Slide menu
    $("#slide-menu-left .js-button-close").on("click", function (e) {
      $slideMenu.removeClass('show');
      $('.overlay').removeClass('show');
      // Return focus to the element that invoked it
      $menuInterneToggler.attr("aria-expanded", "false").focus();
    });
  
  }


  // Clear input
  // TODO: Test if this is still needed
  //
  $('.has-clear input').on('input propertychange', function() {
    var $this = $(this);
    var visible = Boolean($this.val());
    $this.siblings('.btn-clear').toggleClass('d-none', !visible);
  }).trigger('propertychange');
  
  $('.btn-clear').on('click', function(e) {
    e.preventDefault();
    $(this).siblings('input').val('').trigger('propertychange').focus();
  });

  $('.js-btn-clear').on('click', function(e) {
    $(this).parent('.form-control').val('');
    $(this).closest('.form-row').find('.form-control').val('').focus();
  });


  // Toggle popover from data-toggle
  //
  $('[data-toggle="popover"]').popover();


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


  // sticky main nav
  var $nav = $(".main-navbar");
  $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
  //Scroll menu
  $(document).scroll(function () {
    var $nav = $(".main-navbar");
    $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
  });

  // Sticky navbar
  //
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function(sticky, stickyWrapper, stickyLimit, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    var stickyLimitTop = stickyLimit.offset().top;

    // We handle view all pages Sticky behavior by setting a stickyLimit.
    // Need to handle scrollspy and multiple ID on same page for view all templates pages...
    if(scrollElement.scrollTop() > stickyLimitTop - stickyHeight) {
      sticky.css({top: (scrollElement.scrollTop() + stickyHeight - stickyLimitTop) * -1})
    } else if (scrollElement.scrollTop() > stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };
  
  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    var stickyLimit = sticky.siblings().last();
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      if(window.matchMedia("(min-width: 992px)").matches) {
        //console.log("It matches!");
        stickyToggle(sticky, stickyWrapper, stickyLimit, $(window));
      } else {
        sticky.removeClass("is-sticky");
        stickyWrapper.height('auto');
      }
    });
  });


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        // Must match Navbar height
        if(window.matchMedia("(min-width: 992px)").matches) {
          $navOffset = 96;
        } else {
          $navOffset = 80;
        }

        $('html, body').animate({
          scrollTop: (target.offset().top - $navOffset)
        }, 1000, "easeInOutExpo");

        target.focus(); // Setting focus
        if (target.is(":focus")){ // Checking if the target was focused
          return false;
        } else {
          target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          target.focus(); // Setting focus
        };
        return false;
      }
    }
  });

  // Test for disabled state
  $('#email-subscription-form #confirmation-chk-card01').change(function () {
    if(this.checked) {
      $(this).closest('form').find('.btn').prop('disabled', false);
    } else {
      $(this).closest('form').find('.btn').prop('disabled', true);
    }
  });

  $('#form21').validate({
    showErrors: (errorMap, errorList) => {
      if ('Field14' in errorMap) {

        if ($('#rdioFeedback01-2').is(':checked') &&
          ($('#form21 textarea').val() === '' ||
            $('#form21 textarea').length === 1)
        ) {

          $('textarea').focus(() => {
            $(".form-control").addClass("is-invalid");
          });
          $('#form21 .invalid-feedback').show();
        }
      }
    },
    rules: {
      Field14: 'required'
    },
    submitHandler: form => {
      const message = $('#form21 textarea').val();
      if (($('#rdioFeedback01-2').is(':checked') && $.trim(message) !== '') || $('#rdioFeedback01-1').is(':checked')
      ) form.submit();
      else {
        $('textarea').addClass("is-invalid");
        $('#form21 .invalid-feedback').show();
      }
    }

  });

  $('#form21 input[name=Field10]').change(evt => {
    const inputValue = $(evt.target).val();
    if (inputValue) {
      $('#form21 button').prop('disabled', false);
      $('#form21 button').prop('hidden', false);
      if (inputValue != 'non') {
        if(!$('#form21 [name=Field14]').parent().hasClass('d-none')) {
          $('#form21 [name=Field14]').parent().addClass('d-none');
        }
      } else {
        $('#form21 [name=Field14]').parent().removeClass('d-none');
        $('#form21 [name=Field14]').prop('required', true);
      }
    }
  });

  $('#form21 button.reset-button').click(evt => {
    resetAllValues();
  });

  function resetAllValues() {
    $('#form21 input[name=Field10]').prop('checked', false);
    $('#form21 button').prop('disabled', true);
    $('#form21 button#cancel').prop('hidden', true);
  }
  
  // Activate scrollspy for navAnchors to add active class to navAnchors items on scroll
  if($('#navAnchors').length != 0) {
    $('body').scrollspy({
      target: '#navAnchors',
      offset: $("#navAnchors").height()
    });
  }

  $('.media-gallery').each( function() {
    var $pic     = $(this),
      getItems = function() {
        var items = [];
        $pic.find('a').each(function() {
          var $href   = $(this).attr('href'),
              $size   = $(this).data('size').split('x'),
              $width  = $size[0],
              $height = $size[1];

          var item = {
              src     : $href,
              w       : $width,
              h       : $height,
              author  : $(this).data('author'),
              description   : $(this).data('description'),
          }

          items.push(item);
        });
        return items;
      }
 
    var items = getItems();
    
    var $pswp = $('.pswp')[0];
    $pic.on('click', 'li', function(event) {
      event.preventDefault();
      
      var $index = $(this).index();
      let description = '';
      let author = '';
      const options = {
        index: $index,
        showHideOpacity: true,
        fullscreenEl: false,
        zoomEl: false,
        maxSpreadZoom: 1,
        pinchToClose: false,
        shareEl: false,
        preloaderEl: false,
        getDoubleTapZoom: function(isMouseClick, item) {
          return item.initialZoomLevel;
        },
        addCaptionHTMLFn: (item, captionEl, isFake) => {
          if (!item.description && !item.author) {
            captionEl.children[0].innerHTML = '';
            return false;
          }
  
          if (item.description) {
            description = `<span class="pswp__legend d-block font-weight-bold text-white text-center">${item.description}</span>`;
          }
  
          if (item.author) {
            author = `<span class="pswp__copyright d-block text-white text-center">&copy; ${item.author}</span>`;
          }
  
          captionEl.children[0].innerHTML = description + author;
          // We need to set item.title to true based on photoswipe caption display validation...
          item.title = true;
          return true;
        }
      }
      
      // Initialize PhotoSwipe
      var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
      lightBox.init();
    });
  });

  var openPhotoSwipe = function() {

    $('.media-gallery').each( function() {
      var $pic     = $(this), getItems = function() {
        var items = [];
        $pic.find('a').each(function() {
            var $href   = $(this).attr('href'),
                $size   = $(this).data('size').split('x'),
                $width  = $size[0],
                $height = $size[1];

            var item = {
                src     : $href,
                w       : $width,
                h       : $height,
                author  : $(this).data('author'),
                description   : $(this).data('description'),
            }

            items.push(item);
        });
        return items;
      }
   
      var items = getItems();
      
      var $pswp = $('.pswp')[0];
      let description = '';
      let author = '';
      const options = {
        index: 0,
        showHideOpacity: true,
        fullscreenEl: false,
        zoomEl: false,
        maxSpreadZoom: 1,
        pinchToClose: false,
        shareEl: false,
        preloaderEl: false,
        getDoubleTapZoom: function(isMouseClick, item) {
          return item.initialZoomLevel;
        },
        addCaptionHTMLFn: (item, captionEl, isFake) => {
          if (!item.description && !item.author) {
            captionEl.children[0].innerHTML = '';
            return false;
          }
  
          if (item.description) {
            description = `<span class="pswp__legend d-block font-weight-bold text-white text-center">${item.description}</span>`;
          }
  
          if (item.author) {
            author = `<span class="pswp__copyright d-block text-white text-center">&copy; ${item.author}</span>`;
          }
  
          captionEl.children[0].innerHTML = description + author;
          // We need to set item.title to true based on photoswipe caption display validation...
          item.title = true;
          return true;
        }
      }
      // Initialize PhotoSwipe
      var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
      lightBox.init();
    });
  };

  // Trigger gallery on click
  $(".js-gallery-trigger").click(function() {
    openPhotoSwipe();
  });

  // Change text based on language
  $('.collapse-content').on('show.bs.collapse', function () {
    $(this).parent().find("button").text('Voir moins');
  });

  $('.collapse-content').on('hide.bs.collapse', function () {
    $(this).parent().find("button").text('Voir plus');
  });


  $("#triggerMap").on('click', function(){
    $("#contentList").toggleClass('d-none');
    $("#contentMap").toggleClass('d-none');
    $("#sortFilters").toggleClass('d-none');
    $("#paginationList").toggleClass('d-none');
    $(".pagination-arrow").toggleClass('d-none');
    $(this).toggleClass('active');
    map.resize();
    $("#triggerList").toggleClass('active');
  });
  
  $("#triggerList").on('click', function(){
    $("#contentList").toggleClass('d-none');
    $("#contentMap").toggleClass('d-none');
    $("#sortFilters").toggleClass('d-none');
    $("#paginationList").toggleClass('d-none');
    $(".pagination-arrow").toggleClass('d-none');
    $(this).toggleClass('active');
    $("#triggerMap").toggleClass('active');
  });

})(jQuery);


// Copyright toggle
const copyrights = document.querySelectorAll('.img-copyright');

copyrights.forEach((copyright) => {
  copyright.addEventListener('click', () => {
    showHideCopyright(copyright);
  });
});

function showHideCopyright(copyright) {
  const copyrightText = copyright.querySelector('.copyright-text');
  copyrightText.classList.toggle('d-none');
}



// Flyout toggle
const flyouts = document.querySelectorAll(`[data-toggle='flyout']`);

flyouts.forEach((flyout) => {
  const flyoutId = flyout.dataset.target;
  flyout.addEventListener('click', (ev) => {
    ev.preventDefault();
    document.getElementById(flyoutId).classList.toggle('show');
    toggleHidden(flyoutId)
  });
});



function toggleHidden(id) {
  var attr = document.getElementById(id).attributes;
  
  if (attr['aria-hidden'].value == "true") {
    document.getElementById(id).setAttribute("aria-hidden", "false");
  } else {
    document.getElementById(id).setAttribute("aria-hidden", "true");
  }
  
}

const focusableLinks = document.querySelectorAll(".sr-focusable-js");

focusableLinks.forEach((focusableLink) => {
  focusableLink.addEventListener('focus', (ev) => {
    focusableLink.parentElement.classList.add('skip-links-focus');
  });
  focusableLink.addEventListener('blur', (ev) => {
    focusableLink.parentElement.classList.remove('skip-links-focus');
  })
})
