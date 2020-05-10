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

  var copyText=text;
  //var newElement = document.createElement('input');
 // document.body.appendChild(newElement);

 var newElement=document.getElementById("copyfield");
 newElement.setAttribute('style', 'display:block;');
  newElement.value = copyText;
  newElement.select();
  newElement.setSelectionRange(0, 99999)
  document.execCommand("copy");
  setTimeout(function() {
    
        newElement.setAttribute('style', 'display:none;');
    }, 50);
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


