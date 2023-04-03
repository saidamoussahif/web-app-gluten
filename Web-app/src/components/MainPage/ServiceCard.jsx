import React from "react";

function ServiceCard() {
  return (
    <div className="overflow-y-hidden">
      <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
        {/* Code block starts */}
        <dh-component>
          <div className="pt-16">
            <div className="py-12 bg-gray-50 container rounded-xl">
              <div className="max-w-8xl mx-auto ">
                <div
                  tabIndex={0}
                  aria-label="group of cards"
                  className="focus:outline-none flex flex-wrap items-center justify-center sm:justify-between"
                >
                  <div
                    tabIndex={0}
                    aria-label="card 1"
                    className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                  >
                    <div className="w-20 h-20 relative ml-6">
                      <div className="absolute top-0 right-0  rounded w-16 h-16 mt-2 mr-1" />
                      <div className="text-white absolute bottom-0 left-0  rounded  w-25 h-25 flex items-center justify-center mt-2 mr-3 hover:bg-[#aacb73] hover:rounded-2xl hover:p-2">
                        <img
                          src="https://qceagrofood.com/presta/themes/PRSTM051/assets/img/shipped.png"
                          alt="drawer"
                        />
						{/* <svg width="46" height="46" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3334 4H1.33337V21.3333H21.3334V4Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.3334 10.6665H26.6667L30.6667 14.6665V21.3332H21.3334V10.6665Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.33333 28.0002C9.17428 28.0002 10.6667 26.5078 10.6667 24.6668C10.6667 22.8259 9.17428 21.3335 7.33333 21.3335C5.49238 21.3335 4 22.8259 4 24.6668C4 26.5078 5.49238 28.0002 7.33333 28.0002Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.6667 28.0002C26.5077 28.0002 28 26.5078 28 24.6668C28 22.8259 26.5077 21.3335 24.6667 21.3335C22.8258 21.3335 21.3334 22.8259 21.3334 24.6668C21.3334 26.5078 22.8258 28.0002 24.6667 28.0002Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                      </div>
                    </div>
                    <h4
                      tabIndex={0}
                      className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                    >
                      Free delivery everywhere in Morocco
                      <br />
                    </h4>
                    <span>
                      <p className="text-gray-500 text-center pt-2">
                        Between 24h and 72h
                      </p>
                    </span>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 2"
                    className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                  >
                    <div className="w-20 h-20 relative ml-6">
                      <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="text-white absolute bottom-0 left-0 rounded w-25 h-25 flex items-center justify-center mt-2 mr-3 hover:bg-[#aacb73] hover:rounded-2xl hover:p-2">
                        <img
                          src="https://qceagrofood.com/presta/themes/PRSTM051/assets/img/return-box.png"
                          alt="check"
                        />
						{/* <svg width="46" height="46" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6667 1.3335L28.0001 6.66683L22.6667 12.0002" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 14.6665V11.9998C4 10.5853 4.5619 9.22879 5.5621 8.2286C6.56229 7.22841 7.91885 6.6665 9.33333 6.6665H28" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.33333 30.6667L4 25.3333L9.33333 20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 17.3335V20.0002C28 21.4147 27.4381 22.7712 26.4379 23.7714C25.4377 24.7716 24.0812 25.3335 22.6667 25.3335H4" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                      </div>
                    </div>
                    <h4
                      tabIndex={0}
                      className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                    >
                      Free Return Returns are free
                      <br />
                    </h4>
					<span>
					  <p className="text-gray-500 text-center pt-2">
					  within 24 hours
					  </p>
					</span>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 3"
                    className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                  >
                    <div className="w-20 h-20 relative ml-6">
                      <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="text-white  absolute bottom-0 left-0 rounded  w-25 h-25 flex items-center justify-center mt-2 mr-3 hover:bg-[#aacb73] hover:rounded-2xl hover:p-2">
                        <img
                          src="https://qceagrofood.com/presta/themes/PRSTM051/assets/img/secure-payment.png"
                          alt="html tag"
                        />
						  {/* <svg width="46" height="46" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                      </div>
                    </div>
					<h4
                      tabIndex={0}
                      className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                    >
                     100% secure payment
                      <br />
                    </h4>
					<span>
					  <p className="text-gray-500 text-center pt-2">
					  Secured by CMI.
					  </p>
					</span>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 4"
                    className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                  >
                    <div className="w-20 h-20 relative ml-6">
                      <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute bottom-0 left-0 rounded  w-25 h-25 flex items-center justify-center mt-2 mr-3 hover:bg-[#aacb73] hover:rounded-2xl hover:p-2">
                        <img
                          src="https://qceagrofood.com/presta/themes/PRSTM051/assets/img/e-mail.png"
                          alt="monitor"
                        />
						 {/* <svg width="46" height="46" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                      </div>
                    </div>
					<h4
                      tabIndex={0}
                      className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                    >
                    24/7 Support
                      <br />
                    </h4>
					<span>
					  <p className="text-gray-500 text-center pt-2">
					  Contact us 24/7
					  </p>
					</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dh-component>
        {/* Code block ends */}
      </div>
    </div>
  );
}

export default ServiceCard;
