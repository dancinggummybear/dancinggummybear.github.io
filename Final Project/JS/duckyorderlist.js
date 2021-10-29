mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}


let refreshListBtn = document.getElementById("refreshBtn")
refreshListBtn.addEventListener("click", function () {
    GetCustomersInfo()
})

function GetCustomersInfo() {
    let url = 'https://api.sheety.co/a667933989dd08229cb7501efdca2098/finalProject(rdd)/customersInfo';
    fetch(url)
        .then((res) => res.json())
        .then(json => {

            console.log(json.customersInfo);

            let orderList = document.getElementById("orderList")
            let orderInfo = []

            for (let k = orderList.rows.length - 1; k > 0; k--) {
                orderList.deleteRow(k);
            }

            for (let i = 0; i < json.customersInfo.length; i++) {
                let cusName = json.customersInfo[i].name;
                let cusEmail = json.customersInfo[i].eMail;
                let cusMailingAdd = json.customersInfo[i].mailingAddress;
                let cusVariation = json.customersInfo[i].variation;
                let cusMessage = json.customersInfo[i].message;
                let cusId = json.customersInfo[i].id;
                let btnId = "delete" + cusId;


                let row = orderList.insertRow(orderList.rows.length)
                row.insertCell(0).innerHTML = cusId
                row.insertCell(1).innerHTML = cusName
                row.insertCell(2).innerHTML = cusEmail
                row.insertCell(3).innerHTML = cusMailingAdd
                row.insertCell(4).innerHTML = cusVariation
                row.insertCell(5).innerHTML = cusMessage
                row.insertCell(6).innerHTML = "<button id='" + btnId + "' type='button' class='deleteBtn'>Delete</button>"

                orderInfo.push(btnId)
            }

            for (let j = 0; j < orderInfo.length; j++) {
                let el = document.getElementById(orderInfo[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeletecustomersInfo(theId)


                })
            }
        });
}

function DeletecustomersInfo(id) {
    let url = 'https://api.sheety.co/a667933989dd08229cb7501efdca2098/finalProject(rdd)/customersInfo/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Quack! Quack! Quack! It's sad to see you go, please come back later!")
            GetCustomersInfo()
        });

}




