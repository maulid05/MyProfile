import { send } from "../model/mainModel.js";

const data = await send();

export function index() {
    return data;
}

export function protofolio() {
    
}