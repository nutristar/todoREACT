import React, {useState} from "react";

// function App2(){
//     const [count, setColor] = useState(0);
//     const incrementCount = () => { setColor(count + 1);  };
//     const decrementCount = () => {setColor(count =>count- 1);  };

//     return(<div>
//         <h1>{count}</h1>
//         <button onClick={incrementCount }> incremeny</button>
//         <button onClick={decrementCount }> DEcremen</button>
//     </div>
//     )
// };

class App2 extends React.Component{
    constructor(){
        super()
        this.state={ count:0  }
        this.incrementCount=this.incrementCount.bind(this);
        this.decrementCount=this.decrementCount.bind(this);  };
    
  
    incrementCount() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    decrementCount(){this.setState(prevState => ({ count: prevState.count - 1 }));};

    render(){ const { count } = this.state;
        return(
            <div>
         <h1>{count}</h1>
         <button onClick={this.incrementCount }> incremeny</button>
         <button onClick={this.decrementCount }> DEcremen</button>
     </div>

        )
    }
}

export default App2;
