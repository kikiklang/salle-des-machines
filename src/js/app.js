const actionButton = document.querySelector('.advice-action')
const adviceId = document.querySelector('.advice-id')
const adviceSentence = document.querySelector('.advice-sentence')

actionButton.addEventListener('click', () => getadvice())

async function getadvice() {
  const response = await fetch('https://api.adviceslip.com/advice')

  if (!response.ok) {
    adviceId.innerHTML = 'error'
    adviceSentence.innerHTML = '--there was an error getting data, please try again--'
    throw new Error(`An error has occured: ${response.status} => ${response.statusText}`)
  }

  const data = await response.json()

  adviceId.innerHTML = data?.slip?.id ? data.slip.id : '0'
  adviceSentence.innerHTML = data?.slip?.advice ? data.slip.advice : '--No advice for you today sweetheart--'
}

