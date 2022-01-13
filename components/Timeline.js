import { useState } from 'react';
import {
  Flex,
  List,
  Text,
  Badge,
  Stack,
  Button,
  Divider,
  Heading,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';

import Link from '@/components/Link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Check } from '@/styles/icons';

function TimelineStep({ title, children }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex alignContent="flex-start">
          <Check mr={2} mt={1} color="whatsapp.500" />
          <Heading as="h4" fontSize="" fontWeight="medium">
            {title}
          </Heading>
        </Flex>
        <Text color={secondaryText} pl={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
}

function FullTimeLine() {
  const border = useColorModeValue('gray.200', 'gray.600');
  return (
    <>
      <Divider borderColor={border} my={5} w="100%" />
      <Heading as="h3" fontSize="xl" mb={4} letterSpacing="lighter">
        2021
      </Heading>
      <List>
        <TimelineStep title="Akutansi 📒">
          Belajar tentang dasar dasar akutansi mulai dari siklus akutansi, dasar perpajakan dan
          beberapa aplikasi komputer seperti word excel dan access.
          <br />
          <Badge ariant="subtle" colorScheme="green" rounded="base">
            Komputer akutansi
          </Badge>
        </TimelineStep>
        <TimelineStep title="Belajar otodidak 📚">Sebagai Seorang Akuntan.</TimelineStep>
      </List>
      <Divider borderColor={border} my={5} w="100%" />
      <Heading as="h3" fontSize="xl" mb={4} letterSpacing="lighter">
        2020
      </Heading>
      <List>
        <TimelineStep title="IPA 🔥">
          Belajar Persiapan UNBK Dengan Bimbingan Belajar Al-Misbah.
          <br />
          <Badge ariant="subtle" colorScheme="green" rounded="base">
            Matematika
          </Badge>
          <Badge ml={2} ariant="subtle" colorScheme="green" rounded="base">
            B. Inggris
          </Badge>
        </TimelineStep>
      </List>
    </>
  );
}

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);
  return (
    <>
      <Heading as="h2" fontSize="3xl" letterSpacing="tight" mb={4} mt={10}>
        Linimasa
      </Heading>
      <Heading as="h3" fontSize="xl" mb={4} letterSpacing="lighter">
        2021 Desember - Sekarang
      </Heading>
      <List>
        <TimelineStep title="Frond end developer Newbie 👨🏼‍💻">
          Mulai Belajar tentang dasar dasar web aplikasi melalui channel yt maupun blog misalnya
          saja yang terkenal di indonesia&nbsp;
          <Link href="https://jiwalu.id">Programming unpas</Link>.
          <br />
          <Badge mr={2} ariant="subtle" colorScheme="green" rounded="base">
            Html
          </Badge>
          <Badge mr={2} ariant="subtle" colorScheme="green" rounded="base">
            Css
          </Badge>
          <Badge ariant="subtle" colorScheme="green" rounded="base">
            Javacript
          </Badge>
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeLine />
      ) : (
        <Button
          display="block"
          my={4}
          mx="auto"
          fontWeight="medium"
          variant="ghost"
          fontSize="sm"
          onClick={() => showFullTimeline(true)}
          rightIcon={<ChevronDownIcon />}
        >
          Selengkapnya
        </Button>
      )}
    </>
  );
}
