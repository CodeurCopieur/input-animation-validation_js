const inpWrap = document.querySelector('.inp-wrap');
const inpAnim = document.querySelector('.inp-anim');
const inpValid = document.querySelector('.inp-valid');


inpAnim.addEventListener('input', validation);

function validation(e) {

  if(e.target.value !== ""){
    e.target.parentNode.classList.add('active-input');
  } else if(e.target.value === "") {
    e.target.parentNode.classList.remove('active-input');
  }

  if(e.target.value.includes('$')) {
    inpAnim.classList.add('erreur');
    inpValid.innerText = "Les $ sont interdits";
    inpValid.classList.add('visible');
  }else {
    inpAnim.classList.remove('erreur');
    inpValid.classList.remove('visible');
  }

}