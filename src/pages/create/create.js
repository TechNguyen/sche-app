import {
    Button,
    DatePicker,
    Form,
    InputNumber,
    Select,
  } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './create.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);
  const Create = () => {
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    return (

      <div className={cx('wrapper__create')}>

        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
          method='post'
          onFinish={ async (values) => {
            values.Time = values.Time.$d.toISOString().split('T')[0]
            try {
              await axios.post(`${process.env.REACT_APP_API_KEY}/create`, values)
            } catch (err) {
              Response.status(400)
            }
            navigate('/list')
          }}
        >
          <Form.Item label="Chọn lớp" name={"class"}>
            <Select>
              <Select.Option value="Dungtoan">Lớp toán Dũng</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Ngày dạy" name={"Time"}>
            <DatePicker />
          </Form.Item>
          <Form.Item label="Buổi dạy" name={"number"}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Phí dạy" name={"money"}>
            <InputNumber />
          </Form.Item>
          <Form.Item>
              <Button type='primary' htmlType='submit'>Tạo</Button>
          </Form.Item>
        </Form>

      </div>
    );
  };
  export default Create;