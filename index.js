let food = require('./data.json')

// console.log(food)

// 1. list all the food items
const allItems = ()=>{
    food.forEach((food)=>{
    console.log(food)
})
}


// 2. list all the food items with category vegetables
const vegItems = ()=>{
    let vegetables = food.filter((veg)=>{
        return veg.category == 'Vegetable';
    })
    console.log(vegetables)
}


// 3. list all the food items with category fruit
const fruitItems = ()=>{
    let fruit = food.filter((foodItem)=>{
        return foodItem.category == 'Fruit';
    })
    console.log(fruit)
}

// 4. list all the food items with category protein
const proteinItems = ()=>{
    let protien = food.filter((foodItem)=>{
        return foodItem.category == 'Protein';
    })
    console.log(protien)
}

// 5. list all the food items with category nuts
const nutsItems = ()=>{
    let nuts = food.filter((foodItem)=>{
        return foodItem.category == 'Nuts';
    })
    console.log(nuts)
}

// 6. list all the food items with category grains
const grainsItems = ()=>{
    let grains = food.filter((foodItem)=>{
        return foodItem.category == 'Grain';
    })
    console.log(grains)
}

// 7. list all the food items with category dairy
const dairyItems = ()=>{
    let dairy = food.filter((foodItem)=>{
        return foodItem.category == 'Dairy';
    })
    console.log(dairy)
}


// 8. list all the food items with calorie above 100
const calorieAbove_100 = ()=>{
    let calAbove = food.filter((foodItem)=>{
        return foodItem.calorie > 100;
    })
    console.log(calAbove)
}


// 9. list all the food items with calorie below 100
const calorieBelow_100 = ()=>{
    let calBelow = food.filter((foodItem)=>{
        return foodItem.calorie < 100;
    })
    console.log(calBelow)
}
//     console.log('Name of foods below 100 calories : \n');
// calBelow.forEach(e=>console.log(e.foodname))


// 10.  list all the food items with highest protien content to lowest

const highestProteinTolowest = ()=>{
    let a = food.sort((a,b)=>{
        return b.protiens - a.protiens;
    })
    
    console.log(a)
}


// 11. list all the food items with lowest cab content to highest
const lowestcabTohighest = ()=>{
    let ase = food.sort((a,b)=>{
        return a.cab - b.cab;
    })
    console.log(ase)
}


// Invokeing the functions

console.log('-- ✔ 1. list all the food items --')
allItems();


console.log('-- ✔ 2. list all the food items with category vegetables --')
vegItems();


console.log('-- ✔ 3. list all the food items with category fruit --')
fruitItems();


console.log('-- ✔ 4. list all the food items with category protien --')
proteinItems();


console.log('-- ✔ 5. list all the food items with category nuts --')
nutsItems();


console.log('-- ✔ 6. list all the food items with category grains --')
grainsItems();


console.log('-- ✔ 7. list all the food items with category dairy --')
dairyItems();


console.log('-- ✔ 8. list all the food items with calorie above 100 --')
calorieAbove_100();


console.log('-- ✔ 9. list all the food items with calorie below 100 --')
calorieBelow_100();


console.log('-- ✔ 10. list all the food items with highest protien content to lowest --')
highestProteinTolowest();


console.log('-- ✔ 11. list all the food items with lowest cab content to highest --');
lowestcabTohighest();


