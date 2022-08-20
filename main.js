const felipePhrases = ['Juliana?', 'achei','Adriano?','seu cu','faz isso comigo não véi','Romero Britto?','se eu to chamando?','Katrina?', 'é obvio velho','vai doer pra caralho meu braço velho','Guarapari - Buzios é minha arte','obrigado','eu tenho quantos anos gente?','rave, RAVE?!','Felipe','Smith','seu cu','mata o papai','16' ,'18', 'quebro véi','quebro meu braço', 'QUEBRO O MEU BRAÇO VÉI','Marcelo, não', '14', 'Romero Britto?', 'minha vida', 'acabou', 'Red Bull?®','eu não sei nem onde eu tô véi','5 Km?', 'minha vida','samu? Seu cu', 'jamais será', 'pega um incenso pra mim pelo amor de deus', 'Antonella Caroline', 'meu gol', 'Cristiano Ronaldo', 'seu cu lugo Marcelo', 'MARCELO', 'meu braço vai doer, por favor!!', 'não faz isso comigo', 'Guarapari minha arte', 'que foi cabeleira?', 'não faz isso comigo não', 'Milton Nascimento', 'minha arte', 'PC Gusmão', 'vo fica pelado aqui', 'da o cu', 'sai cagando', 'eu juro vo sair cagando', 'arquitetura?', 'seu cu', 'Katrina', 'Luca', 'Jarbas', 'Jarbas... meu pai?', 'O MEU PAI??','grafite', 'Lais, minha vida', 'Renata Clara Pimenta', 'misericórdia', 'Bruno?', 'debaixo da ponte?', 'BRUNO??', 'sai daê doido', 'ce é mó playboy', 'minha vida?', 'só agora?', 'Red Bull?®', 'Antonella Caroline', 'seu cu', 'seu cu velho', 'QUEBRO MEU BRAÇO TA BRANCO VÉI', 'ta branco tiro na cabeça Marcelo', 'no meu cu?', 'coé PC?', 'COÉ PC???', 'Juliana?', 'seu cu', 'na panela?', 'achei a mina', 'arquitetura', 'piscina?']

const wordContainer = document.querySelector(".container")
const generateButton = document.querySelector("[data-id=generator]")
const soundConfig = document.querySelector("[data-id=sound]")
let phrase = []

const capitalize = (string) => string.toString().charAt(0).toUpperCase() + string.toString().slice(1)

function debounce(func, timeout = 300){
  let timer
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = undefined
    }, timeout)
  }
}

const getRandomIndex = () => {
    const { floor, random } = Math
    const MAX = felipePhrases.length
    const MIN = 0
    return floor(random() * (MAX - MIN + 1) + MIN)
}

const createNewElement = (elementName, className=undefined, content="") => {
    let element = document.createElement(elementName)
    className && element.classList.add(className)
    element.innerText = content
    return element
}

const formPhrase = () => {
    const container = document.createDocumentFragment()
    for (i = 0; i < 4; i++) {
        const content = capitalize(felipePhrases[getRandomIndex()])
        const textElement = createNewElement("p", "text", content)
        phrase.push(content)
        container.appendChild(textElement)
    }
    return container;
}

const createVoiceSinthetizer = () => {
    const synth = window.speechSynthesis;
    const sinthText = phrase.join(" ")
    synth.cancel()
    let utterance = new SpeechSynthesisUtterance(sinthText);
    synth.speak(utterance)
}

const checkAudioConfig = () => localStorage.getItem('sound_profile')

const setAudioConfig = () => {
    const audioConfig = checkAudioConfig()
    if (audioConfig) {
        const audioSwitch = audioConfig === "on" ? "off" : "on"
        localStorage.setItem('sound_profile', audioSwitch)
        soundConfig.innerHTML = audioSwitch === "on" ? "Desligar som" : "Ligar som"
        return
    }
    
    localStorage.setItem('sound_profile', "on")
    soundConfig.innerHTML = "Desligar som"
}

const generatePhraseContent = debounce(() => {
    const newWordContainer = formPhrase()
    checkAudioConfig() === "on" && createVoiceSinthetizer()
    phrase = []
    wordContainer.replaceChildren(newWordContainer)
})

generateButton.addEventListener("click", generatePhraseContent)
soundConfig.addEventListener("click", setAudioConfig)

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        generatePhraseContent()
    }
  })

window.addEventListener('DOMContentLoaded', () => {
    const audioConfig = checkAudioConfig()
    soundConfig.innerHTML = audioConfig === "on" ? "Desligar som" : "Ligar som"
})
