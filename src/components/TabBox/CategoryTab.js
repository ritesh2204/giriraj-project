
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react'
import Lists from '../Lists/Lists';

const CategoryTab = () => {
    return (
        <Tabs variant='enclosed' isFitted colorScheme='blue'>
            <TabList>
                <Tab>OEM</Tab>
                <Tab>FITTINGS</Tab>
                <Tab>PARTS</Tab>
                <Tab>FOUR</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Lists/>
                </TabPanel>
                <TabPanel>
                <Lists/>

                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default CategoryTab;

