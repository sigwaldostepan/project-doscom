const convertTags = (tags) => {
  const startIndex = tags.lastIndexOf("=") + 1;
  const convertedTags = tags.substring(startIndex, tags.length);
  const result =
    convertedTags.charAt(0).toUpperCase() +
    convertedTags.slice(1).toLowerCase();

  return result;
};

export default convertTags;
