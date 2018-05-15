import { GET_TEAM_PLAYOFF_GAMES } from '../actions'

export default function calculations (state = {}, action) {
  switch (action.type) {
    case `${GET_TEAM_PLAYOFF_GAMES}_FULFILLED`:
      const data = action.payload.data
      return Object.assign({}, state, {
        calculations: {
          ...state.calculations,
          MostPostSeasonGames: data
        }
      })
    default:
      return state
  }
}
