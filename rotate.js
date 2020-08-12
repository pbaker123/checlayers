const container = document.querySelector(".container");
const selectors = {
  base: document.querySelector(".baseContainer"),
  busp: document.querySelector(".buspContainer"),
  cust: document.querySelector(".custContainer"),
  store: document.querySelector(".storeContainer"),
  baseCover: document.querySelector(".baseCover"),
  buspCover: document.querySelector(".buspCover"),
};
let isDown = false;

container.addEventListener("mousemove", function(event) {
  if (isDown === true) {
    const midX = event.pageX - window.innerWidth / 2;
    const midY = event.pageY - window.innerHeight / 2;
    const distance = Math.sqrt( (Math.pow(Math.abs(midX),2)) + (Math.pow(Math.abs(midY),2)));
    const opacity = distance / 400;
    transform(midX, midY, distance);
    opacityAdjustment(opacity);
  }
});

container.addEventListener("mousedown", function() {
  isDown = true;
})

container.addEventListener("mouseup", function() {
  isDown = false;
})

function transform(midX, midY, distance){
  container.style.transform = "rotateX(" + (midY * .5) + "deg) rotateY(" + (midX * .5) + "deg)"
  if (distance < 250) {
    selectors.base.style.transform = "translateZ(" + (distance * -3) + "px)"
    selectors.busp.style.transform = "translateZ(" + (distance * -1) + "px)"
    selectors.cust.style.transform = "translateZ(" + (distance) + "px)"
    selectors.store.style.transform = "translateZ(" + (distance * 3) + "px)"
  } else {
    selectors.base.style.transform = "translateZ(" + -750 + "px)"
    selectors.busp.style.transform = "translateZ(" + -250 + "px)"
    selectors.cust.style.transform = "translateZ(" + 250 + "px)"
    selectors.store.style.transform = "translateZ(" + 750 + "px)"
  }
};

function opacityAdjustment(opacity) {
  if (opacity < .5) {
    selectors.baseCover.style.opacity = 1 - opacity
    selectors.buspCover.style.opacity = 1 - opacity
  } else {
    selectors.baseCover.style.opacity = .5
    selectors.buspCover.style.opacity = .5
  }
};
