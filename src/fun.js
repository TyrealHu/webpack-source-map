import hello from "./hello";

export function getInfo() {
    console.log(hello.age)
    console.log(hello.name)

    return `name: ${hello.name};age: ${hello.age}`
}