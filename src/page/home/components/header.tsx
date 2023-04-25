import * as Mui from '@mui/material'
import * as Component from 'src/components'
import * as HomeComponent from 'src/page/home/components'
import * as Assets from 'src/assets'
import * as Router from 'react-router-dom'

export const Header = () => {
  const Navigate = Router.useNavigate()
  const Location = Router.useLocation()

  return (
    <Mui.Grid container p={1}>
      <Mui.Grid xs={12} lg={1}></Mui.Grid>
      <Mui.Grid xs={12} lg={10}>
        <Mui.Stack>
          <Mui.Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            padding="20px 0"
          >
            <Component.ImageStack
              file={Assets.Logo}
              width="100px"
              fit="contain"
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                Navigate('/')
              }}
            />
            <Mui.Stack direction="row" spacing={2}>
              <Mui.Typography
                fontWeight={300}
                variant="caption"
                sx={{
                  cursor: 'pointer',
                  color: Location.pathname.includes('home') ? 'green' : '',
                }}
                onClick={() => {
                  Navigate('/home')
                }}
              >
                HOME
              </Mui.Typography>
              <Mui.Typography
                fontWeight={300}
                variant="caption"
                sx={{
                  cursor: 'pointer',
                  color: Location.pathname.includes('blog') ? 'green' : '',
                }}
                onClick={() => {
                  Navigate('/blog')
                }}
              >
                BLOG
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
          <Mui.Stack sx={{ position: 'relative' }}>
            <Component.ImageStack file={Assets.image5} height="450px" />
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Grid>
      <Mui.Grid xs={12} lg={1}></Mui.Grid>
    </Mui.Grid>
  )
}
