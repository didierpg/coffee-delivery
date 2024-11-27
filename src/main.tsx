import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
