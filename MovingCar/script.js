let forwardCounter = 0;
let fallingCounter = 0;
let rotCar=0;
let tokenArray = new Array();
let ftokenArr = new Array();


function keepMoving() {
  forwardCounter = forwardCounter + 1;
  let refToCar = document.getElementById("myImage");
  refToCar.style.left = `${forwardCounter}px`;
  if (forwardCounter > 790) {
    for (let i = 0; i < tokenArray.length; i++) {
      window.clearInterval(tokenArray.pop());
    }
    let refToStop = document.getElementById("stopBtn");
    refToStop.disabled = "disabled";
    let fallingToken = window.setInterval(falling, 10);
    ftokenArr.push(fallingToken);
  }
}

function start() {
  let startToken = window.setInterval(keepMoving, 10);
  tokenArray.push(startToken);
  let refToStop = document.getElementById("stopBtn");
  refToStop.disabled = null;
}

function stop() {
  let stopToken = tokenArray.pop();
  if (stopToken != undefined) {
    window.clearInterval(stopToken);
    if (tokenArray.length == 0) {
      let refToStop = document.getElementById("stopBtn");
      refToStop.disabled = "disabled";
    }
  }
}

function falling() {
  fallingCounter = fallingCounter + 1;
  forwardCounter = forwardCounter + 1;
  rotCar=rotCar+1;
  let refToCar = document.getElementById("myImage");
  refToCar.style.top = `${fallingCounter}px`;
  refToCar.style.left = `${forwardCounter}px`;
  refToCar.style.rotate=`${rotCar}deg`;
  if (fallingCounter > 800) {
    for (let i = 0; i < ftokenArr.length; i++) {
      window.clearInterval(ftokenArr.pop());
    }
  }
}
