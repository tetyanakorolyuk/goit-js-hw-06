const itemsCategories = document.querySelectorAll(".item");
console.log('Number of categories: ', itemsCategories.length);

const dataCategories = itemsCategories.forEach((element) => {
    const nameCategories = element.querySelector("h2").textContent;
    console.log(`Category: ${nameCategories}`);

    const numbersElCategories = element.querySelectorAll("li").length;
    console.log(`Elements: ${numbersElCategories}`)
});