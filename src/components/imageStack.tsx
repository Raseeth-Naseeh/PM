import * as Mui from '@mui/material'

export const ImageStack = ({ width, height, file, fit, sx, ...props }: any) => {
  return (
    <Mui.Stack {...props} width={width} height={height} sx={{ ...sx }}>
      <img
        src={file}
        width="100%"
        height="100%"
        style={{ objectFit: fit ? fit : 'cover' }}
      />
    </Mui.Stack>
  )
}
