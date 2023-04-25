import * as Mui from '@mui/material'
import * as Assets from 'src/assets'
import * as Components from 'src/components'
import SearchIcon from '@mui/icons-material/Search'

export const Content = () => {
  const Data = [
    {
      title: 'Lifestyle',
      content:
        '  There are many variations of passages of available not the  majority have suffered alteration',
      name: 'By Michel Jhon / 02 May 2021',
    },
    {
      title: 'Travel',
      content:
        ' Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. ',
      name: 'By Michel Jhon / 02 May 2021',
    },
    {
      title: 'Interior',
      content:
        'Feel the charm of existence in this spot, which was created for the bliss of souls like mine',
      name: 'By Michel Jhon / 02 May 2021',
    },
  ]
  return (
    <Mui.Grid container paddingBottom={8}>
      <Mui.Grid xs={12} lg={2} />
      <Mui.Grid xs={12} lg={6}>
        <Mui.Divider />
        <Mui.Stack sx={{ padding: '70px 10px' }}>
          {Data?.map((item, index) => {
            return (
              <Mui.Stack sx={{ padding: '0 30px' }} key={index}>
                <Components.ImageStack
                  width="100%"
                  height="400px"
                  file={Assets.image1}
                />

                <Mui.Stack alignItems="flex-start" spacing={2} p={3}>
                  <Mui.Typography
                    sx={{ color: '#A4BC96', textDecoration: 'underline' }}
                  >
                    {item.title}
                  </Mui.Typography>
                  <Mui.Typography
                    fontSize="17px"
                    lineHeight={1}
                    maxWidth="450px"
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
        </Mui.Stack>
        
      </Mui.Grid>
      <Mui.Grid xs={12} lg={2}>
        <Mui.Divider />

        <Mui.Stack sx={{ padding: '70px 10px' }} spacing={6}>
          <Mui.TextField
            placeholder="search"
            InputProps={{
              endAdornment: (
                <Mui.InputAdornment position="start">
                  <SearchIcon />
                </Mui.InputAdornment>
              ),
            }}
          />
          <Mui.Stack
            alignItems="center"
            sx={{
              backgroundColor: '#dde7d7',
              padding: '40px 10px',
              borderRadius: '2px',
            }}
            spacing={2}
          >
            <Mui.Avatar
              sx={{ width: '95px', height: '95px' }}
              src={Assets.Avatar}
            />
            <Mui.Typography>Emma Jackson</Mui.Typography>
            <Mui.Typography color="#707070" fontSize="12px">
              BLOGGER
            </Mui.Typography>
            <Mui.Typography fontWeight={300} textAlign="center" fontSize="13px">
              Hello, I am in his into a horrible lay on his armour-like back
              horrible vermin. He lay on his armour
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Grid>
      <Mui.Grid xs={12} lg={2} />
    </Mui.Grid>
  )
}
