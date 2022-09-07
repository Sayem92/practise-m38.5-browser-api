let count = 0;
const btnAdd = document.getElementById('btn-add-ls')
let countElement = document.getElementById('show-count');


btnAdd.addEventListener('click', ()=>{
    countElement.innerText =  count++

    setToLocalStorage(countElement.innerText);
    // console.log(countElement.innerText)
    // setToLocalStorage()

})

const setToLocalStorage = (value) =>{
    localStorage.setItem('The Count', value)

}
const get = localStorage.getItem('The Count')
countElement.innerText = get
console.log(get)