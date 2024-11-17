
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={defaultTheme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
)
