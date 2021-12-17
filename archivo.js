let calculatePrice = (laptop, price) => {
    let cost;
    let priceLast;
    if (price <= 2000){
        cost = 200;
    }else if(price > 2001 && price <= 4000){
        cost = 500;
    }else if(price > 4000){
        cost = 700;
    }
    priceLast = cost + price;
    console.log('El producto ' + laptop + ' cuesta '+ price + ' Su costo de envío es de ' + cost + ' Por lo tanto, el precio final es de ' + priceLast );

};

calculatePrice('Macbook', 3000)