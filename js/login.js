document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pin = document.getElementById("pin").value;

    if (phoneNumber === "5" && pin === "1234") {
      console.log("yes logged in");
      window.location.href = "/home.html";
    } else {
      alert("something went wrong");
    }
  });
