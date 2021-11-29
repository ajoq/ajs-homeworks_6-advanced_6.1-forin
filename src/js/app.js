export default function orderByProps(obj, sort) {
  const props = obj;
  const arr1 = [];
  const arr2 = [];

  for (const key in props) {
    if (key === sort[0] || key === sort[1]) {
      arr1.push({ key, value: props[key] });
    } else {
      arr2.push({ key, value: props[key] });
    }
  }

  arr2.sort((a, b) => (a.key > b.key ? 1 : -1));
  const resultArr = arr1.concat(arr2);
  return resultArr;
}
