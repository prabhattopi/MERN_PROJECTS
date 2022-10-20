// Coffee: price_1Lv5OZSAd4RF5Foe1o0FzXLH

// Sunglassed:price_1Lv5PhSAd4RF5FoeQlsZXbtj

// Camera:price_1Lv5QeSAd4RF5Foej9t3fQoY


const productArray=[
    {
        id:'price_1Lv5OZSAd4RF5Foe1o0FzXLH',
        title:"coffee",
        price:4.99
    },
    {
        id:'price_1Lv5PhSAd4RF5FoeQlsZXbtj',
        title:"Sunglasses",
        price:9.99
    },
    {
        id:'price_1Lv5QeSAd4RF5Foej9t3fQoY',
        title:"Camera",
        price:39.99
    }
];


function getProductData(id){
    let productData=productArray.find(product=>product.id===id)

    if(productData===undefined){
        console.log("product data not exists for ID:" +id)
        return undefined;
    }
    return productData
}

export {productArray,getProductData}