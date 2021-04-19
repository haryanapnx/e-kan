
export const model = {
  "Komoditas": {
    "type": "text",
    "required": true,
  },
  "Size": {
    "type": "select",
    "required": true,
    "options": [
      {
        "value": "1",
        "label": "item 1"
      },
      {
        "value": "2",
        "label": "item 2"
      }
    ],
  },
  "Simpan": { // button submit
    "type": "submit",
  }
}