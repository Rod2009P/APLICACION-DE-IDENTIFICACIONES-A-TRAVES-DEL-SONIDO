function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TiFHap_zn/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error) {
        console.log("error");
    } else {
        console.log(results);
        document.getElementById("result_label").innerHtML = 'Capturo información a través del sonido:' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisión:' +(results[0].confidence*100).toFixed(4)+"%";
        img = document.getElementById('imagen1');
        img1 = document.getElementById('imagen2');
        img2 = document.getElementById('imagen3');
        img3 = document.getElementById('imagen4');
        
        if(results[0].label == "ventilador") {
            img.src= 'ventilador.gif';
            img1.src= 'perro.jpg';
            img2.src= 'ruido de fondo.jpg';
            img3.src= 'normal.png'; 
        } else if(results[0].label == "perro") {
            img.src= 'ventilador.jpg';
            img1.src= 'perro-ladrando.gif';
            img2.src= 'ruido de fondo.jpg';
            img3.src= 'normal.png';
        } else if(results[0].label == "Ruido de fondo") {
            img.src= 'ventilador.jpg';
            img1.src= 'perro.jpg';
            img2.src= 'ruidodefondo-bocina.gif';
            img3.src= 'normal.png';
        } else {
            img.src= 'ventilador.jpg';
            img1.src= 'perro.jpg';
            img2.src= 'ruido de fondo.jpg';
            img3.src= 'normal.gif';
        }
    }
} 