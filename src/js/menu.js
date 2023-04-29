function dropdown() {

    let sign1 = document.getElementById("sign1");
    let sign2 = document.getElementById("sign2");
    let sign3 = document.getElementById("sign3");

    let menu1 = document.getElementById("list1");
    let menu2 = document.getElementById("list2");
    let menu3 = document.getElementById("list3");

    sign1.addEventListener("click", function() {
    menu1.classList.toggle("dropdown");
    title1.classList.toggle("color");
    });

    sign2.addEventListener("click", function() {
    menu2.classList.toggle("dropdown");
    title2.classList.toggle("color");
    });

    sign3.addEventListener("click", function() {
    menu3.classList.toggle("dropdown");
    title3.classList.toggle("color");
    });
}


export default dropdown;