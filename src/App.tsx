import React from 'react';
import './App.scss';
import { useDispatch } from "react-redux";
import { SuccessAction } from "./redux/actions/resultAction";
import quizQuestions from "./question.js";
import QuizData from './components/QuizData';
import Result from './components/Result';

function App() {
  const [counter, setCounter] = React.useState(0);
  const [questionId, setQuestionId] = React.useState(1);
  const [question, setQuestion] = React.useState('');
  const [answerOptions, setAnswerOptions] = React.useState([] as any);
  const [answer, setAnswer] = React.useState('');
  const [result, setResult] = React.useState(false);

  const resultDispatch = useDispatch<React.Dispatch<SuccessAction>>();

  React.useEffect(() => {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      answerArray(question.answers)
    );
    setQuestion(quizQuestions[0].question);
    setAnswerOptions(shuffledAnswerOptions[0]);
  }, [])

  const answerArray = (array: any) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    return array;
  }

  const handleSelectedValue = (event: any) => {
    let value = event.currentTarget.value;
    setAnswer(value);
    resultDispatch({ type: "SET_RESULT", payload: value });
  
    if (questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResult(true), 300);
    }
  }

  const setNextQuestion = () => {
    let nextQuestionCounter = counter + 1;
    let nextQuestionId = questionId + 1;
    let nextQuestion = quizQuestions[nextQuestionCounter].question;
    let answerArray = quizQuestions[nextQuestionCounter].answers;
    setCounter(nextQuestionCounter);
    setQuestionId(nextQuestionId);
    setQuestion(nextQuestion);
    setAnswerOptions(answerArray);
    setAnswer('');
  }

  const renderQuiz = () => {
    return (
      <QuizData
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={handleSelectedValue}
      />
    );
  }

  const renderResult = () => {
    return <Result />;
  }
  
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <div className="quiz-display">
        { result ? renderResult() : renderQuiz()}
      </div>
    </div>
  );
}

export default App;
