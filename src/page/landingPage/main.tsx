import * as Mui from '@mui/material'
import { Component } from '.'
export const Main = () => {
  return (
    <Mui.Stack>
      <Component.Header />
      <Component.Cards />
      <Component.Content />
      <Component.Footer />
    </Mui.Stack>
  )
}
