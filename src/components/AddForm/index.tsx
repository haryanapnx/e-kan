import JsonToForm from 'json-reactform';
import { Row, Col } from 'antd';
import { model } from './model';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddForm = () => {
  // Do anything within submit function.
  const submit = (e: any) => {
    console.log(e);
  }

  return (
    <div style={{ padding: '3rem' }}>
      <JsonToForm model={model} onSubmit={submit} />
    </div>
  )
}

export default AddForm;