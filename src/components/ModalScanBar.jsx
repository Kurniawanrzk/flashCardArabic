import { Scanner } from '@yudiel/react-qr-scanner';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const ModalScanBar = ({isOpen, onClose , camera}) => {
    const navigate = useNavigate();
    const onScann = () => {
        navigate('materi')
    }
    return(
        <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent h={500}>
            <ModalHeader>Scan your Barcode</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Scanner paused={camera} onScan={onScann} />
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='green' mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant='ghost'>Pilih Galeri</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
}

export default ModalScanBar;