import Navbar from '@/components/Navbar.js';
import CategoryTab from '@/components/TabBox/CategoryTab';
import TabBox from '@/components/TabBox/TabBox';
import { PhoneIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Container, HStack, Input, InputGroup, InputRightElement, SimpleGrid, Stack, Heading, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react'
import { AiFillFilter } from "react-icons/ai";

const SearchBar = () => {
    return (
        <HStack spacing='24px' alignItems={'center'}>
            <Box position="absolute" top="100px" right="60px" w='40%' boxShadow='sm' flex={1} flexDirection={'row'}>
                <InputGroup>
                    <Input placeholder='Search here ...' variant='filled' />
                    <InputRightElement children={<SearchIcon color='green.500' />} />
                </InputGroup>
            </Box>
            <Box position="absolute" top="108px" right="30px" >
                <AiFillFilter color="grey   " size="25px" />
            </Box>
        </HStack>
    )
}

const dashboard = () => {
    return (
        <React.Fragment>
            <Navbar />
            <SearchBar />

            <Container maxW={'8xl'}>
            <Box min={'100vh'} mt={20} >
                <Stack spacing={4} width={'100%'} direction={'column'}>
                    <Stack
                        p={5}
                        alignItems={'center'}
                        justifyContent={{
                            base: 'flex-start',
                            md: 'space-around',
                        }}
                        direction={{
                            base: 'column',
                            md: 'row',
                        }}
                    >

                        <Stack
                            width={{
                                base: '100%',
                                md: '60%',
                            }}
                            // border={'1px solid #f0f0f0'}
                            boxShadow='md'
                            height={'100vh'}
                        >
                           <CategoryTab/>
                        </Stack>

                        <Stack
                            width={{
                                base: '100%',
                                md: '40%',
                            }}
                            height={'100vh'}
            
                         >
                         <TabBox/>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            </Container>
        </React.Fragment>
    )
}

export default dashboard;