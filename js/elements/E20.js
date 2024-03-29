// get box 
const E20image = document.querySelector("#elementImage") 
const E20name = document.querySelector('#elementName') 
const E20token = document.querySelector('#token') 
const E20atomicNumber = document.querySelector('#atomicNumber') 
const E20atomicMass = document.querySelector('#atomicMass') 
const E20utility = document.querySelector('#utility') 
const E20reuse = document.querySelector('#reuse') 
// get Element 
const E20 = document.querySelector('#E20') 
// Inner HTML 
E20.addEventListener('click', () => { 
    E20image.setAttribute('src', "https://cdn.discordapp.com/attachments/801974522839826484/893465765188091954/020.png") 
    E20name.innerHTML = "Nome: Cálcio"; 
    E20token.innerHTML = "Símbolo: Ca";  
    E20atomicNumber.innerHTML = "Numero atômico: 20"; 
    E20atomicMass.innerHTML = "Massa Atômica: 40.078"; 
    E20utility.innerHTML = "Utilização: O cálcio é um dos elementos mais abundantes no corpo humano, ele é essencial para a transmissão nervosa, coagulação do sangue e contração muscular. Na indústria, o cálcio é usado na sua forma metálica, onde a sua principal utilidade é a produção de tintas e fertilizantes."; 
    E20reuse.innerHTML = "Reutilização: A principal área de reutilização do cálcio é na eliminação de gases residuais em tubos de vácuo, onde entra também como agente redutor na preparação de metais como tório, urânio, etc."; 
})