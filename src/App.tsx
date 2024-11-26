import { PasswordMeter } from "./components/PasswordMeter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow items-center justify-center w-4/5 sm:w-1/2 m-auto">
        <div className="text-white">
          <PasswordMeter />
          <div className="mt-10 w-4/5">
            <p>
              This password strength meter uses{" "}
              <a href="https://github.com/dropbox/zxcvbn">
                the password strength estimator, zxcvbn
              </a>
              {""}. The logic in zxcvbn uses common password patterns to
              estimate the strength of a password. It's not a tool that's
              intended for every day use. Instead, this tool provides a visual
              representation of password strength to help users understand the
              difference between weak and strong passwords and passphrases. Keep
              in mind that no password is truly safe and all passwords can
              eventually be cracked. Strong password hygiene is a matter of
              making that exercise as difficult as possible for attackers.
            </p>
            <br />
            <p>
              This tool runs locally in your browser and no data is transmitted
              anywhere outside of your browser.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
