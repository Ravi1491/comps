import { FaArrowAltCircleRight } from "react-icons/fa";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div className="text-2xl font-bold underline text-center my-5">
        Button Page
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="m-5 ">
          <Button success rounded outline className="mb-5">
            <FaArrowAltCircleRight />
            success
          </Button>
          <Button success rounded className="mb-5">
            <FaArrowAltCircleRight />
            success
          </Button>
          <Button success outline className="mb-5">
            <FaArrowAltCircleRight />
            success
          </Button>
          <Button success className="mb-5">
            <FaArrowAltCircleRight />
            success
          </Button>
        </div>
        <div className="m-5">
          <Button primary rounded outline className="mb-5">
            <FaArrowAltCircleRight />
            primary
          </Button>
          <Button primary rounded className="mb-5">
            <FaArrowAltCircleRight />
            primary
          </Button>
          <Button primary outline className="mb-5">
            <FaArrowAltCircleRight />
            primary
          </Button>
          <Button primary className="mb-5">
            <FaArrowAltCircleRight />
            primary
          </Button>
        </div>
        <div className=" m-5">
          <Button danger rounded outline className="mb-5">
            <FaArrowAltCircleRight />
            danger
          </Button>
          <Button danger rounded className="mb-5">
            <FaArrowAltCircleRight />
            danger
          </Button>
          <Button danger outline className="mb-5">
            <FaArrowAltCircleRight />
            danger
          </Button>
          <Button danger className="mb-5">
            <FaArrowAltCircleRight />
            danger
          </Button>
        </div>
        <div className=" m-5">
          <Button warning rounded outline className="mb-5">
            <FaArrowAltCircleRight />
            warning
          </Button>
          <Button warning rounded className="mb-5">
            <FaArrowAltCircleRight />
            warning
          </Button>
          <Button warning outline className="mb-5">
            <FaArrowAltCircleRight />
            warning
          </Button>
          <Button warning className="mb-5">
            <FaArrowAltCircleRight />
            warning
          </Button>
        </div>
        <div className=" m-5">
          <Button secondary rounded outline className="mb-5">
            <FaArrowAltCircleRight />
            secondary
          </Button>
          <Button secondary rounded className="mb-5">
            <FaArrowAltCircleRight />
            secondary
          </Button>
          <Button secondary outline className="mb-5">
            <FaArrowAltCircleRight />
            secondary
          </Button>
          <Button secondary className="mb-5">
            <FaArrowAltCircleRight />
            secondary
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
