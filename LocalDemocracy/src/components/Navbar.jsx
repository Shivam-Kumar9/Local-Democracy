// src/components/Navbar.js
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Image,
  Container,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, BellIcon, SettingsIcon } from '@chakra-ui/icons';

const NavLink = ({ to, children }) => (
  <Box
    as={RouterLink}
    to={to}
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
  >
    {children}
  </Box>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Box as="nav" bg={bg} px={4} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onOpen}
          />
          
          <HStack spacing={8} alignItems="center">
            <Box as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
              <Flex alignItems="center">
                <Box mr={2}>🏛️</Box>
                LocalVoice
              </Flex>
            </Box>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/legislation">Legislation</NavLink>
              <NavLink to="/feedback">Feedback</NavLink>
              <NavLink to="/community-votes">Community Votes</NavLink>
              <NavLink to="/impact">Impact</NavLink>
              <NavLink to="/initiatives">Initiatives</NavLink>
            </HStack>
          </HStack>

          <HStack spacing={3}>
            <IconButton
              aria-label="Notifications"
              icon={<BellIcon />}
              variant="ghost"
              colorScheme="brand"
            />
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar size="sm" name="User Name" src="https://bit.ly/broken-link" />
              </MenuButton>
              <MenuList>
                <MenuItem as={RouterLink} to="/profile">Profile</MenuItem>
                <MenuItem as={RouterLink} to="/settings">Settings</MenuItem>
                <MenuItem>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <NavLink to="/dashboard" onClick={onClose}>Dashboard</NavLink>
              <NavLink to="/legislation" onClick={onClose}>Legislation</NavLink>
              <NavLink to="/feedback" onClick={onClose}>Feedback</NavLink>
              <NavLink to="/community-votes" onClick={onClose}>Community Votes</NavLink>
              <NavLink to="/impact" onClick={onClose}>Impact</NavLink>
              <NavLink to="/initiatives" onClick={onClose}>Initiatives</NavLink>
              <NavLink to="/profile" onClick={onClose}>Profile</NavLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;