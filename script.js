document.addEventListener('DOMContentLoaded', () => {
    const requestQuoteBtn = document.getElementById('request-quote');
    const visitShowroomBtn = document.getElementById('visit-showroom');
    const formContainer = document.getElementById('form-container');
    const calendarContainer = document.getElementById('calendar-container');
    const daysContainer = document.querySelector('.days');
    const selectedDateElement = document.getElementById('selected-date');
    const selectedDate = new Date(2024, 5, 13);
    const timeInput = document.getElementById('time');
    
    requestQuoteBtn.addEventListener('click', () => {
        formContainer.style.display = 'block';
        calendarContainer.style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
    });
    
    visitShowroomBtn.addEventListener('click', () => {
        formContainer.style.display = 'none';
        calendarContainer.style.display = 'block';
        document.querySelector('.container').style.display = 'flex';
    });

    // Generate days for the month
    function generateDays() {
        daysContainer.innerHTML = '';
        const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
        const lastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        
        for (let i = 1; i < firstDay; i++) {
            daysContainer.innerHTML += `<div></div>`;
        }
        
        for (let i = 1; i <= lastDate; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.addEventListener('click', () => {
                selectedDate.setDate(i);
                updateActiveDay();
                updateSelectedDate();
            });
            daysContainer.appendChild(dayDiv);
        }
        
        updateActiveDay();
    }

    function updateActiveDay() {
        document.querySelectorAll('.days div').forEach(day => {
            day.classList.remove('active');
            if (day.textContent == selectedDate.getDate()) {
                day.classList.add('active');
            }
        });
    }

    function updateSelectedDate() {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        selectedDateElement.textContent = selectedDate.toLocaleDateString('en-US', options);
    }

    document.querySelector('.prev').addEventListener('click', () => {
        selectedDate.setMonth(selectedDate.getMonth() - 1);
        generateDays();
        updateSelectedDate();
    });

    document.querySelector('.next').addEventListener('click', () => {
        selectedDate.setMonth(selectedDate.getMonth() + 1);
        generateDays();
        updateSelectedDate();
    });

    document.getElementById('submit').addEventListener('click', () => {
        alert(`Meeting scheduled on ${selectedDateElement.textContent} at ${timeInput.value}`);
    });

    generateDays();
    updateSelectedDate();
});
let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slides .slide').length;
    const slides = document.querySelector('.slides');
    function showSlide(index) {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(-${index * 31.5}%)`;
        if (index === totalSlides - 4) {
            setTimeout(() => {
                slides.style.transition = 'none';
                slides.style.transform = 'translateX(1)';
                currentSlide = 0;
            }, 500);
 }
        if (index < 0) {
            setTimeout(() => {
                slides.style.transition = 'none';
                slides.style.transform = `translateX(-${(totalSlides - 8) * 31.5}%)`;
                currentSlide = totalSlides - 8;
            }, 500); } }
    function moveSlide(step) {
        currentSlide += step;
        showSlide(currentSlide);
    }
    // Initialize slider
    showSlide(currentSlide);
// this is for the second slider 

    let currentSlide2 = 0;
    const totalSlides2 = document.querySelectorAll('.mainslides2 .slides2 .slide2-img1 .slide2-img2').length;
    const slides2 = document.querySelector('.mainslides2');

    function showSlide2(index) {
        slides2.style.transition = 'transform 0.5s ease-in-out';
        slides2.style.transform = `translateX(-${index * 101}%)`;

        if (index === totalSlides2 - 4) {
            setTimeout(() => {
                slides2.style.transition = 'none';
                slides2.style.transform = 'translateX(1)';
                currentSlide = 0;
            }, 500);
        }

        if (index < 0) {
            setTimeout(() => {
                slides2.style.transition = 'none';
                slides2.style.transform = `translateX(-${(totalSlides2 - 8) * 65}%)`;
                currentSlide2 = totalSlides2 - 8;
            }, 500);
        }
    }

    function moveSlide2(step) {
        currentSlide2 += step;
        showSlide2(currentSlide2);
    }

    // Initialize slider
    showSlide2(currentSlide2);

    




