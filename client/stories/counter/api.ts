import { CounterResponse } from 'CounterModel'

export const getCounterAPI = (): Promise<CounterResponse | void> => {
	return fetch('https://swapi.co/api/people/1/')
		.then((res) => res.json())
		.then(() => {
			return { count: 12 }
		})
		.catch((err) => console.log(err))
}
