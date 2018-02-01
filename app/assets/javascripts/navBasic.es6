$(document).ready(function() {

  $('#about').on('click', function() {
    window.scrollTo( 0, 0 );
  });

  $('#nav-return').on('click', function() {
     const anchor = document.getElementById('home'); // TODO could cache this, called twice
     scrollTo(document.body, anchor.offsetTop, 0);
  });

});
