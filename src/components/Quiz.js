import React, { useState, useEffect } from 'react';
import quizData from '../quizData.json'; // Adjusted path to point to the correct location
import '../Quiz.css';

const Quiz = () => {
  // Shuffle function to randomize answers/options
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  };

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  // Shuffle questions and options on component mount
  useEffect(() => {
    // Shuffle the questions
    const shuffledQuestions = [...quizData]; // Copy quizData
    shuffleArray(shuffledQuestions);

    // Shuffle the options for each question
    shuffledQuestions.forEach((question) => {
      shuffleArray(question.options);
    });

    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const isAnswerCorrect = answer === questions[currentQuestion].answer;

    if (isAnswerCorrect) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }
    setIsCorrect(isAnswerCorrect);

    // Move to the next question after 3 seconds
    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 3000);
  };

  if (questions.length === 0) return null; // Render nothing while questions are loading

  return (
    <div className="quiz-container">
      <h3>{questions[currentQuestion].question}</h3>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              selectedAnswer
                ? option === questions[currentQuestion].answer
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            onClick={() => handleAnswerClick(option)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="score-info">
        <p>
          Correct: {score.correct} Wrong: {score.wrong}
        </p>
      </div>
    </div>
  );
};

export default Quiz;
