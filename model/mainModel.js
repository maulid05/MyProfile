async function Main(){
    const r = await fetch("MyProfile/src/desc.json")
    const n = await r.json();
    return n;
    
}
export async function send() {
    let data = await Main();
    return data;
}
