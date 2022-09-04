import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import {Box,Heading} from  "@chakra-ui/react"
function App() {
  return (
    <>
    <Box height='100vh' maxWidth='100vw' maxHeight='100vh' overflow='hidden'>
    <Heading align='center' as='h1' fontSize='5xl' mt='10rem'>
    Cules Search
    </Heading>
    
    <Search />
    </Box>
    </> 
  );
}

export default App;
