const leng1 = document.getElementById("length1");
const leng2 = document.getElementById("length2");
const sbmt1 = document.getElementById("submit1");
const rslt1 = document.getElementById("result1");

sbmt1.onclick = function handle1() {
    const length1 = Number(leng1.value);
    const length2 = Number(leng2.value);
    const length3 = Math.sqrt(length1**2 + length2**2);
    rslt1.textContent = "Ladder Length: " + length3.toString();
};