import { Button , Input, message } from 'antd';
// import { useIntl} from 'umi';
import React, { useState, useEffect} from 'react';
import ProductList from './components/ProductList';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';


const products = {
  data: [
    {
      id: 1,
      name: "马如林",
    },
    {
      id: 2,
      name: "测试",
    },
  ],
  add: {},
};


const Product: React.FC = () => {
  // const intl = useIntl();
//   console.log(products);
//   const { list } = products;
//   console.log(list);
//   console.log(products.list);
const [addProduct, setAddProduct] = useState(false);

const addProductF = () => {
  console.log("添加产品页面" , addProduct)
  setAddProduct(
     !addProduct
  )
}
   
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

  return (
    <div>
      this is a test
      <ProductList products={products.data}/>
      <Button onClick={addProductF} >添加 {addProduct}</Button>
      <Input placeholder="Basic usage" />
      {addProduct  && 
      <ModalForm<{
        name: string;
        company: string;
      }>
        title="新建表单"
        trigger={
          <Button type="primary">
            <PlusOutlined />
            新建表单
          </Button>
        }
        modalProps={{
          onCancel: () => console.log('run'),
        }}
        
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values.name);
          message.success('提交成功');
          return true;
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="签约客户名称"
            tooltip="最长为 24 位"
            placeholder="请输入名称"
          />
  
          <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width="md" name="contract" label="合同名称" placeholder="请输入名称" />
          <ProFormDateRangePicker name="contractTime" label="合同生效时间" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            options={[
              {
                value: 'chapter',
                label: '盖章后生效',
              },
            ]}
            width="xs"
            name="useMode"
            label="合同约定生效方式"
          />
          <ProFormSelect
            width="xs"
            options={[
              {
                value: 'time',
                label: '履行完终止',
              },
            ]}
            name="unusedMode"
            label="合同约定失效效方式"
          />
        </ProForm.Group>
        <ProFormText width="sm" name="id" label="主合同编号" />
        <ProFormText name="project" disabled label="项目名称" initialValue="xxxx项目" />
        <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />
      </ModalForm>
      }

    </div>
  );
};

export default Product;
