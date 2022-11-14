// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   let form = document.querySelector('form')
//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     console.log(e.target.description.value)
//     // buildTodoList(e.target.description.value)
//     // form.reset()

//   }) 
  
// });

// function buildTodoList (todo) {
//   let p = document.createElement('p')
//   let btn = document.createElement('btn')
//   btn.addEventListener('click', handleDelete)
//   btn.textContent= 'x'
//   p.textContent=`${todo} `
//   p.appendChild(btn)
//   console.log(p)
//   document.querySelector('#todo_container').appendChild(p)
// }
// function handleDelete(e){
//   e.target.parentNode.remove()
// }


document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e.target)
  }) 
  
});