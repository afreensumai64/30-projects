function validateInput() {
     let inputField =document.getElementById("inputfield");
     let inputValue = inputField.value.trim();
     const errormessage = document.getElementById("errormessage");

     if(inputValue === "") {

         inputField.classList.add("shake");
         errormessage.style.visibility = "visible";

         setTimeout(function() {
            inputField.classList.remove("shake");
            errormessage.style.visibility = "hidden";

      },500)
    } else {
         alert("Valid Inputs")
        }

}
