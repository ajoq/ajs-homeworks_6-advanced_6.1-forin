export default function orderByProps(obj, sort) {
  const props = obj;
  const arr1 = [];
  const arr2 = [];

  for (const key in props) {
    if (sort.length === 0) {
      break;
    }

    for (const arrKey of sort) {
      if (arrKey === key) {
        arr1.push({ key: arrKey, value: props[key] });
        delete props[key];
        sort.shift();
        break;
      }
    }
  }

  for (const key in props) {
    arr2.push({ key, value: props[key] });
  }

  arr2.sort((a, b) => (a.key > b.key ? 1 : -1));

  const resultArr = arr1.concat(arr2);

  return resultArr;
}
