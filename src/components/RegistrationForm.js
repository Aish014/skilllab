import React from "react";

function RegistrationForm() {
  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
