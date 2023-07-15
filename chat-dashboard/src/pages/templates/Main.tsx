import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const Main = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        flexGrow:1,
        mt: `${theme.primaryAppBar.height}px`,
        height: `calc(100vh - ${theme.primaryAppBar.height}px )`,
        overflow: "hidden"
      }}>
      {[...Array(100)].map((_, i)=>(
              <Typography key={i}>{i}</Typography>
            ))}
    </Box>
  )
}

export default Main