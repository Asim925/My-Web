import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      textAlign={"center"}
      lineHeight={8}
      fontFamily="ubuntu"
      fontSize={"1.2rem"}
      className="Box"
      borderRadius={25}
      margin={"3vw"}
      padding={"3vw"}
      background={"#0C090A"}
    >
      <Heading mb={2}>Get in touch With Me 🚀</Heading>
      <Text>
        <strong>Let's Connect!</strong> I'm always excited to meet new people
        and engage with my community. Follow me on social media for the latest
        updates, insights, and behind-the-scenes content. Whether you have a
        question about my work, want to collaborate on a project, or just want
        to say hello, I'm here to connect. Feel free to reach out through any of
        these platforms – I look forward to hearing from you!
      </Text>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        wrap={"wrap"}
        gap={3}
        marginY={5}
      >
        <Button
          as="a"
          href="https://github.com/Asim925"
          target="_blank"
          leftIcon={<Icon as={FaGithub} />}
          colorScheme="gray"
          size="lg"
          variant="solid"
        >
          GitHub
        </Button>
        <Button
          as="a"
          href="https://www.linkedin.com/in/muhammad-asim-nazeer-b30b7a2a4/"
          target="_blank"
          leftIcon={<Icon as={FaLinkedin} />}
          colorScheme="linkedin"
          size="lg"
          variant="solid"
        >
          LinkedIn
        </Button>
        <Button
          as="a"
          href="https://www.facebook.com/asim.madni.505/"
          target="_blank"
          leftIcon={<Icon as={FaFacebook} />}
          colorScheme="facebook"
          size="lg"
          variant="solid"
        >
          Facebook
        </Button>
        <Button
          as="a"
          href="https://www.instagram.com/asim__925/"
          target="_blank"
          leftIcon={<Icon as={FaInstagram} />}
          colorScheme="red"
          size="lg"
          variant="solid"
        >
          Instagram
        </Button>
        <Button
          as="a"
          href="mailto:asimnazeer925@gmail.com"
          leftIcon={<FaEnvelope />}
          colorScheme="teal"
          variant="solid"
          size="lg"
        >
          Email
        </Button>
      </Flex>
      <Divider />
      <footer>
        <Text marginY={3}>
          &copy; 2024 M. Asim Nazeer. All rights reserved.
        </Text>
      </footer>
    </Box>
  );
};

export default Contact;
