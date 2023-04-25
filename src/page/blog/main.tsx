import * as Mui from '@mui/material'
import * as Component from './components'
import * as MainComponent from 'src/page/component'
export const Main = () => {
  return (
    <Mui.Stack>
      <Component.Header />
      {/* <Component.Cards /> */}
      <Component.Content />
      <MainComponent.Footer />
    </Mui.Stack>
  )
}
