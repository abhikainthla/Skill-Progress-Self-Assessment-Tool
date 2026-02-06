
import { useState } from "react";
import {
  VStack,
  Button,
  Text,
  Slider,
} from "@chakra-ui/react";
import {
  NativeSelectRoot,
  NativeSelectField,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { skillsAtom } from "../recoil/skillsAtom";

const SkillForm = () => {
  const [skills, setSkills] = useRecoilState(skillsAtom);
  const [selectedSkillId, setSelectedSkillId] = useState("");
  const [rating, setRating] = useState([3]); 

  const submitRating = () => {
    if (!selectedSkillId) return;

    setSkills((prev) =>
      prev.map((skill) =>
        skill.id === selectedSkillId
          ? {
              ...skill,
              ratings: [
                ...(skill.ratings || []),
                {
                  value: rating[0],
                  date: new Date().toISOString(),
                },
              ],
            }
          : skill
      )
    );
  };

  return (
    <VStack spacing={4} align="stretch">
      <NativeSelectRoot>
        <NativeSelectField
          value={selectedSkillId}
          onChange={(e) => setSelectedSkillId(e.target.value)}
        >
          <option value="">Choose a skill...</option>
          {skills.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </NativeSelectField>
      </NativeSelectRoot>

      <Text fontWeight="medium">
        Proficiency Rating (1–5): {rating[0]}
      </Text>

      <Slider.Root
        min={1}
        max={5}
        step={1}
        value={rating}
        onValueChange={({ value }) => setRating(value)}
      >
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>

      <Button colorScheme="blue" onClick={submitRating}>
        Submit Rating
      </Button>
    </VStack>
  );
};

export default SkillForm;
