Webcam.set({

});

camera = document.getElementById("camera");
Webcam.attach( '#camera' );

      
function takeSnapshot()
{

}

  
classifier = ml5.imageClassifier('/model.json',modelLoaded);

function modelLoaded() {
  
}
    
function check()
{

}


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
      }
}