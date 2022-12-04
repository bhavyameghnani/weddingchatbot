import logo from "./logo.svg";
import "./App.css";
import bg from "../src/Resources/Images/bg.png";
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "1",
    message: "Hey!",
    trigger: "2",
  },
  {
    id: "2",
    message: "We, Surbhi & Kunal are getting married! 💍",
    trigger: "3",
  },
  {
    id: "3",
    message:
      "And we want you to be a part of this celebration as we take the next step together. 🥰",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: 1, label: "When is the Wedding? 🗓️", trigger: "5" },
    ],
  },
  {
    id: "5",
    message: "It's on 18th of December.",
    trigger: "6",
  },
  {
    id: "6",
    message:
      "Yeah we know, it's less than even a month and we are super nervous!",
    trigger: "7",
  },
  {
    id: "7",
    message: "Please be there by 9am.",
    trigger: "8",
  },
  {
    id: "8",
    options: [
      { value: 1, label: "Where do I need to come? 📍", trigger: "9" },
      { value: 2, label: "Want to see our pics! 📷", trigger: "17" },
    ],
  },
  {
    id: "9",
    message:
      "It's at Shree Saurashtra Patel Samaj,Hanuman Tekdi Rd, Ashok Van,  Dahisar East, Mumbai, Maharashtra 400068",
    trigger: "10",
  },
  {
    id: "10",
    message: "you can just follow google maps:",
    trigger: "11",
  },
  {
    id: "11",
    message: "https://goo.gl/maps/8bApXo8Hs1XxZbCt9",
    trigger: "12",
  },
  {
    id: "12",
    options: [{ value: 1, label: "Show more pics! 📷", trigger: "13" }],
  },
  {
    id: "13",
    component: (
      <div>
        {" "}
        <img
          height="100px"
          width="100px"
          src="https://img.freepik.com/premium-vector/indian-wedding-clipart-logo-collection-wedding-invitation-card-design_428817-313.jpg?w=2000"
        />{" "}
      </div>
    ),
    trigger: "14",
  },
  {
    id: "14",
    message: "Hope you join & bless us! 🥰",
    trigger: "15",
  },
  {
    id: "15",
    message: "See you at the wedding! 🥰",
    trigger: "16",
  },
  {
    id: "16",
    message: "Bye",
    end: true,
  },
  {
    id: "17",
    component: (
      <div>
        {" "}
        <img
          height="100px"
          width="100px"
          src="https://img.freepik.com/premium-vector/indian-wedding-clipart-logo-collection-wedding-invitation-card-design_428817-313.jpg?w=2000"
        />{" "}
      </div>
    ),
    trigger: "18",
  },
  {
    id: "18",
    options: [{ value: 1, label: "Where do I need to come? 📍", trigger: "9" }],
  },
];

function App() {
  return (
    <div className="App">
      <ChatBot
        steps={steps}
        // speechSynthesis={{ enable: true, lang: "en", rate: 0.5 }}
        style={{
          backgroundImage: `url(${bg})`,
        }}
        contentStyle={{ height: "100vh", width: "100%" }}
        headerTitle="#SuKun"
        hideBotAvatar="true"
        hideUserAvatar="true"
        bubbleOptionStyle={{
          background: "white",
          color: "#4a4a4a",
          fontFamily: "Helvetica Neue",
        }}
        bubbleStyle={{ background: "white", color: "#4a4a4a" }}
      />
    </div>
  );
}

export default App;
