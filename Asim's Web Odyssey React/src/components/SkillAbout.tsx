import { Divider, HStack, Heading, Image, Text } from "@chakra-ui/react";
import skills from "../constants/Skills";
import "../index.css";

const SkillsPage = () => {
  return (
    <>
      <Divider />

      {skills.map((skill, index) => (
        <>
          <HStack
            key={skill.name}
            className={`skill-container ${index % 2 === 1 ? "reverse" : ""}`}
            marginY={5}
          >
            <Image
              className="skillImage"
              borderRadius={20}
              width={"25rem"}
              src={skill.image}
            />
            <Text className="skillText" fontSize={"1.2rem"} marginLeft={5}>
              <Heading marginBottom={2}>{skill.name}</Heading>
              <Text>{skill.about}</Text>
            </Text>
          </HStack>
          <Divider />
        </>
      ))}
    </>
  );
};

export default SkillsPage;
