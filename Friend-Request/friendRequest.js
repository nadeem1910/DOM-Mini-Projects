var condition = document.querySelector("h5")
var btn = document.querySelector("#add")

var flag = 0

btn.addEventListener("click",function(){
    if(flag==0){
        condition.innerHTML = "Friends"
        condition.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1
    }
    else{
        condition.innerHTML = "Strangers"
        condition.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }   
})