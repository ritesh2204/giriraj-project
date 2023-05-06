import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Center,
} from '@chakra-ui/react';
import Navbar from '@/components/Navbar.js';

const AddMember = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <Navbar/>
    <Box width="100%" shadow={'sm'}>
      <Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors?.role}>
            <FormLabel htmlFor="role">Role</FormLabel>
            <Input
              id="role"
              name="role"
              placeholder="Enter your role"
              required
              {...register('role')}
            />
          </FormControl>
          <FormControl isInvalid={errors?.fullName} mt={4}>
            <FormLabel htmlFor="fullName">Full Name</FormLabel>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
              {...register('fullname')}
            />
          </FormControl>
          <FormControl isInvalid={errors?.password} mt={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              {...register('password')}
            />
          </FormControl>
          <Button type="submit" mt={4}>
            Submit
          </Button>
        </form>
      </Center>
    </Box>
    </>
  );
}

export default AddMember;
