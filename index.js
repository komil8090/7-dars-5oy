let body = document.querySelector("body");

let sonlar = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

sonlar.forEach(function (son) {
    let h2 = document.createElement("h2");
    h2.textContent = son;
    body.appendChild(h2);

    if (son > 50) {
        h2.style = "background-color: green; text-align: center;";
    } else {
        h2.style = "background-color: red; text-align: center;";
    } 
});