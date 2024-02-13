import inquirer from "inquirer";
const quizQuestion = [
    {
        question: "What is the capital of pakistan? ",
        choices: [
            "Islamabad",
            "Lahore",
            "Faisalabad",
            "Gojra"
        ],
        correctAnswer: "Islamabad"
    },
    {
        question: "Who is the Prime Minister of pakistan? ",
        choices: [
            "Nawaz Shreef",
            "Imran Khan",
            "Asif Ali Zardari",
            "Saad Rizwi"
        ],
        correctAnswer: "Imran Khan"
    },
    {
        question: "Who is the founder of pakistan? ",
        choices: [
            "Quaid-e-Azam",
            "Chaudhary Rehmat ali",
            "Allama Iqbal",
            "Liaqat Ali"
        ],
        correctAnswer: "Quaid-e-Azam"
    },
    {
        question: "What is the independance of pakistan? ",
        choices: [
            "15 August 1947",
            "14 August 1947",
            "14 july 1947",
            "17 August 1947 "
        ],
        correctAnswer: "14 August 1947"
    },
    {
        question: "Who is the National Poet of pakistan? ",
        choices: [
            "Quaid-e-Azam",
            "Chaudhary Rehmat ali",
            "Allama Iqbal",
            "Liaqat Ali"
        ],
        correctAnswer: "Allama Iqbal"
    }
];
async function runQuiz() {
    let score = 0;
    console.log("Welcome to the quiz");
    for (const questionobj of quizQuestion) {
        const { userAnswer } = await inquirer.prompt([
            {
                type: "list",
                name: "userAnswer",
                message: questionobj.question,
                choices: questionobj.choices
            }
        ]);
        if (userAnswer === questionobj.correctAnswer) {
            console.log("Your answer is Correct!");
            score++;
        }
        //  else if (userAnswer != questionobj.correctAnswer){
        //     console.log("Your answer is incorrect");
        //  }
        else {
            console.log("Invalid option");
        }
    }
    console.log(` Quiz is Completed! Your score is ${score} out of ${quizQuestion.length} `);
}
runQuiz();
