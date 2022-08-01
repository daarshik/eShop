import React from "react";
import { useEffect } from "react";
import { ContextHolder } from "@frontegg/rest-api";
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import { AdminPortal } from "@frontegg/react";
import "./Login.css";

function Login() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  const handleClick = () => {
    AdminPortal.show();
  };
  return (
    <div className="Login">
      {isAuthenticated ? (
        <div className="card">
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span className="detail">Logged in as: {user?.name}</span>
          </div>
          <div></div>
          <div>
            <button onClick={() => logout()} className="button">
              Click to logout
            </button>
            <button onClick={handleClick} className="button">
              View Full Profile
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()} className="button">
            Click me to login
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
