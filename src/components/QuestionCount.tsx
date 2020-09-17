import * as React from "react";
export interface QuestionCountProps {
	counter: number;
	total: number;
}

const QuestionCount: React.SFC<QuestionCountProps> = ({
	counter,
	total,
}: QuestionCountProps) => {
	return (
		<div className="questionCount">
			Question <span>{counter}</span> of <span>{total}</span>
		</div>
	);
};

export default QuestionCount;
