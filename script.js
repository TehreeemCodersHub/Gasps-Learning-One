gsap.to(".box", {
  x: 1200,
  duration: 4,
  delay: 2,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: "1",
  repeat: -1,
  yoyo: true,
});
gsap.from(".boxTwo", {
  x: 1200,
  duration: 4,
  delay: 2,
  backgroundColor: "yellow",
  scale: "0.5",
  rotate: 360,
  borderRadius: "50%",
});

// ! ---------------------------------------------------------------

// gsap.to(".box-5", {
//   x: 500,
//   duration: 3,
//   delay: 2,
// });
// gsap.to(".box-6", {
//   x: 500,
//   duration: 3,
//   delay: 4,
// });

var tl = gsap.timeline();

tl.to(".box-5", {
  x: 500,
  duration: 3,
  delay: 2,
});
tl.to(".box-6", {
  x: 500,
  duration: 3,
  // delay: 2,
});

// !for diffrent classes we need to set ttime means we need to calculate thye time every time so that for that purpose we people have timeline

// ! ---------------------------------------------------------------

// !--------------------------------------------------------
//! for Texting

gsap.to(".dummy-practice-heading-1", {
  color: "red",
  fontSize: "43px",
  duration: 3,
  delay: 2,
  x: 500,
});
gsap.from("h2", {
  color: "blue",
  fontSize: "43px",
  duration: 3,
  delay: 2,
  x: 500,
});

// !--------------------------------

gsap.from("h3", {
  y: "30px",
  duration: 3,
  opacity: 0,
  // !hr ak chez o bari bari chalany k kam krta h ak nam k logo ko bari bari chalany k kam kerta h
  stagger: 2,
});

//! same id wali chezo k liya stahging use hti h or baqi chezo k liya hum time line use kerty h jinki classes diffrent hti h

// !-----------------------------------------------------

// ! practical use case of first Video

var timesapn = gsap.timeline();

timesapn.from(".logo", {
  opacity: 0,
  y: -30,
  duration: 2,
  delay: 0.6,
});
timesapn.from(".banner-text", {
  opacity: 0,
  scale: 0,
  duration: 2,
});

timesapn.from(".navlist", {
  opacity: 0,
  y: -30,
  duration: 1,
  stagger: 1,
});
