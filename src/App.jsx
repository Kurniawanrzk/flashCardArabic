import Routing from "./Routes"
import { Center, Container } from '@chakra-ui/react'

function App() {
  return (
    <Container h={'100vh'} background={'#3EB489'}>
      <Center>
        <Routing />
      </Center>
    </Container>
  )
}

export default App
