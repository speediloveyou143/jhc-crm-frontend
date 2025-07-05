import React from 'react'

function AnnualPricing() {
  return (
    <div>

    {/* parent pricing  */}
        <div className='flex justify-evenly mx-auto mt-5 '>
          {/* first pricing   */}
          <div className='w-[340px] h-[450px] border rounded-[25px] py-3 p-3'>
            <div className='text-center'>
                <h1>Free</h1>
                <h1 className='text-[40px] mb-3'>$0 <span className='text-[15px] font-extralight'>per user/year</span></h1>
                <h1 className='mb-4 text-[12px] font-extralight'>For Smaller teams looking to automatic basic sales, marketing and business processes</h1>
            </div>
            
            <hr />

            <div className='mb-10 mt-3'>
                <h1 className='font-bold'>Core Features</h1> 
                <div className='mt-2 font-extralight'>
                  <p><i class="bi bi-check2-circle"></i> Email Marketing</p>
                  <p><i class="bi bi-check2-circle"></i> Marketing, Sales, Workflow Automation</p>
                  <p><i class="bi bi-check2-circle"></i> Pipelines</p>
                  <p><i class="bi bi-check2-circle"></i> Lead Mnagement</p>
                  <p><i class="bi bi-check2-circle"></i> Up to 3 Seats</p>
                </div>
                
                
            </div>

            <button className='w-[100%] bg-white border rounded-[30px] text-black h-[35px] hover:!bg-green-500 hover:!text-black transition-all duration-300'>Get Started</button>

          </div>

          {/* second pricing   */}
        <div className='w-[340px] h-[450px] border  rounded-[25px] py-3 p-3'>
            <div className='text-center'>
                <h1>Pro</h1>
            <h1 className='text-[40px] mb-3'>$29 <span className='text-[15px] font-extralight'>per user/year</span></h1>
            <h1 className='mb-4 text-[12px] font-extralight'>For growing teams who need advanced ecommerce and reporting capabilities</h1>
            </div>
            
            <hr  />
            
            <div className='mb-10 mt-3'>
                <h1 className='font-bold'>Everything in Free, plus</h1> 
                <div className='mt-2 font-extralight'>
                  <p><i class="bi bi-check2-circle"></i> Advanced Lead Optimization</p>
                <p><i class="bi bi-check2-circle"></i> Enhanced Landing Pages & Sales</p>
                <p><i class="bi bi-check2-circle"></i> Ecommerce Tools</p>
                <p><i class="bi bi-check2-circle"></i> Advanced Reporting</p>
                <p><i class="bi bi-check2-circle"></i> No Seat Limits</p>
                </div>
                
            </div>

            <button className='w-[100%] bg-white border rounded-[30px] text-black h-[35px] hover:!bg-green-500 hover:!text-black transition-all duration-300'>Get Started</button>


        </div>

        {/* third pricing   */}
        <div className='w-[340px] h-[450px] border rounded-[25px] py-3 p-3'>

            <div className='text-center'>
                <h1>Ultra Pro</h1>
            <h1 className='text-[40px] mb-3'>$59 <span className='text-[15px] font-extralight'>per user/year</span></h1>
            <h1 className='mb-4 text-[12px] font-extralight'>For larger teams with advanced workflows and powerful automation needs</h1>
            </div>
            
            <hr />

            <div className='mb-10 mt-3'>
                <h1 className='font-bold'>Core Features. plus</h1> 
                <div className='mt-2 font-extralight'>
                  <p><i class="bi bi-check2-circle"></i> Premium CRM & Sales Management</p>
                <p><i class="bi bi-check2-circle"></i> Advanced Marketing & Sales Tools </p>
                <p><i class="bi bi-check2-circle"></i> Custom User Access Control</p>
                <p><i class="bi bi-check2-circle"></i> Affiliate Management & Collaboration</p>
                <p><i class="bi bi-check2-circle"></i> Priority Support</p>
                  
                </div>
                
            </div>

            <button className='w-[100%]  bg-white border rounded-[30px] text-black h-[35px] hover:!bg-green-500 hover:!text-black transition-all duration-300'>Get Started</button>


        </div>
        </div>

    </div>
  )
}

export default AnnualPricing