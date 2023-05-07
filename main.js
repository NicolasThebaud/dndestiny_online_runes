document.querySelector("#trash").onclick = (e) => {
    const div = document.querySelector("#rune-main");

    div.innerHTML = "";
}

document.querySelectorAll(".token").forEach((element) => {
    element.onclick = (e) => {
        const src = e.srcElement.src;
        const id = e.srcElement.parentElement.id;
        const div = document.querySelector("#rune-main");

        let img = div.querySelector(`#${id}`);

        if (!img) {
            img = document.createElement("img");
            img.id = id;
            img.src = src;
            div.appendChild(img);
        } else {
            div.removeChild(img);
        }
    }
})
