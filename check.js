function check(a,x){
  for (let i = 0; i < a.length; i++) {
    (typeof a[i] == "string") ? a[i].toUpperCase : a[i];
  }
  (typeof x == "string") ? x.toUpperCase : x;
  if (a.includes(x)) {
    return true;
  } else {
    return false;
  }
};