import { Button, message, Input, Drawer } from 'antd';
import { getProducts } from '@/services/ant-design-pro/api';
import React, { useState, useEffect} from 'react';


const ProductList: React.FC = (props) => {
        
   // function
   const [selfProduct, setSelfProduct] = useState<API.ProductItem>();
   const [count, setCount] = useState(0);

    const handleAdd = async(e, q) => {
        console.log(e, q);
        const hide = message.loading('正在添加');
        try {
            // const data = [{
            //     id: 11,
            //     name: "马如林11",
            // },];
            // await addRule({ ...fields });
            const data = await getProducts();
            console.log(data.data);
            console.log("loading");
            console.log(setSelfProduct);
            setSelfProduct(data.data)
            hide();
            message.success('Added successfully');
            return true;
        } catch (error) {
            console.log(error)
            hide();
            message.error('Adding failed, please try again!');
            return false;
        }
    }


//    console.log(selfProduct);
   console.log(props);
//    setSelfProduct(props?.products);
//    console.log(selfProduct);
//    console.log("init");
   useEffect(() => {
    console.log("init");
    // Update the document title using the browser API
    document.title = `You clicked ${selfProduct} times`;
    // 
    setSelfProduct(props?.products);
    console.log("useEffect");
  }, [count]);

    return <div>
        this is a component from here.
        {/* {this.props.products} */}
        <br/>
        { 
          selfProduct?.map((item, idx) => (
            <li key={item.id}>
            {item.id} : {item.name}
            <Button onClick={() => handleAdd(item.id, item.name)} value="1"> 添加 </Button>
            </li>
          )) 
	    }
        {/* <Button onClick={handleAdd}> 修改 </Button>
        <Button onClick={handleRemove}> 删除 </Button> */}
    </div>;
}

export default ProductList;