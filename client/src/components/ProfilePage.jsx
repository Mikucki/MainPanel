import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <section className="top-nav">
        <h2>
          <Link className="logo logo-login" href="../src/template.html"></Link>
        </h2>
      </section>
      <div className="line"></div>
    </div>
  );
};

export default ProfilePage;
