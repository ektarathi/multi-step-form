import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
export interface ResultProps {}

const Result: React.SFC<ResultProps> = () => {
	const resultData = useSelector((state: AppState) => state.result);
	
	return (
		<div className="result">
			<div className="result-data">
                <h2>Thank you for submitting your choices:</h2>
				{resultData.resultList.map((data: any, index: any) => {
					return <p key={index}>{data.result}</p>;
				})}
                <h3>We will get back to you shortly.</h3>
			</div>
		</div>
	);
};

export default Result;
