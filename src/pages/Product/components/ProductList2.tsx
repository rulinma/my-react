// import React from 'react';
// import { Button, message, Input, Drawer } from 'antd';
// import { getProducts } from '@/services/ant-design-pro/api';
// // type ProductItem = {
// //     id?: number;
// //     name?: string;
// // };
// const handleRemove = async (selectedRows) => {
//     const hide = message.loading('正在删除');
//     if (!selectedRows) return true;
//     try {
//       await removeRule({
//         key: selectedRows.map((row) => row.key),
//       });
//       hide();
//       message.success('Deleted successfully and will refresh soon');
//       return true;
//     } catch (error) {
//       hide();
//       message.error('Delete failed, please try again');
//       return false;
//     }
//   };

// export default class ProductList extends React.Component {

//   constructor(props) {
//     console.log(props);
//     super(props);
//     this.state = { 
//         date: new Date(),
//         selfProduct: this.props.products,
//      };
//     //  this.handleAdd = this.handleAdd.bind(this)
//   }

//   componentDidMount() {

//   }

//   componentWillUnmount() {

//   }

//    handleAdd = async(e, q) => {
//     console.log(e, q);
//     const hide = message.loading('正在添加');
//     try {
//         // const data = [{
//         //     id: 11,
//         //     name: "马如林11",
//         // },];
//         // await addRule({ ...fields });
//         const data = await getProducts();
//         console.log(data);
//         console.log("loading");
//         // console.log(this.state);
//         this.setState({
//             selfProduct: data.data,
//         });
//         hide();
//         message.success('Added successfully');
//         return true;
//     } catch (error) {
//         console.log(error)
//         hide();
//         message.error('Adding failed, please try again!');
//         return false;
//     }
// };


//   render() {
// //    let products = this.props.products;

//     return <div>
//         this is a component.
//         {/* {this.props.products} */}
//         <br/>
//         {this.state.date.toLocaleTimeString()}

//         { 
//           this.state.selfProduct.map((item, idx) => (
//             <li key={item.id}>
//             {item.id} : {item.name}
//             <Button onClick={() => this.handleAdd(item.id, item.name)} value="1"> 添加 </Button>
//             </li>
//           )) 
// 	    }
//         {/* <Button onClick={handleAdd}> 修改 </Button>
//         <Button onClick={handleRemove}> 删除 </Button> */}
//     </div>;
//   }

// }
