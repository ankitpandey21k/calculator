import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import Buttonbox from "./components/Buttonbox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";

const btnValue = [
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="]
];
function App() {
  return (
    <>
    <CalcProvider>
    <Wrapper>
    <Screen/>
     <Buttonbox>
      {btnValue.flat().map((btn,i)=>(
        <Button value ={btn} key={i} />
      ))}
     </Buttonbox>
    </Wrapper>
    </CalcProvider>
    </>
  );
}

export default App;
