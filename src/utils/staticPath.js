const staticPath = (type = 'images', path, format = 'png') => {
  return `/static/${type}/${path}.${format}`;
};

export default staticPath;
