var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();


function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
    image_id = selfie1
    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot()
        speak_data = "Tomando la próxima selfie en 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)

    take_snapshot()
}

function take_snapshot(){
    console.log(image_id)
    Webcam.snap(function(data_uri){})
    if (image_id == "selfie_1"){
        document.getElementById("result").innerHtml = '<img id="selfie1" src="'+data_uri+'"/>'
    } else {
        if (image_id == "selfie_2"){
            document.getElementById("result").innerHtml = '<img id="selfie2" src="'+data_uri+'"/>'
        } else {
            if (image_id == "selfie_3"){
                document.getElementById("result").innerHtml = '<img id="selfie3" src="'+data_uri+'"/>'
            } else {
                if (image_id == "selfie_4"){
                    document.getElementById("result").innerHtml = '<img id="selfie4" src="'+data_uri+'"/>'
                } else {
                    if (image_id == "selfie_5"){
                        document.getElementById("result").innerHtml = '<img id="selfie5" src="'+data_uri+'"/>'
                    }
                }
            }
        }
    }
}