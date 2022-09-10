function getInputfieldById(id){
    const field = document.getElementById(id)
    const fieldValue = field.value
    return fieldValue
}

// name ar button------------------------------------

document.getElementById('btn-save-name').addEventListener('click', function(){
    const name = getInputfieldById('input-name');

    if(name.length === 0){
        alert('Please enter the data !!')
        return;
      }
    
    localStorage.setItem("Name", name);

});


document.getElementById('btn-delete-name').addEventListener('click', function(){
    const getName = localStorage.getItem("Name")
    if(getName){
        localStorage.removeItem("Name");
    }
    else{
        alert('No name data avaiable !!')
    }
    return;
});

// email ar button------------------------------------

document.getElementById('btn-save-email').addEventListener('click', function(){
    const email = getInputfieldById('input-email');

    if(email.length === 0){
        alert('Please enter the data !!')
        return;
      }
    
    localStorage.setItem("E-mail", email);

});

document.getElementById('btn-delete-email').addEventListener('click', function(){
    const getEmail = localStorage.getItem("E-mail")
    if(getEmail){
        localStorage.removeItem("E-mail");
    }
    else{
        alert('No email data avaiable !!')
    }
    return;
    
});


// message ar button------------------------------------

document.getElementById('btn-save-message').addEventListener('click', function(){
    const message = getInputfieldById('input-message');

    if(message.length === 0){
        alert('Please enter the data !!')
        return;
      }
    
    localStorage.setItem("Message", message);

});

document.getElementById('btn-delete-message').addEventListener('click', function(){

    const getMessage = localStorage.getItem("Message");

    if(getMessage){
        localStorage.removeItem("Message");
    }
    else{
        alert('No message data avaiable !!')
    }
    return;
    
});


// reset button-------------------------------

document.getElementById('btn-reset').addEventListener('click', function(){
   

    const getName = localStorage.getItem("Name");
    const getEmail = localStorage.getItem("E-mail");
    const getMessage = localStorage.getItem("Message");

    if(getName || getEmail || getMessage){
        localStorage.clear();
    }
    else{
        alert('No any data avaiable !!')
    }
    
    
});


// sent button -----------------------------

document.getElementById('btn-send').addEventListener('click', function(){

    const name = getInputfieldById('input-name');
    const email = getInputfieldById('input-email');
    const message = getInputfieldById('input-message');
    // console.log(name)
  if(name.length === 0 || email.length === 0 || message.length === 0){
    alert('Please enter the data !!')
    return;
  }

    localStorage.setItem("Name", name);
    localStorage.setItem("E-mail", email);
    localStorage.setItem("Message", message);
})