import {
  Heading,
  VStack,
  HStack,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { recentRatingsSelector } from "../recoil/skillsSelectors";
import Card from "./Card";

const RecentSkillsCard = () => {
  const recent = useRecoilValue(recentRatingsSelector);

  return (
    <Card>
      <Heading size="xl"  mb={2}>
        Recently Rated Skills
      </Heading>
        <Text textStyle="sm" color={"gray.500"}  mb={4}>Review your latest self-assessments.</Text>


      <VStack spacing={4} align="stretch">
        {recent.length === 0 && (
          <Text color="gray.500">No ratings yet.</Text>
        )}

        {recent.map((item) => (
          <HStack key={item.id} justify="space-between">
            <VStack align="start" spacing={0}>
              <Text fontWeight="medium">{item.name}</Text>

              <Text fontSize="sm" color="gray.500">
                {item.date
                  ? new Date(item.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })

                  : "No date"}
              </Text>
            </VStack>

            <Badge
            color={"white"}
              bg={
                item.rating >= 4
                  ? "green"
                  : item.rating >= 3
                  ? "orange"
                  : "red"
              }
            >
              {item.rating}/5
            </Badge>
          </HStack>
        ))}
      </VStack>
    </Card>
  );
};

export default RecentSkillsCard;
