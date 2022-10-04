import { Box, Image, Flex} from '@chakra-ui/react'
import React from 'react'
import front from './images/cover.png'

export default function Banner() {
  return (
    <Flex
       marginTop={4}
       gap={1}
    >
        <Box
          bgColor='blue.500'
          width='20%'
        >
            Hello
        </Box>
        <Image 
            src={front}
            alt="front"

        />
        <Box
          bgColor='blue.500'
          width='20%'
        >
            Hello
        </Box>
    </Flex>
  )
}
