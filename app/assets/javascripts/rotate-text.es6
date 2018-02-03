
const tech = ['from film to streaming.', 'from videotape to data.', 'from proprietary protocols to IP.', 'from cables to web GUIs.'];
let timer1, timer2, timer3, timer4; // to clearTimeouts later

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
  timer1 = setTimeout(() => { fadeOut( $elem ) }, 400 );
  timer2 = setTimeout(() => { changeText( $elem, a ) }, 1300 );
  timer3 = setTimeout(() => { fadeIn( $elem ) }, 1300 );
  timer4 = setTimeout(() => { fadeLoop( $elem, a ) }, 2110);
};

// quick loop
// const fadeLoop = function( $elem, a ) {
//   timer1 = setTimeout(() => { fadeOut( $elem ) }, 750 );
//   timer2 = setTimeout(() => { changeText( $elem, a ) }, 1300 );
//   timer3 = setTimeout(() => { fadeIn( $elem ) }, 1300 );
//   timer4 = setTimeout(() => { fadeLoop( $elem, a ) }, 2000);
// };



// $(window).load(function() { // moved after document.ready so resize could happen before rotate
  // const $rotateTech = $('#rotateTech');
  // fadeLoop( $rotateTech, tech );
// });
