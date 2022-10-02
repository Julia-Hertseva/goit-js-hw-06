const itemsRef = document.querySelectorAll(".item");
console.log("Number of categories:", itemsRef.length)

    
itemsRef.forEach((item, index) => {
    const categoryRef = item.querySelector("h2");
    const numberOfElementsRef = item.querySelectorAll("li");
    console.log("Category:", categoryRef.textContent);
    console.log("Elements:", numberOfElementsRef.length);
});




