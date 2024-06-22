import Link from "next/link";
import Image from "next/image";
import google from "../public/assets/images/Google play.png";
import ios from "../public/assets/images/App store.png";
import facebook from "../public/assets/images/bxl-facebook.png"
import instagram from "../public/assets/images/instagram-logo.png"
import youtube from "../public/assets/images/youtube-logo.png"
import twitter from "../public/assets/images/bxl-twitter.png"

const Footer = () => {
  return (
    <footer className="bg-[#FB6D48] w-full flex flex-col items-center">
      <div className="w-[90%] flex-col md:flex-row mt-20 mb-14 flex justify-between items-center">
        <h1 className=" text-center md:text-left flex flex-col font-bold text-4xl mb-4">
          Subscribe to Newsletter
          <span className=" text-center md:text-left font-light text-xl">
            Stay up to special promotions
          </span>
        </h1>
        <div className="w-[90%] md:w-[50%] bg-[#D9D9D9] rounded-full">
          <input
            type="text"
            className="bg-[#D9D9D9] w-[80%] py-4 pl-4 text-black font-bold rounded-full active:outline-none focus:outline-none focus-visible:outline-none placeholder:text-black"
            placeholder="enter your email"
          />
          <button className="w-[25%] mr-[-5%] bg-[#ce5234] py-4 rounded-full">
            submit
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Link href="/">
          <Image src={google} alt="google-button" className="w-[200px] mx-2 mb-4" />
        </Link>
        <Link href="/">
          <Image src={ios} alt="ios-button" className="w-[200px] mx-2" />
        </Link>
      </div>
      <div className="flex justify-around w-[90%] md:w-2/4 my-10">
        <ul>
          <li className="font-bold mb-3">Links</li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Our menu</Link></li>
          <li><Link href="/">About us</Link></li>
          <li><Link href="/">Contact us</Link></li>
        </ul>
        <div>
          <h3 className="font-bold mb-3">Social</h3>
          <ul className="flex items-center">
            <li><Image src={facebook} alt="social-media" className="w-[13px] mr-3 cursor-pointer" /></li>
            <li><Image src={instagram} alt="social-media" className="w-[25px] mr-3 cursor-pointer" /></li>
            <li><Image src={twitter} alt="social-media" className="w-[25px] mr-3 cursor-pointer" /></li>
            <li><Image src={youtube} alt="social-media" className="w-[25px] cursor-pointer" /></li>
          </ul>
        </div>
      </div>
      <h3>© 2024 Saudi arabia</h3>
    </footer>
  );
};

export default Footer;
