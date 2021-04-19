/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { Divider, Form, Input, Button, InputNumber } from 'antd';
import { isEmpty } from 'q-utils-q';
import { useDispatch, useSelector } from 'libs/stores';
import { getAreaAction, getSizeAction } from 'context/general-option';
import { FishItems, postFishAction, updateFishAction } from 'context/fish';
import { SelectOption } from 'components';
import './style.scss'

interface Props {
  data?: FishItems | null
  other?: any
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const AddForm: React.FC<Props> = ({ data, other }): JSX.Element => {
  const d = useDispatch()
  const [form] = Form.useForm();
  const { optionProvince, sizeOption, optionCity } = useSelector(state => state.general)
  const { loadingPost } = useSelector(state => state.fish)
  const [area_provinsi, setProvince] = useState('default')

  const fetchOption = async () => {
    await getAreaAction(d)
    await getSizeAction(d)
  }

  const handleSelect = (value: string) => {
    setProvince(value)
    form.setFieldsValue({ area_kota: '' });
  }

  useEffect(() => {
    fetchOption()
  }, [])

  useEffect(() => {
    if (!isEmpty(data)) {
      const initState = {
        komoditas: data?.komoditas,
        area_provinsi: data?.area_provinsi,
        area_kota: data?.area_kota,
        size: data?.size,
        price: Number(data?.price),
      }
      form.setFieldsValue(initState);
    }
  }, [data])

  const onSubmit = async (e: any) => {
    const payload = {
      ...e,
      uuid: !isEmpty(data) ? data?.uuid : uuidv4(),
      tgl_parsed: moment().format(),
      timestamp: moment().unix(),
    }

    if (other === 'edit') {
      await updateFishAction(data?.uuid, payload, d);
      return
    } else {
      await postFishAction(payload, d)
    }
  }

  return (
    <div id="fish-form">
      <h2 className="title">{other ? "Edit Data" : "Tambah Data"}</h2>
      <Divider />
      <Form {...layout} form={form} name="control-hooks" onFinish={onSubmit}>
        <Form.Item name="komoditas" label="Komoditas" rules={[{ required: true }]}>
          <Input name="komoditas" />
        </Form.Item>

        <Form.Item name="size" label="Size" rules={[{ required: true }]}>
          <SelectOption option={sizeOption} showSearch={true} />
        </Form.Item>
        <Form.Item name="area_provinsi" label="Provinsi" rules={[{ required: true }]}>
          <SelectOption onChange={(v: string) => handleSelect(v)} option={optionProvince} showSearch={true} />
        </Form.Item>
        <Form.Item name="area_kota" label="Kota" rules={[{ required: true }]}>
          <SelectOption option={optionCity[area_provinsi]} showSearch={true} />
        </Form.Item>
        <Form.Item name="price" label="Harga" rules={[{ required: true }]}>
          <InputNumber
            style={{ width: 250 }}
            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value: any) => value?.replace(/\Rp\s?|(,*)/g, '')}
          />
        </Form.Item>
        <Form.Item className="button-submit">
          <Button type="primary" htmlType="submit" loading={loadingPost}>Simpan</Button>
        </Form.Item>
      </Form>
    </div >
  )
}

export default AddForm;