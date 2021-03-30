
//delete cart item
document.querySelector('.cart').addEventListener('click',  e =>{
    if (e.target.matches('.close-item'))
        e.target.closest('.item-row').remove();

    // Change price
    let totalCost = document.getElementById('total-cost-sum');
    let num =  document.querySelectorAll('.total-cost');
    let order = document.querySelector('.allPrice');
    let sum = 0;
    console.log(num);
    for(let i  = 0; i < num.length; i++){
        sum += Number(num[i].innerText.substr(1));
    }
    totalCost.innerText = '$' +sum;
    order.innerText = "$ "+ (10 +sum);

})





