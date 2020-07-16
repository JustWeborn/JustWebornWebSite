function shifted() {
    let person = document.querySelectorAll(".person");
    for (let i = 0; i < person.length; i++) {
        let pos1 = Math.floor(Math.random() * person.length);
        let pos2 = Math.floor(Math.random() * person.length);
        person[pos1].before(person[pos2]);
    }
}