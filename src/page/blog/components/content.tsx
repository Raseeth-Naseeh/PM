import * as Mui from '@mui/material'
import * as Component from 'src/components'
import * as Assets from 'src/assets'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const Content = () => {
  const Data = [
    {
      pic: Assets.image2,
      title: 'Travel',
      content: `Sheets containing Ipsum 
      passages & more`,
      name: '  By Michel Jhon / 02 May 2021',
    },
    {
      pic: Assets.image3,
      title: 'Fashion',
      content: `Alteration in some form, 
      by injected humour`,
      name: '  By Nathan / 02 May 2021',
    },
    {
      pic: Assets.image4,
      title: 'LifeStyle',
      content: `Control about the blind texts 
      it almost unorthographic`,
      name: '  By Michel Jhon / 02 May 2021',
    },
  ]
  const Data2 = [
    {
      pic: Assets.image8,
      title: 'Travel',
      content: `Sheets containing Ipsum 
      passages & more`,
      name: '  By Michel Jhon / 02 May 2021',
    },
    {
      pic: Assets.image5,
      title: 'Fashion',
      content: `Alteration in some form, 
      by injected humour`,
      name: '  By Nathan / 02 May 2021',
    },
    {
      pic: Assets.image7,
      title: 'LifeStyle',
      content: `Control about the blind texts 
      it almost unorthographic`,
      name: '  By Michel Jhon / 02 May 2021',
    },
  ]
  return (
    <Mui.Stack width="100%" sx={{ marginTop: '-70px', zIndex: '999' }}>
      <Mui.Stack
        sx={{
          background: 'white',
          padding: '10px',
          margin: { xs: '0px 20px', lg: '0px 180px' },
        }}
      >
        <Mui.Typography alignSelf="center">MY BLOG</Mui.Typography>
        <Mui.Grid container>
          <Mui.Grid xs={12} lg={4}>
            {' '}
            {Data?.map((item: any, index: any) => {
              return (
                <Mui.Stack key={index} spacing={2} pt={4} alignItems="center">
                  <Mui.Stack
                    sx={{ height: '300px', background: 'grey', width: '250px' }}
                  >
                    <Component.ImageStack file={item.pic} height="300px" />
                  </Mui.Stack>
                  <Mui.Stack spacing={2} textAlign="center">
                    <Mui.Typography
                      sx={{ color: '#A4BC96', textDecoration: 'underline' }}
                    >
                      {item.title}
                    </Mui.Typography>
                    <Mui.Typography
                      fontSize="17px"
                      lineHeight={1}
                      maxWidth="250px"
                    >
                      {item.content}
                    </Mui.Typography>
                    <Mui.Typography sx={{ color: '#94939D', fontSize: '13px' }}>
                      {item.name}
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              )
            })}
          </Mui.Grid>
          <Mui.Grid xs={12} lg={4}>
            {' '}
            {Data2?.map((item: any, index: any) => {
              return (
                <Mui.Stack key={index} spacing={2} pt={4} alignItems="center">
                  <Mui.Stack
                    sx={{ height: '350px', background: 'grey', width: '250px' }}
                  >
                    <Component.ImageStack file={item.pic} height="350px" />
                  </Mui.Stack>
                  <Mui.Stack spacing={2} textAlign="center">
                    <Mui.Typography
                      sx={{ color: '#A4BC96', textDecoration: 'underline' }}
                    >
                      {item.title}
                    </Mui.Typography>
                    <Mui.Typography
                      fontSize="17px"
                      lineHeight={1}
                      maxWidth="250px"
                    >
                      {item.content}
                    </Mui.Typography>
                    <Mui.Typography sx={{ color: '#94939D', fontSize: '13px' }}>
                      {item.name}
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              )
            })}
          </Mui.Grid>
          <Mui.Grid xs={12} lg={4}>
            {' '}
            {Data?.map((item: any, index: any) => {
              return (
                <Mui.Stack key={index} spacing={2} pt={4} alignItems="center">
                  <Mui.Stack
                    sx={{ height: '300px', background: 'grey', width: '250px' }}
                  >
                    <Component.ImageStack file={item.pic} height="300px" />
                  </Mui.Stack>
                  <Mui.Stack spacing={2} textAlign="center">
                    <Mui.Typography
                      sx={{ color: '#A4BC96', textDecoration: 'underline' }}
                    >
                      {item.title}
                    </Mui.Typography>
                    <Mui.Typography
                      fontSize="17px"
                      lineHeight={1}
                      maxWidth="250px"
                    >
                      {item.content}
                    </Mui.Typography>
                    <Mui.Typography sx={{ color: '#94939D', fontSize: '13px' }}>
                      {item.name}
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              )
            })}
          </Mui.Grid>
        </Mui.Grid>
        <Mui.Stack
          direction="row"
          spacing={2}
          alignItems="center"
          alignSelf="center"
          padding="30px 0px"
        >
          <Mui.Typography
            sx={{
              padding: '3px 8px',
              border: '1px solid grey',
              background: '#A4BC96',
            }}
          >
            1
          </Mui.Typography>
          <Mui.Typography sx={{ padding: '3px 8px', border: '1px solid grey' }}>
            2
          </Mui.Typography>
          <Mui.Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
            <Mui.Typography
              sx={{
                color: '#94939D',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              Next
            </Mui.Typography>
            <ArrowForwardIcon sx={{ color: '#94939D', fontSize: '13px' }} />
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Stack>
  )
}
