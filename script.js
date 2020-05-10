console.log("welcome To Color Picker, I am Ajay Rabari!");

const myFunction=()=>{

  var header = document.getElementById("myHeader");
  
  var sticky = header.offsetTop;
  
  if (window.pageYOffset > sticky) {
     
    header.classList.add("sticky");
  } else {

    header.classList.remove("sticky");
  }
}

const CopyCode=(text)=>{
  var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = text.trim();
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}


window.onscroll = ()=> {myFunction()};





var colorName = document.getElementsByClassName("colorName");


for (var i = 0 ; i < colorName.length; i++) {

  colorName[i].addEventListener("click", function() {

  var text=this.innerHTML;
  var NewText="Copied!";
  CopyCode(text);
  this.innerHTML=NewText;
  var oldText=this;

  setTimeout(function(){
    
   oldText.innerHTML=text;
   


    }, 3000);

}, false);
    
}


