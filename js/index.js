const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function changeTab(event) {
    event.preventDefault();
    const target = event.target.getAttribute("data-bs-target");
    const tab = new bootstrap.Tab(document.querySelector(target));
    tab.show();

    document.querySelector("#posGrad").scrollIntoView({
        behavior: 'smooth'
    });
}


const doubts = [
    { question: 'Qual é a duração do curso?', answer: '5 anos' },
    { question: 'Qual é a média salarial?', answer: 'R$ 8.479,39' },
    { question: 'Qual é a duração do curso?', answer: '5 anos' },
    { question: 'Qual é a média salarial?', answer: 'R$ 6.815,10' },
    { question: 'Qual é a duração do curso?', answer: '5 anos' },
    { question: 'Qual é a média salarial?', answer: 'R$ 7.899,19' },
    { question: 'Qual é a duração do curso?', answer: '5 anos' },
    { question: 'Qual é a média salarial?', answer: 'R$ 7.671,00' },
    { question: 'Qual é a duração do curso?', answer: '5 anos' },
    { question: 'Qual é a média salarial?', answer: 'R$ 8.231,78' },
];

function changeContent(el) {
    el.classList.remove('doubtsCircle');
    el.classList.add('doubtsSquare');
    let key = el.getAttribute('key');
    el.textContent = doubts[key].answer;
}

function resetContent(el) {
    el.classList.remove('doubtsSquare');
    el.classList.add('doubtsCircle');
    let key = el.getAttribute('key');
    el.textContent = doubts[key].question;
}


/*

   
    


    

*/