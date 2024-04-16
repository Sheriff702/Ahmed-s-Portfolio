import img from "./assets/images/me5.webp";
import logo from "./assets/images/logo.svg";
import img2 from "./assets/images/thewiggleapp.webp";
import img3 from "./assets/images/djpage.webp";
import img4 from "./assets/images/hypernetwork.webp";
import img5 from "./assets/images/hyperflapper.webp";
import img6 from "./assets/images/guessing.webp";
import img7 from "./assets/images/tictactoe.webp";
import img8 from "./assets/images/fylo.webp";
import img9 from "./assets/images/issue-tracker.webp";
import img10 from "./assets/images/frimark.webp";

const logotext = "AHMED SHARIF";
const logoimg = logo;
const meta = {
  title: "Ahmed Sharif",
  description:
    "I’m Ahmed Sharif and im a frontend developer and designer. I love coding and i code cool websites. I develop mobile apps. I'm the guy that everyone wants to work with because i'm so cool and i can code cool websites.",
};

const introdata = {
  title: "I’m Ahmed Sharif",
  animated: {
    first: "And I Love Coding",
    second: "I Code Cool Websites",
    third: "I Develop Mobile Apps",
    forth: "And I'm Just Cool",
  },
  description:
    "I'm the guy that everyone wants to work with because i'm so cool and i can code cool websites. atleast that's what i believe ",
  your_img_url: img,
};

const dataabout = {
  title: "About Moi",
  aboutme:
    "👋  Hey, I'm Ahmed Sharif - a 30-year-old guy with a passion for innovation and creativity. Currently, I'm rocking the role of Chief Technology Officer (CTO) at Local Le Swued AB, a venture I co-founded to bring groundbreaking ideas to life.",

  aboutme2:
    "🚀 My journey has been anything but conventional. While my days are filled with coding and leading tech initiatives, my nights used to resonate with beats as I spent 13 memorable years as a DJ. Music has been an integral part of my life, shaping not only my evenings but also influencing my approach to problem-solving and creativity.",
  aboutme3:
    "🎓 I'm currently deep-diving into the world of Frontend Development at Hyper Island, where I'm honing my skills to create seamless and user-friendly digital experiences. The blend of my technical expertise and creative background gives me a unique perspective in navigating the ever-evolving landscape of technology.",
  aboutme4:
    "🌐 Over the years, I've embraced a myriad of roles and experiences. From spinning tracks in lively venues to steering a tech startup, every chapter has contributed to the diverse skill set and mindset I bring to the table.",
};
const worktimeline = [
  {
    jobtitle: "Co-Founder & CTO ",
    where: "The Wiggle App(Local le Swued AB)",
    date: "2023 - Present",
  },
  {
    jobtitle: "Production Manager",
    where: "Postnord, Örebro Län",
    date: "2017 - 2021",
  },
  {
    jobtitle: "Dj",
    where: "Worldwide",
    date: "2011 - Present",
  },
];

const skills = [
  {
    name: "HMTL & CSS",
    value: 100,
  },
  {
    name: "Photoshop",
    value: 100,
  },
  {
    name: "Javascript",
    value: 95,
  },
  {
    name: "Figma",
    value: 90,
  },
  {
    name: "React",
    value: 85,
  },
  {
    name: "Tailwindcss",
    value: 75,
  },
  {
    name: "node.js",
    value: 65,
  },

  {
    name: "Next.js",
    value: 50,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Passionate about crafting intuitive and visually appealing user interfaces. I believe in creating seamless user experiences that leave a lasting impression. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Bringing ideas to life through cutting-edge mobile app development. From concept to deployment, I specialize in building responsive and feature-rich applications that cater to modern user needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Custom Web Solutions",
    description:
      "Crafting unique and tailored web solutions to meet your specific needs. Whether it's a dynamic website or a complex web application, I specialize in delivering custom solutions that stand out. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: img3,
    description: "I built a Website for Djs",
    link: "https://dj-jusuf.netlify.app/",
    github: "https://github.com/Sheriff702/Dj-Jusuf",
  },
  {
    img: img10,
    description:
      "Introducing Frimark, your go-to children's clothing store! Find the best outfits for your little ones at our React-based PWA. Shop conveniently on the web, Android, and iOS platforms.",
    link: "https://zippy-parfait-feebde.netlify.app/",
    github: "https://github.com/Quantinx/childrensClothesStore",
  },
  {
    img: img4,
    description:
      "Its a website i built for a company called Hypernetwork. The website is built with react. The website is available on Web and both android and ios.",
    link: "https://hypernetworkfed25.github.io/hypernetwork",
    github: "https://github.com/hypernetworkfed25/hypernetwork",
  },
  {
    img: img5,
    description:
      "this is a game we developed. The game is called Hyperflapper. It's a game where you can play and compete with your friends. The game is available on Web only ",
    link: "https://simon-rosengren.github.io/Group-8-Project/",
    github: "https://github.com/simon-rosengren/Group-8-Project",
  },
  {
    img: img2,
    description:
      "Introducing The Wiggle App, your ultimate nightlife companion! Discover the hottest parties, events, clubs, and bars in your city. Available on Android and iOS.",
    link: "https://thewiggleapp.com/",
    github: "",
    description2:
      "This app i can not show you the code because it's a company project",
  },

  {
    img: img6,
    description:
      "A little fun guessing game i built. The game is built with Javascript",
    link: "https://sheriff702.github.io/javascript/",
    github: "https://github.com/Sheriff702/javascript",
  },

  {
    img: img7,
    description:
      "A little Tic Tac Toe game i built. The game is built with React",
    link: "https://main--tictagame.netlify.app/",
    github: "https://github.com/Sheriff702/tic-tac-toe",
  },
  {
    img: img8,
    description: "A landing page i built with HTML and CSS",
    link: "https://main--fylooland.netlify.app/",
  },
  {
    img: img9,
    description:
      "A Issue tracker me and my classmates built with backend. It is build in NEXT.js and the backend is build with Node.js and postgresql.",
    link: "https://issuetracker-team8.vercel.app/",
    github: "https://github.com/arixstudio/issue-tracker",
  },
];

const contactConfig = {
  YOUR_EMAIL: "Ahmedsheriffbooking@gmail.com",
  YOUR_FONE: "+46 (0)76 066 47 54",
  description:
    "Drop me a line if you have any questions or just want to say hi. I'll get back to you as soon as possible!",
  //  an emailjs.com account
  YOUR_SERVICE_ID: "service_c3fx2b8",
  YOUR_TEMPLATE_ID: "template_9nus7zw",
  YOUR_USER_ID: "uDfnGgGBD0zBBIZU0",
};

const socialprofils = {
  github: "https://github.com/Sheriff702",
  facebook: "https://www.facebook.com/poetens",
  linkedin: "https://www.linkedin.com/in/sheriff702/",
  twitter: "https://twitter.com/svarta_shunon",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  logoimg,
};
