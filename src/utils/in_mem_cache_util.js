const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 0 }); 

function setCache(key, value) {
  cache.set(key, value);
}

function getCache(key) {
  return cache.get(key);
}

function delCache(key) {
  return cache.del(key);
}