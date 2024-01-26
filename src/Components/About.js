import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is about page..</h2>
      <UserClass name={"Shahi (class)"} location={"Hamirpur"} />
      <User name={"Shahi (function)"} location={"Hamirpur"} />
    </div>
  );
};
export default About;
