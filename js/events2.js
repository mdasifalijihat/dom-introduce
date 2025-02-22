// console.log('hendler');
document.getElementById('btn-update-title').addEventListener('click', function(){
    console.log(' btn click')
    const pageTitleElement = document.getElementById('page-title');
    console.log(pageTitleElement)
    pageTitleElement.innerText = "update page title text"
})

document.getElementById('btn-login').addEventListener('click', function(){
    const userInfoEl = document.getElementById('user-info');
    userInfoEl.innerText = 'user logged In successfully'
})

 // set event listener
 document.getElementById('btn-update').addEventListener('click', function(){
    console.log('update button clicked');
    // 2. get he text from the input field text 
    const nameInput = document.getElementById('input-name');
    console.log(nameInput)
   const name = nameInput.value;
    console.log('name', name);
    // set the name
    const nameP = document.getElementById('name');
    nameP.innerText = name; 
})

document.getElementById('btn-post').addEventListener('click', function(){
    const nameInput = document.getElementById('input-name');
    console.log(nameInput)
    const name = nameInput.value;
    console.log('name', name);

    // set the name

    const nameP = document.getElementById('post-new')
    nameP.innerText = name; 
})