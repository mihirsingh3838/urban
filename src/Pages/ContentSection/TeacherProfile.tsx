import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Space, Text } from '@mantine/core';
import { HeaderMegaMenu } from '../Header/HeaderMegaMenu';
import { FooterLinks } from '../Footer/FooterLinks';

const teachers = [
    { id: 1, title: 'Hritik C.', teaches: 'Class 11 tuition', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/3362554-medium130.jpg', overview: 'I have been mentoring students since 6 years from now for boards,jee and neet preparation.', reviews: 779 },
    { id: 2, title: 'Guru Charan T', teaches: 'Python Training Class', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/9144570-medium130.jpg', overview: 'Experienced Data Science Trainer with excellent feedbacks from my students.', reviews: 64 },
    { id: 3, title: 'Monjit Gogoi', teaches: 'Gym', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/6431623-medium130.jpg', overview: 'Experienced and Certified Fitness Personal Trainer from (ACE) American Council of Exercise …', reviews: 3 },
    { id: 4, title: 'Amit Saxena', teaches: 'Forex Trading', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/12615930-medium130.jpg', overview: 'Trade Smarter, Not Harder: Free Auto Trading Bot Inside!', reviews: 11 },
    { id: 5, title: 'Raktim Dey', teaches: 'Vocal music classes', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/12277965-medium130.jpg', overview: 'Indian Classical Vocal Trainer with 20+ years of experience in studio and stage', reviews: 18 },
    { id: 6, title: 'Dr. Abhijit', teaches: 'MBBS', image: 'https://urbanproprod.blob.core.windows.net/tv-prod/member/photo/3040202-medium130.jpg', overview: 'Jyotish Acharya blessed with Jupiter - Ketu Combo Learn Astrology Live Spiritually', reviews: 35 },
];

const TeacherProfile: React.FC = () => {
    const { id } = useParams();
    const teacher = teachers.find((t) => t.id.toString() === id);

    if (!teacher) {
        return <div>Teacher not found</div>;
    }

    return (
        <>
            <HeaderMegaMenu />
            <div className="p-4 bg-green-400">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <div className="flex flex-col md:flex-row">
                        <Card.Section className="md:w-1/3 flex-shrink-0">
                            <img src={teacher.image} alt={teacher.title} className="w-full h-auto" />
                        </Card.Section>
                        <div className="md:w-2/3 md:ml-6 flex flex-col justify-between">
                            <div>
                                <div className='pl-4'>
                                    <Text fw={500}>{teacher.title}</Text>
                                    <Text>{teacher.teaches}</Text>
                                    <Text>⭐ {teacher.reviews} reviews</Text>
                                    <Text className="mt-4">{teacher.overview}</Text>
                                </div>
                                <Space h='md'/>
                                <iframe
                                    width="800"
                                    height="290"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=85"
                                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className='pl-4'
                                ></iframe>
                            </div>
                            <Button color="blue" size="md" mt="md" radius="md">
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
            <FooterLinks />
        </>
    );
};

export default TeacherProfile;
