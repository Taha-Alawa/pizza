import Link from "next/link";
import Hero from "../components/framer"
import Counter from "@components/Counter";
import Image from "next/image";
// images
import lemon from "../public/assets/images/lemon.png"
import leaf from "../public/assets/images/leaf.png"
import chilli from "../public/assets/images/chilli.png"
import romi from "../public/assets/images/romi.png"
import cheese from "../public/assets/images/cheese.png"
import emptyStar from "../public/assets/images/emptyStar.png"
import fullstar from "../public/assets/images/fullstar.png"
// comp
import Images from "@components/Images";
import Menu from "@components/Menu";

const page = () => {
  return (
    <main>
      <section className="flex flex-col md:flex-row justify-between md:pl-[8%] items-center relative overflow-hidden md:h-[100vh]">
        <Hero />
        <div className="md:h-full flex flex-col w-4/5 md:w-3/4 justify-evenly items-start">
          <div className="flex flex-col">
            <h1 className="text-[#FB4A36] font-bold text-4xl md:text-6xl w-full mb-4">
              your favorite pizza !
            </h1>
            <p className="md:w-1/2 mb-4">
              A new experience to taste pizza in the best italian restaurant with
              a modern flavor from the best chefs
            </p>
            <div className="flex w-full md:w-1/2 justify-between mb-4">
              <Link className="w-[49%] bg-[#FB4A36] text-center rounded-full font-bold text-white py-2" href="">Order now</Link>
              <Link className="w-[49%] text-center rounded-full text-[#FB4A36] font-bold py-2 border-2 border-[#FB4A36]" href="">Our menu</Link>
            </div>
          </div>
          <Counter />
        </div>
        <Image src={lemon} alt="lemon" className="hidden md:block w-[10%] md:absolute top-[8%] right-[17%] rounded-xl" width={0} height={0} />
          <Image className="hidden md:block md:absolute w-[10%] right-[40%] rounded-tr-3xl" src={leaf} alt="" />
          <Image className="hidden md:block md:absolute w-[8%] bottom-[30%]" src={chilli} alt="" />
          <Image className="hidden md:block w-[10%] md:absolute bottom-[8%] right-[18%] rounded-xl" src={romi} alt="" />
      </section>
      <Images />
      <Menu />
      <section className="flex flex-col justify-between items-center relative mb-16">
        <Image src={cheese} alt="cheese" className="hidden md:block absolute top-8 left-4 z-0 w-[10%] rounded-tl-[40px] lg:rounded-tl-[60px]" />
        <h1 className="text-[#FB4A36] z-10 font-bold text-4xl text-center md:text-6xl w-full mb-14">Our Testimonials</h1>
        <div className="flex w-[95%] z-10 md:flex-row flex-col justify-around items-center">
          <div className="flex flex-col items-center justify-around w-[80%] mb-5 md:w-[28%] border-4 border-[#FB4A36] rounded-lg p-6">
            <h3 className="font-bold text-xl mb-6">Ahmad</h3>
            <p className=" text-xl font-light text-center mb-6">very good and the staff is very helpful i will visit it again</p>
            <div className="flex">
              <Image src={fullstar} alt="star" />
              <Image src={fullstar} alt="star" />
              <Image src={fullstar} alt="star" />
              <Image src={fullstar} alt="star" />
              <Image src={emptyStar} alt="star" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-around w-[80%] mb-5 md:w-[28%] border-4 border-[#FB4A36] rounded-lg p-6">
            <h3 className="font-bold text-xl mb-6">Ahmad</h3>
            <p className=" text-xl font-light text-center mb-6">very good and the staff is very helpful i will visit it again</p>
            <div className="flex">
              <Image src={fullstar} alt="star" />
              <Image src={fullstar} alt="star" />
              <Image src={fullstar} alt="star" />
              <Image src={fullstar} alt="star" />
              <Image src={emptyStar} alt="star" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-around w-[80%] mb-5 md:w-[28%] border-4 border-[#FB4A36] rounded-lg p-6">
            <h3 className="font-bold text-xl mb-6">Ahmad</h3>
            <p className=" text-xl font-light text-center mb-6">very good and the staff is very helpful i will visit it again</p>
            <div className="flex">
              <Image src={fullstar} alt="star" />
              <Image src={fullstar} alt="star" />
              <Image src={fullstar} alt="star" />
              <Image src={fullstar} alt="star" />
              <Image src={emptyStar} alt="star" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
