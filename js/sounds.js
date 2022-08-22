export default function () {
  const forestSound = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
  )


  const rainSound = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
  )


  const coffeeSound = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
  )


  const fireSound = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
  )

  forestSound.loop = true
  rainSound.loop = true
  coffeeSound.loop = true
  fireSound.loop = true

  return {
    forestSound,
    rainSound,
    coffeeSound,
    fireSound
  }
}
