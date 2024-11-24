let btn = document.querySelector('input');
let aside =document.querySelector('aside');
let section =document.querySelector('section');
let body =document.querySelector('body');

function show(){
    if(this.checked){
        aside.style.display = 'grid';
        body.style.overflow = 'hidden';
        section.style.filter = 'blur(10px)';
    }
    else{
        aside.style.display = 'none';
        body.style.overflow = 'scroll';
        section.style.filter = 'blur(0px)';


    }
}
 btn.addEventListener('change',show);

