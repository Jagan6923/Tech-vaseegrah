import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white min-h-screen flex items-center pt-20 sm:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Empowering Your Sales, Simplifying Your Workflow
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Streamline your billing process and boost productivity with
              automated address entry and smart order management.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden relative mb-4">
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 group-hover:block opacity-0  transition-opacity"></div>
              <img
                src="/assets/9859.jpg"
                className="w-full h-full object-cover "
                alt="Hero"
              />
            </div>
            {/* <div className="absolute -bottom-12 -right-2 bg-white p-4 rounded-lg shadow-xl">
              <p className="text-blue-600 font-semibold">
                Trusted by 10,000+ businesses
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
