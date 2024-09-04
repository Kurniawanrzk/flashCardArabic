import { Box, Stack, Text } from "@chakra-ui/react";


const Header = () => {
    return(
        <Box position={'fixed'} w={'100%'}  borderRadius={'xl'}  boxShadow='md' p={5} zIndex={2} background={"white"}>
            <Box>
               <Stack spacing={0}>
               <Text  color={"#343A40"}>
                    Kurniawan Rizki Trinanta Sembiring
                </Text>
                <Text as={'samp'} color={'grey'} fontSize={'xs'}>
                    Pertama kali masuk 04/09/2024
                </Text>
               </Stack>
            </Box>
        </Box>
    )
}

export default Header;