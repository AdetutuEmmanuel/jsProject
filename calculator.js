const numberButtons = document.querySelectorAll('.btn');
// const displayScreen = document.querySelector(".display");
const specialButtons = document.querySelectorAll(".spec");
const paragraphD = document.getElementById("para");
function displayNumber() 
{
      let allButtons = numberButtons.textContent;
      paragraphD.innerHTML = allButtons;
}
