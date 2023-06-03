let list = [];
let dict_country = {};
let country = prompt();
// let age = prompt();
// let gender = prompt();

function text_to_dict(file_path) {
  let result = {};
  let file = /* read file at file_path */;
  let lines = file.split("\n");
  for (let line of lines) {
    line = line.trim();
    if (line) {
      let [key, values_str] = line.split(": ", 1);
      let values = values_str.split(", ").map((brand) => brand.replace(",", ""));
      result[key] = values;
    }
  }
  return result;
}

function append_values_from_dict(dictionary, input_key) {
  let result = [];
  if (input_key in dictionary) {
    result = dictionary[input_key];
  }
  return result;
}

let country_file_path = 'brands_data/brands_country.txt';
let country_dict = text_to_dict(country_file_path);

list = append_values_from_dict(country_dict, country);

console.log(list);
// console.log("Values for key '" + country + "' are: " + values_list);
