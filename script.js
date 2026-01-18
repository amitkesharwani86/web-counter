let num = 0;
document.getElementById("CountNum").textContent = num;

document.getElementById("DecBtn").onclick = function() {
    num--;
    document.getElementById("CountNum").textContent = num;
}

document.getElementById("ResBtn").onclick = function() {
    num = 0;
    document.getElementById("CountNum").textContent = num;
}

document.getElementById("IncBtn").onclick = function() {
    num++;
    document.getElementById("CountNum").textContent = num;
}