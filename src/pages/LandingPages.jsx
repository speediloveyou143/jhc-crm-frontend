import React from 'react'
import { FaMedium, FaDropbox, FaWhatsapp, FaWpforms, FaHourglassStart, FaArrowRight, FaPuzzlePiece } from 'react-icons/fa';
import { SiSquare, SiLinear, SiEvernote } from 'react-icons/si';
import { FiPackage, FiSettings, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function LandingPages() {

  const surroundingApps = [
    'notion.png', 'jira.png', 'google.png', 'evernote.png',
    'zendesk.png', 'xero.png', 'quickbooks.png', 'github.png',
    'miro.png', 'slack.png', 'atlassian.png', 'linear.png',
    'figma.png', 'dropbox.png', 'asana.png', 'hubspot.png'
  ];

  const Card = ({ image, title, description }) => (
    <div className="max-w-md">
      {/* Gradient Border Wrapper */}
      <div className="p-[0.5%] rounded-xl bg-gradient-to-r from-green-400 via-lime-400 to-yellow-300">
        <div className="bg-white rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>

      {/* Learn More Link with Gradient Underline */}
      <a href="#" className="mt-5 inline-block text-lg font-bold text-black group relative mb-8">
        <span className="flex items-center">
          Learn More
          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </span>
        <span className="absolute left-0 -bottom-0.5 h-[1%] w-full bg-gradient-to-r from-green-400 via-lime-400 to-yellow-300 transition-all duration-300 scale-x-100 origin-left"></span>
      </a>
    </div>
  );

  return (
    <div>
      <div className="bg-[#011920] min-h-screen text-white mx-[-1.1%] mt-[-1%] ">
        <div className="flex flex-col items-center justify-center text-center px-4 pt-10">
          {/* Supercharge Badge */}
          <div className="p-[1px] rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 inline-block shadow-[0_0_10px_#a3e635] mb-8 mt-20">
            <button className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#0a0f0d] text-white text-sm font-medium">
              ⚡ <span>Supercharge Your Sales</span>
            </button>
          </div>


          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight  max-w-4xl">
            Get Automated with The Best <br />
            CRM for Businesses
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-gray-300 max-w-2xl text-base md:text-lg">
            Manage all your contacts’ details and interactions in one easy-to-use system.
            Now your whole team can more easily build relationships that lead to stronger sales
            and lifelong fans.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 pb-10">
            <Link to="/signup"><button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2 rounded-full transition">
              Open Account
            </button></Link>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-2 rounded-full transition">
              See Demo
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-10 text-center">
        <h2 className="text-gray-500 text-[18px] mb-8 font-medium">
          Trusted by 10,000+ Businesses Worldwide
        </h2>
        <div className="flex justify-center items-center gap-10 flex-wrap text-gray-700 text-lg">
          <div className="flex items-center gap-2 mr-10">
            <FaMedium className="text-5xl" />
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-2 mr-10">
            <SiSquare className="text-5xl" />
            <span>Square</span>

          </div>
          <div className="flex items-center gap-2  mr-10 ">
            <SiLinear className="text-5xl" />
            <span>Linear</span>
            <span></span>

          </div>
          <div className="flex items-center gap-2  mr-10">
            <SiEvernote className="text-5xl" />
            <span>Evernote</span>
          </div>
          <div className="flex items-center gap-2  mr-10">
            <FaDropbox className="text-5xl" />
            <span>Dropbox</span>
          </div>
        </div>
      </div >

      {/* Our features */}
      <div className='px-14 relative'>
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-cyan-100 filter blur-[100px]"></div>
        </div>
        
        <div className="bg-white px-13 md:px-19 py-16 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full mb-4 border border-green-200 transform hover:scale-105 transition-transform duration-300">
            <span className="mr-2">✨</span> Our Features
          </div>

          {/* Main Heading with gradient */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 leading-tight">
            Automated What's app is Just<br />The Beginning
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-gray-500 text-lg max-w-2xl">
            With Wiserve, you get the all-in-one sales and marketing automation platform
            designed to help your small business grow.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
            {[
              { icon: FiPackage, title: "Small Business", desc: "Collect new leads with minimal effort." },
              { icon: FiSettings, title: "Business Automation", desc: "Stay focused on what you're good at." },
              { icon: FaWhatsapp, title: "What's app & Text Marketing", desc: "Send messages your audience." },
              { icon: FiPhone, title: "Business Line", desc: "Gives you access to work calls." }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl hover:bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 transform hover:-translate-y-1"
              >
                <feature.icon className="text-3xl mx-auto text-gray-700 mb-3" />
                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="my-10 max-w-6xl mx-40 mb-[7%]">
          <hr className="h-[2px] bg-gradient-to-r from-teal-400 via-lime-400 via-amber-400 via-pink-500 to-indigo-500 rounded-full shadow-md border-none" />
        </div>
      </section>


      <div className="flex flex-col md:flex-row items-center border-[6px] justify-between px-[4%] py-16 bg-white rounded-xl shadow-sm mx-auto w-[82%]">

        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight  max-w-4xl mb-10 ">
            Stay Focused on What You’re Good at
          </h2>
          <p className="text-[20px] text-gray-600 leading-relaxed mb-8 mr-[20px] mb-4">
            Wiserve's personalized automations save you from
            distracting busy work,
            while still sounding and converting exactly like you.
          </p>
          <button className="bg-[#4ADE80] hover:bg-[#22C55E] text-white font-medium text-[16px] px-6 py-2.5 rounded-full transition duration-300">
            Learn More →
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-gradient-to-br from-[#00FF66] via-[#00CC99] to-[#00BFA6] rounded-[7%] p-[0.7%] w-[70%]">

          <div className="bg-[#003320] rounded-[26px] p-6 text-white">
            <p className="text-[14px] text-gray-300 mb-3 font-medium">When</p>

            {/* First Step */}
            <div className="flex items-center bg-[#094132] rounded-xl px-4 py-3 mb-5">
              <div className="bg-[#4ADE80] p-2 rounded-full mr-3">
                <FaWpforms className="text-white text-10" />
              </div>
              <div>
                <p className="text-10 font-medium">Public Form Submitted</p>
                <p className="text-20 text-gray-300">Lead Form</p>
              </div>
            </div>

            <p className="text-10 text-gray-300 mb-3 font-medium">Then</p>

            {/* Second Step */}
            <div className="flex items-center bg-[#094132] rounded-xl px-4 py-3 mb-4">
              <div className="bg-[#FACC15] p-2 rounded-full mr-3">
                <FaHourglassStart className="text-white text-[18px]" />
              </div>
              <p className="text-[15px] font-medium">Immediately</p>
            </div>

            {/* Third Step */}
            <div className="flex items-center bg-[#094132] rounded-xl px-4 py-3">
              <div className="bg-[#38BDF8] p-2 rounded-full mr-3">
                <FaWhatsapp className="text-3xl mx-auto text-gray-700 " />
              </div>
              <div>
                <p className="text-[15px] font-medium">Send a What's app message</p>
                <p className="text-[13px] text-gray-300">Introduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-30 bg-white mb-20">
        <div className="max-w-4xl text-center px-4">
          <img
            src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" // Replace with actual image URL
            alt="Elena Chou"
            className="mx-auto w-14 h-14 rounded-full mb-4"
          />
          <p className="text-xl text-gray-800 italic mb-4">
            “I had some great help with getting everything set up and I find the what's app<br />
            automation system quite easy to use and understand, which is great as it has
            gotten me to do a lot more with automation.“
          </p>
          <h3 className="text-gray-900 font-semibold">Elena Chou</h3>
          <p className="text-gray-500 text-sm">CEO and Co-Founder, Loopin</p>
        </div>
      </div>


      <section>
        <div className="my-10 max-w-6xl mx-40">
          <hr className="h-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full shadow-lg border-none" />
        </div>
      </section>


      {/* Integrations Section */}
      <div className="bg-white py-20 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left side - Grid with center image */}
        <div className="relative w-full max-w-xl grid grid-cols-4 gap-6 mx-auto">
          {surroundingApps.map((filename, idx) => (
            <div key={idx} className="flex items-center justify-center w-16 h-16">
              <img
                src={`/icons/${filename}`}
                alt={`app-${idx}`}
                className="w-12 h-12 opacity-30 grayscale"
              />
            </div>
          ))}

          {/* Central image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3">
            <img
              src="/icons/central.png"
              alt="Central App"
              className="w-16 h-16 rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="text-center lg:text-left max-w-xl">
          <button className="flex items-center space-x-2 px-4 py-1 rounded-full border border-transparent bg-white text-sm font-medium 
                       text-gray-700 shadow-sm hover:shadow-md  mb-4
                       transition-all duration-200
                       bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 p-[1px]">
            <div className="flex items-center bg-white rounded-full px-3 py-1">
              <FaPuzzlePiece className="text-gray-600" />
              <span className="ml-2 ">Integrations</span>
            </div>
          </button>

          <h2 className="text-[55px]  font-bold text-gray-900 leading-tight mb-4">
            Build Your Business <br /> with Integrations
          </h2>
          <p className="text-gray-500 text-lg mb-6">
            Expand the capabilities of Wiserve with hundreds of apps and integrations.
          </p>
          <button className="inline-flex items-center bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-full transition">
            More Integrations <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>


      <div className=" h-[2px] bg-gradient-to-r from-black via-gray-700 to-black rounded-full shadow-md my-10 max-w-6xl mx-40 " />


      <div className="flex flex-col items-center text-center px-4 py-8 max-w-3xl mx-auto">
        <img
          className="w-14 h-14 rounded-full object-cover mb-4"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Jenny Wilson"
        />
        <p className="text-xl text-gray-800 italic max-w-6xl">
          “This was easy to integrate with fix your funnel which I absolutely loved using.<br />
          You were able to send multiple texts to gym members very easy and do a lot of cool things such as make groups etc.”
        </p>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">Jenny Wilson</h4>
          <p className="text-sm text-gray-500">Marketing Agency, Uxerflow</p>
        </div>
      </div>

      <div className=" h-[2px] bg-gradient-to-r from-black via-gray-700 to-black rounded-full shadow-md my-10 max-w-6xl mx-40 " />

      <div className="p-8 mx-25">
        {/* Top Tag */}
        <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-black via-gray-700 to-gray-900 shadow-md">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white text-sm text-gray-800 font-medium border border-white">
            {/* Portal-like Logo */}
            <img src="https://tse1.mm.bing.net/th?id=OIP._pQNsMmgoi8_4N17clYZxQHaHa&pid=Api&P=0&h=180" className='h-7' alt="" />

            <span>Partners Portal</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-6xl font-bold text-gray-900 leading-tight">
          Put 20k+ Entrepreneurs<br />on Your Team
        </h1>
      </div>

      <div className="flex flex-col ml-30 md:flex-row gap-30 p-6">
        <Card
          image="https://images.unsplash.com/photo-1673427147403-9e87c4fe8a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1dHVyaXN0aWMlMjAzRCUyMGJsdWUlMjBjdWJlcyUyMGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
          title="CRM Academy"
          description="Learn the best ways to grow your business through sales and marketing automation with courses and live events."
        />
        <Card
          image="https://plus.unsplash.com/premium_photo-1672963837451-1df37378d521?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMDNEJTIwYmx1ZSUyMGN1YmVzJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
          title="CRM Community"
          description="When you join the CRM Community, you put the knowledge and experience of other small business leaders to work for you."
        />
      </div>


    </div>
  );
}

export default LandingPages