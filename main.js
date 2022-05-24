const toggle= document.querySelector("#toggle");
const body = document.querySelector("body");

toggle.onclick = () =>{
  toggle.classList.toggle('active');
  body.classList.toggle('active');
}