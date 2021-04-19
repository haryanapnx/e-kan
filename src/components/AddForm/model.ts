export const model = {
  "Komoditas": {
    "type": "text",
    "required": true,
  },
  "Simpan": { // button submit
    "type": "submit",
  }
}

export const modelGenerator = (optionList: any) => {
  console.log(optionList);
  
  let newOption: any = { ...model };
  optionList.forEach((item: any) => {
    newOption[item.label] = {
      "type": "select",
      "required": true,
      "options": item.option,
      defaultValue: item.defaultValue
    }
  });
  return newOption;
}