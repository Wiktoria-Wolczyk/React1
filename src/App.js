import "./App.css";
import w3logo from "./images/w3.png";
import ButterflyPhoto from "./images/ButterflyFamilyTree.webp";
import { MyUser } from "./MyUser/MyUser";

function App() {
  let text;

  const user = {
    name: "Robert",
    surname: "Mrowiec",
    age: 20,
    userImage: w3logo,
    imageSize: 100,
  };

  // if (user.age > 24) {
  //   text = user.age + " You are old";
  // } else {
  //   text = user.age + " You are young";
  // }

  return (
    <>
      <div class="header">
        <a href="https://www.w3schools.com/">
          <img src={w3logo} alt="logo w3 schools" width="50px" />
        </a>
        <img className="Butterfly" src={ButterflyPhoto} alt="Butterfly" />
      </div>

      <div class="container">
        <div class="login-square">
          <span id="login-text">Log in </span>
          <span>{text}</span>
          <form onsubmit="asd()">
            <div class="email-text">
              <label for="mail" id="mail-text">
                Email
              </label>
              <div class="Create-account">
                <label for="Need-an-account" id="Need-an-account">
                  Need an account?
                </label>
                <label for="sign-in" id="sign-in">
                  Sign in
                </label>
              </div>
            </div>
            <input type="text" id="mail" name="mail" />
            <div class="password-square">
              <label for="password" id="password-text">
                Password
              </label>
              <div class="show-password">
                <i
                  class="fa-regular fa-eye fa-xs"
                  style={{ color: "#292929" }}
                ></i>
                <label for="show" id="show" onclick="togglePassword()">
                  Show
                </label>
              </div>
            </div>
            <input type="password" id="password" />
            <p id="error" class="error">
              error
            </p>
            <button type="submit" id="button-log-in">
              Log in
            </button>
          </form>

          <div class="hr-with-text">
            <hr />
            <p>Oooo</p>
            <hr />
          </div>
          <div id="forgot-password">Forgot password?</div>
          {/* <MyUser user={user} /> */}
          {/* <SocialLogin /> */}

          {/* <img
            src={user.userImage}
            alt={"photo of " + user.name}
            style={{ width: user.imageSize, height: user.imageSize }}
          /> */}
        </div>
      </div>

      <div class="footer">
        <i
          class="fa-regular fa-copyright fa-xs"
          style={{ color: "rgb(101, 101, 101)" }}
        >
          <div id="dates">1999 - 2023</div>
        </i>
        <div id="w3-schools">W3schools.</div>
        <div id="all-rights-reserved">All rights reserved.</div>
        <div id="cookie-policy">Cookie policy.</div>
        <div id="privacy">Privacy,</div>
        <div id="and">and</div>
        <div id="terms">Terms.</div>
      </div>
    </>
  );
}

export default App;
