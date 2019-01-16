(function($){
  $(function() {
    $('.toggle').on('click', function() {
      $(this).closest('.header-info-menu')
        .toggleClass('menu_state_open');
    });

    $('.menu_links').on('click', function() {
      // do something

      $(this).closest('.header-info-menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);
