

let regForm = document.getElementById('regForm')

regForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let valid = true

    //First Name Validation
    const firstName = document.getElementById('firstName').value.trim()
    const firstNameError = document.getElementById('firstNameError')

    if (firstName === ''){
        firstNameError.innerText = 'First Name is required'
        valid = false
    }else if(firstName.length < 2){
        firstNameError.textContent = 'First Name must be at least 2 char long' 
    }else{
        firstNameError.textContent= ''
    }


     //Email Name Validation
    
     const email = document.getElementById('email').value.trim()
     const emailError = document.getElementById('emailError')
     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if(!regexEmail.test(email)){
        emailError.textContent = 'Enter a valid email';
        valid = false;
     }else{
        emailError.textContent = ''
     }

     //Postal validation

     const zip = document.getElementById('zip').value.trim();
     const zipError = document.getElementById('zipError')

     const regexZip = /^[0-9]{6}$/;

     if(!regexZip.test(zip)){
        zipError.textContent = 'Enter a valid Postal / Zip Code'
        valid = false
     }else{
        zipError.textContent = ''
     }
     
     //Moblie validation

     const phone = document.getElementById('phone').value.trim();
     const phoneError = document.getElementById('phoneError')

     const regexPh = /^[0-9]{10}$/;

     if(!regexPh.test(phone)){
        phoneError.textContent = 'Enter a valid Mobile Number'
        valid = false
     }else{
        phoneError.textContent = ''
     }
     
     //Country Validation

     const country = document.getElementById('country').value;
     const countryError = document.getElementById('countryError')

     if (country === ''){
        countryError.textContent = 'Please Select a country !';
        valid = false
     }else{
        countryError.textContent = ''
     }

     const lastName = document.getElementById('lastName').value.trim()

     if(valid){

        alert('Form Submitted Successfully !')
        const formData = {
            name : firstName + " " + lastName,
            emailAdd : email,
            phNo : phone,
            country : country, 
        }

        console.log('form data : ', formData)

        e.target.submit();
     }

})