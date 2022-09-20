import { createSignal } from 'solid-js'
import solidjsLogo from '@/assets/solidjs.svg'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { Input } from '@/components/Inputs'
import { tw, apply } from 'twind'
import { css } from 'twind/css'
import { Spacer, Flex, Row, Col, Centered, Interspaced } from '@/components/Layout'

const imgCls = apply`p-0 w-32 h-32`
const imgClsVite = apply`hover:${css({ willChange: 'filter', filter: 'drop-shadow(0 0 2em #646cffaa)' })}`
const imgClsSolidjs = apply`hover:${css({ willChange: 'filter', filter: 'drop-shadow(0 0 2em #487ae6aa)' })}`

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class="App">
      <div class={tw`flex justify-center`}>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class={tw(imgCls, imgClsVite)} alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidjsLogo} class={tw(imgCls, imgClsSolidjs)} alt="Solid.js logo" />
        </a>
      </div>
      <Spacer />
      <h1>Vite + Solid.js</h1>
      <Spacer />
      <Card float={2} hover:float={4}>
        <Col gutter='4'>
          <Input type='text' placeholder='Text input'/>
          <Input type='number' placeholder='Number input'/>
          <Input type='tel' placeholder='Phone input'/>
          <Input type='email' placeholder='Email input'/>
          <Input type='password' placeholder='Password input'/>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count()}
          </Button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </Col>
      </Card>
      <Spacer />
      <p class="read-the-docs">
        Click on the Vite and Solid.js logos to learn more
      </p>
    </div>
  )
}

export default App
