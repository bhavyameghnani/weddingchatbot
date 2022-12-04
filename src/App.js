import logo from "./logo.svg";
import "./App.css";
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "1",
    message: "Are you excited for the wedding?!",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Super", trigger: "3" },
      { value: 2, label: "Super Duper", trigger: "3" },
    ],
  },
  {
    id: "3",
    message:
      "Yaay!! I am excited too! Do you want to know the wedding details?",
    trigger: "5",
  },
  {
    id: "5",
    options: [
      { value: 1, label: "Wedding Date", trigger: "6" },
      { value: 2, label: "Wedding Venue", trigger: "7" },
      { value: 3, label: "Wedding Card", trigger: "8" },
    ],
  },
  {
    id: "6",
    message: "December 2022",
    trigger: "5",
  },
  {
    id: "7",
    message: "Mumbai",
    trigger: "5",
  },
  {
    id: '8',
    component: (
      <div> <img height="100px" width="100px" src="https://img.freepik.com/premium-vector/indian-wedding-clipart-logo-collection-wedding-invitation-card-design_428817-313.jpg?w=2000"/> </div>
    ),
    trigger: "5",
  },
];

function App() {
  return (
    <div className="App">
       <ChatBot steps={steps} 
       contentStyle={{height: '100vh', width: '100%'}}
       headerTitle="Welcome to Surbhi & Kunal Wedding Chatbot"
       />
    </div>
  );
}

export default App;
