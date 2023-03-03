import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <section class="top-nav">
        <h2>
          <Link class="logo logo-login" href="../src/template.html">
            <i class="fa-solid fa-cube"></i> Modernbox Apartments
          </Link>
        </h2>
      </section>
      <div class="line"></div>
    </div>
  );
};

export default ProfilePage;
