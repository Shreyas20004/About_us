import bg from '../assets/locked.png';

export default function Statement() {
  return (
    <div className="mt-8 col-span-3 row-span-3 rounded-3xl overflow-hidden hover:cursor-pointer h-96 flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="bg-gray-500 bg-opacity-50 text-white text-lg font-semibold p-6 rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:bg-opacity-75 hover:scale-105 z-10">
        Coming Soon...
      </div>
    </div>
  );
}
