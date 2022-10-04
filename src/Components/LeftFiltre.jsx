import { Box, Checkbox, Stack } from '@chakra-ui/react'
import React from 'react'

export default function LeftFiltre() {
  return (
        <Stack
            direction="column"
            spacing={4}
            align="flex-start"
        >
            <Checkbox 
                colorScheme="messenger"
                size='lg'
                defaultIsChecked
            >
                All
            </Checkbox>
            <Checkbox 
                colorScheme="messenger"
                size='lg'
            >
                Men
            </Checkbox>
            <Checkbox 
                colorScheme="messenger"
                size='lg'
            >
                Women
            </Checkbox>
            <Checkbox 
                colorScheme="messenger"
                size='lg'
            >
                Children
            </Checkbox>
        </Stack>
  )
}
