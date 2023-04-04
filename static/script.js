const req = new XMLHttpRequest()
req.open('POST', `https://tiktok-tts.weilnet.workers.dev/api/generation`, false)
req.setRequestHeader('Content-Type', 'application/json')

req.onreadystatechange = function() {
  if (req.readyState === 4 && req.status === 200) {
    let resp = JSON.parse(req.responseText)
    setAudio(resp.data, "text")
  }
}

const data = JSON.stringify({
  text: "Hello sohan, How can i help you today. Is everything alright yes or not?",
  voice: "en_us_001"
})

req.send(data)

const setAudio = (base64, text) => {
  const link = document.createElement('a')
  link.href = `data:audio/mpeg;base64,${base64}`
  link.download = `${text}.mp3`
  link.click()
}
