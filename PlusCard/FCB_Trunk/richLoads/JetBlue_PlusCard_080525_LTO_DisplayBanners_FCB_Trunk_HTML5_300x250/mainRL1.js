var tl;
var tl2;
var container = myFT.$("#main_container");
var default_exit = myFT.$("#default_exit");

// var myVid=myFT.$("#video1");
var clickTag1_url = "";
// var vid_time_triggered=false;

//
default_exit.on('click', function () {
  myFT.clickTag(1, clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads', function () {

  clickTag1_url = myFT.instantAds.clickTag1_url;

})

init()
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl.set(["#bgImg"], { rotation: 0.1, });
  tl.set('#copy1,#copy2', { y:20 });

  tl.addLabel('frame1', 0)
    .to('#copy1', 1, { autoAlpha: 1, y:0, ease: Power1.easeInOut }, 'frame1')

  tl.addLabel('frame2', 2.5)
    .to('#copy1', 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, 'frame2')
    .to('#copy2', 1, { autoAlpha: 1,y:0, ease: Power1.easeOutIn }, 'frame2+=0.5')

  tl.addLabel('frame3', 4.5)
    .to('#frame3', 1, { y:-245, ease: Power1.easeInOut }, 'frame3+=0.5')
    .to('#shine1', 1, { autoAlpha: 1, x:244,y:0 }, 'frame3+=1.5');

}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {

  tl = new TimelineMax();

  animate();
  setRollover();

}
