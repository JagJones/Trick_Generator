//----- To-Dos -----//

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
//--- Clicking the buttons should open a random video from a predetermied list.--//
$(document).ready(function() {

    var trickVid = [
    'KyY5yJw8Sbg',
    'Te4wx4jtiEA',
    'efTj6UYzvk4'
    ];
    
    var index=Math.floor(Math.random() * videos.length);
    var html='<div id="video"><h3>Random Video</h3><iframe width="720" height="480" src="http://www.youtube.com/embed/ ' + videos[index] + ' + "&autoplay=1" " frameborder="0" allowfullscreen></iframe></div>';
    document.write(html);
    
    });

//--- Loading Gif ---//






