"use client";

import { useState } from "react";

function QuizAll() {
  const AllQuestions = [
    {
      Question: "What is the chemical symbol for gold?",
      Answer: "Au",
      Options: ["Au", "Ag", "Fe", "Cu"],
    },
    {
      Question: "What planet is known for its rings?",
      Answer: "Saturn",
      Options: ["Saturn", "Uranus", "Neptune", "Paris"],
    },
    {
      Question: "What is the powerhouse of the cell?",
      Answer: "Mitochondria",
      Options: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"],
    },
    {
      Question: "Which part of the human brain is responsible for balance?",
      Answer: "Cerebellum",
      Options: ["Cerebellum", "Cerebrum", "Brainstem", "Pineal Gland"],
    },
    {
      Question: "What process do plants use to convert sunlight into energy?",
      Answer: "Photosynthesis",
      Options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
    },
    {
      Question: "What is the most abundant gas in the Earth's atmosphere?",
      Answer: "Nitrogen",
      Options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    },
    {
      Question: "Which element is a liquid at room temperature?",
      Answer: "Mercury",
      Options: ["Hydrogen", "Oxygen", "Carbon", "Mercury"],
    },
    {
      Question: "What is the study of living organisms called?",
      Answer: "Biology",
      Options: ["Biology", "Chemistry", "Physics", "Geology"],
    },
    {
      Question: "What force keeps planets in orbit around the sun?",
      Answer: "Gravity",
      Options: ["Magnetism", "Gravity", "Inertia", "Friction"],
    },
    {
      Question: "What type of bond involves the sharing of electron pairs between atoms?",
      Answer: "Covalent Bond",
      Options: ["Ionic Bond", "Covalent Bond", "Van der Waals Bond", "Hydrogen Bond"],
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  function handleAnswer(selectedAnswer){

    if (selectedAnswer === AllQuestions[index].Answer) {

      setScore(score + 1);

    }

    if (index < AllQuestions.length - 1) {

        setTimeout(() => {

            setIndex(index + 1);

        }, 1000);
   
    } else {

      setResult(true);

    }

  };

  function resetQuiz(){

    setIndex(0);
    setScore(0);
    setResult(false);

  };

  return (
    <div className="h-[100vh] w-full bg-[#001e4d] flex justify-center items-center">
      <div className="p-5 w-[350px] rounded-md bg-white text-black">
        {result ? (
          <div className="text-center">
            <h2 className="text-[25px] mt-[10px]">
              Your Score: {score}/{AllQuestions.length}
            </h2>
            <button
              className="mt-5 h-[35px] w-full bg-blue-600 rounded text-white"
              onClick={resetQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-[25px] mt-[10px] text-center">
              {AllQuestions[index]?.Question}
            </h2>
            <hr className="mt-[10px] mb-[10px]" />
            <div className="answer-buttons flex flex-col text-white gap-2 mt-[50px]">
              {AllQuestions[index].Options.map((option, i) => (
                <button
                  
                  className="h-[35px] w-full bg-blue-600 rounded"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizAll;
