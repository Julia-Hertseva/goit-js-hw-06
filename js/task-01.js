const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length)

    
items.forEach((item, index) => {
    const category = item.querySelector("h2");
    const numberOfElements = item.querySelectorAll("li");
    console.log("Category:", category.textContent);
    console.log("Elements:", numberOfElements.length);
});




