
// hide and show form
let btn = document.querySelector('#btn-edit');
let div = document.querySelector('.container-form');
div.style.display = "none";

btn.addEventListener('click', () =>{
    if(div.style.display === 'none'){
        div.style.display = 'block';
    }else {
        div.style.display = 'none'
    }
})

