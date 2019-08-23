// let divs = document.getElementsByClassName('quest');

//     for (let i = 0; i < divs.length; i++) {
//         divs[i].setAttribute("style", "display: block");
//         break;
//     };

// function next(){
//    if(divs[i].classList.contains('display:block')){
//        divs[this].setAttribute("style", "display: none")
//    }
//    return next();
// }




function result() {
    let input = document.getElementsByTagName('input');
    console.log(input);

    let value = 0;
    let summa = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].type === 'radio' && input[i].checked) {
            value += parseInt(input[i].value);
            if (parseInt(input[i].value) >= 11) {
                summa++;
            }
        }
    }

    if (value > 50) {
        alert("Вы ответили правильно на " + summa + " вопросов");
        alert('You something know');
    } else {
        alert("Вы ответили правильно на " + summa + " вопросов");
        alert('vary bad')
    }
};



//рандомно показывать блоки на экране
// const btn = document.getElementById('randing');

// function random() {

//     let total = Math.round(Math.random() * 5);

//     switch (total) {
//         case 1:
//             document.getElementById('ansver1').style.display = 'block';
//             break
//         case 2:
//             document.getElementById('ansver2').style.display = 'block';
//             break
//         case 3:
//             document.getElementById('ansver3').style.display = 'block';
//             break
//         case 4:
//             document.getElementById('ansver4').style.display = 'block';
//             break
//         case 5:
//             document.getElementById('ansver5').style.display = 'block';
//             break
//     };
//     document.getElementById('randing').innerText = "Try again!";
// };

// let input = document.getElementsByTagName('input');
// let value = 0;
// for(let i = 0; i < input.length; i++){
//     if (input[i].type === 'radio' && input[i].checked){
//         value += input[i].value;
//     }if(value > 50){
//         alert('You something know');
//     }else{
//         alert('very bad')
//     }
// };