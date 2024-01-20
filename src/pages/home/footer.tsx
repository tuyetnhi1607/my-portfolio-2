import five from "../../assets/footer/five.png";
import footerImg from "../../assets/footer/footer.jpeg";
import four from "../../assets/footer/four.png";
import one from "../../assets/footer/one.png";
import six from "../../assets/footer/six.png";
import three from "../../assets/footer/three.png";
import two from "../../assets/footer/two.png";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  const email = "";
  return (
    <div className="relative w-screen h-full min-h-[20rem] mb-16">
      <div className="absolute md:relative w-full h-full">
        {" "}
        <div className="absolute top-0 left-0 w-full h-full  bg-footer-gradient" />
        <img
          src={footerImg}
          alt="footer"
          className="w-full h-full md:h-auto object-cover object-center"
        />
      </div>

      <div className="px-10 py-16 md:px16 md:py-20 absolute z-10 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-max h-max max-w-[90vw] flex items-center justify-center bg-[#D9D9D91C] backdrop-blur-[3px] md:backdrop-blur-[16px] rounded-3xl border border-[#5F626E]">
        <div className="relative z-20 flex flex-col items-center justify-center w-max h-max">
          <span className="text-white text-2xl md:text-6xl font-bold">
            Let’s connect
          </span>
          <span className="text-white text-base md:text-xl mt-4 text-center">
            I’m always open to discussing product design work or partnership
            opportunities.
          </span>
          <a href={`mailto:${email}`}>
            <button className="bg-[#7C72FF] text-white px-6 py-3 rounded-lg mt-8 hover:bg-opacity-75 cursor-pointer text-base md:text-xl font-bold">
              Contact Me
            </button>
          </a>
        </div>{" "}
        <div className="absolute w-full h-full top-0 left-0">
          <img
            src={one}
            alt="one"
            className="absolute top-1/2 right-[-5%] animate-home-footer-float"
          />
          <img
            src={two}
            alt="two"
            className="absolute top-1/2 left-[-5%] animate-home-footer-float"
          />
          <img
            src={three}
            alt="three"
            className="absolute bottom-1/2 right-[-5%] animate-home-footer-float"
          />
          <img
            src={four}
            alt="four"
            className="absolute bottom-1/2 left-[-5%] animate-home-footer-float"
          />
          <img
            src={five}
            alt="five"
            className="absolute bottom-[-5%] left-1/2 animate-home-footer-float"
          />
          <img
            src={six}
            alt="six"
            className="absolute top-[-5%] left-1/2 animate-home-footer-float"
          />
        </div>
      </div>
    </div>
  );
}
