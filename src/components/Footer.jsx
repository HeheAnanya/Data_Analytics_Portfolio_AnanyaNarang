import React from "react";
import {GitHubCalendar} from "react-github-calendar";
import "../css/github.css"; // optional styling

const Footer = () => {
  return (
    <div className="github-section">
      <h3>My Contributions</h3>

      <div className="calendar-wrapper">
        <GitHubCalendar
          username="HeheAnanya"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          colorScheme="dark"
        />
      </div>
    </div>
  );
};

export default Footer;