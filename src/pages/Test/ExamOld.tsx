import React , {useContext, useEffect} from "react";
// import {MyContext} from "./index"

// const { setWordList, setCount } = useContext(MyContext);


class Exam extends React.Component {
  
  state = {
    selectKey: '',
    wordlist : [{id:11},{id:12},{id:13},{id:14}]
  };
  
  handleCheckedItem = ({id}) => {
    this.setState({
      selectKey: id
    })

    setTimeout((state, props)=> {
        console.log("delay")
        this.setState({
            // get next one
            wordlist : [{id:21},{id:22},{id:23},{id:24}]
        });
        console.log("setState")
        // use word next
    }, 1000);

  }

  render() {
    const { selectKey } = this.state;
    return (
      <ul>
        {this.state.wordlist.map((item,index)=>{
          return <li onClick={()=>this.handleCheckedItem(item)} style={{background:selectKey===item.id?'red':'white'}}>项目{item.id}-{index}</li>
        })}
      </ul>
    );
  }

}

export default Exam

