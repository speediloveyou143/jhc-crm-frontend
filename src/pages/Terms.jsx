import React from "react";
function Page(props) {
 
  return (
    <div className="">
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
        {props.data.index}.{props.data.title}
      </h3>
      <p className="mb-4">{props.data.content}</p>
      <ul className="list-disc pl-6 mb-4">
        {props.data.points.map((x) => {
          return <li>{x}</li>;
        })}
      </ul>
    </div>
  );
}

const PrivacyPolicy = () => {
  const data = [
    {
      index: "1",
      title: "Information We Collect",
      content:
        "We collect several types of information from and about users of our website, including:",
      points: [
        "Personal information such as name, email address, and contact details",
        "Information about your internet connection, the equipment you use to access our website, and usage details",
        "Course progress, completion data, and other educational information",
      ],
    },
    {
      index: "2",
      title: " How We Use Your Information",
      content:
        "We use information that we collect about you or that you provide to us, including any personal information:",
      points: [
        "To present our website and its contents to you",
        "To provide you with information, products, or services that you request from us",
        "To fulfill any other purpose for which you provide it",
        "To notify you about changes to our website or any products or services we offer",
      ],
    },
    {
      index: "3",
      title: "Disclosure of Your Information",
      content:
        "We may disclose aggregated information about our users without restriction. We may disclose personal information:",
      points: [
        "To our subsidiaries and affiliates",
        "To contractors, service providers, and other third parties we use to support our business",
        "To fulfill the purpose for which you provide it",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Last Updated: [24-06-2025]
              </h2>

              <p className="mb-4">
                At CRM, we respect your privacy and are committed to protecting
                it through our compliance with this policy.
              </p>
              {data.map((x, index) => {
                return <Page key={index} data={x} />;
              })}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                {" "}
                Contact Information
              </h3>
              <p className="mb-4">
                To ask questions or comment about this privacy policy and our
                privacy practices, contact us at:{" "}
                <a
                  href="mailto:jhc@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  jhc@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JHC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
