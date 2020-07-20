/* function for shifted nav person's icon*/
function shifted() {
    /* selected all element with person's class */
    let person = document.querySelectorAll(".person");
    /* iterate for each element */
    for (let i = 0; i < person.length; i++) {
        let pos1 = Math.floor(Math.random() * person.length);
        let pos2 = Math.floor(Math.random() * person.length);
        /* invert icon */
        person[pos1].before(person[pos2]);
    }
}



function showOrHide (name) {
    let elt = document.querySelector("."+ name);
    if (elt.classList.contains("hide")) {
        elt.classList.remove("hide");
        elt.classList.add("show");
    } else {
        elt.classList.remove("show");
        elt.classList.add("hide");
    }      
}