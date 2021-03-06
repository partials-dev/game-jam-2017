const noOp = () => {}

if (window.AudioNode) {
  const Tone = require('tone')

  let backgroundMusic = null

  const synth = new Tone.PolySynth(3, Tone.Synth).toMaster()
  synth.set({
    envelope: {
      attack: 0.005,
      sustain: 1,
      decay: 10,
      release: 2.5
    },
    portamento: 0
  })
  synth.volume.value = -7

  const noteIdToPitches = {
    0: ['D4', 'D5'],
    1: ['E4', 'E5'],
    2: ['F4', 'F5'],
    3: ['F'],
    4: ['G'],
    5: ['Ab'],
    6: ['Bb'],
    7: ['C5']
  }
  const playNote = (noteId) => {
    const pitches = noteIdToPitches[noteId]
    synth.triggerAttackRelease(pitches, '4n')
  }
  const playOnce = (url) => {
    const toPlayOnce = new Tone.Player({
      url,
      autostart: true
    }).toMaster()
  }
  const setBackgroundTo = (url) => {
    const newBackgroundMusic = new Tone.Player({
      url,
      autostart: true,
      loop: true
    }).toMaster()
    const updateBackgroundMusic = () => {
      if (backgroundMusic) {
        backgroundMusic.stop()
      }
      backgroundMusic = newBackgroundMusic
      Tone.Buffer.off('load', updateBackgroundMusic)
    }
    Tone.Buffer.on('load', updateBackgroundMusic)
  }
  module.exports = {
    playNote,
    playOnce,
    setBackgroundTo
  }
} else {
  module.exports = {
    playNote: noOp,
    playOnce: noOp,
    setBackgroundTo: noOp
  }
}
