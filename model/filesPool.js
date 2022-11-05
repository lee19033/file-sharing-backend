const _mainPool = {};

const addFile = (fileObj) => {
  _mainPool[fileObj.filename] = fileObj;
};

const deleteFile = (fileName) => {
  delete _mainPool[fileName];
};

const size = () => {
  return Object.keys(_mainPool).length;
};

const getPool = () => {
  return _mainPool;
};

const isFileExist = (name) => {
  return _mainPool[name] ? true : false;
};

module.exports = {
  addFile,
  deleteFile,
  size,
  getPool,
  isFileExist,
};
