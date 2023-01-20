let logindata3=JSON.parse(localStorage.getItem("login"))
let data=JSON.parse(localStorage.getItem("data"))
let signin=document.getElementById("signin")
let signinimage=document.getElementById("signinimage")
let signlink=document.getElementById("signlink")
console.log(signlink)

for(let i=0;i<1;i++){
    for(let j=0;j<data.length;j++){
        if(logindata3[logindata3.length-1].email===data[j].email && logindata3[logindata3.length-1].password===data[j].password){
            signinimage.src=data[j].link;
            signin.innerText=data[j].Firstname+" "+data[j].lastname
            signlink.href="./homepage.html"
            
        }
    }
}