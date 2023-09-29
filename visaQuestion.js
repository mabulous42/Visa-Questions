let displayTag = document.getElementById('display')

let interviewQuestions = [
    'Pass me your passport and i20',
    'Why are you going to the USA?',
    'Why do you want to go for your master’s degree now?',
    'Why did you choose to study in the United States, and why did you choose this University?',
    'Have you ever traveled to the USA before?',
    'What is your study plan?',
    'What do you do currently?',
    'What is your Post Study Plan?',
    'How do you intend to pay for your deficit?',
    'Why will your uncle be paying that much for your study'
]
let num = 1;
console.log(num);

function next() {
    if (interviewQuestions.length === 1) {
        return
    } else {
        interviewQuestions.splice(num-1, 1)
        num = Math.floor(Math.random() * interviewQuestions.length) + 1;
        showQuestions()        
    }
}
// next()
function showQuestions() {
    displayTag.innerHTML = `
    <div class='w-100 ps-5'>
        <h1>${interviewQuestions[num - 1]}</h1>        
    </div>
    <div class='mt-5 text-end'>
        <button class='btn btn-success mt-5' onclick='next()'>NEXT</button>
    </div>
    `
}

showQuestions()

