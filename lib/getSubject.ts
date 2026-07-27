import { semester1Subjects } from "@/data/semester1";

export function getSubject(slug: string) {
  return semester1Subjects.find((subject) => subject.slug === slug);
}