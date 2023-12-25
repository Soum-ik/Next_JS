import Layout from "../../../Components/Layout";

const { default: toast } = require("react-hot-toast");

export default function Register() {
  return (
    <Layout>
      <form className=" min-h-screen grid place-content-center ">
        <div className=" border p-5 rounded-xl">
          <div data-mdb-input-init className="form-outline mb-4  ">
            <input type="email" id="form1Example1" className="form-control" />
            <label className="form-label" for="form1Example1">
              Email address
            </label>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="password"
              id="form1Example2"
              className="form-control"
            />
            <label className="form-label" for="form1Example2">
              Password
            </label>
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                  checked
                />
                <label className="form-check-label" for="form1Example3">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button
            data-mdb-ripple-init
            type="submit"
            className="btn btn-primary btn-block"
          >
            Sign in
          </button>
        </div>
      </form>
    </Layout>
  );
}
