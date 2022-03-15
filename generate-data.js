var casual = require('casual');
const fs = require("fs");

//set locale to use vietnames
// casual.locale = "vi-VN" 


//random data
// console.log(casual.name);
// console.log(casual.title);
// console.log(casual.url);
// console.log(casual.uuid);

// npm run generate-data &&

const randomCategoryList = (n) => {
    if (n <= 0) return [];

    const categoryList = [];

    // loop and push category
    Array.from(new Array(n)).forEach(() => {
        const category = {
            id: casual.uuid,
            name: casual.name,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };

        categoryList.push(category);
    });

    return categoryList;
};

const randomProductList = (categoryList, numberOfProduct) => {
    if (numberOfProduct <= 0) return [];

    const productList = [];

    //ramdom data
    for (const category of categoryList ) {
    Array.from(new Array(numberOfProduct)).forEach(() => {
        const product = {
            categoryId: category.id,
            id: casual.uuid,
            name: casual.name,
            price: Number.parseFloat(casual.building_number),
            description: casual.description, 
            createdAt: Date.now(),
            updatedAt: Date.now(),
            thumbnailUrl: casual.url,

        };

        productList.push(product);
    });
}
    return productList;
}

/// IFFE
(() => {
    //random  data
    const categoryList = randomCategoryList(4)
    const productList = randomProductList(categoryList, 10);

    //prepare db object
    const db = {
        categories: categoryList,
        products: productList,
        profile: {
            name: "Po",
        },
    };

    //write db object to db.json
    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generate data successfully ^^ ");
    });

})();
