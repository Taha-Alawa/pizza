import Image from "next/image"
import Link from "next/link"
import product4 from "../public/assets/images/Rectangle 10-1.png"
import product3 from "../public/assets/images/Rectangle 10-2.png"
import product2 from "../public/assets/images/Rectangle 10-3.png"
import product from "../public/assets/images/Rectangle 10.png"
import cart from "../public/assets/images/orange-cart.png"
import leaf from "../public/assets/images/leaf2.png"
import mashrom from "../public/assets/images/mashrom.png"
import chilli from "../public/assets/images/chilli.png"

const Menu = () => {
  return (
    <section className="flex flex-col w-[90%] mx-auto items-center justify-around mb-14 relative">
      <Image src={leaf} className="hidden absolute top-[-50px] right-0 w-[13%] md:block" alt="leaf" />
      <Image src={mashrom} alt="mashrom" className="hidden md:block absolute top-0 left-0 w-[11%]" />
      <h1 className="text-[#FB4A36] text-center font-bold text-4xl md:text-6xl w-full mb-4">Our menu</h1>
      <div className="flex w-[95%] md:w-[60%] justify-between border-b-4 border-[#D9D9D9] my-[60px]">
        <h3 className=" cursor-pointer text-xl font-light text-[#FB4A36] border-b-4 z-10 border-[#FB6D48] mb-[-4px]">Pizza</h3>
        <h3 className=" cursor-pointer text-xl font-light ">Pasta</h3>
        <h3 className=" cursor-pointer text-xl font-light ">Salad</h3>
        <h3 className=" cursor-pointer text-xl font-light ">Desserts</h3>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row justify-evenly items-center mb-10">
        <div className="bg-[#D9D9D9] max-w-[290px] sm:w-[80%] mb-5 md:w-[39%] lg:w-[24%] lg:max-w-none md:h-auto rounded-[39px] justify-between flex flex-col"><Image src={product} className="md:w-full" alt="Product" />
        <div className="flex w-[90%] mx-auto h-[30%] justify-between items-center my-3 md:my-3 lg:my-5">
          <h3 className="flex flex-col items-start justify-between font-medium">Pizza<span className="text-[#fb4a36]">48 sr</span></h3>
          <Image src={cart} alt="cart" />
        </div>
        </div>
        <div className="bg-[#D9D9D9] max-w-[290px] sm:w-[80%] mb-5 md:w-[39%] lg:w-[24%] lg:max-w-none md:h-auto rounded-[39px] justify-between flex flex-col"><Image src={product2} className="md:w-full" alt="Product" />
        <div className="flex w-[90%] mx-auto h-[30%] justify-between items-center my-3 md:my-3 lg:my-5">
          <h3 className="flex flex-col items-start justify-between font-medium">Pizza<span className="text-[#fb4a36]">48 sr</span></h3>
          <Image src={cart} alt="cart" />
        </div>
        </div>
        <div className="bg-[#D9D9D9] max-w-[290px] sm:w-[80%] mb-5 md:w-[39%] lg:w-[24%] lg:max-w-none md:h-auto rounded-[39px] justify-between flex flex-col"><Image src={product3} className="md:w-full" alt="Product" />
        <div className="flex w-[90%] mx-auto h-[30%] justify-between items-center my-3 md:my-3 lg:my-5">
          <h3 className="flex flex-col items-start justify-between font-medium">Pizza<span className="text-[#fb4a36]">48 sr</span></h3>
          <Image src={cart} alt="cart" />
        </div>
        </div>
        <div className="bg-[#D9D9D9] max-w-[290px] sm:w-[80%] mb-5 md:w-[39%] lg:w-[24%] lg:max-w-none md:h-auto rounded-[39px] justify-between flex flex-col"><Image src={product4} className="md:w-full" alt="Product" />
        <div className="flex w-[90%] mx-auto h-[30%] justify-between items-center my-3 md:my-3 lg:my-5">
          <h3 className="flex flex-col items-start justify-between font-medium">Pizza<span className="text-[#fb4a36]">48 sr</span></h3>
          <Image src={cart} alt="cart" />
        </div>
        </div>
      </div>
      <Image src={chilli} alt="chilli" className="hidden md:block absolute bottom-[-80px] right-0 w-[11%]" />
      <Link href="/menu" className="bg-[#FB6D48] duration-200 hover:bg-[#fb4a36] px-10 py-2 font-bold rounded-full text-3xl text-white">See All</Link>
    </section>
  )
}

export default Menu
