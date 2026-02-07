import {
  Heading,
  VStack,
  HStack,
  Text,
  IconButton,
  Input,
  Button,
  Dialog,
  Portal,
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
            
            <Dialog.Root>
              <Dialog.Trigger  asChild>
                <IconButton
              variant="ghost"
              colorPalette={"red"}
              
            ><Trash2 size={16} color="red" />
            </IconButton>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop>
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Header>
                        <Dialog.Title>Delete Skill</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body>
                        <p>
                Are you sure you want to delete this skill?
              </p>
                      </Dialog.Body>
                      <Dialog.Footer>
                        <Dialog.ActionTrigger asChild>
                          <Button variant="outline">Cancel</Button>
                        </Dialog.ActionTrigger>
                        <Button bg={"red"} onClick={() => deleteSkill(skill.id)}>Delete</Button>
                      </Dialog.Footer>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Dialog.Backdrop>
              </Portal>

            </Dialog.Root>
            
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
