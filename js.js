function boom(){
    console.log("Release the Seismic Charge.");
    var audio = new Audio('boom.mp3');
    var charge = document.getElementById('charge');
    var wave = document.getElementById('wave');

    charge.classList.toggle('release');
    setTimeout(function (){
        console.log("BOOM");
        charge.classList.toggle('invisible');
        wave.classList.toggle('explode');
        audio.play();
        window.navigator.vibrate('500');
    }, 3000);
    setTimeout(function (){
        console.log("Reset");
        charge.classList.toggle('invisible');
        charge.classList.toggle('release');
        wave.classList.toggle('explode');
    }, 9000);
}
