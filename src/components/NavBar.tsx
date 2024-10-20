import React from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Avatar,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  Container,
} from '@chakra-ui/react';
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface NavBarProps {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ setActiveComponent }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  const handleNavClick = (component: string, path: string) => {
    setActiveComponent(component);
    router.push(path);
    onClose();
  };

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Link
      as={NextLink}
      href={href}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.100', 'gray.700'),
      }}
      onClick={() => handleNavClick(children as string, href)}
    >
      {children}
    </Link>
  );

  return (
    <Box bg={bgColor} color={textColor} boxShadow="sm" position="sticky" top={0} zIndex={1000} width="100%">
      <Container maxW="full" px={4}>
        <Flex h={14} alignItems="center" justifyContent="space-between">
          <Flex align="center">
            <NextLink href="/" passHref>
              <Heading as="h1" size="md" fontWeight="bold" cursor="pointer">
                LoanConnect
              </Heading>
            </NextLink>
          </Flex>

          <HStack spacing={4} alignItems="center">
            <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
              <NavLink href="/">Home Page</NavLink>
              <NavLink href="/overview">Overview</NavLink>
              <NavLink href="/create-loan">Create Loan</NavLink>
              <NavLink href="/lender-list">Lender List</NavLink>
              <NavLink href="/messages">Messages</NavLink>
              <NavLink href="/profile-management">Profile</NavLink>
            </HStack>

            <IconButton
              size="sm"
              aria-label="Notifications"
              icon={<BellIcon />}
              variant="ghost"
              colorScheme="gray"
              fontSize="18px"
            />

            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'sm'} src="/placeholder-avatar.jpg" name="John Doe" />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleNavClick('profile', '/profile-management')}>Profile</MenuItem>
                <MenuItem onClick={() => handleNavClick('settings', '/settings')}>Settings</MenuItem>
                <MenuItem onClick={() => handleNavClick('logout', '/logout')}>Logout</MenuItem>
              </MenuList>
            </Menu>

            <IconButton
              size="sm"
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              colorScheme="gray"
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
            />
          </HStack>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column" gap={4}>
              <NavLink href="/">Home Page</NavLink>
              <NavLink href="/overview">Overview</NavLink>
              <NavLink href="/create-loan">Create Loan</NavLink>
              <NavLink href="/lender-list">Lender List</NavLink>
              <NavLink href="/messages">Messages</NavLink>
              <NavLink href="/profile-management">Profile</NavLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
