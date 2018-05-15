import { combineReducers } from 'redux'
import teams from './teams'
import players from './players'
import calculations from './calculations'
import isFetching from './isFetching'

const nhlStatsApp = combineReducers({
  isFetching,
  // teams,
  // players,
  calculations
})

export default nhlStatsApp
