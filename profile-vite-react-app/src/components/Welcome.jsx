import icon from "../assets/logo.jpg"
import "../css/main.css"

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <img src={icon} alt="Profile Icon" width={200} height={200} />
        <h1>Vishnu Sivan</h1>
        <p>Immersive Tech Lead, TCS</p>
        <p>Seasoned professional, forward looking software engineer with 3+ years of experience <br/>
          in creating and executing innovative solutions to enhance business productivity.</p>
        <a href="https://codemaker2015.github.io/">codemaker2015.github.io</a>
      </div>
    </>
  );
}