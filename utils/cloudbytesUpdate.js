
'use strict';

const fs = require('fs');

// update the document here
let rawdata = fs.readFileSync('inventory_talavera.json');
let inventory = JSON.parse(rawdata);

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return (Math.round(m) / 100) * Math.sign(num);
}

const parseToNum = num => Number(num.toString().replace(/[^0-9.-]+/g, ""));
const interest = (price, cost) => price - cost;

// const getCost = data => round(parseToNum(data.Cost));
// const getPrice = data => round(parseToNum(data.Price));

// const getInterest = data =>
//     round(interest(parseToNum(data.Price), parseToNum(data.Cost)));

// add count and interest property

const numbers = []

inventory.forEach((data) => {
        
        data.Count = 1,
        data.ItemName = data.Item.slice(
            data.Item.indexOf(":") + 1,
            data.Item.length,
        ),
        data.Category = data.Item.slice(0, data.Item.indexOf(":")),
        data.Price = round(parseToNum(data.Price))
        data.Cost = round(parseToNum(data.Cost))
        data.Interest = round(interest(parseToNum(data.Price), parseToNum(data.Cost)))
        data.BranchName = 'talavera'
})

// update inventory: readable json
let updatedInventory = JSON.stringify(inventory, null, 2);

// synchronously write file to a stated new file(automatically create file)
fs.writeFileSync('talavera.json', updatedInventory);


console.log(updatedInventory);