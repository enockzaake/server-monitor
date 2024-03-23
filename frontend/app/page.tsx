import Image from "next/image";

const IndexPage = () => {
  return (
    <div className="text-white flex flex-col bg-teal-100">
      {/* HERO */}
      <div className="flex items-center justify-between px-12 h-96 bg-gray-900">
        <div className="text-gray-300 font-sans">
          <p className="text-5xl ">Centralized-realtime server updates</p>
          <p className="mt-4">
            Catch all faults,updates and changes to your server as they happen.
          </p>
          <p>
            Connect all your servers and monitor in one place with aggregated
            metrics, receive changes as they happen and configure custom
            notifications ie. Email, Whatsapp etc.
          </p>
        </div>

        <Image src="/icon2.png" width={400} height={400} alt="Logo" />
      </div>

      {/* SMALL DIVS */}
      <div className="grid mx-auto grid-cols-4 gap-x-10 gap-y-2 mt-2 bg-teal-100">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index: number) => (
          <div
            key={index}
            className="h-[300px] w-[400px] bg-gray-200 rounded text-black"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
