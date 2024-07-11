import React from 'react';
import { Container, Button, Group, Image, Title } from '@mantine/core';
import SearchBar from './SearchBar';

const HeroSection: React.FC = () => {
    return (
        <div className="bg-blue-200 min-h-screen flex flex-col justify-center items-center">
            <div className='flex justify-between items-center w-full'>
                <div >
                    <SearchBar />
                    <Title order={3} className='pl-4 pt-2 text-gray-900' >
                    7.5 Lakh+ Verified Tutors | 55 Lakh+ Students | 4 Lakh+ Reviews
                    </Title>
                </div>
                <Image
                    src="https://images.unsplash.com/photo-1598981457915-aea220950616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMHN0dWR5aW5nfGVufDB8fDB8fHww"
                    alt="Hero Image"
                    width={300}
                    height={300}
                    radius="md"
                    className='pr-5'
                />
            </div>
            <Group className="mt-8" justify="center" gap="4">
                <Button variant="outline" size="lg">Learn More</Button>
                <Button size="lg">Get Started</Button>
            </Group>
        </div>
    );
};

export default HeroSection;