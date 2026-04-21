import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import "../css/footer.css"

const GitHubContributions = () => {
  return (
    <div className="contributions">
      <h2>Your GitHub Contributions</h2>
      <GitHubCalendar username="heheananya" />
    </div>
  );
};

export default GitHubContributions;