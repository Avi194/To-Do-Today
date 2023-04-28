const InputBox = document.getElementById('InputBox');
const tasks = document.getElementById('tasks');
const body = document.querySelector('body')
function add(){
    if (InputBox.value === ""){
       alert("you have to write something");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = InputBox.value;
        tasks.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "&#11036"
        li.appendChild(span);
        savedata()
span.addEventListener("click",function Change(){
    span.innerHTML = "&#9989"
    li.style.textDecoration = "line-through";
    li.style.color = "#555"
    savedata()
    li.addEventListener("dblclick",function remove(){
        li.style.display = "none";
        savedata()
    })
})
        // function Change(){
        //     span.innerHTML = "&#11036"
        // }
InputBox.value ="";
savedata()
}

}
function savedata(){
    localStorage.setItem("data",tasks.innerHTML);
}
function showtask(){
    tasks.innerHTML = localStorage.getItem("data");
}
showtask()