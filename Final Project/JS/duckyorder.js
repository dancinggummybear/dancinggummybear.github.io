function myFunction(smallImg) {
  var fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}

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

function fillOrder() {
  alert("Please fill up the order form, Quack! :)")

}

let placeOrderBtn = document.getElementById("placeOrder")
placeOrderBtn.addEventListener("click", function () {
  let userName = document.getElementById("userName")
  let userNameVal = userName.value

  let userEmail = document.getElementById("userEmail")
  let userEmailVal = userEmail.value

  let userMailingAdd = document.getElementById("userMailingAdd")
  let userMailingAddVal = userMailingAdd.value

  let userVariation = document.getElementById("userVariation")
  let userVariationVal = userVariation.value

  let userMessage = document.getElementById("userMessage")
  let userMessageVal = userMessage.value

  PlaceOrder(userNameVal, userEmailVal, userMailingAddVal, userVariationVal, userMessageVal)
})

function PlaceOrder(userName, userEmail, userMailingAdd, userVariation, userMessage) {
  let url = 'https://api.sheety.co/a667933989dd08229cb7501efdca2098/finalProject(rdd)/customersInfo';
  let body = {
    customersInfo: {
      name: userName,
      eMail: userEmail,
      mailingAddress: userMailingAdd,
      variation: userVariation,
      message: userMessage,
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then(json => {
      console.log(json.customersInfo);
      alert("Thank you, " + json.customersInfo.name + "! Your order is well received, we will ship it to you ASAP! <3")
    });
}




