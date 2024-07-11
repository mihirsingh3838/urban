import React from 'react';
import { Text, Title } from '@mantine/core';
import { ArticleCardImage } from './ArticleCardImage';
import TeacherCard from './TeacherCard';

const ContentSection: React.FC = () => {
  const items = [
    { title: 'Math Tutoring', image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0aHN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Science Tutoring', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'English Tutoring', image: 'https://images.unsplash.com/photo-1565022536102-f7645c84354a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5nbGlzaHxlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'History Tutoring', image: 'https://plus.unsplash.com/premium_photo-1661963996750-24c93354eecc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Geography Tutoring', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VvZ3JhcGh5fGVufDB8fDB8fHww' },
    { title: 'Language Tutoring', image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmd1YWdlfGVufDB8fDB8fHww' }
  ];

  const hobbies = [
    { title: 'Yoga', image: 'https://plus.unsplash.com/premium_photo-1663013710516-40cf01373a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHlvZ2F8ZW58MHx8MHx8fDA%3D' },
    { title: 'Guitar', image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyfGVufDB8fDB8fHww' },
    { title: 'Dance', image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuY2luZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Singing', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Photography', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D' },
    { title: 'Gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww' },
  ];

  const teacher = [
    { id: 1, title: 'Hritik C.', teaches: 'Class 11 tuition', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/3362554-medium130.jpg' },
    { id: 2, title: 'Guru Charan T', teaches: 'Python Training Class', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/9144570-medium130.jpg' },
    { id: 3, title: 'Monjit Gogoi', teaches:'Gym', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/6431623-medium130.jpg' },
    { id: 4, title: 'Amit Saxena', teaches:'Forex Trading', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/12615930-medium130.jpg' },
    { id: 5, title: 'Raktim Dey', teaches:'Vocal music classes', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/12277965-medium130.jpg' },
    { id: 6, title: 'Dr. Abhijit', teaches:'MBBS', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/3040202-medium130.jpg' },
  ];

  return (
    <div className='bg-blue-300 min-h-screen'>
      <Title order={3} className='text-center p-2'>
        Explore Categories
      </Title>
      <Title order={5} className='pl-7'>
        Tuition
      </Title>
      <div className='flex flex-wrap gap-4 p-9'>
        {items.map((item, index) => (
          <ArticleCardImage key={index} title={item.title} image={item.image} />
        ))}
      </div>
      <Title order={5} className='pl-7'>
        Hobbies
      </Title>
      <div className='flex flex-wrap gap-4 p-9'>
        {hobbies.map((item, index) => (
          <div key={index}>
            <ArticleCardImage title={item.title} image={item.image} />
            <Text className='text-center'>
              {item.title}
            </Text>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap gap-4 p-9'>
        {teacher.map((item) => (
          <TeacherCard key={item.id} id={item.id} title={item.title} image={item.image} teaches={item.teaches} />
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
