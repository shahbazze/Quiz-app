const choices = document.querySelectorAll(".multiple-choices");
const choicesOption=document.querySelectorAll(".multiple-choices-options");
const next = document.querySelector(".next-button");
const displayQuestion = document.querySelector(".mcq-question");
const attemptedMcq = document.querySelector(".attempt-mcq");
const timer = document.querySelector(".timer-display");
const wait=document.querySelector(".wait");  


// file1.js (script tag)
let j = 0;
let arr1 = [];
let AnswerIndex = -1;
let previousChoice = null; // Variable to store the previously clicked element

// questions
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Rome"],
    answer: 1, // Index of the correct choice ("Paris")
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
    ],
    answer: 0, // Index of the correct choice ("William Shakespeare")
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "NaCl", "O2"],
    answer: 0, // Index of the correct choice ("H2O")
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
    answer: 1, // Index of the correct choice ("Mount Everest")
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: 0, // Index of the correct choice ("Leonardo da Vinci")
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Earth", "Jupiter", "Saturn"],
    answer: 2, // Index of the correct choice ("Jupiter")
  },
  {
    question: "Which animal is known as the 'king of the jungle'?",
    choices: ["Lion", "Elephant", "Tiger", "Giraffe"],
    answer: 0, // Index of the correct choice ("Lion")
  },
  {
    question: "Who invented the telephone?",
    choices: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    answer: 1, // Index of the correct choice ("Alexander Graham Bell")
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Au", "Ag", "Fe", "Pb"],
    answer: 0, // Index of the correct choice ("Au")
  },
  {
    question: "What is the capital of Japan?",
    choices: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    answer: 1, // Index of the correct choice ("Tokyo")
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: 0, // Index of the correct choice ("Mars")
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: [
      "Harper Lee",
      "J.K. Rowling",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    answer: 0, // Index of the correct choice ("Harper Lee")
  },
  {
    question: "What is the chemical symbol for iron?",
    choices: ["Ir", "In", "Fe", "Au"],
    answer: 2, // Index of the correct choice ("Fe")
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    choices: ["China", "Japan", "India", "South Korea"],
    answer: 1, // Index of the correct choice ("Japan")
  },
  {
    question: "Who painted 'The Starry Night'?",
    choices: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: 0, // Index of the correct choice ("Vincent van Gogh")
  },
  {
    question: "What is the largest mammal?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: 1, // Index of the correct choice ("Blue Whale")
  },
  {
    question: "Which year did the Titanic sink?",
    choices: ["1912", "1905", "1920", "1933"],
    answer: 0, // Index of the correct choice ("1912")
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    choices: ["Bill Gates", "Alan Turing", "Steve Jobs", "Charles Babbage"],
    answer: 3, // Index of the correct choice ("Charles Babbage")
  },
  {
    question: "What is the chemical symbol for silver?",
    choices: ["Si", "S", "Ag", "Au"],
    answer: 2, // Index of the correct choice ("Ag")
  },
  {
    question: "Which animal is the symbol of wisdom?",
    choices: ["Eagle", "Owl", "Hawk", "Raven"],
    answer: 1, // Index of the correct choice ("Owl")
  },
];

let totalMcq = questions.length;
function numberofmcqtoTime() {
  return totalMcq * 60;
}
let timeInSeconds = numberofmcqtoTime(); // 5 minutes
function load() {
  if (j < totalMcq) {
    // Select all elements with the class 'multiple-choices-choices'
    let questionObject = questions[j];
    displayQuestion.innerHTML = `<h2>${questionObject.question}</h2>`;

    // Loop through each option and update its content
    choicesOption.forEach((option, index) => {
      // Example: Update the content of each option with a unique message

      let multipleChoiceArray = questionObject.choices[index];
      option.innerHTML = `${multipleChoiceArray}`;
    });
    showattempted();
    // for next question
    j++;
  }
}

choices.forEach((choice, index) => {
  choice.addEventListener("click", (e) => {
    AnswerIndex = index;
    const clickedElement = e.target;

    // Revert the background color of the previous choice to default
    if (previousChoice && previousChoice !== clickedElement) {
      previousChoice.style.backgroundColor = ""; // Set background color to default
    }

    // Change the background color of the clicked element
    clickedElement.style.backgroundColor = "#94A3B8"; // Or any other color you want

    // Update the previousChoice variable to the current clicked element
    previousChoice = clickedElement;
  });
});

next.addEventListener("click", (e) => {
  if (j < totalMcq) {
    // Set background color to default
    if (previousChoice != null) {
      previousChoice.style.backgroundColor = "";
    }
    arr1.push(AnswerIndex);

    //reset vraibale
    AnswerIndex = -1;
    //load next mcq content
    load();
  } else {
    // to save last answer
    arr1.push(AnswerIndex);
    // console.log(arr1);
    clickToShowresult();
  }
});
// initial load
function showattempted() {
  attemptedMcq.textContent = `${j + 1} Outof ${totalMcq}`;
}
function result() {
  let point = 0;
  questions.forEach((question, index) => {
    // console.log(question.answer);
    if (arr1[index] == question.answer) {
      point++;
    }
  });
  return point;
}
document.addEventListener("DOMContentLoaded", function () {
  // Your function call goes here
  load();
});
function clickToShowresult()
{
  wait.classList.remove('hidden');
wait.textContent='Click Here To Show Result'
  wait.addEventListener('click',(e)=>{
    
    Togglepage();
  });
}
// toggle function
function Togglepage(){
  const page1=document.querySelector(".page1");
  const page2=document.querySelector(".page2");
  
let t=5;

const tt=setInterval(() => {
wait.textContent=`wait for ${t} seconds result will show after ${t}`;
wait.classList.remove('hidden');
  t--;
  if(t<=-1)
  {
    clearInterval(tt);
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
  }
},1000);
  const marks=document.querySelector(".result-Marks");
  marks.textContent=`You got ${result()} Marks out of ${totalMcq}`;

}
// Display the initial time
updateTimer();

// Start the countdown timer
const timerInterval = setInterval(() => {
  // Decrease the time by 1 second
  timeInSeconds--;

  // Update the timer display

  // Check if the timer has reached zero
  if (timeInSeconds <= 0) {
    // Stop the timer
    clearInterval(timerInterval);
    // Perform any action when the timer reaches zero
    clickToShowresult();
  }
  // console.log("j is"+ j)
  if(j==20)
  {
    timer.textContent = `00:00`
  }
  else
  {
    timer.textContent = `${updateTimer()}`
  }
}, 1000); // Update the timer every second

function updateTimer() {
  // Calculate minutes and seconds
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  // Display the timer in the format MM:SS
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}






