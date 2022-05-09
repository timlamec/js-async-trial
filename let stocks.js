let stocks = {
    Fruits: ["strawberry", "apple", "banana"],
    Vegetables: ["carrot", "tomato", "cucumber"],
    Cereal: ["milk", "oatmeal", "wheat"]

};
console.log(stocks.Fruits[0]);

let is_shop_open = true;

let cereal_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("Which cereal?")
            );
            
        }, 4000);
    });
};

async function kitchen() {
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

    await cereal_choice()

    console.log(" D ")
    console.log(" E ")
}

kitchen()

console.log("cleaning the dishes");
console.log("cleaning the table");
console.log("clearning the table");