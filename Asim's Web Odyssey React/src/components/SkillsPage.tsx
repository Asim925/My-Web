import { Box } from "@chakra-ui/react";
import SkillAbout from "./SkillAbout";
const SkillsPage = () => {
  return (
    <Box
      className="Box"
      borderRadius={25}
      margin={"3vw"}
      padding={"3vw"}
      background={"#0C090A"}
    >
      <SkillAbout />
    </Box>
  );
};

export default SkillsPage;
