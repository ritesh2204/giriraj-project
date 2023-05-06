import Head from 'next/head'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { userSignIn } from '../../utils/helpers';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { setCookie, parseCookies } from 'nookies';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const onSubmit = (userData) => {
    if(!userData.name || !userData.password){
      alert("Full name and password required")
    }
    else{
      setLoading(true)
      const name = userData.name;
      const password = userData.password;
      try {
        userSignIn(name, password).then((data) => {
          console.log("data ==>", data)
          // To set the user's name and role in a cookie
            setCookie(null, 'userProfileUrl', data.redirect, {
              maxAge: 30 * 24 * 60 * 60, // 30 days
              path: '/',
            });
            router.push('/dashboard')
          setLoading(false);
        })
      } catch (error) {
        alert(JSON.stringify(error))
      }
    }
  };

  return (
    <>
      <Head>
        <title>Giriraj Hydraulics</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'5xl'}>Giriraj Hydraulics</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Signin to your account ✌️
            </Text>
          </Stack>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Username</FormLabel>
                  <Input type="text" id="name" {...register("name")} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" id="passowrd"  {...register("password")} />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    type='submit'
                  >
                    {loading ? 'Please wait ...' : 'Sign In'}
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>

    </>
  )
}
