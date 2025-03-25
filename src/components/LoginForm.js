import React from "react";

function LoginForm() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
