const validForm =() =>{
    
    const surname = document.getElementById("surname");
    const givenname = document.getElementById("givename");
    const gender = document.getElementsByName("gender");
    const dateofbirth= document.getElementById("dob");
    const country = document.getElementById("country");
    const placeofresidence = document.getElementById("location");
    const phonenumber = document.getElementById("phone");
    const email = document.getElementById('email');


    let letters = /^[A-Za-z]+$/;
    if (letters.test(surname.value) == false) {
        const surnameror = document.getElementById("surna");
        surnameror.type="text";
    }

    let givy = /^[A-Za-z]+$/;
    if (givy.test(givenname.value) == false) {
        const givennameerror = document.getElementById("givn");
        givennameerror.type="text";
    }

    let numbers = /^[0-9]+$/;
        if (phonenumber.value.match(numbers)) {
            const phonenumberesy = document.getElementById("phne");
            phonenumberesy.type="text";
        }
 
         let resy = /^[A-Za-z]+$/;
    if (resy.test(placeofresidence.value) == false) {
        const placeofresidencekast = document.getElementById("locton")
        placeofresidencekast.type="text";
    }

    let emailformat = /^\w+([\.-]?\w+)* @ w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailformat)) {
        const emailkap = document.getElementById('emal');
        emailkap.type="text";
    }


    
}
