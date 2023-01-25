import './App.css';
import { Typography, Container, Box, Stack, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import teal from '@mui/material/colors/teal';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: teal,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="PageContent">
        <Container sx={{ my: 4 }}>
          <PageTitle />
          <Description />
          <LinkButtons />
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Varius quam quisque id diam vel quam elementum pulvinar.
        Quam vulputate dignissim suspendisse in est ante in nibh mauris.
        Porttitor eget dolor morbi non arcu risus quis varius quam.
      </Typography>
      <Typography sx={{ pt: 2 }}>
        Eu facilisis sed odio morbi quis commodo.
        Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit.
        Tellus cras adipiscing enim eu.
      </Typography>
    </Box>
  );
}

function LinkButtons() {
  return (
    <Stack direction="row" spacing={2} sx={{ pt: 5 }}>
      <Button variant="outlined" href="https://github.com/Pomoc48" target="_blank" >Github</Button>
      <Button variant="outlined" href="#" disabled>Linkedin</Button>
    </Stack>
  )
}
