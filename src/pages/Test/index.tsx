import React, { useState, useEffect} from 'react';
import Exam from "./Exam";
import { MyContext } from './context-manager';


const WordTest: React.FC = (props) => {
  const [wordList, setWordList] = useState<String>();
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("init");
    // Update the document title using the browser API
    // document.title = `You clicked ${wordList} times`;
    // 
    // console.log("useEffect");
    // setWordList(
    //   {
    //     wordList: [{id:21},{id:22},{id:23},{id:24}]
    //   }
    // );
  }, [count]);

  return <div>
          <MyContext.Provider value={{ setCount, setWordList }}>
          this is a test.
          count is {count}
          <br/>
          <Exam wordlist={[{id:11},{id:12},{id:13},{id:14}]} count={count}/>
          </MyContext.Provider>
         </div>;
}

export default WordTest;

