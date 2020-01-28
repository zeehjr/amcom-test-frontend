import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Game from './pages/Game'

const routes = [
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    exact: true,
    component: Register
  },
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/game',
    exact: true,
    component: Game
  }
  // {
  //   path: '/leaderboard',
  //   exact: true,
  //   component: Leaderboard
  // }
]

export default routes
