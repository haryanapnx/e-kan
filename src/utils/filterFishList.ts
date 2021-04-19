import { FishItems } from 'context/fish'

export const filterFishList = (list: FishItems[]) =>
  list.filter(
    (item: FishItems) =>
      item.uuid &&
      item.area_kota &&
      item.komoditas &&
      item.area_provinsi &&
      item.area_kota &&
      item.size &&
      item.tgl_parsed &&
      item.price &&
      item.timestamp
  );

