import mapObj from "map-obj";

const trimValue = (value: unknown) =>
  typeof value === "string" ? value.trim() : value;

export const trimObj = <T extends object>(object: T): T =>
  mapObj(
    object,
    // @ts-ignore
    (key, value) => {
      if (Array.isArray(value)) {
        return [key, value.map((v) => trimValue(v))];
      }
      return [key, trimValue(value)];
    },
    { deep: true }
  ) as T;
