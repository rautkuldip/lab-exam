import { useState } from "react";

function App() {
  return (
    <>
      <MyComponents />
    </>
  );
}

export default App;

const MyComponents = () => {
  let Name = "dfwf";
  let Name1 = "sdfsf ";
  let Id = "23";
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);
  const Msg1 = (e) => {
    setMsg(e.target.value);
  };
  const submit1 = () => {
    const newList1 = [...list, msg];
    setList(newList1);
    setMsg("");
  };
  return (
    <div>
      <div className="header">
        <span>{Name}</span>
        <span>{Name1}</span>
        <span>{Id}</span>
      </div>
      <div className="msg">
        <input type="text" placeholder="Msg here" value={msg} onChange={Msg1} />
        <input type="button" value="send" onClick={submit1} />
      </div>
      {list.map((item) => {
        <div>{item}</div>;
      })}
      ;
    </div>
  );
};
