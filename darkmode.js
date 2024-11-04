const darkMode = document.getElementById('t');

// const addEventListener = () =>{
//     if(darkMode.style.getElementsByClassName('recipient') ='blue'
//     darkMode.style.getElementsByClassName('red'))
    
// }else{
//     darkMode.
// }
darkMode.addEventListener('click', () =>{
    if(darkMode.style.backgroundColor === 'red') {
        darkMode.style.backgroundColor = 'blue';

    } else {
        darkMode.style.backgroundColor ='red';


    }
});

