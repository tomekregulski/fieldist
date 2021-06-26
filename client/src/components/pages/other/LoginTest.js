import Userfront from "@userfront/react";

Userfront.init("demo1234");

const LoginForm = Userfront.build({
  toolId: "alnkkd",
});

function LoginTest() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default LoginTest;
