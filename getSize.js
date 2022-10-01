function getSize(width, height, depth) {
  
  let array = [];
  
  let area = 2 * (width * height + height * depth + width * depth);
  let volume = width * height * depth;
  array.push(area);
  array.push(volume);
  return array;
}