import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";

import DashboardHeader from "../components/DashboardHeader";
import RateSkillCard from "../components/RateSkillCard";
import RecentSkillsCard from "../components/RecentSkillsCard";
import SkillLibraryCard from "../components/SkillLibraryCard";
import SkillProgressList from "../components/SkillProgressList";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={6}>
        {/* Left column */}
        <VStack spacing={6} align="stretch">
          <RateSkillCard />
          <RecentSkillsCard />
        </VStack>

        {/* Right column */}
        <GridItem>
            <VStack spacing={6} align="stretch">
          <SkillLibraryCard />
          <SkillProgressList/>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
