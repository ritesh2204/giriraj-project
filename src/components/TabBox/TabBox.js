import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const TabBox = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Box w="100%" maxW="800px" mx="auto" shadow={'md'} h='100%'>
      <Flex align="center" justify="space-between" mb="4">
        <Heading as="h2" fontSize="3xl" fontWeight="bold">
          Jobs
        </Heading>
        <Icon as={FaPlus} boxSize="6" color="gray.500" />
      </Flex>
      <Tabs isFitted colorScheme="blue" onChange={handleTabChange}>
        <TabList mb="4">
          <Tab
            _selected={{ color: "white", bg: "blue.500" }}
            _hover={{ bg: "blue.400" }}
          >
            Recent
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "blue.500" }}
            _hover={{ bg: "blue.400" }}
          >
            Open
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "blue.500" }}
            _hover={{ bg: "blue.400" }}
          >
            Completed
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize="lg" fontWeight="bold" mb="2">
              Recent Jobs
            </Text>
            <Box>
              <Text>Job 1</Text>
              <Text>Job 2</Text>
              <Text>Job 3</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg" fontWeight="bold" mb="2">
              Open Jobs
            </Text>
            <Box>
              <Text>Job 4</Text>
              <Text>Job 5</Text>
              <Text>Job 6</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg" fontWeight="bold" mb="2">
              Completed Jobs
            </Text>
            <Box>
              <Text>Job 7</Text>
              <Text>Job 8</Text>
              <Text>Job 9</Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabBox;