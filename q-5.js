// Local Storage:

// This read-only interface property provides access to the Document’s local storage object, the stored data is stored across browser sessions. Similar to sessionStorage, except that localStorage data gets cleared when the page session ends – that is when the page is closed. It is cleared when the last “private” tab of a browser is closed (localStorage data for a document loaded in a private browsing or incognito session).



//Local storage has 4 methods:

//setItem() Method – This method takes two parameters one is key and another one is value. It is used to store the value in a particular location with the name of the key.
localStorage.setItem(key, value)


//getItem() Method – This method takes one parameter that is key which is used to get the value stored with a particular key name.
localStorage.getItem(key)


//removeItem() Method – This is method is used to remove the value stored in the memory in reference to key.
localStorage.removeItem(key)


//clear() Method – This method is used to clear all the values stored in localstorage.
localStorage.clear()


// ------------------------------------------------------------------------

// What is Session Storage?

// Session Storage objects can be accessed using the sessionStorage read-only property. The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends.


//Session Storage has 4 methods:

//setItem() Method – This method takes two parameters one is key and another one is value. It is used to store the value in a particular location with the name of the key.
sessionStorage.setItem(key, value)


//getIteam() Method – This method takes one parameter that is key which is used to get the value stored with a particular key name.
sessionStorage.getItem(key)


//removeItem() Method – This is method is used to remove the value stored in the memory in reference to key.
sessionStorage.removeItem(key)


//clear() Method – This method is used to clear all the values stored in the session storage
sessionStorage.clear()
