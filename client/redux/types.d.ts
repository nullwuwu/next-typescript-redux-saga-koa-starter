import { StateType, ActionType } from 'typesafe-actions'

// rewrite typesafe-action module
declare module 'typesafe-actions' {
	export type Store = StateType<typeof import('./').default>

	export type RootState = StateType<typeof import('./root-reducer').default>

	export type RootAction = ActionType<typeof import('./root-actions').default>

	interface Types {
		RootAction: RootAction
	}
}
