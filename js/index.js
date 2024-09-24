document.getElementById('btn-blog').addEventListener('click',function(event){
    console.log('blog-html-surfaced');
    window.location.href = './blog.html';
})

// document.getElementById('btn-history').addEventListener('click',function(event){
//     console.log('history-html-surfaced');
//     window.location.href = '/history.html';
// })


document.getElementById('btn-donate-now-1').addEventListener('click' , function(event){
    event.preventDefault();

    console.log('donate now button clicked');

    // getInputFieldValueById();


    //before: const addMoney = document.getElementById('input-add-money').value;
    //now:
    const donateMoney = getInputFieldValueById('enter-amount-1');
    const curAmount = getTextFieldValueById('current-amount-1');
    console.log('add money with parameter', donateMoney, curAmount);

    //validation Number
    if(isNaN(donateMoney)){
        alert('Input a Valid Amount');
        return;
    }

    //wrong way to verify
   
    const balance = getTextFieldValueById('account-balance');

    if(donateMoney>balance){
        alert('You Do Not Have Enough Balance!');
        return;
    }

    const newBalance = balance - donateMoney;

    document.getElementById('account-balance').innerText= newBalance;

    document.getElementById('current-amount-1').innerText= donateMoney + curAmount;

    const date = new Date().toLocaleString();

    const eventName = document.getElementById('event-name-1').innerText;

    const div = document.createElement('div');
    div.classList.add('card','bg-base-100','py-10','shadow-xl','flex-col' ,'justify-items-center','text-center','space-y-1.5');
    div.innerHTML=`
        <h4 class = "lg:text-3xl text-base font-bold ">${donateMoney} Taka is Donated for ${eventName}</h4>
        <h2 class = "lg:text-xl text-xs text-stone-500">Date: ${date}</h2> 
    `

    document.getElementById('history-section').appendChild(div);

})


document.getElementById('btn-donate-now-2').addEventListener('click' , function(event){
    event.preventDefault();

    console.log('donate now button clicked');

    // getInputFieldValueById();


    //before: const addMoney = document.getElementById('input-add-money').value;
    //now:
    const donateMoney = getInputFieldValueById('enter-amount-2');
    const curAmount = getTextFieldValueById('current-amount-2');
    console.log('add money with parameter', donateMoney, curAmount);

    //validation Number
    if(isNaN(donateMoney)){
        alert('Input a Valid Amount');
        return;
    }

    //wrong way to verify
   
    const balance = getTextFieldValueById('account-balance');

    if(donateMoney>balance){
        alert('You Do Not Have Enough Balance!');
        return;
    }

    const newBalance = balance - donateMoney;

    document.getElementById('account-balance').innerText= newBalance;

    document.getElementById('current-amount-2').innerText= donateMoney + curAmount;

    const date = new Date().toLocaleString();

    const eventName = document.getElementById('event-name-2').innerText;

    const div = document.createElement('div');
    div.classList.add('card','bg-base-100','py-10','shadow-xl','flex-col' ,'justify-items-center','text-center','space-y-1.5');
    div.innerHTML=`
        <h4 class = "lg:text-3xl text-base font-bold ">${donateMoney} Taka is Donated for ${eventName}</h4>
        <h2 class = "lg:text-xl text-xs text-stone-500">Date: ${date}</h2> 
    `

    document.getElementById('history-section').appendChild(div);

})



document.getElementById('btn-donate-now-3').addEventListener('click' , function(event){
    event.preventDefault();

    console.log('donate now button clicked');

    // getInputFieldValueById();


    //before: const addMoney = document.getElementById('input-add-money').value;
    //now:
    const donateMoney = getInputFieldValueById('enter-amount-3');
    const curAmount = getTextFieldValueById('current-amount-3');
    console.log('add money with parameter', donateMoney, curAmount);

    //validation Number
    if(isNaN(donateMoney)){
        alert('Input a Valid Amount');
        return;
    }

    //wrong way to verify
   
    const balance = getTextFieldValueById('account-balance');

    if(donateMoney>balance){
        alert('You Do Not Have Enough Balance!');
        return;
    }

    const newBalance = balance - donateMoney;

    document.getElementById('account-balance').innerText= newBalance;

    document.getElementById('current-amount-3').innerText= donateMoney + curAmount;

    const date = new Date().toLocaleString();

    const eventName = document.getElementById('event-name-3').innerText;

    const div = document.createElement('div');
    div.classList.add('card','bg-base-100','py-10','shadow-xl','flex-col' ,'justify-items-center','text-center','space-y-1.5');
    div.innerHTML=`
        <h4 class = "lg:text-3xl text-base font-bold ">${donateMoney} Taka is Donated for ${eventName}</h4>
        <h2 class = "lg:text-xl text-sm text-stone-500">Date: ${date}</h2> 
    `

    document.getElementById('history-section').appendChild(div);

})

