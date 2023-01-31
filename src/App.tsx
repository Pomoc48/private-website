import './App.css';
import { Typography, Container, Box, Stack, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import teal from '@mui/material/colors/teal';
import { useState } from 'react';
import Circle from './Circle';

function App(params: { themeMode: boolean }) {
  const [darkMode] = useState(params.themeMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: teal,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="PageContainer">
        <Container sx={{ my: 4 }}>
          <PageTitle />
          <Description />
          <LinkButtons />
          <Circle />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

function PageTitle() {
  return (
    <Box>
      <Typography color={teal[500]}>Hi, my name is</Typography>
      <Typography variant="h2" sx={{ pt: 1 }}>Mikołaj Łukawski</Typography>
    </Box>
  );
}

function Description() {
  return (
    <Box sx={{ maxWidth: 600 }}>
      <Typography sx={{ pt: 5 }}>
        I'm a junior frontend developer, that mainly specializes in Flutter and has a good understanding of creating responsive, consistent and intuitive UI.
      </Typography>
      <Typography sx={{ pt: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
    </Box>
  );
}

function LinkButtons() {
  return (
    <Stack direction="row" spacing={2} sx={{ py: 5 }}>
      <Button variant="outlined" href="https://github.com/Pomoc48" target="_blank">Portfolio</Button>
      <Button variant="outlined" href="mailto:lukawski.mikolaj@gmail.com">Contact me</Button>
    </Stack>
  )
}
