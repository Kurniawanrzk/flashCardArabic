import bgCardFirst from '../assets/bg-awal.jpg';
import {
    Card, 
    Text,
    CardBody,
    Stack, 
    Button,
    Heading,
    CardHeader,
    SimpleGrid,
    CardFooter,
} from '@chakra-ui/react';

const Home = () => {
    return (
        <>
            <Stack spacing={3}>
                <Card 
                    backgroundImage={`url(${bgCardFirst})`} 
                    backgroundSize="cover" 
                    backgroundPosition="center" 
                    backgroundRepeat="no-repeat"
                >
                    <CardBody>
                        <Heading color={'white'} size='md'>Materi - Materi</Heading>
                        <Text color={'white'} py='1'>
                            Tekan Untuk Melihat Step By Step Full Materi - Materi, Video dan Latihan Soal Bahasa Arab
                        </Text>                
                    </CardBody>
                    <CardFooter>
                        <Button>Buka Disini</Button>
                    </CardFooter>
                </Card>

                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(150px, 1fr))'>
                    <Card boxShadow={'xl'}>
                        <CardHeader>
                            <Heading size='md'>Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>

                    <Card boxShadow={'xl'}>
                        <CardHeader>
                            <Heading size='md'>Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Stack>
        </>
    );
}

export default Home;
