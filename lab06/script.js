function load_data() {
    const fetch_promise = fetch("https://randomuser.me/api");
    fetch_promise.then(response => {
        return response.json();
    }).then(person => {
        console.log(person.results[0]);
        add(person.results[0]);
    })
}

function add(person_info) {
    const person = document.createElement("div");
    const image = document.createElement("img");
    const block = document.querySelector(".content");

    person.setAttribute("class", "person");
    image.setAttribute("src", person_info.picture.large);

    const name = document.createElement("p");
    const city = document.createElement("p");
    const phone = document.createElement("p");
    const postcode = document.createElement("p");

    name.innerHTML = "Name: " + person_info.name.first + " " + person_info.name.last;
    city.innerHTML = "City: " + person_info.location.city;
    phone.innerHTML = "Phone: " + person_info.phone;
    postcode.innerHTML = "Postcode: " + person_info.location.postcode;

    person.appendChild(image);
    person.appendChild(name);
    person.appendChild(city);
    person.appendChild(phone);
    person.appendChild(postcode);
    
    block.appendChild(person);
}
