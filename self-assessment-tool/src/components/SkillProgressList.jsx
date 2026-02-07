import {
  Box,
  Text,
  NativeSelect,
  Heading,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { skillsAtom } from "../recoil/skillsAtom";
import SkillProgress from "./SkillProgress";
import { useEffect, useState } from "react";

const SkillProgressList = () => {
  const skills = useRecoilValue(skillsAtom) || [];
  const [selectedSkillId, setSelectedSkillId] = useState("");


  useEffect(() => {
    if (skills.length === 0) {
      setSelectedSkillId("");
      return;
    }

    // If selected skill was deleted reset to first
    const stillExists = skills.some(
      (s) => s.id === selectedSkillId
    );

    if (!stillExists) {
      setSelectedSkillId(skills[0].id);
    }
  }, [skills, selectedSkillId]);

  const selectedSkill = skills.find(
    (skill) => skill.id === selectedSkillId
  );

  if (skills.length === 0) {
    return <Text color="gray.500">No skills available</Text>;
  }

  return (
    <Box
      maxW="400px"
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      boxShadow={"lg"}
    >
      <Heading size="xl" mb={2}>
        Progress Overview
      </Heading>

      <Text fontSize="sm" color="gray.500" mb={4}>
        Current proficiency across different skills.
      </Text>

      <NativeSelect.Root>
        <NativeSelect.Field
          value={selectedSkillId}
          onChange={(e) => setSelectedSkillId(e.target.value)}
        >
          {skills.map((skill) => (
            <option key={skill.id} value={skill.id}>
              {skill.name}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>

      {selectedSkill && <SkillProgress skill={selectedSkill} />}
    </Box>
  );
};

export default SkillProgressList;
