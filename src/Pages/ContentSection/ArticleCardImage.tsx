import React from 'react';
import { Card } from '@mantine/core';

interface ArticleCardImageProps {
  title: string;
  image: string;
}

export const ArticleCardImage: React.FC<ArticleCardImageProps> = ({ title, image }) => {
  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <img src={image} alt={title} width={290} height={290} />
      </Card.Section>
    </Card>
  );
};
