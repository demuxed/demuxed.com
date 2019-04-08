export const extractNodes = dataArray => (
  dataArray ? dataArray.edges.map(edge => edge.node) : []
);

export const flattenAirtableNode = (node) => {
  if (Array.isArray(node)) {
    return node.map(flattenAirtableNode);
  }

  const { data: nodeData } = node;

  return Object.keys(nodeData).reduce((acc, key) => {
    let val = nodeData[key];

    if (typeof val === 'object' && val !== null) {
      val = flattenAirtableNode(val);
    }

    return { ...acc, [key]: val };
  }, {});
};
