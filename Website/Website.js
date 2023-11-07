setInterval(waktu, 1000)
function waktu() {
    const clock = document.getElementsById("clock");
    let time = new Date();
    let h = time.getHours().toString().padStart(2, "0");
    let m = time.getMinutes().toString().padStart(2, "0");
    let s = time.getSeconds().toString().padStart(2, "0");
clock.innerText =`${h} : ${m} : ${s}`;
}