import { ModalName } from 'context/modal';
import { AddForm } from 'components'

const _ = ModalName;

interface Props {
  [key: string]: any;
}

export const renderChildren = (name: string, props: any, toggle: () => void) => {
  const c: Props = {
    [_.ADD_FISH]: <AddForm {...props} toggle={toggle} c='AddForm' />,
  }
  return c[name] ? c[name] : <div />;
}