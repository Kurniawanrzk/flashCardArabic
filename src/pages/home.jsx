import { useState } from 'react';
import {
    Card, 
    useDisclosure,
    Text,
    Center,
    CardBody,
    Box,
} from '@chakra-ui/react';
import ModalScanBar from '../components/ModalScanBar';
import gambar from '../assets/qrcode.svg'
const Home = () => {
    const [camera, setCamera] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onClickScanBarCode = () => {
        setCamera(false);
        onOpen();
    };

    return (
        <>
        <ModalScanBar isOpen={isOpen} onClose={onClose} camera={camera} />
            <div style={{ textAlign: "center"}}>
                <Center >
                    <Box style={{marginTop:"40px"}} onClick={onClickScanBarCode} className='open-camera' >
                        <Card>
                            <CardBody>
                                <img src={gambar} width={200} />
                                <Text fontSize={30}>Scan Barcode</Text>
                            </CardBody>
                        </Card>
                    </Box>
                </Center>
            </div>
        </>
    );
}

export default Home;
