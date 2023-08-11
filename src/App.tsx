import Tooltip from "./components/Tooltip";
import "./styles/app.scss";

const App = () => {
  const tooltipTestText = "Test";
  const tooltipText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="application-wrapper">
      <div className="testing-area">
        <Tooltip
          hoverClass="tooltip"
          tooltipText={tooltipTestText}
          location="top"
          type="warning"
          hasArrow={true}
        />
        <Tooltip
          hoverClass="tooltip"
          tooltipText={tooltipTestText}
          location="right"
          type="error"
          hasArrow={true}
        />
        <Tooltip
          hoverClass="tooltip"
          tooltipText={tooltipText}
          location="bottom"
          type="info"
          hasArrow={true}
        />
        <Tooltip
          hoverClass="tooltip"
          tooltipText={tooltipTestText}
          location="left"
          type="success"
          hasArrow={true}
        />
      </div>
    </div>
  );
};

export default App;
