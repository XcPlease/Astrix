const male_button = document.getElementById('male')
const female_button = document.getElementById('female')
const optionFinal = document.getElementById('option')
const genderFinal = document.getElementById('gender')

const submit_button = document.getElementById('submit')
submit_button.style.display = 'none'

function optionMale() {
    optionFinal.innerHTML = 'You Chose ‎';
    genderFinal.innerHTML = 'Male'
    submit_button.style.display = 'inline'
}



function optionFemale() {
    optionFinal.innerHTML = 'You Chose ‎ ';
    genderFinal.innerHTML = 'Female'
    submit_button.style.display = 'inline'
}