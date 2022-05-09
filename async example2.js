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
        
    }
    catch(error) {
        console.log("customer left", error)
    }
    finally{
        console.log("shop is closed");
    }
    
}

kitchen();