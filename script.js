const save = document.getElementById("save");
const clear = document.getElementById("clear");
const download = document.getElementById("download");
const input = document.getElementById("input");
const text = document.getElementById("text");

if(localStorage.getItem("input") != undefined){
  text.innerHTML = localStorage.getItem("input");
}

let isSure = false;

save.addEventListener("click", ()=>{
  if(localStorage.getItem("input") == text.innerHTML && input.value){
    return;
  }
  if(isSure == false){
    isSure = true;
    save.innerHTML = "Are you sure?";
    return;
  }
  isSure = false;
  try{
    localStorage.setItem("input",input.value);
  }catch(err){
    console.log(err)
  } finally{
    text.innerHTML = localStorage.getItem("input");
    console.log("successfully seved and changed text's html!")
  }
})

clear.addEventListener("click", ()=>{
  localStorage.removeItem("input");
  window.location.reload();
})