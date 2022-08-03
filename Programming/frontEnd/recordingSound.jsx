import { useRef } from "react"

export default function Test() {
  const audioDataChunks = useRef([])

  navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
    const audioMediaRecorder = new MediaRecorder(stream)
    audioMediaRecorder.ondataavailable = event => {
      // when the user start recording
      audioDataChunks.current.push(event.data)
    }
    audioMediaRecorder.onstop = event => {
      // when the user stop recording
      // you can stop all the tracks created like this, so the browser does not
      // show the red colored recording icon thingy :
      stream.getTracks().forEach(track => track.stop())
      // you can turn the accumulated audiodatachunks into one blob and
      // turn into URL object or something else :
      const audioBlob = new Blob(audioDataChunks.current, {
        type: audioDataChunks.current[0].type
      })
      const audioURL = URL.createObjectURL(audioBlob)
    }
  })
}