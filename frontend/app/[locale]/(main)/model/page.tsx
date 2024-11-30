import { Link } from "@/i18n/routing";

export default function Model() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Model page
        </h2>

        <div className="">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Models
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            <Link href="/model/1" className="group relative">
              <img
                alt="model-1"
                src="/models/model-1.jpg"
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-95 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">model 1</h3>
                </div>
              </div>
            </Link>
            <Link href="/model/2" className="group relative">
              <img
                alt="model-2"
                src="/models/model-2.jpg"
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-95 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">model 2</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
