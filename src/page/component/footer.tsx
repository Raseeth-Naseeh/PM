import React from 'react'
import * as Mui from '@mui/material'
import * as Assets from 'src/assets'
import * as Components from 'src/components'

export const Footer = () => {
  const Data = [
    { pic: Assets.image1 },
    { pic: Assets.image2 },
    { pic: Assets.image1 },
    { pic: Assets.image2 },
    { pic: Assets.image1 },
    { pic: Assets.image2 },
  ]
  return (
    <Mui.Stack padding={{ xs: '10px 40px', lg: '10px 120px' }}>
      <Mui.Stack direction={{ lg: 'row' }} sx={{ position: 'relative' }}>
        {Data?.map((item: any, index) => {
          return (
            <Mui.Stack
              sx={{
                background: 'grey',
                flex: '1',
                minHeight: '180px',
                margin: '10px',
              }}
              key={index}
            >
              <Components.ImageStack file={item.pic} height="180px" />
            </Mui.Stack>
          )
        })}
        <Mui.Stack
          sx={{
            position: 'absolute',
            width: '250px',
            height: '80px',
            background: 'white',
            left: 0,
            right: 0,
            bottom: '-30px',
            margin: '0 auto',
            alignItems: 'center',
            justifyContent: 'center',
            display: { xs: 'none', lg: 'flex' },
            boxShadow: '0px 4px 40px rgba(61, 70, 56, 0.24)',
          }}
        >
          <Mui.Typography>Follow My Instagram</Mui.Typography>
          <Mui.Typography variant="subtitle1" fontWeight="100" fontSize="13px">
            @lorem
          </Mui.Typography>
        </Mui.Stack>
      </Mui.Stack>

      <Mui.Stack>{/* <img src={Assets.Logo} /> */}</Mui.Stack>
      <Mui.Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          mt: '5rem',
          mb: '5rem',
        }}
      >
        <Components.ImageStack
          file={Assets.Logo}
          sx={{ padding: '30px 0 50px 0' }}
        />
        <Mui.Divider sx={{ width: '80%' }} />
        <Mui.Stack
          direction={{ xs: 'column', lg: 'row' }}
          padding="20px 0"
          spacing={2}
          textAlign={{ xs: 'center', lg: 'initial' }}
        >
          <Mui.Typography variant="caption">ABOUT ME</Mui.Typography>
          <Mui.Typography variant="caption">CONTACT ME</Mui.Typography>
          <Mui.Typography variant="caption">ADVERTISING</Mui.Typography>
          <Mui.Typography variant="caption">TERMS OF USE</Mui.Typography>
          <Mui.Typography variant="caption">SUBSCRIBE</Mui.Typography>
        </Mui.Stack>
        <Mui.Divider sx={{ width: '80%' }} />
        <Mui.Typography pt={10} textAlign="center">
          © Copyright logoipsum. All Rights Reserved.
        </Mui.Typography>
      </Mui.Stack>
    </Mui.Stack>
  )
}
