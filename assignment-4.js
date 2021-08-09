// // Problem - 01 *************************

function seerToMon(seer) {
    if (seer < 0) {
        return 'Please Enter a Positive Number'
    }

    const mon = seer / 40;
    return mon;
}
const myGivenSeer = seerToMon(40);
console.log(myGivenSeer);
console.log(typeof (myGivenSeer));



// // Problem - 02 ***************************

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return 'Quantity Cannot Be A Negative Number'
    }
    // Given Price of Per Item

    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    // Multiplications of Price And Quantity

    const shirtSalePrice = perShirtPrice * shirtQuantity;
    const pantSalePrice = perPantPrice * pantQuantity;
    const shoeSalePrice = perShoePrice * shoeQuantity;

    // Sum Of Whole Items

    const totalSalesAmount = shirtSalePrice + pantSalePrice + shoeSalePrice;
    return totalSalesAmount;
}

const totalPrice = totalSales(1, 1, 1);
console.log(totalPrice);
console.log(typeof (totalPrice));



// // Problem - 03 ************************

function deliveryCost(tShirtQuantity) {
    if (tShirtQuantity < 0) {
        return 'Quantity Cannot Be A Negative Number'
    }

    // Given items shipping cost 

    const per_tShirtShippingFee100 = 100;
    const per_tShirtShippingFeeUpto100 = 80;
    const per_tShirtShippingFeeUpto200 = 50;

    if (tShirtQuantity > 200) {
        let count1 = 100 * per_tShirtShippingFee100;
        let count2 = 100 * per_tShirtShippingFeeUpto100;
        let upTo200 = tShirtQuantity - 200;
        let count3 = upTo200 * per_tShirtShippingFeeUpto200;
        let count4 = count1 + count2 + count3;
        return count4;
    }
    else if (tShirtQuantity > 100 && tShirtQuantity <= 200) {
        let count5 = 100 * per_tShirtShippingFee100;
        let upTo100 = tShirtQuantity - 100;
        let count6 = upTo100 * per_tShirtShippingFeeUpto100;
        let count7 = count5 + count6;
        return count7;
    }
    else {
        let count8 = tShirtQuantity * per_tShirtShippingFee100;
        return count8;
    }
}
const givenQuantity = 201;
var totalShippingFee = deliveryCost(givenQuantity);
console.log(totalShippingFee);
console.log(typeof (totalShippingFee));



// // Problem - 04 ************************

function perfectFriend(names) {
    if (typeof names != "object") {
        return 'Pleae Enter an object with string'
    }

    for (const element of names) {
        if (element.length == 5) {
            return element;
        }
    }
}

const names = ['Asad', 'Firoz', 'Razu', 'Sobuj', 'Mizanur', 'Alam-gir'];
const uniqueName = perfectFriend(names);
console.log(uniqueName);
console.log(typeof (uniqueName));