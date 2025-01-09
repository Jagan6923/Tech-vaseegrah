import { Store, Briefcase, Home, Truck } from "lucide-react";

const useCases = [
  {
    icon: Store,
    title: "Retail",
    description:
      "Billzzy streamlines order management, billing, and customer service, helping retailers manage transactions and inventory seamlessly.",
    image: "/assets/retail.jpg",
  },
  {
    icon: Briefcase,
    title: "Wholesale",
    description:
      "Efficiently manage large-scale orders, invoicing, and shipping, making Billzzy an ideal solution for wholesale distributors.",
    image: '/assets/wholesale.jpg',
  },
  {
    icon: Home,
    title: "Local Services",
    description:
    "Billzzy helps local service providers such as plumbers, electricians, and home maintenance companies track orders and manage payments.",
    image: "/assets/localservice1.jpg",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
    "Billzzy aids logistics companies with route planning, order tracking, and billing for deliveries operational efficiency.",
    image: "/assets/delivery.jpg",
  },
];

export default function UseCases() {
  return (
    <div id="usecase" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Billzzy is adaptable to various industries, improving efficiency and
            simplifying operations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <img
                  src={useCase.image}
                  alt={`${useCase.title} Example`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
