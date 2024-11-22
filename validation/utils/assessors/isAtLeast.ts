const isAtLeast = (value: number | string, condition: number): boolean => {
  return (typeof value === "string" ? value.length : value) >= condition;
};

export { isAtLeast };
