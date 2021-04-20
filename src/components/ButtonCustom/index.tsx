import React from 'react';
import { Button } from 'antd';

interface ButtonProps {
  onClick?: () => void
  name: string
  icon?: React.ReactNode
}

const ButtonCustom: React.FC<ButtonProps> = ({
  onClick,
  name,
  icon,
  ...otherProps
}): JSX.Element => (
  <Button
    icon={icon}
    {...otherProps}
  >
    {name}
  </Button>
);

export default ButtonCustom;