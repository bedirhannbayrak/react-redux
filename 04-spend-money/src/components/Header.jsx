import {Avatar, Flex, Heading} from '@chakra-ui/react'

const Header = () => {
  return (
      <Flex my={2} flexDir={"column"} placeItems={"center"} backgroundColor={'gray.300'} py={5} h="15rem">
        <Avatar mb={5} size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Heading as="h2">Spend Dan Abramov's Money</Heading>
      </Flex>
  );
};

export default Header;