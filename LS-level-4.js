function getInputfieldById(id){
    const field = document.getElementById(id)
    const fieldValue = field.value
    return fieldValue
}

// name ar button------------------------------------
document.getElementById('btn-save-name').addEventListener('click', function(){
    const name = getInputfieldById('input-name');
    localStorage.setItem("Name", name);

});


document.getElementById('btn-delete-name').addEventListener('click', function(){
    localStorage.removeItem("Name");
    
});

// email ar button------------------------------------
document.getElementById('btn-save-email').addEventListener('click', function(){
    const email = getInputfieldById('input-email');
    localStorage.setItem("E-mail", email);

});

document.getElementById('btn-delete-email').addEventListener('click', function(){
    localStorage.removeItem("E-mail");
    
});


// message ar button------------------------------------
document.getElementById('btn-save-message').addEventListener('click', function(){
    const message = getInputfieldById('input-message');
    localStorage.setItem("Message", message);

});

document.getElementById('btn-delete-message').addEventListener('click', function(){
    localStorage.removeItem("Message");
    
});


// reset button-------------------------------

document.getElementById('btn-reset').addEventListener('click', function(){
    localStorage.clear();
    
});


// sent button -----------------------------

document.getElementById('btn-send').addEventListener('click', function(){

    const name = getInputfieldById('input-name');
    localStorage.setItem("Name", name);

    const email = getInputfieldById('input-email');
    localStorage.setItem("E-mail", email);

    const message = getInputfieldById('input-message');
    localStorage.setItem("Message", message);
})