function isEnum<T extends string | number>(
  value: string | number,
  condition: Record<string, T>,
): value is T {
  return Object.values(condition).includes(<T>value);
}

export { isEnum };
