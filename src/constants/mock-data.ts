export type Subject = {
  id: number;
  code: string;
  name: string;
  department: string;
  description: string;
};

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "This course provides an introduction to computer science and covers topics such as algorithms, data structures, and computer systems.",
  },
  {
    id: 2,
    code: "MATH102",
    name: "Calculus and Linear Algebra",
    department: "Mathematics",
    description:
      "This course covers the basics of calculus and linear algebra, including topics such as limits, derivatives, and vector spaces.",
  },
  {
    id: 3,
    code: "PHYS103",
    name: "Physics for Engineers",
    department: "Physics",
    description:
      "This course covers the basics of physics for engineers, including topics such as mechanics, thermodynamics, and electromagnetism.",
  },
];

export type Teacher = {
  id: number;
  name: string;
};

export const teachers: Teacher[] = [
  { id: 1, name: "Dr. Michael Brown" },
  { id: 2, name: "Prof. Emily White" },
];

export const subjects = [
  { id: 1, name: "Mathematics", code: "MATH" },
  { id: 2, name: "Physics", code: "PHYS" },
  { id: 3, name: "Chemistry", code: "CHEM" },
];
