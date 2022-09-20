import { render } from 'solid-js/web'
import App from '@/App'
import { css } from 'twind/css'
import { setup } from 'twind'
import coreStyles from '@/index.css'

setup({
  // preflight: (preflight, { theme }) => ({
  //   ...preflight,
  //   ...css(coreStyles)
  // }),
  preflight: (preflight, { theme }) => css`
    ${preflight}
    ${coreStyles}
  `,
})

render(() => {
  return (
    <App />
  )
}, document.getElementById('root'))
