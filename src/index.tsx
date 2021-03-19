import { render } from 'react-dom'
import { MoviesProvider } from './hooks/useMovies'

import { App } from './App'

render(
  <MoviesProvider>
    <App />, 
  </MoviesProvider>,
  document.getElementById('root')
)