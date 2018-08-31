import routeAction, { types as routeTypes }  from '../store/route'

const changePageFunc = (state, dispatch) => {
  // perform async function here
  console.log('log from src/services/route.js', state)
}

export default register => {
  register.listen(routeTypes.changePage, changePageFunc)
}
