export const selectTree = ({ tree }, id) => {
  if (trees[id]) {
    const tree = trees[id];
    return tree;
  }
  return {};
};
