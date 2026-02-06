import { atom } from "recoil";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const saved = localStorage.getItem(key);
    if (saved) setSelf(JSON.parse(saved));

    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const skillsAtom = atom({
  key: "skillsAtom",
  default: [],
  effects_UNSTABLE: [localStorageEffect("skills")],
});
