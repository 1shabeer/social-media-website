document.querySelector("#registerform").addEventListener('submit',(e)=>{
    e.preventDefault();
    const user =document.querySelector("#username");
    const email = document.querySelector("#email");
    const pass=document.querySelector("#password");
    const retypepass = document.querySelector("#confirmpassword");

    const userName ={
        username:user.value,
        emailid:email.value,
        password:pass.value,
        confirmpass:retypepass.value,
    }
    const userdetails = JSON.parse(localStorage.getItem('userdetails')) || [];
    userdetails.push(userName);
    localStorage.setItem('userdetails',JSON.stringify(userdetails));
    if(pass.value===retypepass.value){
        window.location.href = "index.html"
    }
    else{
        document.querySelector(".notmatch").textContent="password not match"
    }
    
});
