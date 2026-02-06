import {
  Heading,
  VStack,
  HStack,
  Text,
  IconButton,
  Input,
  Button,
} from "@chakra-ui/react";
import { Trash2 } from "lucide-react";
import { useRecoilState } from "recoil";
import { skillsAtom } from "../recoil/skillsAtom";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./Card";

const SkillLibraryCard = () => {
  const [skills, setSkills] = useRecoilState(skillsAtom);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (!newSkill.trim()) return;

    setSkills((prev) => [
      ...prev,
      { id: uuid(), name: newSkill, ratings: [] },
    ]);

    setNewSkill("");
  };

  const deleteSkill = (id) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <Card>
      <Heading size="xl" mb={2}>
        Skill Library
      </Heading>
      <Text textStyle="sm" color={"gray.500"} mb={4}>Manage your custom skills.</Text>

      <VStack spacing={3} align="stretch">
        {skills.map((skill) => (
          <HStack key={skill.id} justify="space-between">
            <Text>{skill.name}</Text>
            <IconButton
              icon={<Trash2 size={16} />}
              variant="ghost"
              colorScheme="red"
              onClick={() => deleteSkill(skill.id)}
            />
          </HStack>
        ))}

        <HStack pt={3}>
          <Input
            placeholder="Add new skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <Button onClick={addSkill}>+</Button>
        </HStack>
      </VStack>
    </Card>
  );
};

export default SkillLibraryCard;
