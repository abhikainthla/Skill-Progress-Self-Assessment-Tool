import { Box, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SkillProgress = ({ skill }) => {
  const ratings = skill.ratings || [];

  // ✅ Take last 3 ratings
  const lastThreeRatings = ratings.slice(-3);

  const chartData = lastThreeRatings.map((r, index) => ({
    name: `Attempt ${ratings.length - lastThreeRatings.length + index + 1}`,
    rating: r.value,
  }));

  return (
    <Box>
      <Text fontWeight="medium" mb={1}>
        {skill.name} — Last 3 Ratings
      </Text>

      {chartData.length === 0 ? (
        <Text color="gray.500">No ratings yet</Text>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar
              dataKey="rating"
              fill="#3182CE"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
};

export default SkillProgress;
