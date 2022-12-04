import logo from "./logo.svg";
import "./App.css";
import bg from "../src/Resources/Images/bg.png";
import b1 from "../src/Resources/Images/1.jpg";
import b2 from "../src/Resources/Images/2.jpg";
import b3 from "../src/Resources/Images/3.jpg";
import b4 from "../src/Resources/Images/4.jpg";
import b5 from "../src/Resources/Images/5.jpg";
import b6 from "../src/Resources/Images/6.jpg";
import b7 from "../src/Resources/Images/7.jpg";
import b8 from "../src/Resources/Images/8.jpg";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

// all available props
const theme = {
  backgroundImage: `url(${bg})`,
  // background: '#f5f8fb',
  fontFamily: "Helvetica Neue",
  headerBgColor: "white",
  headerFontColor: "black",
  headerFontSize: "15px",
};

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
    options: [{ value: 1, label: "When is the Wedding? 🗓️", trigger: "5" }],
  },
  {
    id: "5",
    message: "It's on 18th December, 2022 (11.30am onwards)",
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
    message: "🤵🏻👰🏻",
    trigger: "8",
  },
  {
    id: "8",
    options: [
      { value: 1, label: "When is the Haldi/Sangeet? 🗓️", trigger: "25" },
    ],
  },
  {
    id: "25",
    message:
      "Haldi is on 17th December, 2022 (2pm onwards) & Sangeet is on 17th December, 2022 (5pm onwards)",
    trigger: "12",
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
    component: (
      <div>
        <a href="https://goo.gl/maps/8bApXo8Hs1XxZbCt9">Google Maps Link</a>
      </div>
    ),
    trigger: "30",
  },
  {
    id: "12",
    options: [
      { value: 2, label: "Show more pics! 📷", trigger: "17" },
      { value: 1, label: "Where do I need to come? 📍", trigger: "9" }
    ],
  },
  {
    id: "30",
    options: [
      { value: 1, label: "Show more pics! 📷", trigger: "13" },
    ]
  },
  {
    id: "13",
    component: (
      <div>
        {" "}
        <img height="100%" width="100%" src={b5} />{" "}
      </div>
    ),
    trigger: "22",
  },
  {
    id: "22",
    component: (
      <div>
        {" "}
        <img height="100%" width="100%" src={b6} />{" "}
      </div>
    ),
    trigger: "23",
  },
  {
    id: "23",
    component: (
      <div>
        {" "}
        <img height="100%" width="100%" src={b7} />{" "}
      </div>
    ),
    trigger: "24",
  },
  {
    id: "24",
    component: (
      <div>
        {" "}
        <img height="100%" width="100%" src={b8} />{" "}
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
        <img height="100%" width="100%" src={b1} />{" "}
      </div>
    ),
    trigger: "18",
  },
  {
    id: "18",
    component: (
      <div>
        {" "}
        <img height="100%" width="100%" src={b2} />{" "}
      </div>
    ),
    trigger: "19",
  },
  {
    id: "19",
    component: (
      <div>
        {" "}
        <img height="100%" width="100%" src={b3} />{" "}
      </div>
    ),
    trigger: "20",
  },
  {
    id: "20",
    component: (
      <div>
        {" "}
        <img height="100%" width="100%" src={b4} />{" "}
      </div>
    ),
    trigger: "21",
  },
  {
    id: "21",
    options: [{ value: 1, label: "Where do I need to come? 📍", trigger: "9" }],
  },
];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
          bubbleStyle={{
            background: "white",
            color: "#4a4a4a",
            textAlign: "left",
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
