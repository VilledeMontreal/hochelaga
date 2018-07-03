(function ($) {


  // ******************************
  // Begin side menu push

  var $menuOpen = $(".hamburger");
  var $btnClose = $(".btn-close")

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

  $btnClose.on("click", function () {
    $('#slide-menu-left').data('slide-menu').close();
    $("#navbarSideMenu").attr("aria-expanded", "false");
    $('#navbar-search').hide();
    $('.overlay').hide();
  });


  let $navbarSearchToggler = $(".navbar-search-toggler");

  $navbarSearchToggler.on("click", function() {
    $('#navbar-search').show();
    $('input').focus();
    $('.overlay').show();
  });


  /* Nav search input-group focus */
  $( ".js-nav-search .form-control" ).focus(function() {
    $(this).prev('.input-group-icon-left').addClass('input-group-focus');
  });

  $( ".js-nav-search .form-control" ).focusout(function() {
    $(this).prev('.input-group-icon-left').removeClass('input-group-focus');
  });



  // ******************************
  // Begin side submenus interactivity


  /*
  var $menuRoot = $(".navbar-side-menu > .menu-links");
  var $submenuTriggers = $menuRoot.find(".has-children > .menu-link");
  var $childrenLinks = $(".navbar-side-menu > .menu-links .child-link");
  var $subMenu = null;
  var $backLink = null;

  if (!$subMenu && !$backLink && $menuRoot) {
    // Set actions for all sub-menu links
    findSubMenuLinks($menuRoot, setActiveSubmenuLinks);

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
    $menuRoot.addClass("submenu-is-open");
    $subMenu.addClass("show");

    // Attach hide events once show events are completed
    $backLink.on("click", function() {
      hideChildMenu($subMenu, resetActiveSubmenuLinks);
    });
  }

  function hideChildMenu($subMenu, resetActiveSubmenuLinks) {
    $menuRoot.removeClass("submenu-is-open");
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

  */


  // Toggle popover from data-toggle
  $('[data-toggle="popover"]').popover();


  // Wizard
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




// Slide menu

  const PLUGIN_NAME = 'slideMenu';
  const DEFAULT_OPTIONS = {
    showBackLink: true,
    keycodeOpen: null,
    keycodeClose: 27, //esc
    submenuLinkBefore: '',
    submenuLinkAfter: '',
    backLinkTitle: '',
    backLinkBefore: '',
    backLinkAfter: '',
  };

  class SlideMenu {

    constructor(options) {
      this.options = options;

      this._menu = options.elem;

      // Add wrapper
      this._menu.find('ul:first').wrap('<div class="slider">');

      this._anchors = this._menu.find('a');
      this._slider = this._menu.find('.slider:first');

      this._level = 0;
      this._isOpen = false;
      this._isAnimating = false;
      this._hasMenu = this._anchors.length > 0;
      this._lastAction = null;

      this._setupEventHandlers();
      this._setupMenu();

      if (this._hasMenu)
        this._setupSubmenus();
    }

    /**
     * Toggle the menu
     * @param {boolean|null} open
     * @param {boolean} animate
     */
    toggle(open = null, animate = true) {
      let offset;

      if (open === null) {
        if (this._isOpen) {
          this.close();
        } else {
          this.open();
        }
        return;
      } else if (open) {
        offset = 0;
        this._isOpen = true;
      } else {
        offset = '-100%';
        this._isOpen = false;
      }

      this._triggerEvent();

      if (animate)
        this._triggerAnimation(this._menu, offset);
      else {
        //this._pauseAnimations(this._triggerAnimation.bind(this, this._menu, offset));
        //this._isAnimating = false;
      }
    }

    /**
     * Open the menu
     * @param {boolean} animate Use CSS transitions
     */
    open(animate = true) {
      this._lastAction = 'open';
      this.toggle(true, animate);
    }

    /**
     * Close the menu
     * @param {boolean} animate Use CSS transitions
     */
    close(animate = true) {
      this._lastAction = 'close';
      this.toggle(false, animate);
    }

    /**
     * Navigate one menu hierarchy back if possible
     */
    back() {
      this._lastAction = 'back';
      this._navigate(null, -1);
    }


    /**
     * Set up all event handlers
     * @private
     */
    _setupEventHandlers() {
      if (this._hasMenu) {
        this._anchors.click((event) => {
          let anchor = $(event.target).is('a') ? $(event.target) : $(event.target).parents('a:first');
          this._navigate(anchor);
        });
      }

      $(this._menu.add(this._slider)).on('transitionend msTransitionEnd', () => {
        this._isAnimating = false;
        this._triggerEvent(true);
      });

      $(document).keydown((e) => {
        switch (e.which) {
          case this.options.keycodeClose:
            this.close();
            $("#navbarSideMenu").attr("aria-expanded", "false");
            $('.overlay').hide();
            break;

          case this.options.keycodeOpen:
            this.open();
            break;

          default:
            return;
        }
        e.preventDefault();
      });

      this._menu.on('sm.back-after', () => {
        let lastActiveUl = 'ul ' + '.active '.repeat(this._level + 1);
        this._menu.find(lastActiveUl).removeClass('active').hide();
      });
    }

    /**
     * Trigger a custom event to support callbacks
     * @param {boolean} afterAnimation Mark this event as `before` or `after` callback
     * @private
     */
    _triggerEvent(afterAnimation = false) {
      let eventName = 'sm.' + this._lastAction;
      if (afterAnimation) eventName += '-after';
      this._menu.trigger(eventName);
    }

    /**
     * Navigate the _menu - that is slide it one step left or right
     * @param {jQuery} anchor The clicked anchor or button element
     * @param {int} dir Navigation direction: 1 = forward, 0 = backwards
     * @private
     */
    _navigate(anchor, dir = 1) {
      // Abort if an animation is still running
      if (this._isAnimating) {
        return;
      }

      let offset = (this._level + dir) * -100;

      if (dir > 0) {
        if (!anchor.next('ul').length)
          return;

        anchor.next('ul').addClass('active').show();
      } else if (this._level === 0) {
        return;
      }

      this._lastAction = dir > 0 ? 'forward' : 'back';
      this._level = this._level + dir;

      this._triggerAnimation(this._slider, offset);
    }

    /**
     * Start the animation (the CSS transition)
     * @param elem
     * @param offset
     * @private
     */
    _triggerAnimation(elem, offset) {
      this._triggerEvent();

      if (!String(offset).includes('%'))
        offset += '%';

      elem.css('transform', 'translateX(' + offset + ')');
      this._isAnimating = true;
    }

    /**
     * Initialize the menu
     * @private
     */
    _setupMenu() {
      this._menu.css({
        left: 0,
        right: 'auto',
        transform: 'translateX(-100%)'
      });

      this._menu.show();
    }

    

    /**
     * Enhance the markup of menu items which contain a submenu
     * @private
     */
    _setupSubmenus() {
      this._anchors.each((i, anchor) => {
        anchor = $(anchor);
        if (anchor.next('ul').length) {
          // prevent default behaviour (use link just to navigate)
          anchor.click(function (ev) {
            ev.preventDefault();
          });

          // add `before` and `after` text
          let anchorTitle = anchor.text();
          anchor.html(anchorTitle + this.options.submenuLinkAfter);

          // add a back button
          if (this.options.showBackLink) {
            let anchorBackLinkTitle = anchorTitle;
            if(this.options.backLinkTitle) {
              anchorBackLinkTitle = this.options.backLinkTitle;
            }
            let backLink = $('<a href class="back-link slide-menu-control" data-action="back">' + anchorBackLinkTitle + '</a>');
            backLink.html(this.options.backLinkBefore + backLink.text());
            anchor.next('ul').prepend($('<li>').append(backLink));
          }
        }
      });
    }
  }

  // Link control buttons with the API
  $('body').on('click', '.slide-menu-control', function (e) {
    let menu;
    let target = $(this).data('target');

    if (!target || target === 'this') {
      menu = $(this).parents('.slide-menu:first');
    } else {
      menu = $('#' + target)
    }

    if (!menu.length) return;

    let instance = menu.data(PLUGIN_NAME);
    let action = $(this).data('action');

    if (instance && typeof instance[action] === 'function') {
      instance[action]();
    }

    return false;
  });

  // Register the jQuery plugin
  $.fn[PLUGIN_NAME] = function (options) {
    if (!$(this).length) {
      console.warn('Slide Menu: Unable to find menu DOM element. Maybe a typo?');
      return;
    }

    options = $.extend({}, DEFAULT_OPTIONS, options);
    options.elem = $(this);

    let instance = new SlideMenu(options);
    $(this).data(PLUGIN_NAME, instance);

    return instance;
  };


  var menuLeft = $('#slide-menu-left').slideMenu({
    submenuLinkAfter: '<span class="vfi vfi-fleche-droite" aria-hidden="true"></span>',
    backLinkTitle: 'Back',
    backLinkBefore: '<span class="vfi vfi-chevron-gauche" aria-hidden="true"></span> '
  });



})(jQuery);
