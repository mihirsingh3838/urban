import React, { useState } from 'react';
import { Button, Card, Image, Text, Badge, Title, Modal, TextInput, Group } from '@mantine/core';

const classes = [
  {
    title: 'Yoga Classes - Patanjali Yoga by Dr. Sandeep...',
    imageUrl: 'https://images.unsplash.com/photo-1720416912280-36c8cff635bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
    reviews: 22,
    date: 'Wed, 10 Jul at 05:30pm IST',
    time: '01 Hour 19 Min 04 Sec',
  },
  {
    title: 'Dance classes - Bollywood, hip hop Dance Classes...',
    imageUrl: 'https://images.unsplash.com/photo-1720416912280-36c8cff635bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
    reviews: 117,
    date: 'Wed, 10 Jul at 05:40pm IST',
    time: '01 Hour 29 Min 04 Sec',
  },
  {
    title: 'Vocal Music classes - Carnatic Singing, Folk...',
    imageUrl: 'https://images.unsplash.com/photo-1720416912280-36c8cff635bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
    reviews: 124,
    date: 'Wed, 10 Jul at 06:00pm IST',
    time: '01 Hour 49 Min 04 Sec',
  },
];

const LiveClasses = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Title className='text-center text-gray-900 pt-2' order={3}>
        Experience UrbanPro Live Classes
      </Title>
      <div className="flex justify-around mt-5 flex-wrap gap-4">
        {classes.map((classItem, index) => (
          <Card key={index} shadow="sm" padding="lg" className="max-w-sm">
            <Card.Section>
              <Image src={classItem.imageUrl} height={160} alt={classItem.title} />
            </Card.Section>
            <Badge color="pink" variant="light">
              LIVE
            </Badge>
            <Text size="lg" className="mt-2">
              {classItem.title}
            </Text>
            <Text size="sm" className="mt-2">
              ⭐ {classItem.reviews} reviews
            </Text>
            <Text size="sm" className="mt-2">
              {classItem.date}
            </Text>
            <Text size="sm" className="mt-2">
              Class starts in: {classItem.time}
            </Text>
            <Button variant="light" color="blue" fullWidth className="mt-2" onClick={() => setOpened(true)}>
              Register Now
            </Button>
            <Text size="sm" className="mt-2">
              FREE Trial Class
            </Text>
          </Card>
        ))}
      </div>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Class Registration"
      >
        <div>
          <Text size="lg" className="mb-4">
            Class 12 Tuition - Physics by Venkata Vijaya Kumar Veluri
          </Text>
          <Group  grow>
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
            <TextInput
              label="Email"
              placeholder="Enter your email"
              required
            />
            <TextInput
              label="Mobile number"
              placeholder="Enter your mobile number"
              required
            />
          </Group>
          <Button fullWidth className="mt-4">
            Continue
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default LiveClasses;
