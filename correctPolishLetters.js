function correctPolishLetters (string) {
  string = string.replace(/ą/gi, "a");
  string = string.replace(/ć/gi, "c");
  string = string.replace(/ę/gi, "e");
  string = string.replace(/ł/gi, "l");
  string = string.replace(/ń/gi, "n");
  string = string.replace(/ó/gi, "o");
  string = string.replace(/ś/gi, "s");
  string = string.replace(/ź/gi, "z");
  string = string.replace(/ż/gi, "z");
  
  return string;
}