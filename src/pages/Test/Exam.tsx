import React , {useContext, useEffect, useState} from "react";
// import {MyContext} from "./index"
import { List, Typography, Divider } from 'antd';
// import 'antd/dist/antd.css';
// const { setWordList, setCount } = useContext(MyContext);
import { MyContext } from './context-manager';
// import 'antd/dist/antd.css';
// import '~antd/dist/antd.css';
import '../../global.less'
import { getTestData } from '@/services/ant-design-pro/api';

const Exam = (props={}) => {
    const [wordList, setWordList] = useState([]);
    // const [count, setCount] = useState(0);
    const [selectKey, setSelectKey] = useState(0);

    const { setCount } = useContext(MyContext);
    const data = [
      {id:11},
      {id:12},
      {id:13},
      {id:14},
    ];

//   state = {
//     selectKey: '',
//     wordlist : [{id:11},{id:12},{id:13},{id:14}]
//   };
  
 console.log("props: ", props);
  
 useEffect(() => {
    console.log("props wordlist: ", props?.wordlist);
    setWordList(wordList => wordList.concat(props?.wordlist));
  
    console.log("wordList {}" ,wordList);
  },[]);

  // const handleCheckedItem2 = (item) => {
  //   console.log(" handleCheckedItem2: ", item);
  // }
  // {id}
  const handleCheckedItem = async ({id}) => {
    // setState({
    //   selectKey: id
    // })
    console.log("id ", id);
    setSelectKey(id);
    setCount(props.count+1);
    const rdata = await getTestData();
    console.log("rdata", rdata.data);

    setTimeout((state, props)=> {
        console.log("delay")
        // setWordList({
        //     // get next one
        //     wordList : [{id:21},{id:22},{id:23},{id:24}]
        // });
        // setWordList(wordList => wordList.concat(props?.wordlist));
        // setWordList(wordList => wordList.concat([{id:21},{id:22},{id:23},{id:24}]) );
            // 
        // get data from http

        // let rdata = [{id:21},{id:22},{id:23},{id:24}]
        setWordList(wordList => (
            console.log("haha"),
            wordList = [],
            wordList.concat(rdata.data)
        )  );
        console.log("setState", wordList)
        // use word next
    }, 1);

  }

  const getMyStyle =  (item) =>
   {

    console.log("getMyStyle ", selectKey, item)
    // selectKey===item?.id?'red':'white'
    if(selectKey===item.id) 
    return 'red'

    if(item.id%2===0) 
    return 'green'

    return 'white'
  }

    // const { selectKey } = this.state;
    return (
      <ul>
        <p>count is : {props.count}</p>
        { 
        // props?.wordlist?.toString
        // wordList
        // wordList?.map((item,index, array)=>{
        //     return <li onClick={()=>handleCheckedItem(item)} style={{background:selectKey===item?.id?'red':'white'}}>项目{item?.id}-{index}</li>
        // })
        }

        {
          
        }
      <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={wordList}
      renderItem={item => <List.Item onClick={()=>handleCheckedItem(item)}  
           style= { 
            //  console.log("item: ", item),
           {
                // background: selectKey===item?.id?'red':'white'
                  // background: selectKey===item?.id?'red':'white'
                  background: getMyStyle(item)
            }
           }>{item?.id}
           </List.Item>} />
      </ul>
    );

}

export default Exam;

