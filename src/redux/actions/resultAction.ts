export interface ISetSuccessAction {
    readonly type: 'SET_RESULT';
    payload: string
}

export type SuccessAction =
| ISetSuccessAction