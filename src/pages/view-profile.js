import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar.js";
import { Box, Flex, Text } from "@chakra-ui/react";
import { getUserProfile } from "../../utils/helpers";

const ProfileView = () => {

    const [loading, setIsLoading] = useState(false)
    const[userProfile, setUserProfile]= useState("")


    useEffect(() => {
        setIsLoading(true)
        try {
            getUserProfile().then((data) => {
                if(data['status code'] === 200){
                    console.log('view-profile-data', data);
                    setUserProfile(data)
                    setIsLoading(false);
                }
            })
        } catch (error) {
            console.log("error ==>", error)
        }

    }, []);

    console.log("users=====>", userProfile.data.fullName )

    return (
        <>
            <Navbar />
            <Flex
                h="100vh"
                justify="center"
                align="center"
                bg="gray.50"
            >
                {loading ? 'Loading....' : (
                    <Box
                        bg="white"
                        shadow="md"
                        p="8"
                        borderRadius="md"
                        textAlign="center"
                    >
                        <Text fontSize="2xl" fontWeight="bold" mb="4">Name: {userProfile.data.fullName}</Text>
                        {/* <Text fontSize="lg" fontWeight="medium" mb="4">Mobile: 123-456-7890</Text> */}
                        <Text fontSize="lg" fontWeight="medium">Role: {userProfile.data.role}</Text>
                    </Box>
                )}

            </Flex>
        </>
    );
};

export default ProfileView;