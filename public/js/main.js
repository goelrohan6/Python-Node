var socket = io("http://localhost:3000");

function printMessage(item) {
    var p = document.createElement("p");
    p.innerText =  item[1];
    document.querySelector("div.outputs").appendChild(p);
}

socket.on("print", function(item) {
    printMessage(item);
});
