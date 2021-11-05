import React from "react";
import { Container, Box, Stack, Avatar, Heading, Text, Link } from "@chakra-ui/react";
import { InfoIcon, TriangleUpIcon, AtSignIcon } from "@chakra-ui/icons";

const dummyData = {
  name: "Kartar",
  username: "misskartar",
  bio: "Software Engineer @MissGuided React Native.",
  company: "Missguided",
  location: "Notts",
  twitter: {
    username: "kartarjabanda",
    link: 'https://twitter.com/kartarjabanda'
  }
};

const ProfilePage = () => {
  return (
    <Container maxW="container.md" centerContent>
      <Box
        padding="4"
        marginTop="28"
        bg="gray.700"
        maxW="3xl"
        borderRadius="lg"
      >
        <Stack direction="row" justifyContent="space-between" marginBottom="3">
          <Box>
            <Heading size="lg">{dummyData.name}</Heading>
            <Text marginBottom="2">@{dummyData.username}</Text>
            <Text>{dummyData.bio}</Text>
          </Box>
          <Avatar src="https://bit.ly/broken-link" />
        </Stack>

        <Stack direction="row" alignItems="center">
          <InfoIcon />
          <Text>{dummyData.company}</Text>
        </Stack>
        <Stack direction="row" alignItems="center">
          <TriangleUpIcon />
          <Text>{dummyData.location}</Text>
        </Stack>
        <Stack direction="row" alignItems="center">
          <AtSignIcon />
          <Link href={dummyData.twitter.link} target='_blank'>
            <Text>{dummyData.twitter.username}</Text>
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProfilePage;
