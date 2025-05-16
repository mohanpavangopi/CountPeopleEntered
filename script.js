let count = 0;
countElement = document.getElementById("peoplecount");
saveElement = document.getElementById("savecount");


function increment() {
    count++;
    countElement.textContent = count;
}
function decrement(){
    count--;
    countElement.textContent = count;
}

function save(){
    let saveCount = count + " - ";
    saveElement.textContent += saveCount;
    count = 0;
    countElement.textContent = count;

}