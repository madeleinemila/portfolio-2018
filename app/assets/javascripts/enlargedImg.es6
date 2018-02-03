$(document).ready(function() {
  $('.click-to-enlarge').on('click', function() {
    const source = $(this).attr('src');
    $('#enlarged-img').attr('src', source);
  });
});
