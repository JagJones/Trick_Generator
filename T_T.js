
//--- Hamburger Menu (<560px) ---//
function burgNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//--- Generators ---//

//- Tricks -//

function playRandomTVid() {
  let trickVids = [
    `KyY5yJw8Sbg`,
    `6TZUEOV9-nQ`,
    `0vtn8NhofOw`,
    `NMRRLUyAIyw`
    ];
  const randomInt = Math.floor(Math.random() * trickVids.length)
  console.log(trickVids[randomInt])
  window.open(`https://www.youtube.com/embed/${trickVids[randomInt]}`)
}

//- Games -//

function playRandomGVid() {
  let gameVids = [
    `ZtpLvumSTzI`,
    `stdnfuFbmUc`,
    `2v7CcqAHm-4`,
    `A6bEHd2q2Po`
    ];
  const randomInt = Math.floor(Math.random() * gameVids.length)
  console.log(gameVids[randomInt])
  window.open(`https://www.youtube.com/embed/${gameVids[randomInt]}`)
}

//--- Buttons ---//




