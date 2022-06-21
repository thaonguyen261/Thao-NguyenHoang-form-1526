let form = document.querySelector('form');
 let fname = document.getElementById('name');
 let email = document.getElementById('email');
 let message = document.getElementById('message');
 let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let btn = document.getElementById('button');


function validateForm(){

   console.clear();

      let dataCollector = {};
      let errorCollector = [];

      fname.value = fname.value.trim();
      email.value = email.value.trim();
      message.value = message.value.trim();


      if (fname.value !== ''){
         dataCollector.fullName = fname.value;
      } else {
         errorCollector.push('Please enter your full name');
      }

    

      if (email.value !== ''){
         if(validEmail.test(email.value)){
            dataCollector.emailInput = email.value;
         } else {
            errorCollector.push('Please enter a valid email')
         }

      } else {
         errorCollector.push('Please enter your email');
      }

      //Message

      if (message.value !== ''){
         dataCollector.messageInput = message.value;
      } else {
         errorCollector.push('Please enter your message');
      }

      if (errorCollector.length === 0){
         console.log(dataCollector);
         form.reset();
      } else {
         console.log(errorCollector);
      }


};

// make validateForm listen for click event OR you could say
// register button btn for 'click' event
btn.addEventListener('click', validateForm);
