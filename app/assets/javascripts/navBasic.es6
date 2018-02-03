$(document).ready(function() {

  $('#about').on('click', function() {
    smoothScroll( 0 );
  });

  $('#home-to-work').on('click', function() {
     smoothScrollTarget( $('#work') );
  });

  $('#about-to-home').on('click', function() {
     smoothScrolling = true;
     smoothScrollTarget( $('#home') );
  });

  $('#nav-return').on('click', function() {
     smoothScrolling = true;
     smoothScrollTarget( $('#home') );
  });

  $('#skills-to-work').on('click', function() {
     smoothScrollTarget( $('#work') );
  });

});




// smooth scroll

const smoothScroll = function( y ) {
  $('html, body').animate( { scrollTop: y }, 500);
};

const smoothScrollTarget = function( target ) {
   $('html, body').animate( { scrollTop: target.offset().top }, 500);
};
