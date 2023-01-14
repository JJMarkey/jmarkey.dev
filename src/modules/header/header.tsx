import { GitHub, LinkedIn } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material'

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Snell Roundhand, cursive',
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              John Markey
            </Typography>

            <Tabs>
              <Tab label="Software" />
              <Tab label="Aviation" />
            </Tabs>
          </Box>
          <Box>
            <IconButton
              onClick={() => window.open('https://github.com/JJMarkey')}
            >
              <GitHub />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open('https://www.linkedin.com/in/jjmarkey/')
              }
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
