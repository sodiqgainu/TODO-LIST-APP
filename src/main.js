let inputEl = document.getElementById('input');
let addbtnEl = document.getElementById(`btn`)
let TaskListEl = document.getElementById(`TaskList`)

// create an array in which the task will be stored

let infoArr = []

// then create a function for the adding of names

const addNames = () => {
     infoArr.push(inputEl.value)
     if(inputEl.value == ''){
        return;
     }else{
    let divList = document.createElement('div');
    divList.setAttribute('class', 'listContainer');

    // creating the li tag for storing the tasks added
    let liEl = document.createElement('li');
     liEl.innerHTML = inputEl.value;
     
     // creating the delete button
     let btnDelete = document.createElement('button');
     btnDelete.innerHTML = 'Delete task'
     btnDelete.setAttribute('id', 'DelTask')

     //create an eventlistener for the delete button with a function

     btnDelete.addEventListener('click', () =>{
        divList.remove()
     })
      
     //append to tasklist

      TaskListEl.appendChild(divList)
      divList.appendChild(liEl)
      divList.appendChild(btnDelete)
     }

    inputEl.value = ""
}

addbtnEl.addEventListener('click', addNames)
