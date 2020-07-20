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


/* funtcion for showong or hiding section */
function showOrHide (name) {
    /* select the section wanted with the button */
    let elt = document.querySelector("."+ name);
    /* show the section */
    if (elt.classList.contains("hide")) {
        elt.classList.remove("hide");
        elt.classList.add("show");
    /* hide the section */
    } else {
        elt.classList.remove("show");
        elt.classList.add("hide");
    }      
}