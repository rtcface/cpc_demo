import type { GenericEntry } from "@/types";

export const sortByOrder = (entries: GenericEntry[]): GenericEntry[] => {
  return entries.sort((a: any, b: any) => {
    const orderA = typeof a.data.order === "number" ? a.data.order : 9999;
    const orderB = typeof b.data.order === "number" ? b.data.order : 9999;
    return orderA - orderB;
  });
};
