const activity = document.querySelector("#Activity");
const button = document.querySelector("#Add");
const taskContainer = document.querySelector("#task-container");

button.addEventListener("click", function Addtask() {
    if(activity.value ==='') {
        alert("describe task!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = activity.value;
        taskContainer.appendChild(li);
        let icon = document.createElement("span");
        icon.innerHTML = "\u00d7";
        li.appendChild(icon);
        let task = "untick";
        icon.addEventListener("click", ()=>{
            icon.parentElement.remove();
            });
        li.addEventListener("click", function check(){
            if (task === "untick"){
                task = "tick";
                li.classList.add("checked");
                icon.style.color = "white";
            }else{
                task = "untick";
                li.classList.remove("checked");
                icon.style.color = "black";
            }
        })
    }
    
})
console.log(tasks);

