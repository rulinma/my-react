import React from "react";

class Exam extends React.Component {
  
  state = {
    selectKey:''
  };
  
  handleCheckedItem = ({id}) => {
    this.setState({
      selectKey:id
    })
  }

  render() {
    const { selectKey } = this.state;
    return (
      <ul>
        {[{id:11},{id:12},{id:13},{id:14}].map((item,index)=>{
          return <li onClick={()=>this.handleCheckedItem(item)} style={{background:selectKey===item.id?'red':'white'}}>项目{index}</li>
        })}
      </ul>
    );
  }
}

export default Exam

