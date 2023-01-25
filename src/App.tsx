import './App.css';
import { Typography, Container, Box } from '@mui/material';

function App() {
  return (
    <Box>
      <TopBar text='Mikołaj Łukawski' />
      <Container>
        <PageTitle text='Hello world!' />
      </Container>
    </Box>
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
