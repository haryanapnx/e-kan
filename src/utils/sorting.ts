/* eslint-disable no-sequences */

export const sortlist = (list: any, name: string = 'default', type: string) => {
  switch (name) {
    case 'date':
      if (type === 'desc') {
        return list.sort((a: any, b: any) => (new Date(b.tgl_parsed) as any) - (new Date(a.tgl_parsed) as any));
      }
      return list.sort((a: any, b: any) => (new Date(b.tgl_parsed) as any) - (new Date(a.tgl_parsed) as any));
    case 'comodity':
      if (type === 'desc') {
        return list.sort(sortBy('comodity', true, (a: string) => a.toUpperCase()))
      }
      return list.sort(sortBy('comodity', false, (a: string) => a.toUpperCase()))
    case 'province':
      if (type === 'desc') {
        return list.sort(sortBy('area_provinsi', true, (a: string) => a.toUpperCase()))
      }
      return list.sort(sortBy('area_provinsi', false, (a: string) => a.toUpperCase()))

    case 'city':
      if (type === 'desc') {
        return list.sort(sortBy('area_kota', true, (a: string) => a.toUpperCase()))
      }
      return list.sort(sortBy('area_kota', false, (a: string) => a.toUpperCase()))

    case 'price':
      if (type === 'desc') {
        return list.sort(sortBy('price', true, parseInt))
      }
      return list.sort(sortBy('price', false, parseInt))
    case 'size':
      if (type === 'desc') {
        return list.sort(sortBy('size', true, parseInt))
      }
      return list.sort(sortBy('size', false, parseInt))
    default:
      return list;
  }
}

const sortBy = (field: any, reverse: any, primer: any) => {
  const key = primer ?
    function (x: any) { return primer(x[field]) } :
    function (x: any) { return x[field] };

  reverse = [-1, 1][+!!reverse];

  return function (a: any, b: any) {
    return a = key(a), b = key(b), reverse * (+(a > b) - +(b > a));
  }
}
