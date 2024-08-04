import { Box, Divider, Heading, Text } from "@chakra-ui/react";

const Education = () => {
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
      <Heading mb={2}>Recent Achievement</Heading>
      <Text>
        Having just finished my matriculation, I’ve reached an important
        educational milestone 🎓. Matriculation, which is the end of high
        school, gave me a solid base in various subjects 📚 and got me ready for
        further studies.
      </Text>
      <Divider marginY={5} />

      <Heading mb={2}>Learning Experience</Heading>
      <Text>
        This period was crucial because it not only taught me important skills
        and knowledge but also helped me figure out what I want to do next 🌟.
        By passing my matric exams, I showed that I understand key ideas in
        subjects like Math, Science, and English ✏️.
      </Text>

      <Divider marginY={5} />
      <Heading mb={2}>Future Goals</Heading>
      <Text>
        Looking ahead, my goal is to become a full-stack developer 🌐. I’m
        excited to dive into both front-end and back-end development, learning
        how to build complete web applications and solve complex problems 🚀.
        This achievement sets me up for my next step in college, where I’ll
        explore subjects in more depth 📘. As I start this new chapter, my
        experience from matriculation will help me build on what I’ve learned
        and continue to improve my skills, bringing me closer to achieving my
        dream of becoming a full-stack developer 💻.
      </Text>
    </Box>
  );
};

export default Education;
