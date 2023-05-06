import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Lists = () => {
  return (
      <Flex
      w="100%"
      bg="white"
      shadow="md"
      p="4"
      align="center"
      justify="space-between"
    >
      <Flex align="center">
        <Box mr="4">
          <Image src="https://via.placeholder.com/100x100" boxSize="100px" objectFit="cover" alt="My Image" />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">My Heading</Text>
      </Flex>

      <Flex >
      <Flex align="center" direction={'column'} mr={20}>
        <Text fontSize='2em' fontWeight="bold" mr="2" color="blue.500">10</Text>
        <Text fontSize="xl" fontWeight="bold">Models</Text>
      </Flex>

      <Flex align="center" direction={'column'}>
        <Text fontSize='2em' fontWeight="bold" mr="2" color="blue.500">10</Text>
        <Text fontSize="xl" fontWeight="bold">Parts</Text>
      </Flex>
      </Flex>
    </Flex>
  );
};

export default Lists;