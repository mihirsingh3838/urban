// src/components/HeaderMegaMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';

export const HeaderMegaMenu: React.FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Box>
      <header className={classes.header}>
        <div className='flex items-center justify-between w-full p-4'>
          <img src='https://c.urbanpro.com/assets/new-ui/uphomepage/uplogoOnlyIcon-ff0f04d4ab79da27952b84ee8a816f27.png'
            alt='company_logo'
            width={30}
            height={30} />
            <Title className='pl-2 text-gray-900' order={4}>
              Urban Pro
            </Title>

          <div className="flex items-center space-x-4 ml-auto">
            <Button variant="default" onClick={handleLoginClick}>Log in</Button>
            <Button onClick={handleSignupClick}>Sign up</Button>
            <Burger opened={drawerOpened} onClick={toggleDrawer} />
          </div>
        </div>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="md"
        padding="md"
        title="Navigation"
        position="right"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>
          <a href="#" className={classes.link}>
            UrbanPro
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" onClick={handleLoginClick}>Log in</Button>
            <Button onClick={handleSignupClick}>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
