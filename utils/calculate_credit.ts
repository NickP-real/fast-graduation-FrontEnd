import { Course } from "model/model";

export function getCalculatedCredit(enrollCourse: Course[]): {
  [key: number]: number;
} {
  const allCredits: { [key: number]: number } = {};

  for (let i = 0; i < 10; i++) {
    allCredits[i] = 0;
  }

  enrollCourse.forEach(({ credit, category_id }: Course) => {
    if (category_id !== 1)
      return (allCredits[category_id ? category_id - 1 : 0] += credit);

    if (6 - allCredits[0] === 0) {
      allCredits[1] += credit;
    } else if (credit + allCredits[0] > 6) {
      const left = 6 - allCredits[0];
      allCredits[0] = 6;
      allCredits[1] += credit - left;
    } else {
      allCredits[0] += credit;
    }
  });

  return allCredits;
}
