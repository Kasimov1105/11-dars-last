import { Carusel } from "./Carouse";

export default function HeroSection() {
  return (
    <div className='hero bg-cover text-center text-white'>
      <div className='min-h-60 backdrop-brightness-50'>
        <h1 className='text-4xl pt-10'>Countries</h1>
        <Carusel />
      </div>
    </div>
  );
}