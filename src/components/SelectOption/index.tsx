import React from 'react'
import { Select } from 'antd';
import { isEmpty } from 'q-utils-q';

interface OptionItem {
  label: string
  value: string
}

interface Props {
  onChange: (v: any) => void
  option: OptionItem[]
  placeholder?: string
  style?: any,
  showSearch?: boolean
  required?: boolean
  onSearch?: <T>(v: T) => void
  defaultValue?: string
}

const SelectOption: React.FC<Props> = ({
  placeholder,
  onChange,
  style,
  showSearch,
  required,
  onSearch = () => { },
  option,
  defaultValue,
  ...otherProps
}) => {
  const handleChange = (value: any) => {
    onChange(value)
  }

  const handleSearch = (val: any) => {
    if (showSearch) {
      onSearch(val)
    }
  }

  return (
    <Select
      showSearch={showSearch}
      style={{ ...style }}
      placeholder={placeholder}
      optionFilterProp="children"
      defaultValue={defaultValue}
      onChange={handleChange}
      onSearch={handleSearch}
      filterOption={(input: string, option: any) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      {...otherProps}
    >
      <Select.Option selected={defaultValue === ''} value="">Select</Select.Option>
      {!isEmpty(option) && option.map((item: OptionItem, i: number) => (
        <Select.Option selected={defaultValue === item.value} key={i} value={item.value}>{item.label}</Select.Option>
      ))}
    </Select>
  )
}

export default SelectOption;