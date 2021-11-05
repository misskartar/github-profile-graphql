import React from "react";
import { Container, Box, Stack, Avatar, Heading, Text } from "@chakra-ui/react";

const dummyData = {
  name: "Kartar",
  username: "misskartar",
  bio: "Software Engineer @MissGuided React Native."
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
        <Stack direction="row" justifyContent='space-between' marginBottom='3'>
          <Box>
            <Heading size="lg">{dummyData.name}</Heading>
            <Text marginBottom='2'>@{dummyData.username}</Text>
            <Text>{dummyData.bio}</Text>
          </Box>
          <Avatar src="https://bit.ly/broken-link" />
        </Stack>

        
      </Box>
    </Container>
  );
};

export default ProfilePage;
