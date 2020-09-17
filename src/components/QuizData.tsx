import * as React from 'react';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './Answer';
export interface QuizDataProps {
    answer: string; 
    answerOptions: { type: string; content: string; }[]; 
    questionId: number; 
    question: string; 
    questionTotal: number; 
    onAnswerSelected: (event: any) => void;
}
 
const QuizData: React.SFC<QuizDataProps> = ({answer, answerOptions, questionId, question, questionTotal, onAnswerSelected}: QuizDataProps) => {
    
    const renderAnswerOptions = (key: any) => {
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={answer}
            onAnswerSelected={onAnswerSelected}
          />
        );
    }
    
    console.log()
    return (
        <div key={questionId} className="questionBlock">
            <QuestionCount counter={questionId} total={questionTotal} />
            <Question content={question} />
            <ul className="answerOptions">
            {answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
}
 
export default QuizData;