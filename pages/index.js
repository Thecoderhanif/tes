import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Text, Button, Heading, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';

const meta = {
  title: 'Opa Kholis Majid - Frontend Developer'
};

const Index = () => {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  return (
    <Container>
      <NextSeo title={meta.title} titleTemplate="%s" />
      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        Halo Semua.
      </Heading>
      <Text color={secondaryText} lineHeight="tall">
        Saya Muhammad Hanif, Mahasiswa jurusan komputerisasi akutansi{' '}
        <a
          style={{ textDecoration: 'underline solid ', textDecorationThickness: '2px' }}
          href="https://politeknikunggul.ac.id/"
        >
          LP3M
        </a>{' '}
        orang yang hobi mendengarkan musik dan meme dan juga menyukai pemrograman.
      </Text>
      <Link href="/whoami" passHref>
        <Button as="a" fontSize="sm" mt={5} variant="outline" w="256px">
          Selengkapnya tentang saya
        </Button>
      </Link>
      <Projects />
      <Timeline />
    </Container>
  );
};

export default Index;
