import React , {useContext, useEffect, useState} from "react";
// import {MyContext} from "./index"

// const { setWordList, setCount } = useContext(MyContext);
import { MyContext } from './context-manager';


const Exam = (props={}) => {
    const [wordList, setWordList] = useState([]);
    // const [count, setCount] = useState(0);
    const [selectKey, setSelectKey] = useState(0);

    const { setCount } = useContext(MyContext);

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

  // {id}
  const handleCheckedItem = ({id}) => {
    // setState({
    //   selectKey: id
    // })
    console.log("id ", id);
    setSelectKey(id);
    setCount(props.count+1);
    
    setTimeout((state, props)=> {
        console.log("delay")
        // setWordList({
        //     // get next one
        //     wordList : [{id:21},{id:22},{id:23},{id:24}]
        // });
        // setWordList(wordList => wordList.concat(props?.wordlist));
        // setWordList(wordList => wordList.concat([{id:21},{id:22},{id:23},{id:24}]) );
        setWordList(wordList => (
            console.log("haha"),
            wordList = [],
            wordList.concat([{id:21},{id:22},{id:23},{id:24}])
        )  );
        console.log("setState")
        // use word next
    }, 1000);

  }

    // const { selectKey } = this.state;
    return (
      <ul>
                <p>count is : {props.count}</p>
        { 
        // props?.wordlist?.toString
        // wordList
        wordList?.map((item,index, array)=>{
            return <li onClick={()=>handleCheckedItem(item)} style={{background:selectKey===item?.id?'red':'white'}}>项目{item?.id}-{index}</li>
        })
        
        }
      </ul>
    );

}

export default Exam;

