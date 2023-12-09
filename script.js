questioncollection = [
    {
        question: "Who is known as G.O.A.T ?",
        options: [
            { text: "Cristiano Ronadlo", answer: "correct" },
            { text: "Lionel Messi", answer: "wrong" },
            { text: "Erling Haaland", answer: "wrong" },
            { text: "Kylian Mbappe", answer: "wrong" }
        ]
    },
    {
        question: "Who is known as King of Cricket ?",
        options: [
            { text: "Virat Kohli", answer: "correct" },
            { text: "Joe Root", answer: "wrong" },
            { text: "Steve Smith", answer: "wrong" },
            { text: "Kane Williamson", answer: "wrong" }
        ]
    },
    {
        question: "The Best Cricket Nation of all time ?",
        options: [
            { text: "England", answer: "wrong" },
            { text: "India", answer: "wrong" },
            { text: "Australia", answer: "correct" },
            { text: "Pakistan", answer: "wrong" }
        ]
    },
    {
        question: "The Best Football Nation of all time ?",
        options: [
            { text: "England", answer: "wrong" },
            { text: "Italy", answer: "wrong" },
            { text: "Brazil", answer: "correct" },
            { text: "Germany", answer: "wrong" }
        ]
    }

];
const question = document.querySelector(".question");
const options = document.querySelector(".optionsection");
const nextbutton = document.querySelector(".nextbutton");
const next = document.querySelector(".next");

var Questionindexvalue = 0;
var Score = 0;
function start() {
    Questionindexvalue = 0;
    Score = 0;
    nextbutton.style.display = "none";
    next.innerHTML = "Next";
    getquestions();
    
}
function getquestions() {
    // options.innerHTML = "";
    ResetState();
    var questionvalue = questioncollection[Questionindexvalue];
    var questionnumber = Questionindexvalue + 1;
    question.innerHTML = questionnumber + ". " + questionvalue.question;
    var optionset = questioncollection[Questionindexvalue].options;
    optionset.forEach(option => {
        var optionval = document.createElement("button");
        optionval.innerHTML = option.text;
        optionval.classList.toggle("option");
        options.appendChild(optionval);
        optionval.dataset.answer = option.answer;
        optionval.addEventListener('click', function checkanswer(e) {
            if (e.target.dataset.answer === "correct") {
                e.target.classList.add("correct");
                Score++;
            }
            else {
                e.target.classList.add("wrong");
            }
            Array.from(options.children).forEach(optionanswers =>{
                if(optionanswers.dataset.answer === "correct"){
                    optionanswers.classList.add("correct");
                }
                optionanswers.disabled = "true";
            })
            next.innerHTML = "Next";
            nextbutton.style.display = "block";
        })

    });
}
start();
function ResetState() {
    nextbutton.style.display = "none"; 
    while (options.firstChild) {
        options.removeChild(options.firstChild)
    }
}
function handletonext(){
    Questionindexvalue++;
    if(Questionindexvalue < questioncollection.length){
        getquestions();
    }
    else{
        ResetState();
        next.innerHTML = "Play Again";
        nextbutton.style.display = "block";
        question.innerHTML = "Your Score is " + Score + "/" + questioncollection.length
    }
}
next.addEventListener("click", () =>{
    if(Questionindexvalue < questioncollection.length){
        handletonext();
    }else{
        start();
    }
})
