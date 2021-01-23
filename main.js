Webcam.set({
width : 350,
height : 350,
image_format : 'png',
png_quality : 90
});
camera= document.getElementById("camera");
Webcam.attach("#camera");
function tphoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("photo").innerHTML = "<img src='"+data_uri+"' id='snapshot'>";
    });
};
console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/l4PUfUiRk/model.json',modelloaded);
function modelloaded(){
 console.log("model is loaded");

};
function Idenphoto(){
 img = document.getElementById("snapshot");
 classifier.classify(img, gotResult);
};
function gotResult(error,result){
 if(error){
     console.error(error);
 }
 else{
     console.log(result);
     document.getElementById("object").innerHTML = result[0].label;
     document.getElementById("acuracy").innerHTML = result[0].confidence.toFixed(2);
 };
};