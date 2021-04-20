import { ModalName } from 'context/modal';
import { AddForm, DeleteConfirmation, Sort } from 'components'

const _ = ModalName;

interface Props {
  [key: string]: any;
}

export const renderChildren = (name: string, props: any, toggle: () => void) => {
  const c: Props = {
    [_.ADD_FISH]: <AddForm {...props} toggle={toggle} />,
    [_.DELETE_FISH]: <DeleteConfirmation {...props} toggle={toggle} />,
    [_.SORT]: <Sort {...props} toggle={toggle} />,
  }
  return c[name] ? c[name] : <div />;
}