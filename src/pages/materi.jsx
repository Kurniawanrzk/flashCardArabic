import { useSteps, Stepper, Step,Text,CardBody, StepIndicator, StepStatus, StepIcon, StepNumber, Box,StepTitle, StepDescription, StepSeparator, Card, Center } from "@chakra-ui/react";
import materitext from '../assets/materitext.png'
import materivideo from '../assets/videobelajar.jpeg'
import quiz from '../assets/quiz.png'

const Materi = () => {
    const steps = [
        { title: 'Materi Teks', description: 'materi pembukaan', img:materitext },
        { title: 'Materi Video', description: 'video materi', img:materivideo},
        { title: 'Quiz', description: 'latihan soal', img:quiz },
      ]
      
        const { activeStep } = useSteps({
          index: 1,
          count: steps.length,
        })
    
    return(
        <>
            <div>
            <Center>
            <Text mt={4} fontSize={40} color={'white'}>Materi 1</Text>

            </Center>
 <Stepper mt={4} index={activeStep} orientation='vertical' height='520px' gap='0'>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <Text fontSize={20} color={'white'}>{step.title}</Text>
          <Card w={200} h={140}>
            <CardBody>
                <img src={step.img} height={'20px'} />
             </CardBody>
            </Card>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
            </div>
        </>
    );
}

export default Materi