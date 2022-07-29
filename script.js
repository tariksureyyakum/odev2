let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let liDOM = document.getElementsByTagName("#li")


for (let index = 0; index < liDOM.length; index++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liDOM[index].append(closeButton);
    liDOM[index].onclick = check;

}


btnDOM.addEventListener("click", elemanEkle)



function check() {
    this.classList.toggle("checked");
}

function removeButton() {
    this.parentElement.remove();
}

function elemanEkle() {

    if (taskDOM.value == "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show")

        let liDOM = document.createElement('li')
        listDOM.appendChild(liDOM)
        liDOM.innerHTML = task.value;
        taskDOM.value = ""
        liDOM.onclick = check;
        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");


    }



}