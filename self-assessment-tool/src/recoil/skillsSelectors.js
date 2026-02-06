import { selector } from "recoil";
import { skillsAtom } from "./skillsAtom";

/**
 * Skill names for dropdown
 */
export const skillNamesSelector = selector({
  key: "skillNamesSelector",
  get: ({ get }) => {
    const skills = get(skillsAtom);
    return skills.map((s) => ({
      id: s.id,
      name: s.name,
    }));
  },
});

/**
 * Recently rated skills (latest first)
 */
export const recentRatingsSelector = selector({
  key: "recentRatingsSelector",
  get: ({ get }) => {
    const skills = get(skillsAtom);

    return skills
      .flatMap((skill) =>
        skill.ratings.map((r) => ({
          skillId: skill.id,
          name: skill.name,
          rating: r.value,
          date: r.date,
        }))
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  },
});
