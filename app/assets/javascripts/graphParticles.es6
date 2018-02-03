let smoothScrolling = false; // to detect smooth scroll jquery

// WRITTEN IN INSTANCE MODE FOR MULTPLE CANVASES ON ONE WEBPAGE

const graphGenerator = function(sketch) {

          let yLower, yCenter;
          const center = 6077;
          const points = [2091, 3522, 10962, 18240]; // original values from keystroke experiments, kept for graph aesthetics
          let deltas = [72, 23, 14, 120];
          const deltasSmall = [36, 11, 7, 60];
          const breakPoint = 800;
          // let count = 0;
          let seed;
          let particles = new Array(40);



          // ******* Helper Functions ****************************************************

          function mapCenter( value ) {
            return sketch.map(
              value,
              0, points[ points.length - 1 ],
              sketch.height, 20
            ); // mapped range, reversed for natural y axis w 0 at bottom, but not all the way to 0 to avoid graphic cut off
          }

          function mapGraph( value ) {
            if (window.innerWidth >= breakPoint ) {
              return sketch.map(
                value,
                0, points[ points.length - 1 ],
                0, sketch.height/2
              );
            } else {
              return sketch.map(
                value,
                0, points[ points.length - 1 ],
                0, sketch.height/4
              );
            }
          }

          // ****** Particle class *********
          function Particle( x, y, a, size, vel ) {
            this.x = x;
            this.y = y;
            this.a = a;
            this.size = size;
            this.vel = vel;

            this.draw = function() {
              sketch.noStroke();
              sketch.fill( 255, this.a );
              sketch.ellipse( this.x, this.y, this.size, this.size );
            }
          }


          // reset graph styling
          function graphInit() {
            sketch.noFill();
            sketch.stroke(255, 120);
            sketch.strokeWeight(1);
          }






          // *******           SETUP           *******************************************

          sketch.setup = function() {
            if (window.innerWidth >= breakPoint ) {
              const graph = sketch.createCanvas( $(window).width(), 240 ); // create canvas, more accurate w jQuery
            } else {
              const graph = sketch.createCanvas( $(window).width(), 140 );
              deltas = deltasSmall;
            }

            // **** init display settings ***********
            graphInit();

            yCenter = mapCenter( center );
            yLower = sketch.height - yCenter;

            // populate particles arrays
            for (let i = 0; i < particles.length; i++) {
              let pos = Math.floor( Math.random() * sketch.width );
              let vel = Math.random() * 2 - 1;
              particles[i] = new Particle( pos, yCenter, 255, Math.abs( vel ) * 3, vel);  // using velocity to generate size; further away = tinier = slower, like real distance. idea: could do inverse, like bokeh
            }

            seed = 10.5;
          }








          // *******            DRAW           *******************************************

          sketch.draw = function() {
            sketch.clear();

            if ( window.innerHeight > 760) {  // only draw graph on larger screen sizes
                // GRAPHING
                graphInit();

                sketch.line( 0, yCenter, sketch.width, yCenter );

                sketch.beginShape();
                sketch.curveVertex(0,  yCenter);
                sketch.curveVertex(0,  yCenter);
                sketch.curveVertex(sketch.width*1/4,  yCenter + deltas[0]);
                sketch.curveVertex(sketch.width*2/4,  yCenter - deltas[0]);
                sketch.curveVertex(sketch.width*3/4,  yCenter + deltas[0]);
                sketch.curveVertex(sketch.width, yCenter);
                sketch.curveVertex(sketch.width, yCenter);
                sketch.endShape();

                sketch.beginShape();
                sketch.curveVertex(0,  yCenter);
                sketch.curveVertex(0,  yCenter);
                sketch.curveVertex(sketch.width*1/5,  yCenter + deltas[1]);
                sketch.curveVertex(sketch.width*2/5,  yCenter - deltas[1]);
                sketch.curveVertex(sketch.width*3/5,  yCenter + deltas[1]);
                sketch.curveVertex(sketch.width*4/5,  yCenter + deltas[1]);
                sketch.curveVertex(sketch.width, yCenter);
                sketch.curveVertex(sketch.width, yCenter);
                sketch.endShape();


                sketch.beginShape();
                sketch.curveVertex(0,  yCenter);
                sketch.curveVertex(0,  yCenter);
                sketch.curveVertex(sketch.width*1/6,  yCenter + (yLower-10));
                sketch.curveVertex(sketch.width*2/6,  yCenter - seed);
                sketch.curveVertex(sketch.width*3/6,  yCenter + (yLower-10));
                sketch.curveVertex(sketch.width*4/6,  yCenter - deltas[2]);
                sketch.curveVertex(sketch.width*5/6,  yCenter + (yLower-10));
                sketch.curveVertex(sketch.width, yCenter);
                sketch.curveVertex(sketch.width, yCenter);
                sketch.endShape();


                sketch.beginShape();
                sketch.curveVertex(0,  yCenter);
                sketch.curveVertex(0,  yCenter);
                sketch.curveVertex(sketch.width*1/6,  yCenter + (yLower-10));
                sketch.curveVertex(sketch.width*2/6,  yCenter - seed);
                sketch.curveVertex(sketch.width*3/6,  yCenter + (yLower-10));
                sketch.curveVertex(sketch.width*4/6,  yCenter - deltas[3]);
                sketch.curveVertex(sketch.width*5/6,  yCenter + (yLower-10));
                sketch.curveVertex(sketch.width, yCenter);
                sketch.curveVertex(sketch.width, yCenter);
                sketch.endShape();
            }

            particles.forEach(function(p, i) {
              if (p.y > 0 && p.y < sketch.height) {
                p.y += p.vel;
                if (p.a > 0) {
                  p.a -= Math.abs( p.vel );
                }
                p.draw();
              }
            });

            if (smoothScrolling) {
              for (let i = 0; i < 20; i++) {
                makeParticle();
              }
              smoothScrolling = false;
            }

            // remove dead particles
            particles = particles.filter(function(p) {
              return p.y > 0 && p.y < sketch.height;
            });
          }

          function makeParticle() {
            let pos = Math.floor( Math.random() * sketch.width );
            let vel = Math.random() * 2 - 1;
            particles.push( new Particle( pos, yCenter, 255, Math.abs( vel ) * 3, vel) );
          }

          //// ******* ON SCROLL *********
          sketch.mouseWheel = function() {
            if (particles.length < 60) {
              makeParticle();
            }
          }

          ///// ****** ON SHAKE **********
          // sketch.deviceShaken = function() {
          //   for (let i = 0; i < 10; i++) {
          //     if (particles.length < 60) {
          //       makeParticle();
          //     }
          //   }
          // };

          ///// ****** ON SHAKE **********
          sketch.deviceMoved = function() {
            if (particles.length < 60) {
              makeParticle();
            }
          };

          ///// **** ON WINDOW RESIZE ********
          sketch.windowResized = function() {
            sketch.resizeCanvas( $(window).width(), 240 );
          }
};

// *** moved this to on load handler
// const p5_graph = new p5(graphGenerator, "graph");  // args: function for sketch, id of div to attach to
