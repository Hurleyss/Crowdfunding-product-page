
var state = document.querySelector('input[name=select-project]:checked');

if(state.value == "on") {
  state.parentElement.parentElement.parentElement.classList.add("card-selected"); 
}