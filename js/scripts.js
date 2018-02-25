var imageSlider= document.getElementById('imageSlider');
var images = ["url('images/image1.jpg')", "url('images/image2.jpg')", "url('images/image3.jpg')", "url('images/image4.jpg')","url('images/image15.jpg')",   ];
var counter = 0;

function carousel() {
imageSlider.style.backgroundImage =images[counter];
counter++;
if(counter >4){
  counter =0;
    }

  }
setInterval(carousel,3000);
