// get box 
const E35image = document.querySelector("#elementImage")  
const E35name = document.querySelector('#elementName')  
const E35token = document.querySelector('#token')  
const E35atomicNumber = document.querySelector('#atomicNumber')  
const E35atomicMass = document.querySelector('#atomicMass')  
const E35content = document.querySelector('#text')  
// get Element 
const E35 = document.querySelector('#E35')  
// Inner HTML 
E35.addEventListener('click', () => {  
    E35image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/894301350962278410/035.png")  
    E35name.innerHTML = "Nome: Bromo";  
    E35token.innerHTML = "Símbolo: Br";   
    E35atomicNumber.innerHTML = "Numero atômico: 35";  
    E35atomicMass.innerHTML = "Massa Atômica: 79.904";  
    E35content.innerHTML = " O Bromo é um não metal com diversas utilidades, como: um aditivo retardador de chamas, sistemas de purificação de água e na limpeza de piscinas, inseticidas, corantes, pigmentos e está presente em alguns xaropes. O Bromo não possui nenhuma forma de reutilização. Um fato curioso, e que o Bromo era utilizado em combustíveis, porém continha chumbo, e com a proibição da adição de chumbo, este combustível foi proibido.";  
})