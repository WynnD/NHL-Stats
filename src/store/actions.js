import axios from 'axios'
import { dispatch } from 'redux'
import config from 'config'

const apiConfig = config.get('apiConfig')
const API_URL = `http://${apiConfig.host}:${apiConfig.port}/api`

const GET_TEAMS = 'GET_TEAMS'
const GET_TEAM_INFO = 'GET_TEAM_INFO'
const GET_TEAM_ROSTER = 'GET_TEAM_ROSTER'
const GET_PLAYER_INFO = 'GET_PLAYER_INFO'
const GET_PLAYER_STATS = 'GET_PLAYER_STATS'
const GET_TEAM_PLAYOFF_GAMES = 'GET_TEAM_PLAYOFF_GAMES'

function getTeamPlayoffGames () {
  dispatch({
    type: GET_TEAM_PLAYOFF_GAMES,
    payload: axios.get(`${API_URL}/stats/team/postseason/games`)
  })
}

export default {
  getTeamPlayoffGames,
  GET_TEAM_PLAYOFF_GAMES
}
