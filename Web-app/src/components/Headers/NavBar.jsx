import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.avif";
import { useNavigate } from "react-router";

const Navbar = () => {
  // Toogle Menu
  // const [MobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const id = localStorage.getItem("id");
  const fullname = localStorage.getItem("fullname");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // get cart item
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItem = cart.length;

  return (
    <>
      <div className="dark:bg-gray-900">
        <div className="container mx-auto relative">
          <div className="mx-4 md:mx-6">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
              <div>
                <div
                  className="hidden lg:block cursor-pointer"
                  role="img"
                  aria-label="luxe. Logo."
                >
                  <div className="logo d_flex h-40 w-40 mt-2">
                    <img src={logo} alt="logo" />
                  </div>
                </div>
                <div
                  className="hidden md:block lg:hidden cursor-pointer"
                  role="img"
                  aria-label="luxe. Logo."
                >
                  <svg
                    className="fill-stroke dark:text-white text-gray-800"
                    width={44}
                    height={20}
                    viewBox="0 0 44 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.512 16.768C4.512 17.424 4.648 17.88 4.92 18.136C5.192 18.376 5.664 18.496 6.336 18.496V19C4.864 18.936 3.896 18.904 3.432 18.904C2.968 18.904 2 18.936 0.528 19V18.496C1.2 18.496 1.672 18.376 1.944 18.136C2.216 17.88 2.352 17.424 2.352 16.768V3.064C2.352 2.328 2.216 1.792 1.944 1.456C1.672 1.12 1.2 0.951999 0.528 0.951999V0.447999C1.024 0.495999 1.52 0.519999 2.016 0.519999C3.024 0.519999 3.856 0.407999 4.512 0.183999V16.768ZM18.4592 16.408C18.4592 17.144 18.5952 17.68 18.8672 18.016C19.1392 18.352 19.6112 18.52 20.2832 18.52V19.024C19.7872 18.976 19.2912 18.952 18.7952 18.952C17.7872 18.952 16.9552 19.064 16.2992 19.288V16.456C15.9152 17.448 15.3712 18.176 14.6672 18.64C13.9632 19.104 13.1952 19.336 12.3632 19.336C11.2752 19.336 10.4432 19.032 9.86719 18.424C9.57919 18.104 9.37119 17.696 9.24319 17.2C9.13119 16.704 9.07519 16.064 9.07519 15.28V9.256C9.07519 8.52 8.93919 7.984 8.66719 7.648C8.39519 7.312 7.92319 7.144 7.25119 7.144V6.64C7.74719 6.688 8.24319 6.712 8.73919 6.712C9.74719 6.712 10.5792 6.6 11.2352 6.376V15.808C11.2352 16.416 11.2672 16.912 11.3312 17.296C11.4112 17.664 11.5792 17.968 11.8352 18.208C12.1072 18.448 12.5152 18.568 13.0592 18.568C13.6672 18.568 14.2192 18.376 14.7152 17.992C15.2112 17.608 15.5952 17.088 15.8672 16.432C16.1552 15.76 16.2992 15.024 16.2992 14.224V9.256C16.2992 8.52 16.1632 7.984 15.8912 7.648C15.6192 7.312 15.1472 7.144 14.4752 7.144V6.64C14.9712 6.688 15.4672 6.712 15.9632 6.712C16.9712 6.712 17.8032 6.6 18.4592 6.376V16.408ZM31.4685 17.296C31.7565 17.696 31.9965 17.984 32.1885 18.16C32.3965 18.32 32.6525 18.432 32.9565 18.496V19C32.1245 18.936 31.5565 18.904 31.2525 18.904C30.7085 18.904 29.7645 18.936 28.4205 19V18.496C28.6765 18.496 28.8925 18.448 29.0685 18.352C29.2605 18.256 29.3565 18.128 29.3565 17.968C29.3565 17.856 29.3245 17.76 29.2605 17.68L26.5245 13.696L24.7725 15.976C24.3245 16.568 24.1005 17.048 24.1005 17.416C24.1005 17.752 24.2525 18.016 24.5565 18.208C24.8765 18.384 25.3165 18.488 25.8765 18.52V19C25.0445 18.952 24.1325 18.928 23.1405 18.928C22.4365 18.928 21.8285 18.952 21.3165 19V18.52C21.6365 18.488 21.9565 18.344 22.2765 18.088C22.6125 17.832 22.9965 17.416 23.4285 16.84L26.1885 13.216L22.8525 8.344C22.5325 7.88 22.2765 7.576 22.0845 7.432C21.8925 7.272 21.6525 7.176 21.3645 7.144V6.64C22.1965 6.704 22.7645 6.736 23.0685 6.736C23.6125 6.736 24.5565 6.704 25.9005 6.64V7.144C25.6445 7.144 25.4205 7.192 25.2285 7.288C25.0525 7.384 24.9645 7.512 24.9645 7.672C24.9645 7.784 24.9965 7.88 25.0605 7.96L27.6285 11.704L29.2845 9.376C29.7645 8.688 30.0045 8.184 30.0045 7.864C30.0045 7.64 29.8925 7.472 29.6685 7.36C29.4605 7.232 29.1165 7.152 28.6365 7.12V6.64C29.4685 6.688 30.1405 6.712 30.6525 6.712C31.3565 6.712 31.9645 6.688 32.4765 6.64V7.12C31.8205 7.2 31.1165 7.76 30.3645 8.8L27.9405 12.16L31.4685 17.296ZM43.9714 16.12C43.6834 17 43.1394 17.76 42.3394 18.4C41.5554 19.024 40.6034 19.336 39.4834 19.336C38.3474 19.336 37.3634 19.08 36.5314 18.568C35.6994 18.04 35.0594 17.312 34.6114 16.384C34.1794 15.44 33.9634 14.352 33.9634 13.12C33.9634 11.728 34.1874 10.52 34.6354 9.496C35.0834 8.472 35.7154 7.688 36.5314 7.144C37.3474 6.584 38.2994 6.304 39.3874 6.304C40.8274 6.304 41.9314 6.744 42.6994 7.624C43.4834 8.488 43.8754 9.808 43.8754 11.584H36.3634C36.3154 12.032 36.2914 12.544 36.2914 13.12C36.2914 14.176 36.4594 15.096 36.7954 15.88C37.1474 16.664 37.6034 17.272 38.1634 17.704C38.7394 18.12 39.3394 18.328 39.9634 18.328C40.7314 18.328 41.4114 18.144 42.0034 17.776C42.5954 17.408 43.0914 16.792 43.4914 15.928L43.9714 16.12ZM39.2914 6.76C38.5394 6.76 37.8914 7.128 37.3474 7.864C36.8034 8.6 36.4674 9.688 36.3394 11.128H41.5714C41.6034 9.88 41.4194 8.84 41.0194 8.008C40.6354 7.176 40.0594 6.76 39.2914 6.76Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div
                  className="md:hidden cursor-pointer"
                  role="img"
                  aria-label="luxe. Logo."
                >
                  <svg
                    className="fill-stroke dark:text-white text-gray-800"
                    width={37}
                    height={17}
                    viewBox="0 0 37 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.76 14.14C3.76 14.6867 3.87333 15.0667 4.1 15.28C4.32667 15.48 4.72 15.58 5.28 15.58V16C4.05333 15.9467 3.24667 15.92 2.86 15.92C2.47333 15.92 1.66667 15.9467 0.44 16V15.58C1 15.58 1.39333 15.48 1.62 15.28C1.84667 15.0667 1.96 14.6867 1.96 14.14V2.72C1.96 2.10667 1.84667 1.66 1.62 1.38C1.39333 1.1 1 0.959999 0.44 0.959999V0.539999C0.853333 0.579999 1.26667 0.599999 1.68 0.599999C2.52 0.599999 3.21333 0.506666 3.76 0.319999V14.14ZM15.3827 13.84C15.3827 14.4533 15.496 14.9 15.7227 15.18C15.9493 15.46 16.3427 15.6 16.9027 15.6V16.02C16.4893 15.98 16.076 15.96 15.6627 15.96C14.8227 15.96 14.1293 16.0533 13.5827 16.24V13.88C13.2627 14.7067 12.8093 15.3133 12.2227 15.7C11.636 16.0867 10.996 16.28 10.3027 16.28C9.39599 16.28 8.70266 16.0267 8.22266 15.52C7.98266 15.2533 7.80932 14.9133 7.70266 14.5C7.60932 14.0867 7.56266 13.5533 7.56266 12.9V7.88C7.56266 7.26667 7.44932 6.82 7.22266 6.54C6.99599 6.26 6.60266 6.12 6.04266 6.12V5.7C6.45599 5.74 6.86932 5.76 7.28266 5.76C8.12266 5.76 8.81599 5.66667 9.36266 5.48V13.34C9.36266 13.8467 9.38932 14.26 9.44266 14.58C9.50932 14.8867 9.64932 15.14 9.86266 15.34C10.0893 15.54 10.4293 15.64 10.8827 15.64C11.3893 15.64 11.8493 15.48 12.2627 15.16C12.676 14.84 12.996 14.4067 13.2227 13.86C13.4627 13.3 13.5827 12.6867 13.5827 12.02V7.88C13.5827 7.26667 13.4693 6.82 13.2427 6.54C13.016 6.26 12.6227 6.12 12.0627 6.12V5.7C12.476 5.74 12.8893 5.76 13.3027 5.76C14.1427 5.76 14.836 5.66667 15.3827 5.48V13.84ZM26.2238 14.58C26.4638 14.9133 26.6638 15.1533 26.8238 15.3C26.9971 15.4333 27.2104 15.5267 27.4638 15.58V16C26.7704 15.9467 26.2971 15.92 26.0438 15.92C25.5904 15.92 24.8038 15.9467 23.6838 16V15.58C23.8971 15.58 24.0771 15.54 24.2238 15.46C24.3838 15.38 24.4638 15.2733 24.4638 15.14C24.4638 15.0467 24.4371 14.9667 24.3838 14.9L22.1038 11.58L20.6438 13.48C20.2704 13.9733 20.0838 14.3733 20.0838 14.68C20.0838 14.96 20.2104 15.18 20.4638 15.34C20.7304 15.4867 21.0971 15.5733 21.5638 15.6V16C20.8704 15.96 20.1104 15.94 19.2838 15.94C18.6971 15.94 18.1904 15.96 17.7638 16V15.6C18.0304 15.5733 18.2971 15.4533 18.5638 15.24C18.8438 15.0267 19.1638 14.68 19.5238 14.2L21.8238 11.18L19.0438 7.12C18.7771 6.73333 18.5638 6.48 18.4038 6.36C18.2438 6.22667 18.0438 6.14667 17.8038 6.12V5.7C18.4971 5.75333 18.9704 5.78 19.2238 5.78C19.6771 5.78 20.4638 5.75333 21.5838 5.7V6.12C21.3704 6.12 21.1838 6.16 21.0238 6.24C20.8771 6.32 20.8038 6.42667 20.8038 6.56C20.8038 6.65333 20.8304 6.73333 20.8838 6.8L23.0238 9.92L24.4038 7.98C24.8038 7.40667 25.0038 6.98667 25.0038 6.72C25.0038 6.53333 24.9104 6.39333 24.7238 6.3C24.5504 6.19333 24.2638 6.12667 23.8638 6.1V5.7C24.5571 5.74 25.1171 5.76 25.5438 5.76C26.1304 5.76 26.6371 5.74 27.0638 5.7V6.1C26.5171 6.16667 25.9304 6.63333 25.3038 7.5L23.2838 10.3L26.2238 14.58ZM36.6428 13.6C36.4028 14.3333 35.9495 14.9667 35.2828 15.5C34.6295 16.02 33.8361 16.28 32.9028 16.28C31.9561 16.28 31.1361 16.0667 30.4428 15.64C29.7495 15.2 29.2161 14.5933 28.8428 13.82C28.4828 13.0333 28.3028 12.1267 28.3028 11.1C28.3028 9.94 28.4895 8.93333 28.8628 8.08C29.2361 7.22667 29.7628 6.57333 30.4428 6.12C31.1228 5.65333 31.9161 5.42 32.8228 5.42C34.0228 5.42 34.9428 5.78667 35.5828 6.52C36.2361 7.24 36.5628 8.34 36.5628 9.82H30.3028C30.2628 10.1933 30.2428 10.62 30.2428 11.1C30.2428 11.98 30.3828 12.7467 30.6628 13.4C30.9561 14.0533 31.3361 14.56 31.8028 14.92C32.2828 15.2667 32.7828 15.44 33.3028 15.44C33.9428 15.44 34.5095 15.2867 35.0028 14.98C35.4961 14.6733 35.9095 14.16 36.2428 13.44L36.6428 13.6ZM32.7428 5.8C32.1161 5.8 31.5761 6.10667 31.1228 6.72C30.6695 7.33333 30.3895 8.24 30.2828 9.44H34.6428C34.6695 8.4 34.5161 7.53333 34.1828 6.84C33.8628 6.14667 33.3828 5.8 32.7428 5.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center space-x-6">
                  <li>
                    <a
                      href="/"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="contact"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <a
                  aria-label="my account"
                  href="/login"
                  onClick={id ? logout : null}
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded"
                >
                  {""}
                  {id ? (
                    `${fullname}`
                  ) : (
                    <svg
                      className="fill-stroke text-gray-800 dark:text-white"
                      width={18}
                      height={20}
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>
                <a
                  aria-label="Favourites"
                  href="/wishlist"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded"
                >
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={22}
                    height={20}
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4578 2.59133C18.9691 2.08683 18.3889 1.68663 17.7503 1.41358C17.1117 1.14054 16.4272 1 15.7359 1C15.0446 1 14.3601 1.14054 13.7215 1.41358C13.0829 1.68663 12.5026 2.08683 12.0139 2.59133L10.9997 3.63785L9.98554 2.59133C8.99842 1.57276 7.6596 1.00053 6.26361 1.00053C4.86761 1.00053 3.52879 1.57276 2.54168 2.59133C1.55456 3.6099 1 4.99139 1 6.43187C1 7.87235 1.55456 9.25383 2.54168 10.2724L3.55588 11.3189L10.9997 19L18.4436 11.3189L19.4578 10.2724C19.9467 9.76814 20.3346 9.16942 20.5992 8.51045C20.8638 7.85148 21 7.14517 21 6.43187C21 5.71857 20.8638 5.01225 20.5992 4.35328C20.3346 3.69431 19.9467 3.09559 19.4578 2.59133V2.59133Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  aria-label="Cart"
                  href="/cart"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded"
                >
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={20}
                    height={22}
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 5H19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {cartItem > 0 ? (
                      <span className="cart-badge">{cartItem}</span>
                    ) : (
                      ""
                    )}
                  </svg>
                </a>
              </div>
              <div className="md:hidden">
                <button
                  aria-label="open menu"
                  onClick={() => setShowMenu(true)}
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
                >
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 12H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 18H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } dark:bg-gray-900 md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-6`}
          >
            <div className="w-full">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mx-4">
                <div role="img" aria-label="Luxe. Logo">
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={37}
                    height={17}
                    viewBox="0 0 37 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.76 14.14C3.76 14.6867 3.87333 15.0667 4.1 15.28C4.32667 15.48 4.72 15.58 5.28 15.58V16C4.05333 15.9467 3.24667 15.92 2.86 15.92C2.47333 15.92 1.66667 15.9467 0.44 16V15.58C1 15.58 1.39333 15.48 1.62 15.28C1.84667 15.0667 1.96 14.6867 1.96 14.14V2.72C1.96 2.10667 1.84667 1.66 1.62 1.38C1.39333 1.1 1 0.959999 0.44 0.959999V0.539999C0.853333 0.579999 1.26667 0.599999 1.68 0.599999C2.52 0.599999 3.21333 0.506666 3.76 0.319999V14.14ZM15.3827 13.84C15.3827 14.4533 15.496 14.9 15.7227 15.18C15.9493 15.46 16.3427 15.6 16.9027 15.6V16.02C16.4893 15.98 16.076 15.96 15.6627 15.96C14.8227 15.96 14.1293 16.0533 13.5827 16.24V13.88C13.2627 14.7067 12.8093 15.3133 12.2227 15.7C11.636 16.0867 10.996 16.28 10.3027 16.28C9.39599 16.28 8.70266 16.0267 8.22266 15.52C7.98266 15.2533 7.80932 14.9133 7.70266 14.5C7.60932 14.0867 7.56266 13.5533 7.56266 12.9V7.88C7.56266 7.26667 7.44932 6.82 7.22266 6.54C6.99599 6.26 6.60266 6.12 6.04266 6.12V5.7C6.45599 5.74 6.86932 5.76 7.28266 5.76C8.12266 5.76 8.81599 5.66667 9.36266 5.48V13.34C9.36266 13.8467 9.38932 14.26 9.44266 14.58C9.50932 14.8867 9.64932 15.14 9.86266 15.34C10.0893 15.54 10.4293 15.64 10.8827 15.64C11.3893 15.64 11.8493 15.48 12.2627 15.16C12.676 14.84 12.996 14.4067 13.2227 13.86C13.4627 13.3 13.5827 12.6867 13.5827 12.02V7.88C13.5827 7.26667 13.4693 6.82 13.2427 6.54C13.016 6.26 12.6227 6.12 12.0627 6.12V5.7C12.476 5.74 12.8893 5.76 13.3027 5.76C14.1427 5.76 14.836 5.66667 15.3827 5.48V13.84ZM26.2238 14.58C26.4638 14.9133 26.6638 15.1533 26.8238 15.3C26.9971 15.4333 27.2104 15.5267 27.4638 15.58V16C26.7704 15.9467 26.2971 15.92 26.0438 15.92C25.5904 15.92 24.8038 15.9467 23.6838 16V15.58C23.8971 15.58 24.0771 15.54 24.2238 15.46C24.3838 15.38 24.4638 15.2733 24.4638 15.14C24.4638 15.0467 24.4371 14.9667 24.3838 14.9L22.1038 11.58L20.6438 13.48C20.2704 13.9733 20.0838 14.3733 20.0838 14.68C20.0838 14.96 20.2104 15.18 20.4638 15.34C20.7304 15.4867 21.0971 15.5733 21.5638 15.6V16C20.8704 15.96 20.1104 15.94 19.2838 15.94C18.6971 15.94 18.1904 15.96 17.7638 16V15.6C18.0304 15.5733 18.2971 15.4533 18.5638 15.24C18.8438 15.0267 19.1638 14.68 19.5238 14.2L21.8238 11.18L19.0438 7.12C18.7771 6.73333 18.5638 6.48 18.4038 6.36C18.2438 6.22667 18.0438 6.14667 17.8038 6.12V5.7C18.4971 5.75333 18.9704 5.78 19.2238 5.78C19.6771 5.78 20.4638 5.75333 21.5838 5.7V6.12C21.3704 6.12 21.1838 6.16 21.0238 6.24C20.8771 6.32 20.8038 6.42667 20.8038 6.56C20.8038 6.65333 20.8304 6.73333 20.8838 6.8L23.0238 9.92L24.4038 7.98C24.8038 7.40667 25.0038 6.98667 25.0038 6.72C25.0038 6.53333 24.9104 6.39333 24.7238 6.3C24.5504 6.19333 24.2638 6.12667 23.8638 6.1V5.7C24.5571 5.74 25.1171 5.76 25.5438 5.76C26.1304 5.76 26.6371 5.74 27.0638 5.7V6.1C26.5171 6.16667 25.9304 6.63333 25.3038 7.5L23.2838 10.3L26.2238 14.58ZM36.6428 13.6C36.4028 14.3333 35.9495 14.9667 35.2828 15.5C34.6295 16.02 33.8361 16.28 32.9028 16.28C31.9561 16.28 31.1361 16.0667 30.4428 15.64C29.7495 15.2 29.2161 14.5933 28.8428 13.82C28.4828 13.0333 28.3028 12.1267 28.3028 11.1C28.3028 9.94 28.4895 8.93333 28.8628 8.08C29.2361 7.22667 29.7628 6.57333 30.4428 6.12C31.1228 5.65333 31.9161 5.42 32.8228 5.42C34.0228 5.42 34.9428 5.78667 35.5828 6.52C36.2361 7.24 36.5628 8.34 36.5628 9.82H30.3028C30.2628 10.1933 30.2428 10.62 30.2428 11.1C30.2428 11.98 30.3828 12.7467 30.6628 13.4C30.9561 14.0533 31.3361 14.56 31.8028 14.92C32.2828 15.2667 32.7828 15.44 33.3028 15.44C33.9428 15.44 34.5095 15.2867 35.0028 14.98C35.4961 14.6733 35.9095 14.16 36.2428 13.44L36.6428 13.6ZM32.7428 5.8C32.1161 5.8 31.5761 6.10667 31.1228 6.72C30.6695 7.33333 30.3895 8.24 30.2828 9.44H34.6428C34.6695 8.4 34.5161 7.53333 34.1828 6.84C33.8628 6.14667 33.3828 5.8 32.7428 5.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <button
                  aria-label="close menu"
                  onClick={() => setShowMenu(false)}
                  className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  <svg
                    className="fill-stroke"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5L5 15"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 5L15 15"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-4 mx-4">
              <ul className="flex flex-col space-y-4">
                <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                  >
                    {" "}
                    New{" "}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.3335V12.6668"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                  >
                    {" "}
                    Men{" "}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.3335V12.6668"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                  >
                    {" "}
                    Women{" "}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.3335V12.6668"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                  >
                    {" "}
                    Kids{" "}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.3335V12.6668"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-full h-full flex items-end">
              <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
                <li>
                  <a
                    className="flex items-center space-x-2 focus:outline-none text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline"
                    href="javascript:void(0)"
                  >
                    <div>
                      <svg
                        className="fill-stroke"
                        width={18}
                        height={20}
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-base">My account</p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center space-x-2 focus:outline-none text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline"
                    href="javascript:void(0)"
                  >
                    <div>
                      <svg
                        className="fill-stroke"
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 5H21"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-base">Bag</p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    href="javascript:void(0)"
                  >
                    <div>
                      <svg
                        className="fill-stroke"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-base">Favourites</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
