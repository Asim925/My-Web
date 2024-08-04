import {
  Box,
  Heading,
  Image,
  Text,
  Link,
  Divider,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";

import myImage from "../images/asim.jpeg";
const HomePage = () => {
  return (
    <Box
      className="Box"
      borderRadius={25}
      margin={"3vw"}
      padding={"3vw"}
      background={"#0C090A"}
      textAlign="center"
    >
      <Flex
        className="homeHeader"
        justifyContent={"center"}
        alignItems={"center"}
        mb={2}
      >
        <Box width={"150px"}>
          <Image borderRadius={"100%"} width={"100%"} src={myImage} />
        </Box>
        <Box>
          <Heading mb={4}>
            Hi, I'm M. Asim Nazeer{" "}
            <Image
              display="inline-block"
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="35px"
            />
          </Heading>
          <Image src="https://readme-typing-svg.herokuapp.com?lines=Pre+Engineering+Student;front-End+Web+Developer;Software%20Engineer%20Intern;Always%20learning%20new%20things&center=true&width=500&height=50" />
        </Box>
      </Flex>
      <Divider mb={6} />
      <VStack spacing={4} align="center">
        <Text fontSize="lg">
          🚀 Hey there! I'm Muhammad Asim Nazeer, on a mission to conquer the
          digital world as a future front-end developer! 💻 With HTML, CSS, and
          JavaScript under my belt, I'm ready to craft captivating user
          experiences and bring designs to life. 🎨 Creating sleek layouts with
          CSS, I thrive on problem-solving in JS and turning ideas into reality.
          🌟
        </Text>
        <Text fontSize="lg">
          I've recently started diving into React basics, adding a powerful tool
          to my development arsenal. With React, I'm eager to build dynamic and
          responsive web applications that offer seamless user interactions. The
          journey of learning React has been exhilarating, and I can't wait to
          leverage its component-based architecture to create efficient and
          maintainable code.
        </Text>
        <Text fontSize="lg">
          Beyond coding, I'm always looking to collaborate with like-minded
          individuals and explore new technologies that push the boundaries of
          what's possible on the web. Let's embark on this coding journey
          together! 🌟
        </Text>
      </VStack>
      <Flex justifyContent={"center"} my={6}>
        <Image
          src="https://komarev.com/ghpvc/?username=asim925&label=Profile%20views&color=0e75b6&style=plastic"
          alt="views"
        />
      </Flex>
      <Heading as="h2" size="lg" my={6}>
        🔥 Streak Stats
      </Heading>
      <Flex justifyContent={"center"} my={4}>
        <Image
          src="https://github-readme-streak-stats.herokuapp.com/?user=asim925&theme=radical"
          alt="streaks"
        />
      </Flex>
      <Heading as="h2" size="lg" my={6}>
        🛠️ My Skills
      </Heading>
      <Box my={4}>
        <Heading as="h3" size="md" my={4}>
          👉 Programming languages
        </Heading>
        <HStack spacing={4} justify="center">
          <Image
            alt="TypeScript"
            src="https://img.shields.io/badge/TypeScript%20-%23F7DF1E.svg?logo=typescript&logoColor=black"
          />
          <Image
            alt="JavaScript"
            src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?logo=javascript&logoColor=black"
          />
        </HStack>
      </Box>
      <Divider />
      <Box my={4}>
        <Heading as="h3" size="md" my={4}>
          👉 Frontend Development
        </Heading>
        <HStack spacing={4} justify="center">
          <Image
            alt="HTML"
            src="https://img.shields.io/badge/HTML5%20-%23E34F26.svg?logo=html5&logoColor=white"
          />
          <Image
            alt="CSS"
            src="https://img.shields.io/badge/CSS%20-%231572B6.svg?logo=css3&logoColor=white"
          />
          <Image
            alt="Bootstrap"
            src="https://img.shields.io/badge/Bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=black"
          />
          <Image
            alt="Chakra UI"
            src="https://img.shields.io/badge/Chakra%20UI-%2334D5E0.svg?style=flat&logo=chakra-ui&logoColor=white"
          />
          <Image
            alt="React.js"
            src="https://img.shields.io/badge/React.js-%23282C34.svg?style=flat&logo=react&logoColor=61DAFB"
          />
        </HStack>
      </Box>
      <Divider />

      <Box my={4}>
        <Heading as="h3" size="md" my={4}>
          👉 Databases & Cloud Hosting
        </Heading>
        <HStack spacing={4} justify="center">
          <Image
            alt="GitHub Pages"
            src="https://img.shields.io/badge/GitHub%20Pages-%23327FC7.svg?style=flat&logo=github&logoColor=white"
          />
          <Image
            alt="Vercel"
            src="https://img.shields.io/badge/Vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white"
          />
        </HStack>
      </Box>
      <Divider />

      <Box my={4}>
        <Heading as="h3" size="md" my={4}>
          👉 Software & Tools
        </Heading>
        <HStack spacing={4} justify="center">
          <Image
            alt="Git"
            src="https://img.shields.io/badge/Git%20-%23F05033.svg?logo=git&logoColor=white"
          />
          <Image
            alt="Linux"
            src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black"
          />
          <Image
            alt="Visual Studio Code"
            src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?logo=visual-studio-code&logoColor=white"
          />
        </HStack>
      </Box>
      <Divider />

      <Heading as="h2" size="lg" my={6}>
        📊 Github Stats
      </Heading>
      <Box my={4}>
        <details>
          <summary>
            <b>💻 GitHub Profile Stats</b>
          </summary>
          <Flex
            className="profileStats"
            gap={3}
            justifyContent={"center"}
            mt={4}
          >
            <Image
              alt="Asim925's Github Stats"
              src="https://github-readme-stats.vercel.app/api?username=asim925&show_icons=true&count_private=true&theme=algolia"
            />
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs?username=asim925&show_icons=true&locale=en&layout=compact&theme=algolia"
              alt="asim925"
            />
          </Flex>
        </details>
      </Box>
      <Box my={4}>
        <details>
          <summary>
            <b>🏆 Achievements and Trophies</b>
          </summary>
          <Flex justifyContent={"center"} mt={4}>
            <Image
              src="https://github-profile-trophy.vercel.app/?username=asim925&theme=algolia"
              alt="Asim925's GitHub Trophies"
            />
          </Flex>
        </details>
      </Box>
      <Heading as="h2" size="lg" my={6}>
        🙋‍♀️ Let's Connect
      </Heading>
      <HStack spacing={4} justify="center">
        <Link href="https://asim925.github.io/My-Web/" target="_blank">
          <Image
            src="https://img.icons8.com/bubbles/50/000000/web.png"
            alt="Website"
          />
        </Link>
        <Link href="mailto:asimnazeer925@gmail.com" target="_blank">
          <Image
            src="https://img.icons8.com/bubbles/50/000000/gmail.png"
            alt="Gmail"
          />
        </Link>
        <Link href="https://github.com/asim925" target="_blank">
          <Image
            src="https://img.icons8.com/bubbles/50/000000/github.png"
            alt="GitHub"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/muhammad-asim-nazeer-b30b7a2a4/"
          target="_blank"
        >
          <Image
            src="https://img.icons8.com/bubbles/50/000000/linkedin.png"
            alt="LinkedIn"
          />
        </Link>
        <Link href="https://www.facebook.com/asim.madni.505/" target="_blank">
          <Image
            src="https://img.icons8.com/bubbles/50/000000/facebook-new.png"
            alt="Facebook"
          />
        </Link>
        <Link href="https://www.instagram.com/asim__925/" target="_blank">
          <Image
            src="https://img.icons8.com/bubbles/50/000000/instagram.png"
            alt="Instagram"
          />
        </Link>
      </HStack>
      <Divider my={6} />
    </Box>
  );
};

export default HomePage;
