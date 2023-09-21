const input = document.querySelector('.loginInput');
const button = document.querySelector('.loginButton');
const form = document.querySelector('.loginForm');
//atribuindo a função validadeInput em uma const//
const validateInput = ({target})=>{
    if(target.value.length > 2){
    button.removeAttribute('disabled')
    return;}
    button.setAttribute('disabled', '')
    
}

const handleSubmit = (evento)=> {
    evento.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}






form.addEventListener('submit', handleSubmit)
input.addEventListener('input', validateInput)