import {
	DECREMENT_NUMBER,
	INCREMENT_NUMBER,
	ASYNC_INCREMENT_NUMBER,
} from '../actionTypes/count'

export interface INCREMENT {
	type: INCREMENT_NUMBER
}

export interface DECREMENT {
	type: DECREMENT_NUMBER
}

export interface ASYNC_INCREMENT {
	type: ASYNC_INCREMENT_NUMBER
}

// +
export function countIncrease(): INCREMENT {
	return { type: INCREMENT_NUMBER }
}

// -
export function countDecrease(): DECREMENT {
	return { type: DECREMENT_NUMBER }
}

// async +
export function asyncIncrease(): ASYNC_INCREMENT {
	return { type: ASYNC_INCREMENT_NUMBER }
}

export type HandleCountInCrease = ReturnType<typeof countIncrease>
export type HandleCountDeCrease = ReturnType<typeof countDecrease>
export type HandleAsyncCountInCrease = ReturnType<typeof asyncIncrease>

export type CountActionsTypes =
	| HandleCountInCrease
	| HandleCountDeCrease
	| HandleAsyncCountInCrease
