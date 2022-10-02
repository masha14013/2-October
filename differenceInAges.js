function differenceInAges(ages){
  
  let old = Math.max.apply(...ages);
  let young = Math.min.apply(...ages);
  let dif = old - young;
  
  return [young, old, dif];
 
}
