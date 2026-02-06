import { VStack, Text, Heading } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { skillsAtom } from "../recoil/skillsAtom";
import SkillProgress from "./SkillProgress";
import Card from "./Card";

const SkillProgressList = () => {
  const skills = useRecoilValue(skillsAtom);

  return (
    <Card>
      <Heading size={"xl"} mb={2}>
        Progress Overview
      </Heading>
        <Text textStyle="sm" color={"gray.500"}  mb={4}>Current proficiency across different skills.</Text>
      <VStack spacing={4} align="stretch">
        {skills.length === 0 && (
          <Text color="gray.500">No skills added yet.</Text>
        )}

        {skills.map((skill) => (
          <SkillProgress key={skill.id} skill={skill} />
        ))}
      </VStack>
    </Card>
  );
};

export default SkillProgressList;
