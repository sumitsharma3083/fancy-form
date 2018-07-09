
var main_div = document.getElementById('main-div');
var right_arrow = document.getElementById('right-arrow');
var inner_line = document.getElementById('inner-line');
right_arrow.addEventListener('click',submit);
var text_area = document.getElementById('text-area');
var myspan = document.getElementById('myspan');
var myvalues = [];
var progress = 0;
var result; 
var other_div = document.getElementById('other-div');
var progress_bar = document.getElementById('progress-bar');
var input_area = document.getElementById('input-area');
var button_area = document.getElementById('button-area');
var info = document.getElementById('info');
function submit()
{
  if(text_area.value == '')
  {
     main_div.className = 'wobble'; 
     other_div.className = 'wobble';
     setTimeout(() => {
         main_div.className = '';
         other_div.className = '';
     }, 500);
    inner_line.style.backgroundColor = 'red';
    this.style.color = 'red';
  }
  if(text_area.value !== '')
  {
        if(text_area.getAttribute('type') == 'email')
        {
          result = ValidateEmail(text_area.value);
          if(result)
          {
            myvalues.push(text_area.value);
          }
          else
          {
            main_div.className = 'wobble'; 
            other_div.className = 'wobble';
            setTimeout(() => {
                main_div.className = '';
                other_div.className = '';
            }, 500);
           inner_line.style.backgroundColor = 'red';
           this.style.color = 'red';
            
          }
        }
        else
        {
            myvalues.push(text_area.value);
        }
       
   
  }
  if(myvalues.length == 1)
  {
      myspan.innerHTML = 'Enter Your Last name'
      text_area.value = '';
      myspan.style.top = '40px';
      myspan.style.fontSize = '30px';
   progress_bar.style.width = '25%';
      
  }
  if(myvalues.length == 2)
  {
      myspan.innerHTML = 'Enter Your Email'
      text_area.setAttribute('type','email');
      text_area.value = '';
      myspan.style.top = '40px';
      myspan.style.fontSize = '30px';
      progress_bar.style.width = '50%';
  }
  if(myvalues.length == 3)
  {

      myspan.innerHTML = 'Create Your Password';
      text_area.setAttribute('type','password');
      text_area.value = '';
      myspan.style.top = '40px';
      myspan.style.fontSize = '30px';
      progress_bar.style.width = '75%';
     
  }
  if(myvalues.length == 4)
  {
    progress_bar.style.width = '100%';
    input_area.style.opacity = '0';
    button_area.style.opacity = '0';
    main_div.className = 'after-submit';
   other_div.className = 'after-submit';
   document.getElementById('name').innerHTML =
   myvalues[0];
   setTimeout(() => {
      info.className = 'info_after'; 
   }, 2000);
  }
}



var myspan = document.getElementById('myspan');


text_area.addEventListener('focus',focusing);

 function focusing()
 {
     myspan.style.top = '0';
     myspan.style.fontSize = '15px'
     inner_line.style.backgroundColor = '#5352ed';
    right_arrow.style.color = '#5352ed';
 }

 text_area.addEventListener('blur',blurring);

 function blurring()
 {
      if(this.value == '')
      {
          myspan.style.top = '40px';
          myspan.style.fontSize = '30px'
      }
 }



//   The logic for the correct email


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
  else
  {
    return (false)
  }

}
