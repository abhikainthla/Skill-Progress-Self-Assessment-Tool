import { Heading, Text, VStack } from "@chakra-ui/react";
import Card from "./Card";
import SkillForm from "./SkillForm";

const RateSkillCard = () => {
  return (
    <Card>
      <VStack spacing={4} align="stretch">
        <Heading size="xl">Rate a New Skill</Heading>
        <Text fontSize="sm" color="gray.500">
          Select a skill, rate your proficiency, and record the assessment date.
        </Text>

        <SkillForm />

      </VStack>
    </Card>
  );
};

export default RateSkillCard;
