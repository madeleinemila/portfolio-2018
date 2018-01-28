// // *** 'from' text options
// const from = ['film', 'tape', 'hardware'];
//
// // ** 'to' text options - keep same length as 'from' // TODO put in one 2d array then?
// const to = ['web delivery', 'web app', 'DMX over IP'];

const tech = ['film to streaming.', 'hardware to web apps.', 'videotape to data.', 'industry-specific protocols to IP.', 'cables to web GUIs.', 'meetings to borderless online collaboration.'];


// counter to rotate through options
let counter = 1;



// *** component functions ***

const fadeOut = function(elem) {
  elem.addClass('no-opacity');
};

const changeText = function(elem, a) {
  elem.text( a[counter] );
  counter++;
  if (counter > a.length - 1) counter = 0 ;
};

const fadeIn = function(elem) {
  elem.removeClass('no-opacity');
};

// ** MAIN FADE LOOP **
const fadeLoop = function( $elem, a ) {
  setTimeout(() => { fadeOut( $elem ) }, 2000 );
  setTimeout(() => { changeText( $elem, a ) }, 3500 );
  setTimeout(() => { fadeIn( $elem ) }, 3500 );
  setTimeout(() => { fadeLoop( $elem, a ) }, 6000);
};






$(document).ready(function() {

  const $rotateTech = $('#rotateTech');
  fadeLoop( $rotateTech, tech );

});
