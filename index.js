var buttonMinus=document.querySelectorAll('minus');
var PlusButton=document.querySelectorAll('.plus');
var totalSum=document.querySelector('#sum');
var deletButton=document.querySelectorAll('.x');
var prices=document.querySelectorAll('.price');
var bigDivs=ducument.querySelectorAll('.card');

for(var i=0; i<buttonMinus.length;i++){
    buttonMinus.addeventlistener('click',function() {
        if(quantitiesButton[i]>0){
            quantitiesButton[i].innerHTML--;
            totalSum.textContent=
            parseInt(totalSum.textContent)-parseInt(prices.innerHTML)
        }
    })
}

for(var i=0; i< deletButton.length;i++){
    deletButton.addeventlistener('click',function(){
        if(quantitiesButton[i]>0){
            quantitiesButton[i].innerHTML--;
            totalSum.textContent=
            parseInt(totalSum.textContent)-parseInt(prices.innerHTML)
        }
    })
        bigDivs[i].remove();
        totalSum.textContent=
        parseInt(totalSum.textContent)-parseInt(prices.innerHTML)
    }
    
