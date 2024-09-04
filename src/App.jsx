import Header from "./components/header"
import Routing from "./Routes"
import { Center, Container } from '@chakra-ui/react'

function App() {
  return (
     <>
      <Header />
      <Container as={'section'} pt={'100px'} maxWidth={"4xl"} h={'100vh'} background={'white'}>
      <Center>
        <Routing />
      </Center>
    </Container>
    </>
  )
}

export default App
