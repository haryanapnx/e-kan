import { AreaItem } from 'context/general-option';
import { isEmpty } from 'q-utils-q';

export const optionTransformer = (items: any) => {
  let optCity: any = {};
  let optProvince: any = [];
  
  if (!isEmpty(items)) {
    items.forEach((item: AreaItem) => {
      const cityItem = { label: item.city, value: item.city };
      let isExist = optCity[item.province];

      optCity[item.province] = isExist
        ? [...isExist, cityItem]
        : [cityItem];

      optProvince = [
        ...optProvince,
        {
          label: item.province,
          value: item.province,
        },
      ];
    });

  }

  return { optCity, optProvince }
};