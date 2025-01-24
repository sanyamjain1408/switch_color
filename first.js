const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");



buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'button1'){
            body.style.backgroundColor = 'black';
            h1.style.color = 'white';
            h2.style.color = 'white'
            
        }
        if(e.target.id === 'button2'){
            body.style.backgroundColor = 'blue'
        }
        if(e.target.id === 'button3'){
            body.style.backgroundColor = 'brown'
        }
        if(e.target.id === 'button4'){
            body.style.backgroundColor = 'green'
        }
    });
});