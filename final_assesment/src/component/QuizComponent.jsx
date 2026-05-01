import { useState } from 'react';
import { QUESTIONS } from '../data/questions';
export default function QuizComponent() {
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [isAnswered, setIsAnswered] = useState(false);
      const [score, setScore] = useState(0);
      const [showScore, setShowScore] = useState(false);
    
      const currentQuestion = QUESTIONS[currentQuestionIndex];
    
      const handleOptionClick = (index) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);
      };
    
      const handleNextQuestion = () => {
        if (selectedOption === currentQuestion.answer - 1) {
          setScore(prevScore => prevScore + 1);
        }

        if (currentQuestionIndex < QUESTIONS.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption(null);
          setIsAnswered(false);
        } else {
          setShowScore(true);
        }
      };
    
      const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setShowScore(false);
      };
    
    return(<>

    <div className="app-container">
          {showScore ? (
            <div className="quiz-card score-container">
              <div className="header">
                <h1>Quiz Completed!</h1>
              </div>
              <div className="score-circle">
                {score}/{QUESTIONS.length}
              </div>
              <p className="question-text">
                {score === QUESTIONS.length
                  ? 'Perfect score! You are a Python expert'
                  : score > QUESTIONS.length / 2
                  ? 'Great job! You know your stuff'
                  : 'Good effort! Keep practicing'}
              </p>
              <button className="restart-btn" onClick={handleRestart}>
                Retake Quiz
              </button>
            </div>
          ) : (
            <div className="quiz-card">
              <div className="header">
                <h1>Python Exception Quiz</h1>
                <div className="progress">
                  Question {currentQuestionIndex + 1} of {QUESTIONS.length}
                </div>
              </div>
    
              <div className="question-section">
                <h2 className="question-text">{currentQuestion.q}</h2>
                
                {currentQuestion.code && (
                  <div className="code-block">
                    {currentQuestion.code}
                  </div>
                )}
    
                <div className="options-grid">
                  {currentQuestion.options.map((option, index) => {
                    let buttonClass = 'option-btn';
                    if (isAnswered) {
                      if (index === currentQuestion.answer - 1) {
                        buttonClass += ' correct';
                      } else if (index === selectedOption) {
                        buttonClass += ' wrong';
                      }
                    }
    
                    return (
                      <button
                        key={index}
                        className={buttonClass}
                        onClick={() => handleOptionClick(index)}
                        disabled={isAnswered}
                      >
                        <span className="option-letter">{String.fromCharCode(65 + index)}.</span>
                        <span className="option-text">{option}</span>
                      </button>
                    );
                  })}
                </div>
    
                {isAnswered && (
                  <div className="feedback-container">
                    <h4 className={selectedOption === currentQuestion.answer -1 ? 'correct-text' : 'wrong-text'}>
                      {selectedOption === currentQuestion.answer - 1 ? '✓ Correct!' : '✗ Incorrect'}
                    </h4>
                    <h4>Total Score: {score}/{QUESTIONS.length}</h4>
                    <p>{currentQuestion.feedback}</p>
                    <button className="next-btn" onClick={handleNextQuestion}>
                      {currentQuestionIndex === QUESTIONS.length - 1 ? 'Show Results' : 'Next Question'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
            </>
    )
    
    
}