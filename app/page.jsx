import { MapPin, User, Wrench } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Our Cars And Bikes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white drop-shadow-lg rounded-lg overflow-hidden w-[90] hover:-translate-y-1 transition-all">
          <div className="relative h-64">
            <Image
              src="/bike.png"
              alt="Duke 360"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="p-4 bg-blue-50 h-full">
            <h2 className="text-xl font-bold mb-2">Duke 360</h2>
            <p className="text-gray-700 mb-2 text-lg font-semibold">
              $200/- <span className="text-sm">(Negotiable)</span>
            </p>
            <ul className="flex flex-wrap mb-4 justify-between pt-4 items-center ">
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <Wrench className="mr-2" />
                <span> Perfect</span>
              </li>
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <User className="mr-2" />
                <span> 2nd Owner</span>
              </li>

              <li className="flex items-center justify-center mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <MapPin className="mr-2" />
                <span> Madurai</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg rounded-lg overflow-hidden w-[90] hover:-translate-y-1 transition-all">
          <div className="relative h-64">
            <Image
              src="/bike.png"
              alt="Duke 360"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="p-4 bg-blue-50 h-full">
            <h2 className="text-xl font-bold mb-2">Duke 360</h2>
            <p className="text-gray-700 mb-2 text-lg font-semibold">
              $200/- <span className="text-sm">(Negotiable)</span>
            </p>
            <ul className="flex flex-wrap mb-4 justify-between pt-4 items-center ">
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <Wrench className="mr-2" />
                <span> Perfect</span>
              </li>
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <User className="mr-2" />
                <span> 2nd Owner</span>
              </li>

              <li className="flex items-center justify-center mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <MapPin className="mr-2" />
                <span> Madurai</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg rounded-lg overflow-hidden w-[90] hover:-translate-y-1 transition-all">
          <div className="relative h-64">
            <Image
              src="/bike.png"
              alt="Duke 360"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="p-4 bg-blue-50 h-full">
            <h2 className="text-xl font-bold mb-2">Duke 360</h2>
            <p className="text-gray-700 mb-2 text-lg font-semibold">
              $200/- <span className="text-sm">(Negotiable)</span>
            </p>
            <ul className="flex flex-wrap mb-4 justify-between pt-4 items-center gap-2 ">
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <Wrench className="mr-2" />
                <span> Perfect</span>
              </li>
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <User className="mr-2" />
                <span> 2nd Owner</span>
              </li>

              <li className="flex items-center justify-center mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <MapPin className="mr-2" />
                <span> Madurai</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg rounded-lg overflow-hidden w-[90] hover:-translate-y-1 transition-all">
          <div className="relative h-64">
            <Image
              src="/bike.png"
              alt="Duke 360"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="p-4 bg-blue-50 h-full">
            <h2 className="text-xl font-bold mb-2">Duke 360</h2>
            <p className="text-gray-700 mb-2 text-lg font-semibold">
              $200/- <span className="text-sm">(Negotiable)</span>
            </p>
            <ul className="flex flex-wrap mb-4 justify-between pt-4 items-center ">
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <Wrench className="mr-2" />
                <span> Perfect</span>
              </li>
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <User className="mr-2" />
                <span> 2nd Owner</span>
              </li>

              <li className="flex items-center justify-center mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <MapPin className="mr-2" />
                <span> Madurai</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg rounded-lg overflow-hidden w-[90] hover:-translate-y-1 transition-all">
          <div className="relative h-64">
            <Image
              src="/bike.png"
              alt="Duke 360"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="p-4 bg-blue-50 h-full">
            <h2 className="text-xl font-bold mb-2">Duke 360</h2>
            <p className="text-gray-700 mb-2 text-lg font-semibold">
              $200/- <span className="text-sm">(Negotiable)</span>
            </p>
            <ul className="flex flex-wrap mb-4 justify-between pt-4 items-center ">
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <Wrench className="mr-2" />
                <span> Perfect</span>
              </li>
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <User className="mr-2" />
                <span> 2nd Owner</span>
              </li>

              <li className="flex items-center justify-center mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <MapPin className="mr-2" />
                <span> Madurai</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg rounded-lg overflow-hidden w-[90] hover:-translate-y-1 transition-all">
          <div className="relative h-64">
            <Image
              src="/bike.png"
              alt="Duke 360"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="p-4 bg-blue-50 h-full">
            <h2 className="text-xl font-bold mb-2">Duke 360</h2>
            <p className="text-gray-700 mb-2 text-lg font-semibold">
              $200/- <span className="text-sm">(Negotiable)</span>
            </p>
            <ul className="flex flex-wrap mb-4 justify-between pt-4 items-center ">
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <Wrench className="mr-2" />
                <span> Perfect</span>
              </li>
              <li className="flex items-center justify-center  mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <User className="mr-2" />
                <span> 2nd Owner</span>
              </li>

              <li className="flex items-center justify-center mb-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform duration-300 hover:transform hover:translate-y-1">
                <MapPin className="mr-2" />
                <span> Madurai</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>

        {/* Additional cards can be added here */}
      </div>
    </section>
  );
}
