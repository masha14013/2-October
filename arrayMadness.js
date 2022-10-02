function arrayMadness(a, b) {
  let resA = 0;
  let resB = 0;
  
  for (let i = 0; i < a.length; i++) {
    resA += a[i] ** 2;
  }
  for (let i = 0; i < b.length; i++) {
    resB += b[i] ** 3;
  }
  return resA > resB ? true : false;
}