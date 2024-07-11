import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <>
    <div className='flex justify-evenly p-5'>
      <img
      src='https://c.urbanpro.com/assets/new-ui/uphomepage/hindu-43ca7e1efe285bb541a96e816bd063cd.png'
      alt='The hindu'
      width={120}
      height={50}
      />
      <img
      src='https://c.urbanpro.com/assets/new-ui/uphomepage/bangmirror-b8c4c05af2f94a3f6df8f0dd4172d648.png'
      alt='Bangalore Mirror'
      width={120}
      height={50}
      />
      <img
      src='https://c.urbanpro.com/assets/new-ui/uphomepage/ecotimes-b66d28bc3fab91440a6d73ba9200ea6a.png'
      alt='The Economic Times'
      width={120}
      height={50}
      />
      <img
      src='https://c.urbanpro.com/assets/new-ui/uphomepage/nextbig-ae24db4f6ecb4e729044b83be7a531bf.png'
      alt='NXt'
      width={120}
      height={50}
      />
      <img
      src='https://c.urbanpro.com/assets/new-ui/uphomepage/yourstory-e6e31ce93358724dfd41215b191e5b75.png'
      alt='Your Story'
      width={120}
      height={50}
      />
      <img
      src='https://c.urbanpro.com/assets/new-ui/uphomepage/livemint-64536d2d1d809d86a5575c72aaab3b4f.png'
      alt='Live Mint'
      width={120}
      height={50}
      />
    </div>
      <footer className={classes.footer}>
        <Container className={classes.inner}>
          <div className={classes.logo}>
            <img src='https://c.urbanpro.com/assets/new-ui/uphomepage/uplogoOnlyIcon-ff0f04d4ab79da27952b84ee8a816f27.png'
            alt='company_logo'
            width={30}
            height={30}/>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={classes.afterFooter}>
          <Text c="dimmed" size="sm">
            © 2020 mantine.dev. All rights reserved.
          </Text>

          <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </footer>
    </>
  );
}