import * as Mui from '@mui/material'
import * as Component from 'src/components'
import * as Assets from 'src/assets'
import SearchIcon from '@mui/icons-material/Search'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const Content = () => {
  const Tags = ['Arts & Designs', 'Interiors', 'Designs', 'Modern', 'Travel']
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
          <Mui.Grid xs={12} lg={1}></Mui.Grid>
          <Mui.Grid xs={12} lg={6}>
            <Mui.Stack spacing={3} p={3}>
              <Mui.Stack>
                <Mui.Typography
                  sx={{ color: '#A4BC96', textDecoration: 'underline' }}
                >
                  LIFESTYLE
                </Mui.Typography>
                <Mui.Typography variant="h5" maxWidth="450px">
                  Minstry are many variations of passages available not the
                  majority
                </Mui.Typography>
                <Mui.Typography sx={{ color: '#94939D', fontSize: '13px' }}>
                  By Michel Jhon / 02 May 2021
                </Mui.Typography>
              </Mui.Stack>

              <Mui.Stack>
                <Component.ImageStack file={Assets.image2} height="400px" />
              </Mui.Stack>

              <Mui.Stack>
                <span style={{ fontSize: '2rem' }}>E</span>
                <Mui.Typography variant="caption">
                  xistence, that I neglect my talents. I should be incapable of
                  drawing a single stroke at the present moment; and yet I feel
                  that I never was a greater artist than now Face of the
                  impenetrable foliage Sense of mere tranquil existence, that I
                  neglect my talents. I should be incapable of drawing a single
                  stroke at the present moment; and yet I feel that I never was
                  a greater artist than now
                </Mui.Typography>

                <Mui.Typography pt={2} variant="caption">
                  Face of the impenetrable foliage of my trees, and but a few
                  stray gleams steal into the inner sanctuary, I throw myself
                  down among the tall grass by the trickling stream; and, as I
                  lie close to the earth, a thousand unknown plants are noticed
                  by me: when I hear the buzz of the little world among the
                  stalks, and grow familiar with the countless indescribable
                  forms of the insects and flies
                </Mui.Typography>
              </Mui.Stack>
              <Mui.Stack spacing={4}>
                <Mui.Typography variant="h5">
                  Familiar with the countless indescribable
                </Mui.Typography>
                <Mui.Typography variant="caption">
                  Dorizon the impenetrable foliage of my trees, and but a few
                  stray gleams steal into the inner sanctuary, I throw myself
                  down among the tall grass by the trickling stream; and, as I
                  lie close to the earth, a thousand unknown plants are noticed
                  by me: when I hear the buzz of the little world among the
                  stalks, and grow familiar with the countless indescribable
                </Mui.Typography>

                <Mui.Stack direction="row" spacing={2}>
                  <Component.ImageStack
                    file={Assets.image2}
                    height="300px"
                    width="50%"
                  />
                  <Component.ImageStack
                    file={Assets.image5}
                    height="300px"
                    width="50%"
                  />
                </Mui.Stack>
                <Mui.Stack>
                  <Mui.Typography variant="h5">
                    Serenity has taken possession
                  </Mui.Typography>
                  <Mui.Typography variant="caption">
                    Dorizon the impenetrable foliage of my trees, and but a few
                    stray gleams steal into the inner sanctuary, I throw myself
                    down among the tall grass by the trickling stream; and, as I
                    lie close to the earth, a thousand unknown plants are
                    noticed by me: when I hear the buzz of the little
                  </Mui.Typography>
                </Mui.Stack>
                <Mui.Stack
                  direction={{ xs: 'column', lg: 'row' }}
                  sx={{
                    backgroundColor: '#dde7d76b',
                    padding: '40px 70px',
                    borderRadius: '2px',
                  }}
                  spacing={2}
                >
                  <Mui.Avatar
                    sx={{ width: '95px', height: '95px' }}
                    src={Assets.Avatar}
                  />
                  <Mui.Stack alignItems="flex-start">
                    <Mui.Typography>Emma Jackson</Mui.Typography>
                    <Mui.Typography fontSize="10px" fontWeight={600}>
                      BLOGGER
                    </Mui.Typography>
                    <Mui.Typography fontWeight={300} fontSize="13px" pt={3}>
                      Hello, I am in his into a horrible lay on his armour-like
                      back horrible vermin. He lay on his armour Face of the
                      impenetrable foliage of my trees
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>

                <Mui.Stack direction="row" justifyContent="space-between">
                  <Mui.Stack>
                    <Mui.Typography variant="caption" color="#545454">
                      Previous post
                    </Mui.Typography>
                    <Mui.Typography
                      variant="subtitle1"
                      fontSize={{ xs: '11px' }}
                    >
                      Describable forms of the insects
                    </Mui.Typography>
                  </Mui.Stack>
                  <Mui.Stack>
                    <Mui.Typography variant="caption" color="#545454">
                      Next post
                    </Mui.Typography>
                    <Mui.Typography
                      variant="subtitle1"
                      fontSize={{ xs: '11px' }}
                    >
                      Noticed by me when hear buzz
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid xs={12} lg={4}>
            <Mui.Stack spacing={4} p={3}>
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
              <Mui.Stack spacing={4}>
                POPULAR POSTS
                <Mui.Stack direction="row" spacing={2} alignItems="center">
                  <Component.ImageStack
                    file={Assets.Basketball}
                    height="120px"
                    width="200px"
                  />
                  <Mui.Stack>
                    <Mui.Typography>
                      Impenetrable foliage of my trees, and but a few stray
                      gleams
                    </Mui.Typography>
                    <Mui.Typography sx={{ color: '#94939D', fontSize: '13px' }}>
                      02 May 2021
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
                <Mui.Stack direction="row" spacing={2} alignItems="center">
                  <Component.ImageStack
                    file={Assets.Basketball}
                    height="120px"
                    width="200px"
                  />
                  <Mui.Stack>
                    <Mui.Typography>
                      Impenetrable foliage of my trees, and but a few stray
                      gleams
                    </Mui.Typography>
                    <Mui.Typography sx={{ color: '#94939D', fontSize: '13px' }}>
                      02 May 2021
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
                <Mui.Stack direction="row" spacing={2} alignItems="center">
                  <Component.ImageStack
                    file={Assets.Basketball}
                    height="120px"
                    width="200px"
                  />
                  <Mui.Stack>
                    <Mui.Typography>
                      Impenetrable foliage of my trees, and but a few stray
                      gleams
                    </Mui.Typography>
                    <Mui.Typography sx={{ color: '#94939D', fontSize: '13px' }}>
                      02 May 2021
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              </Mui.Stack>
              <Component.ImageStack file={Assets.image3} height="400px" />

              <Mui.Stack spacing={4}>
                <Mui.Typography>CATEGORIES</Mui.Typography>

                <Mui.Stack direction="row" spacing={2}>
                  <Component.ImageStack file={Assets.image5} height="150px" />
                  <Component.ImageStack file={Assets.image6} height="150px" />
                </Mui.Stack>
                <Mui.Stack direction="row" spacing={2}>
                  <Component.ImageStack file={Assets.image6} height="150px" />
                  <Component.ImageStack file={Assets.image5} height="150px" />
                </Mui.Stack>
              </Mui.Stack>

              <Mui.Stack spacing={2}>
                <Mui.Typography>TAGS</Mui.Typography>
                <Mui.Grid container gap={2}>
                  {Tags?.map((item, index) => {
                    return (
                      <Mui.Grid key={index}>
                        <Mui.Typography
                          sx={{
                            background: '#80808029',
                            padding: '10px',
                            width: 'fit-content',
                          }}
                        >
                          {item}
                        </Mui.Typography>
                      </Mui.Grid>
                    )
                  })}
                </Mui.Grid>
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid xs={12} lg={1}></Mui.Grid>
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
