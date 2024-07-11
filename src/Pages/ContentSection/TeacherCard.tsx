import { Button, Card, Space, Text } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TeacherCardImageProps {
  id: number;  // Add ID for each teacher
  title: string;
  image: string;
  teaches: string;
}

const TeacherCard: React.FC<TeacherCardImageProps> = ({ id, title, image, teaches }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/teacher/${id}`);
  };

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <img src={image} alt={title} width={230} height={190} />
        </Card.Section>
        <Space h="md"/>
        <Text fw={500}>{title}</Text>
        <Text>{teaches}</Text>

        <Button color="blue" fullWidth mt="md" radius="md" onClick={handleViewProfile}>
          View Profile
        </Button>
      </Card>
    </>
  );
};

export default TeacherCard;
