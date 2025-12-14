async function Main(){
    const r = await fetch("./src/desc.json")
    const n = await r.json();
    return n;
    
}
export async function send() {
    let data = await Main();
    return data;
}
