import {
  Box,
  Text,
  VStack,
  HStack,
  Progress,
} from "@chakra-ui/react";

const SkillProgress = ({ skill }) => {
  const ratings = skill.ratings || [];

  const average =
    ratings.length === 0
      ? 0
      : (
          ratings.reduce((sum, r) => sum + r.value, 0) /
          ratings.length
        ).toFixed(1);

  const percentage = (average / 5) * 100;

  return (
    <Box>
      <HStack justify="space-between" mb={1}>
        <Text fontWeight="medium">{skill.name}</Text>
        <Text fontSize="sm" color="gray.500">
          {average}/5
        </Text>
      </HStack>

      <Progress.Root
        value={percentage}
        size="sm"
        colorPalette="blue"
        borderRadius="md"
      >
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </Box>
  );
};

export default SkillProgress;
