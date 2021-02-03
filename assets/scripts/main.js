// main.js
var volume_number = document.getElementById("volume-number");
var volume_slider = document.getElementById("volume-slider");

var air_horn = document.getElementById('radio-air-horn');
var car_horn = document.getElementById('radio-car-horn');
var party_horn = document.getElementById('radio-party-horn');

var form = document.getElementById('party-horn-form');
var horn_sound = document.getElementById('horn-sound');
var sound_image = document.getElementById('sound-image');
var volume_image = document.getElementById('volume-image');
var honk_btn = document.getElementById('honk-btn');


function Submit(event) {
  event.preventDefault();
  if(!horn_sound.isPlaying)
    horn_sound.play();
}

function change_sound(){
  console.log(this.id);
  if(this.id == 'radio-air-horn' && air_horn.checked){
    sound_image.src = './assets/media/images/air-horn.svg';
    horn_sound.src = "./assets/media/audio/air-horn.mp3";
  } else if(this.id = 'radio-car-horn' && car_horn.checked){
    sound_image.src = './assets/media/images/car.svg';
    horn_sound.src = "./assets/media/audio/car-horn.mp3";
  } else {
    sound_image.src = './assets/media/images/party-horn.svg';
    horn_sound.src = "./assets/media/audio/party-horn.mp3";
  }

}
function changeVolume(){
  console.log(this);
  if(this.id == 'volume-number'){
    var volume = volume_number.value;
    volume_slider.value = volume;
  } else{
    var volume = volume_slider.value;
    volume_number.value = volume;
  }

  horn_sound.volume = volume/ 100;
  if(volume == 0){
    honk_btn.disabled = true;
  } else{
    honk_btn.disabled = false;
  }
  if(volume == 0){
    volume_image.src = './assets/media/icons/volume-level-0.svg';
  } else if(volume < 34){
    volume_image.src = './assets/media/icons/volume-level-1.svg';
  } else if(volume < 67){
    volume_image.src = './assets/media/icons/volume-level-2.svg';
  } else{
    volume_image.src = './assets/media/icons/volume-level-3.svg';
  }
}



form.addEventListener('submit', Submit);// TODO

volume_number.addEventListener('input', changeVolume) ;
volume_slider.addEventListener('input', changeVolume ) ;

air_horn.addEventListener('input', change_sound);
car_horn.addEventListener('input', change_sound);
party_horn.addEventListener('input', change_sound);
