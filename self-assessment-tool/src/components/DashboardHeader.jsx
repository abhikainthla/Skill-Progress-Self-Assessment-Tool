import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { skillsAtom } from "../recoil/skillsAtom";

const DashboardHeader = () => {
  const skills = useRecoilValue(skillsAtom);

  // Get latest assessment date
  const lastAssessmentDate = (() => {
    const allRatings = skills.flatMap(
      (skill) => skill.ratings || []
    );

    if (allRatings.length === 0) return null;

    const latest = allRatings.reduce((latest, current) =>
      new Date(current.date) > new Date(latest.date)
        ? current
        : latest
    );

    return new Date(latest.date).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

  })();

  return (
    <Flex justify="space-between" align="center" mb={4}>
      <Heading size="4xl">
        Self-Assess Your Skills
      </Heading>

      <Text fontSize="sm" color="gray.400">
        {lastAssessmentDate
          ? `Last assessed on ${lastAssessmentDate}`
          : "No assessments yet"}
      </Text>
    </Flex>
  );
};

export default DashboardHeader;
