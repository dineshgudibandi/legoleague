import { GlobalStyles } from 'styles/GlobalStyles'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Gallery from 'pages/Gallery'
import Slideshow from 'pages/Slideshow'
import Header from 'components/organisms/Header/'
import LightBox from 'components/organisms/Lightbox'

function App(): JSX.Element {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <LightBox />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/legoleague" exact>
            <Gallery />
          </Route>
          <Route path="/slideshow">
            <Slideshow />
          </Route>
          <Redirect to="/legoleague" />
        </Switch>
      </AnimatePresence>
    </Router>
  )
}

export default App
