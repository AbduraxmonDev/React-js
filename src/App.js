import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  const users = [
    {
      id: 1,
      name: "Black",
    },
    {
      id: 2,
      name: "John",
    },
  ];
  return (
    <div className="wrapper">
      <Header header={users} />
      <div className="main">
        <Page page={users} />
      </div>
    </div>
  );
}

export default App;
