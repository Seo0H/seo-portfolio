export const getKeyFromObject = <KeyType>(target: object) => {
  return Object.keys(target) as KeyType[];
};
