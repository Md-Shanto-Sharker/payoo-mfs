document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()
    
    const addMoneyInput = document.getElementById('input-add-money').value
    console.log(addMoneyInput);

    const pinNumberInput = document.getElementById('input-pin-number').value
    console.log(pinNumberInput);


    if(pinNumberInput==='1234'){
        console.log('this is a pin');

        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);


        const newBalance = Number(balance) +Number(addMoneyInput);
        console.log(newBalance);

        document.getElementById('account-balance').innerText=newBalance
    }
    else{
        alert('Wrong Number and Pin')
    }
    
})