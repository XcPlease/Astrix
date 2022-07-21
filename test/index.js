const all = document.querySelector('show-me')



const eyes = document.getElementById('eyes')
const eyes_button = document.getElementById('eyeb')

const nose = document.getElementById('nose')
const nose_button = document.getElementById('noseb')

const eyebrow = document.getElementById('eyebrow')
const eyebrow_button = document.getElementById('eyebrowb')

nose.style.display = 'none', eyebrow.style.display = 'none';


nose_button.addEventListener('click', show_nose);


function show_nose() {
nose.style.display = 'block'
eyes.style.display = 'none', eyebrow.style.display = 'none';
nose.style.transition = '0.4s';
}

eyes_button.addEventListener('click', show_eyes);
function show_eyes() {
eyes.style.display = 'block'
nose.style.display = 'none', eyebrow.style.display = 'none';
}

eyebrow_button.addEventListener('click', show_eyebrow);

function show_eyebrow() {
eyebrow.style.display = 'block'
nose.style.display = 'none', eyes.style.display = 'none';
}