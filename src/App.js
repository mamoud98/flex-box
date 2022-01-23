import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div class="parent-one">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
        <div class="child">4</div>
      </div>
      <div class="wrap">
        <div class="parent-tow">
          <div class="child">5</div>
          <div class="child">6</div>
        </div>
        <div class="parent-three">
          <div class="child">7</div>
          <div class="child">8</div>
        </div>
      </div>
      <div class="parent-four">
        <div class="child">9</div>
        <div class="child">10</div>
        <div class="child">11</div>
        <div class="child">12</div>
      </div>
    </div>
  );
}

export default App;
