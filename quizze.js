const quizData =[
    {
        question:'who is take the ballon d"or 2023',

        a:'messi',
        b:'mpappe',
        c:'haland',
        d:'ronaldo',
        correct:'a'
    },{
        question:'what is the backend language programming ?',
        a:'css',
        b:'php',
        c:"xml",
        d:'figma',
        correct:'b'
    }
    ,{
        question:'what is the capital of morroco ?',
        a:'london',
        b:'roma',
        c:"niger",
        d:'rabat',
        correct:'d'
    },
    {
        question:'who is the creator of facebook?',
        a:'obama',
        b:'lionnel messi',
        c:"Mark Zuckerberg ",
        d:'donald trumb',
        correct:'c'
    },
    {
        question:'what does HTML stand for?',
        a:'Hypertext Markup language ',
        b:'Cascading style sheet',
        c:"Jason object notation ",
        d:'Helicopters motorboats margin left',
        correct:'a'
    },

]
const quiz=document.getElementById('quiz');
const questionEl=document.getElementById('question') ;

const a_text=document.getElementById('a_text') ;
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');

const sub_btn=document.getElementById('btn');

let inputs=document.querySelectorAll('.allanswer');


let currentquiz=0;

let answer=undefined;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectanswers();
    const currentQuizData=quizData[currentquiz]
    
    

    questionEl.innerHTML=currentQuizData.question;

    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;




}
function getslected(){
    let answer=undefined;

    
    inputs.forEach(inputEl => {

        if(inputEl.checked){

            answer=inputEl.id;

            


        }
        
        
    });
    return answer;
}

function deselectanswers(){

    inputs.forEach(inputEl => {
inputEl.checked=false;
        
        
    });

    

}


sub_btn.addEventListener('click',() => {

    const answer=getslected();
    

if(answer){
    

    if(answer===quizData[currentquiz].correct){
        score++;
    }
    

    
    currentquiz++;
    
    if(currentquiz<quizData.length){

        
    
    loadQuiz();
    
    
    }
    

    
    
else{
        quiz.innerHTML=
`<h2>You answered corrctly at ${score}/${quizData.length}</h2><button class="btn" onclick="location.reload()">Reload</button>`

}
        
}
        
});