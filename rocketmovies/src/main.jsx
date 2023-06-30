import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

// import { Home } from './pages/Home'
// import { SignIn } from './pages/SignIn'
// import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
