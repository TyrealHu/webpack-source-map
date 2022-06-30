import { getInfo } from "./fun";

const info = getInfo()

function getDiv() {
    const element = document.createElement("div")

    element.innerHTML = info

    return element
}

document.body.appendChild(getDiv())
