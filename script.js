
let nav = document.querySelector('.nav');
let nav_links = document.querySelectorAll('.nav_link');

nav.addEventListener('click', (event) => {
    nav_links.forEach((elem) => {
        elem.classList.remove('active');
        event.target.classList.add('active');
    });   
});

nav_links.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        let anchor = item.getAttribute('href').substr(1);

        document.getElementById(anchor).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//слайдер

let slider = document.querySelector('.slider');
let prev = document.querySelector('.arrow-left');
let next = document.querySelector('.arrow-right');
let slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function(){
    showSlides(slideIndex -= 1);
    if (slider.classList.contains('blue_bg')) {
        slider.classList.remove('blue_bg');
    } else slider.classList.add('blue_bg');
});

next.addEventListener('click', function(){
    showSlides(slideIndex += 1);
    if (slider.classList.contains('blue_bg')) {
        slider.classList.remove('blue_bg');
    } else slider.classList.add('blue_bg');
});

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-items");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

//черный экран

let phone_one = document.querySelector('.vertical-phone');
let phone_two = document.querySelector('.horizontal-phone');
let bg_vertical_phone = document.querySelector('.bg-vertical-phone');
let bg_horizontal_phone = document.querySelector('.bg-horizontal-phone');


phone_one.addEventListener('click', function() {
    bg_vertical_phone.classList.toggle('black');
});

phone_two.addEventListener('click', function() {
    bg_horizontal_phone.classList.toggle('black');
})

//добавление активного класса тегам

let portfolioMenu = document.querySelector('.tags');
let portfolioLinks = document.querySelectorAll('.tag-link');

portfolioMenu.addEventListener('click', function () {
    portfolioLinks.forEach(function (item) {
        item.classList.remove('active-btn');
        event.target.classList.add('active-btn');
    });
});

// перемешивание изображений

let list_images = document.querySelector('.layout-4-columns');
let images = document.querySelectorAll('.image');
let portfolioBtnAll = document.getElementById('tag-all');
let portfolioBtnWeb = document.getElementById('tag-web');
let portfolioBtnDesign = document.getElementById('tag-design');
let portfolioBtnArtwork = document.getElementById('tag-artwork');

function shufflePictures(event) {
    if (!event.target.classList.contains('active-btn')) {
        for (let i = images.length; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            list_images.insertBefore(images[randomIndex], images[i]);
        }
    }
    
}

portfolioBtnAll.addEventListener('click', shufflePictures);
portfolioBtnWeb.addEventListener('click', shufflePictures);
portfolioBtnDesign.addEventListener('click', shufflePictures);
portfolioBtnArtwork.addEventListener('click', shufflePictures);

//подсветка границы изображения

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (event) {
        images.forEach(function (item) {
            if (event.target !== item) {
                item.classList.remove('images-border');
            }
        });
        if (event.target.classList.contains('images-border')) {
            event.target.classList.remove('images-border');
        } else event.target.classList.add('images-border');
    });
}


// форма

let submitBtn = document.querySelector('.btn'),
    formWindow = document.querySelector('.modal-window'),
    contentWindow = document.querySelector('.modal-window__content'),
    okFormBtn = document.querySelector('.modal-window__submit-btn'),
    formInputs = document.querySelectorAll('.field'),
    formTextarea = document.querySelector('.textarea_field'),
    subjectText = document.querySelector('.modal-window__subject'),
    describeText = document.querySelector('.modal-window__describe'),
    nameHint = document.querySelector('.quote-name'),
    mailHint = document.querySelector('.quote-mail'),
    mailSecondHint = document.querySelector('.quote-mail-second');

function cleanForm() {
    formInputs[0].value = '';
    formInputs[1].value = '';
    formInputs[2].value = '';
    formTextarea.value = '';
    contentWindow.style.width = '350px';
    contentWindow.style.height = '200px';
}

okFormBtn.addEventListener('click', function () {
    formWindow.classList.add('none');
    cleanForm();
});

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (formInputs[0].value === '') {
        nameHint.classList.remove('none');
    }

    if (formInputs[1].value === '') {
        mailHint.classList.remove('none');
    } else if (formInputs[1].value.search(/.+@.+\..+/i) === -1) {
        mailSecondHint.classList.remove('none');
    }

    if (formInputs[0].value !== '' && formInputs[1].value.search(/.+@.+\..+/i) !== -1) {
        if (formInputs[2].value === '') {
            subjectText.textContent = 'Тема: Без темы'
        } else subjectText.textContent = 'Тема: ' + formInputs[2].value;

        if (formTextarea.value === '') {
            describeText.textContent = 'Описание: Без описания'
        } else describeText.textContent = 'Описание: ' + formTextarea.value;


        if (formTextarea.value.length > 101 && formTextarea.value.length <= 401) {
            contentWindow.style.width = '410px';
            contentWindow.style.height = '300px';
        }

        if (formTextarea.value.length >= 402 && formTextarea.value.length < 601) {
            contentWindow.style.width = '440px';
            contentWindow.style.height = '370px';
        }

        if (formTextarea.value.length >= 601 && formTextarea.value.length <= 1000) {
            contentWindow.style.width = '520px';
            contentWindow.style.height = '450px';
        }

        formWindow.classList.remove('none');
    }
});

formInputs[0].addEventListener('click', function () {
    nameHint.classList.add('none');
});

formInputs[1].addEventListener('click', function () {
    mailHint.classList.add('none');
    mailSecondHint.classList.add('none');
});