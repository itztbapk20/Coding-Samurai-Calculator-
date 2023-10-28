let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(event)=>{
    if(event.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value=string;
    }
    else if(event.target.innerHTML=='AC'){
      string="";
      document.querySelector('input').value=string;
    }  
    else if(event.target.innerHTML=='Del'){
      string=string.substring(0,string.length -1);
      document.querySelector('input').value=string;
    }  
    else{
    console.log(event.target);
    string= string + event.target.innerHTML;
    document.querySelector('input').value=string;
    }
  })
})
let icon = document.querySelector('#icon');
icon.onclick =()=>{
  document.body.classList.toggle('light-theme');
  if(document.body.classList.contains('light-theme')){
    icon.src="moon.png";
  } else{
    icon.src="sun.png";
  }
}
