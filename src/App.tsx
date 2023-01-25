import './App.css';
import { Typography, Container, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

function App(params: { themeMode: boolean }) {
  const [darkMode, setMode] = useState(params.themeMode);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        setMode(event.matches ? true : false);
      });
  });

  console.log(darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <TopBar text='Mikołaj Łukawski' />
        <Container>
          <PageTitle text='Hello world!' />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

function PageTitle(props: { text: string }) {
  return (
    <Typography variant="h2" sx={{ py: 8 }}>
      {props.text}
    </Typography>
  );
}

function TopBar(props: { text: string }) {
  return (
    <Box className="TopBar">
      <Container>
        <Typography variant="h5" sx={{ py: 3 }} >
          {props.text}
        </Typography>
      </Container>
    </Box>
  );
}
