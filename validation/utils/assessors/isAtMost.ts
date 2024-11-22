const isAtMost = (value: number | string, condition: number): boolean => {
  return (typeof value === "string" ? value.length : condition) <= condition;
};

export { isAtMost };
