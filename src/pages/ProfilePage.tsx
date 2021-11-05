import React, { useState } from "react";
import {
  Container,
  Box,
  Stack,
  Avatar,
  Heading,
  Text,
  Link,
  Spinner
} from "@chakra-ui/react";
import { InfoIcon, TriangleUpIcon, AtSignIcon } from "@chakra-ui/icons";
import { gql } from "@apollo/client";
import { client } from "..";

interface GithubData {
  login: string,
  name?: string,
  username: string,
  bio?: string,
  company?: string,
  location?: string,
  twitterUsername?: string
}

const ProfilePage = () => {
  const [githubData, setGithubData] = useState<GithubData | undefined>()

  client
    .query({
      query: gql`
        query {
          viewer {
            login
            name
            bio
            company
            location
            twitterUsername
          }
        }
      `,
    })
    .then((result) => setGithubData(result.data.viewer));

  // const { login, name, bio, company, location, twitterUsername } = githubData;

  if (!githubData) {
    return (
      <Container centerContent>
        <Spinner />
      </Container>
    )
  }

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
            <Heading size="lg">{githubData.name}</Heading>
            <Text marginBottom="2">@{githubData.login}</Text>
            <Text>{githubData.bio}</Text>
          </Box>
          <Avatar src="https://bit.ly/broken-link" />
        </Stack>

        <Stack direction="row" alignItems="center">
          <InfoIcon />
          <Text>{githubData.company}</Text>
        </Stack>
        <Stack direction="row" alignItems="center">
          <TriangleUpIcon />
          <Text>{githubData.location}</Text>
        </Stack>
        <Stack direction="row" alignItems="center">
          <AtSignIcon />
          <Link href={`https://twitter.com/${githubData.twitterUsername}`} target="_blank">
            <Text>{githubData.twitterUsername}</Text>
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProfilePage;
