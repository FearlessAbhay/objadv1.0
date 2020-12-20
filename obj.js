img = "";
status = "";
objects = [];

function preload(){
  img = loadImage('dog_cat.jpeg');
}

function setup() {
  canvas = createCanvas(450, 350);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(450, 350);
  video.hide();
}


function draw() {
  image(video, 0, 0, 450, 350);
  if(status !="")
  {
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++)
    {
      document.getElementById("status").innerHTML = "Status :Object Detected";
      document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+objects.length;

      fill(r,g,b);
      percent = floor(objects[i].cofidence * 100);
      text(objects[i].label + "" + percent + "%", objects[i].x +15, objects[i].y +15);
      noFill();
      stroke(r,g,b);
      rect( objects[i].x, objects[i].y, objects[i].width, objects[i].hieght);
    
    }
  }
  fill("#FF0000");
  text("Dog", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350 );

  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("Cat", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350 );

}
function gotResult(error, results)
{
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}
function modelLoaded()
{
console.log("Model Loaded!")
staus = true;
objectDetector.detect(video, gotResult);
}
