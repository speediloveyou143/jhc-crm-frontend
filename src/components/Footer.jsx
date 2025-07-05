import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div><footer className="bg-[#011920] text-white py-15   ">
            <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between mb-15 ">
                {/* Left Section */}
                <div className="md:w-1/5 ">
                    <div className="flex items-center gap-2 mb-4">
                        <img src="https://media.licdn.com/dms/image/v2/D560BAQFyCEYUK5-xLw/company-logo_200_200/company-logo_200_200/0/1683076761008/javahomecloud_logo?e=2147483647&v=beta&t=QygXOJwKdyK8XBo7crcFQTe4yHqY_5M4Cm2EC-kn6Gg" alt="Wiserve Logo" className="h-8" />
                        <span className="text-xl font-semibold">CRM</span>
                    </div>
                    <p className="text-sm mb-2">Follow us on:</p>
                    <div className="flex gap-5 mt-3 text-2xl">
                        <a href="https://www.linkedin.com/company/javahomecloud/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://x.com/javahomecloud?t=meNCKDcCpX3NmEIPdHy9HA&s=09"><i className="fab fa-x-twitter"></i></a>
                        <a href="https://youtube.com/@javahomecloud?si=Xup43TneqSRkcEcT"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                {/* Columns */}
                <div className="grid grid-cols-2  md:grid-cols-4 gap-6 md:gap-20 text-sm">
                    <div>
                        <h4 className="font-bold mb-4 text-lg">Features</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Appointments</li>
                            <li>Automation</li>
                            <li>CRM</li>
                            <li>Ecommerce & Payments</li>
                            <li>Email Marketing</li>
                            <li>Integrations</li>
                            <li>Business Line</li>
                            <li>Lead Managements</li>
                            <li>Reporting</li>
                            <li>Email & Text Marketing</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg">Resources</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Events</li>
                            <li>What is CRM?</li>
                            <li>Lifecycle Automation</li>
                            <li>LCA Assessment</li>
                            <li>Content Assistant</li>
                            <li>Free Email Templates</li>
                            <li>Subject Line Generator</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Wiserve</h4>
                        <ul className="space-y-2  text-gray-300">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Culture</li>
                            <li>Contact Us</li>
                        </ul>
                        <h4 className="font-bold mt-4 mb-4 text-lg">Partners</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Become a Partner</li>
                            <li>Partner Portal</li>
                            <li>Find a Partner</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg ">Help & Support</h4>
                        <ul className="space-y-2 text-gray-300 ">
                            <li>Customer Supports</li>
                            <li>Help Center</li>
                            <li>Academy</li>
                            <li>Community</li>
                            <li>Marketplace</li>
                            <li>Services</li>
                            <li>Play Blueprints</li>
                            <li>Pre-built Campaign</li>
                            <li>Updates</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-8 text-[14px] text-gray-400 flex flex-col md:flex-row justify-between items-center px-10 max-w-7xl mx-auto ">
                <p>© 2024 Wiserve. All rights reserved</p>
                <div className="flex gap-4 mt-3 ">
                    <ul className='flex px-8 gap-10  list-disc'>

                        <li><Link to="/privacy-policy"><u>Privacy Policy</u></Link></li>
                        <li><Link to="/contact-us"><u>Contact us</u></Link></li>
                        <li><a href="#"><u>legal</u></a></li>
                        <li><a href="#"><u>Your Privacy Choices</u></a></li>
                        <li><a href="#"><u>Accessibility</u></a></li>

                    </ul>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer