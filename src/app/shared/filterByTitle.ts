import { Criteria } from "app/interfaces/criteria";

export function filterByTitle<T extends object>(collection: Array<T>, criteria: Criteria):Array<T> {
  return collection.filter(item =>
    (item as any).title?.toLowerCase()
    .indexOf(criteria?.title?.toLowerCase() ?? '') != -1);
}

