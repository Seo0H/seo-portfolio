export const getKeyFromObject = <KeyType>(target: object) => {
  return Object.keys(target) as KeyType[];
};

export const getEntryFromObject = <KeyType extends string, ValueType>(target: object) =>
  Object.entries(target) as [KeyType, ValueType][];
