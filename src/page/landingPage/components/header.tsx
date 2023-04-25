import * as Mui from '@mui/material'
import * as Component from 'src/components'
import * as Assets from 'src/assets'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import * as Router from 'react-router-dom'

export const Header = () => {
  const Navigate = Router.useNavigate()

  return (
    <Mui.Stack height="700px" paddingBottom={8}>
      <Mui.Grid container>
        <Mui.Grid xs={12} lg={6}>
          <Component.ImageStack file={Assets.Basketball} height="700px" />
        </Mui.Grid>
        <Mui.Grid xs={12} lg={6}>
          <Mui.Stack bgcolor="#F8F7F5" height="100%" position="relative">
            <Mui.Stack
              direction="row"
              spacing={2}
              sx={{ padding: '40px', alignSelf: 'flex-end' }}
            >
              <Mui.Typography
                fontWeight={300}
                variant="caption"
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  Navigate('/home')
                }}
              >
                HOME
              </Mui.Typography>
              <Mui.Typography
                fontWeight={300}
                variant="caption"
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  Navigate('/home')
                }}
              >
                BLOG
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Stack sx={{ padding: '20px 70px' }} spacing={3}>
              <Mui.Typography sx={{ color: '#94939D', fontSize: '13px' }}>
                BY EMMA / 02 MAY 2022
              </Mui.Typography>
              <Mui.Typography variant="h4" maxWidth="400px">
                Life is a flower of which love is the honey.
              </Mui.Typography>
              <Mui.Typography
                variant="caption"
                color="#343434"
                maxWidth="400px"
              >
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees
              </Mui.Typography>
              <Mui.Stack
                sx={{ alignItems: 'center' }}
                direction="row"
                spacing={1}
              >
                <Mui.Typography
                  sx={{
                    color: '#94939D',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                >
                  Read More
                </Mui.Typography>
                <ArrowForwardIcon sx={{ color: '#94939D', fontSize: '13px' }} />
              </Mui.Stack>
            </Mui.Stack>

            <Mui.Stack
              direction="row"
              sx={{
                display: { xs: 'none', lg: 'flex' },
                position: 'absolute',
                bottom: '0',
                left: '-80px',
              }}
            >
              <Component.ImageStack
                file={Assets.image3}
                height="250px"
                width="200px"
              />
              <Component.ImageStack
                file={Assets.image1}
                height="250px"
                width="200px"
              />
              <Component.ImageStack
                file={Assets.image4}
                height="250px"
                width="200px"
              />
              <Component.ImageStack
                file={Assets.image3}
                height="250px"
                width="200px"
              />
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Stack>
  )
}
