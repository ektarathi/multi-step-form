import { SuccessAction } from "../actions/resultAction";

type ResultState = {
	resultList: any[],
	answer: string
};

const initialState: ResultState = {
	resultList: [],
	answer: ""
};

const commentReducer = (
	state: ResultState = initialState,
	action: SuccessAction
) => {
    //console.log('result:', state.resultList);
	switch (action.type) {
		case "SET_RESULT":
			return {
				...state,
				resultList: [
					...state.resultList, 
					{
						result: action.payload,
						
					}
				],
			};
		default:
			return state;
	}
};

export default commentReducer;
