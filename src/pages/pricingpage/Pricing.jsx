import React,{useState} from 'react'
import MonthlyPricing from './MonthlyPricing';
import AnnualPricing from './AnnualPricing';

function Pricing() {

  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className='bg-[#042523] h-[1200px] w-full text-white '>
      <div className='w-[500px] mx-auto text-center  p-6 rounded-xl '>
        <div className='border border-[#4F8D55] rounded-full w-fit px-4 py-1 mx-auto mb-3 shadow-[0_0_8px_orangered]'>
          <i className="bi bi-database"></i> Pricing plan
        </div>
        <h1 className='text-[40px] mb-3 font-semibold mb-3'>Choose Your Best Plan</h1>
        <h1 className='text-[15px] mb-3'>Reach your goals faster with the CRM, business automation, and email marketing software built for growig small business</h1>
       <div className='flex justify-center items-center gap-4 mt-4'>
  <h1>🎉 Save 20%</h1>
  <div className='bg-[#1b1b1b] p-1 rounded-full flex'>
    <button
      onClick={() => setBillingCycle('annually')}
      className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
        billingCycle === 'annually' ? 'bg-[orange] text-white' : 'text-[orange]'
      }`}
    >
      Bill Annually
    </button>
    <button
      onClick={() => setBillingCycle('monthly')}
      className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
        billingCycle === 'monthly' ? 'bg-[orange] text-white' : 'text-[orange]'
      }`}
    >
      Bill Monthly
    </button>
  </div>
</div>


        

      </div>

    
        <div className='mt-8'>
        {billingCycle === 'monthly' ? <MonthlyPricing /> : <AnnualPricing />}
      </div>

    </div>
  )
}

export default Pricing