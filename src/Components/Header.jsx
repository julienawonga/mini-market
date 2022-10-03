import { Box, Flex, Spacer, Input, Button, Center, Stack, Avatar, AvatarBadge, Badge, Text } from '@chakra-ui/react';
import React from 'react';
import {BsCartCheck, BsQuestionCircle } from 'react-icons/bs';

const Header = () => {
    return (
        <Box
            height='100%'
            width='100%'
            paddingLeft='10%'
            paddingRight='10%'
            paddingTop='1%'
            bgColor='#F5F5F5'
        >
          <Flex
            alignItems="center"
            minWidth='max-content'
            align='center'
          >
                <Text fontSize='xl'>MINI MARKET</Text>
                <Spacer />
                <Flex 
                    alignItems="center"
                    gap={3}
                >
                    <Input 
                        placeholder="Search for..."
                        variant='filled'
                        borderColor='messenger.300'
                        focusBorderColor='messenger.500'
                        h='45px'
                        w='400px'
                    />
                    <Button
                        colorScheme='messenger'
                        variant='solid'
                        h='45px'
                    >
                        Search
                    </Button>
                </Flex>
                <Spacer />
                <Stack
                    direction='row'
                    spacing={10}
                >
                    <Center>
                        <BsQuestionCircle 
                            size={30} />
                    </Center>
                    <Center
                       gap={2}
                    >
                        <Box
                          position='relative'
                        >
                            <BsCartCheck
                                colorScheme='white'
                                size={30}
                            />
                            <Badge
                                fontSize='0.6em'
                                position='absolute'
                                right={0}
                                top={0}
                                colorScheme='messenger'
                            >
                                22
                            </Badge>
                        </Box>
                    </Center>
                    <Center
                    >
                        <Avatar
                            size='sm'
                            showBorder='true'
                        >
                            <AvatarBadge boxSize="1em" bg="messenger.500" />
                        </Avatar>
                    </Center>
                </Stack>
          </Flex>
        </Box>
    );
}

export default Header;
