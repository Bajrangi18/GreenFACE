feather.replace();


const switcher = document.querySelector('.btn');
const video = document.querySelector('video');
const canvas = document.querySelector('canvas');

let streamStarted = false;

const [play, pause, screenshot] = buttons;


switcher.addEventListener("click", () {
  if (streamStarted) {
    video.play();
    play.classList.add('d-none');
    pause.classList.remove('d-none');
    return;
  }
  if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
    const constraints = {
      video: {
        width: {
          min: 1280,
          ideal: 1920,
          max: 2560,
        },
        height: {
          min: 720,
          ideal: 1080,
          max: 1440
        },
      }
    };
    startStream(constraints);
  }
});

const startStream = async (constraints) => {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  handleStream(stream);
};

const handleStream = (stream) => {
  video.srcObject = stream;
  play.classList.add('d-none');
  pause.classList.remove('d-none');
  // screenshot.classList.remove('d-none');
  streamStarted = true;
};
