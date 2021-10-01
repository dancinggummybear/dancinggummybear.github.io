//transform case to uppercase
    //DOM event listener
function transformUppercase(_val){
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})


//check length of password
function checkPassword(){
    let elkataLaluan = document.getElementById("kataLaluan")
    let pass_val = elkataLaluan.value

    if(pass_val.length > 5){
        alert("Password check... OK!")
    }
    else{
        alert("Password too short!")
    }
}
//censor password
    //traditional DOM event listener
let elKL = document.getElementById("kataLaluan")
elKL.onblur = checkPassword