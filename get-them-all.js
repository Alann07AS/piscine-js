import { people } from "./get-them-all.data.js";

export function getBonannoPisano() {
    console.log('BonannoPisano:');
    console.log('SALUT',[document.getElementById("BonannoPisano")], [...document.querySelectorAll("a.classical.active:not(#BonannoPisano)")])
    return [document.getElementById("BonannoPisano"), [...document.querySelectorAll("a.classical.active:not(#BonannoPisano)")]]
}
export function getActive() {
    console.log('getActive:');
    console.log('SALUT',[...document.querySelectorAll("a.classical.active")], [...document.querySelectorAll("a.classical:not(.active)")])
    return [[...document.querySelectorAll("a.classical.active")], [...document.querySelectorAll("a.classical:not(.active)")]]
}
export function getArchitects() {
    console.log('getArchitects:');
    console.log([document.getElementsByTagName("a"), document.getElementsByTagName("span")]);
    return [[...document.getElementsByTagName("a")], [...document.getElementsByTagName("span")]]
}
export function getClassical() {
    console.log('getClassical:');
    console.log('SALUT',[...document.getElementsByClassName("classical")], [...document.querySelectorAll("a:not(.classical)")])
    return [[...document.getElementsByClassName("classical")], [...document.querySelectorAll("a:not(.classical)")]]
}
// how to filter all class not call by this name ?
