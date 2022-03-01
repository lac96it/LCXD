export default function flattenObject(Obj, prefix = '', omitKey = []) {
  return Object.keys(Obj || {}).reduce((messages, key) => {

    if(omitKey.indexOf(key) !== -1) return messages;

    let value = Obj[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string' || typeof value === 'number') {
      messages[prefixedKey] = key === 'id' ? value.toString() : value;
    } else {
      Object.assign(messages, flattenObject(value, prefixedKey, omitKey));
    }

    return messages;
  }, {});
}