import { FaBeer } from "react-icons/fa";
import Button from "../components/buttons";

const ButtonPage = () => {
  const handleClick = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div>
        <Button success onClick={() => handleClick("Success")}>
          <FaBeer />
          Success
        </Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button warning>Warning</Button>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
