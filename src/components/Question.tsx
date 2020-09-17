import * as React from 'react';
export interface QuestionProps {
    content: string;
}
 
const Question: React.SFC<QuestionProps> = ({content}: QuestionProps) => {
    return ( <h2 className="question">{content}</h2> );
}
 
export default Question;