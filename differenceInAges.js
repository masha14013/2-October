function differenceInAges(ages){
  
  let old = Math.max.apply(null, ages);
  let young = Math.min.apply(null, ages);
  let dif = old - young;
  
  return [young, old, dif];
 
}
