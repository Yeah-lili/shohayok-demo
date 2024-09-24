document.getElementById('btn-donation').addEventListener('click',function(){
    console.log('show donation button clicked');
    showSectionById('donation-section');
    document.getElementById('btn-donation').classList.add('btn', 'btn-success', 'bg-prime1', 'text-stone-100', 'px-7');
    document.getElementById('btn-history').classList.remove('btn', 'btn-success', 'bg-prime1', 'text-stone-100', 'px-7');
    document.getElementById('btn-history').classList.add('btn', 'px-8' ,'border-gray-400');
})

document.getElementById('btn-history').addEventListener('click',function(){
    console.log('show transaction button clicked');
    showSectionById('history-section');
    document.getElementById('btn-history').classList.add('btn', 'btn-success', 'bg-prime1', 'text-stone-100', 'px-7');
    document.getElementById('btn-donation').classList.remove('btn', 'btn-success', 'bg-prime1', 'text-stone-100', 'px-7');
    document.getElementById('btn-donation').classList.add('btn', 'px-8' ,'border-gray-400');

})

