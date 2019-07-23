import { DECREMENT_NUMBER, INCREMENT_NUMBER } from '../../actionTypes'

export interface INCREMENT {
    type: INCREMENT_NUMBER;
  }

export interface DECREMENT {
    type: DECREMENT_NUMBER;

}

export type ALL = INCREMENT | DECREMENT;

export function countIncrease(): INCREMENT {
    return { type: INCREMENT_NUMBER };
}

export function countDecrease(): DECREMENT {
    return { type: DECREMENT_NUMBER };
}
