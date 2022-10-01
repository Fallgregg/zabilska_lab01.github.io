// task 1
const fifth_elem_id = document.getElementById("fifth-elem");
const sixth_elem_id = document.querySelector("#sixth-elem");

fifth_elem_id.addEventListener("click", function() {
    if(fifth_elem_id.style.color == "black") {
        fifth_elem_id.style.background = "yellow";
        fifth_elem_id.style.color = "red";
    } else {
        fifth_elem_id.style.background = "white";
        fifth_elem_id.style.color = "black";
    }
});

sixth_elem_id.onclick = function() {
    if(sixth_elem_id.style.color == "black") {
        sixth_elem_id.style.background = "yellow";
        sixth_elem_id.style.color = "red";
    } else {
        sixth_elem_id.style.background = "white";
        sixth_elem_id.style.color = "black";
    }
}


// task 2
function add() {
    const container = document.querySelector(".img")
    const img_link = document.createElement("a")
    const img = document.createElement("img")

    img_link.setAttribute("href", "https://en.parisinfo.com/");
    img.setAttribute("src", "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    img.setAttribute("alt", "paris sity view");
    img.setAttribute("width", "600");

    img_link.appendChild(img);
    container.appendChild(img_link);
}

function size_up() {
    const img_link = document.querySelector("a:last-child");
    const img = img_link.firstElementChild;
    img.style.height = (img.clientHeight * 2).toString() + "px";
}

function size_down() {
    const img_link = document.querySelector("a:last-child");
    const img = img_link.firstElementChild;
    img.style.height = (img.clientHeight * 0.5).toString() + "px";
}

function del() {
    const container = document.querySelector(".img");
    container.removeChild(container.lastChild);
}