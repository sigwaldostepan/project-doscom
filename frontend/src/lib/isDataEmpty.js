const isDataEmpty = (data) => {
  for (const key in data) {
    if (!data[key]) return true;
  }

  return false;
};

export default isDataEmpty;
