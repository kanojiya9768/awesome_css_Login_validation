let modal = document.getElementById('modal');
let modal_btn = document.getElementById('modal_btn');


document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
    
    let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;

   if(email=="" && password==""){
    //
   }else{
       modal.classList.add('active_modal');
   }

})

document.getElementById('modal_btn').addEventListener('click',()=>{
    location.reload();
})
