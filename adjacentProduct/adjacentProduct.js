/* Given an array of integers, find the pair of adjacent elements that 
has the largest product and return that product. */

function adjacentElementsProduct(inputArray) {
	//empty array to place products into
    var prods =[];
    for (i =0;i < inputArray.length-1; i++) {
    	//find the poduct of each pair, and push it into the array
    	//don't care about which pairs create the highest number
    	//we just want to know the highest product.
        tempProd = inputArray[i]* inputArray[i+1];
        prods.push(tempProd);
    }
    return Math.max.apply(Math, prods);
}
