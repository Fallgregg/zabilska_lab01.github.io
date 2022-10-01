// task 1
const regular_expression_name = /^[А-ЯІЇ][А-Яа-яІЇії']+ [А-ЯІЇ]\.[А-ЯІЇ]\./;
const regular_expression_idcard = /^[А-ЯІЇ]{2} №\d{6}$/;
const regular_expression_faculty = /^[А-ЯІЇ]{4}/;
const regular_expression_birth_date = /^(0[1-9]|[1-2]\d|3[0-1])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
const regular_expression_addres = /^м. [А-ЯІЇ][А-Яа-яІЇії']+$/;

const name_validation = (str) => regular_expression_name.test(str);
const idcard_validation = (str) => regular_expression_idcard.test(str);
const faculty = (str) => regular_expression_faculty.test(str);
const birth_date = (str) => regular_expression_birth_date.test(str);
const addres = (str) => regular_expression_addres.test(str);

const validation = [name_validation, idcard_validation, faculty, birth_date, addres];

function check_entered_input() {
    clear();

    const input = document.querySelectorAll("input");
    let flag = true;

    for(let i=0; i<5;i++) {
        if(validation[i](input[i].value)) {
            input[i].style.boxShadow = "2px 2px 2px";
        } else {
            input[i].style.boxShadow = `2px 2px 2px rgb(309, 100, 90)`;
            flag = false;
        }
    }
    if (flag) {
        const output = document.querySelectorAll(".post div");
        for(let i=0;i<5;i++) {
            output[i].textContent += " " + input[i].value;
        }
    }
}

function clear() {
    document.querySelectorAll(".post div").forEach(elem => {
        elem.textContent = elem.textContent.slice(0, elem.textContent.indexOf(":") + 1);
    });
}

// task 2

function color_change_random(elem) {
    let red =  Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    elem.style.background = `rgb(${red}, ${green}, ${blue})`;
}

function color_change_selected(elem) {
    elem.style.background = document.querySelector('input[type="color"]').value;
}
