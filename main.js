// collecting the ids

let inputLengthOfPass = document.getElementById('input')
let output = document.getElementById('output')
let userName = document.getElementById('username')
let storeData = document.getElementById('store')

// declaring  password elements

const UpperCL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const LowerCL = 'abcdefghijklmnopqrstuvwxyz'

const Numbers = '0123456789'

const SpecialC = '!@#$%^&*(){}[]'

const mixCh = UpperCL + LowerCL + Numbers + SpecialC 

// trigering the btn
document.getElementById('action').addEventListener('click', function() {
    // assigning random value to the pass
    let password = '';
    password += UpperCL[Math.floor(Math.random() * UpperCL.length)]
    password += LowerCL[Math.floor(Math.random() * LowerCL.length)]
    password += Numbers[Math.floor(Math.random() * Numbers.length)]
    password += SpecialC[Math.floor(Math.random() * SpecialC.length)]

    // assigining leftover value regarding the length value
    while(inputLengthOfPass.value > password.length) {
        password += mixCh[Math.floor(Math.random() * mixCh.length)]
    }

    // passing the final value to the password and store field 
    output.value = password
    storeData.innerHTML += ' # ' + userName.value + ' - ' + password 
    console.log(storeData)

})