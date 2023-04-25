import * as Mui from '@mui/material'
import * as Assets from 'src/assets'

export const Cards = () => {
  const Data = [
    {
      pic: '1',
      title: 'Travel',
      content: `Sheets containing Ipsum 
      passages & more`,
      name: '  By Michel Jhon / 02 May 2021',
    },
    {
      pic: '246346',
      title: 'Fashion',
      content: `Alteration in some form, 
      by injected humour`,
      name: '  By Nathan / 02 May 2021',
    },
    {
      pic: '3',
      title: 'LifeStyle',
      content: `Control about the blind texts 
      it almost unorthographic`,
      name: '  By Michel Jhon / 02 May 2021',
    },
  ]
  return (
    <Mui.Stack width="100%" justifyContent="center" alignItems="center">
      <Mui.Stack
        direction="row"
        // justifyContent="space-around"
        sx={{
          background: '',
          justifyContent: 'center',
          alignItems: 'center',
          width: { lg: '100%' },
        }}
      >
        <Mui.Divider sx={{ width: { xs: '100px', lg: '30%' } }} />
        <Mui.Typography
          sx={{
            background: '#becab6',
            padding: '10px 20px',
            margin: '10px',
            fontWeight: '200',
            fontSize: '10px',
          }}
        >
          POPULAR STORIES
        </Mui.Typography>
        <Mui.Divider sx={{ width: { xs: '100px', lg: '30%' } }} />
      </Mui.Stack>

      <Mui.Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
        alignContent="center"
      >
        {Data?.map((item: any, index: any) => {
          return (
            <Mui.Stack key={index} spacing={2} pt={4}>
              <Mui.Stack
                sx={{ height: '300px', background: 'grey', width: '250px' }}
              >
                {item.pic}
              </Mui.Stack>
              <Mui.Stack textAlign="center" spacing={2}>
                <Mui.Typography
                  sx={{ color: '#A4BC96', textDecoration: 'underline' }}
                >
                  {item.title}
                </Mui.Typography>
                <Mui.Typography fontSize="17px" lineHeight={1} maxWidth="250px">
                  {item.content}
                </Mui.Typography>
                <Mui.Typography sx={{ color: '#94939D', fontSize: '13px' }}>
                  {item.name}
                </Mui.Typography>
              </Mui.Stack>
            </Mui.Stack>
          )
        })}
      </Mui.Stack>
    </Mui.Stack>
  )
}
