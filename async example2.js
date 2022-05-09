let stocks = {
    Fruits: ["strawberry", "apple", "banana"],
    Vegetables: ["carrot", "tomato", "cucumber"],
    Cereal: ["milk", "oatmeal", "wheat"]

};

let is_shop_open = true;

function time(ms){
    return new Promise ((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed"));
        }
    });
}

async function kitchen () {
    try{
        await time(3000)
        console.log(`${stocks.Cereal[1]}`)

        await time(0000)
        console.log("start production")

        await time(1000)
        console.log("cut vegetables")

        await time(1000)
        console.log("cut fruits")

        await time(2000)
        console.log(`${stocks.Fruits[1]} and ${stocks.Fruits[2]} was added to the cart`)
    }
    catch(error) {
        console.log("customer left", error)
    }
    finally{
        console.log("day ended shop is closed");
    }
    
}

kitchen();