export const DEPARTMENTS: string[] = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
];

export const DEPARTMENT_OPTIONS: { value: string; label: string }[] =
  DEPARTMENTS.map((dep) => ({
    value: dep,
    label: dep,
  }));
