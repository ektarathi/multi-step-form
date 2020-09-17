import * as React from 'react';
export interface AnswerProps {
    key: any;
    answerContent: any;
    answerType: any;
    answer: string; 
    onAnswerSelected: (event: any) => void;
}
 
const Answer: React.SFC<AnswerProps> = ({answerContent, answerType, answer, onAnswerSelected}: AnswerProps) => {
    return (  
        <li className="answerOption">
            <label className="container" htmlFor={answerType}>
                {answerContent}
                <input
                    type="checkbox"
                    checked={answerType === answer}
                    id={answerType}
                    value={answerType}
                    onChange={onAnswerSelected}
                />
                <span className="checkmark"></span>
            </label>
        </li>
    );
}
 
export default Answer;