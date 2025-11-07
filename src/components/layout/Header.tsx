"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import logo from "@assets/images/Logo GP.png";
import Whitelogo from "@assets/images/FooterLogo.png";
import ArrowDown from "@/assets/icons/ArrowDown";
import MenuIcon from "@/assets/icons/MenuIcon";
import CloseIcon from "@/assets/icons/CloseIcon";
import CustomButton from "@/components/ui/CustomButton";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useServiceStore } from "@/provider/store-provider";
import { services } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isPvp, setIsPvp] = useState(false);
  const [isServiceActive, setIsServiceActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsHome(pathname === "/");
    setIsPvp(pathname === "/previkta-vs-pain");
  }, [pathname]);

  // const handleFranchiseClick = () => {
  //   console.log("Franchise Button clicked!");
  // };

  // const handleShopClick = () => {
  //   console.log("Shop Button clicked!");
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const setServices = useServiceStore((state) => state.setServiceType);
  // console.log(services);

  const changeServiceType = (type: string) => {
    console.log("Selected service type:", type);
    // You can add logic here to update the service type in the store
    // Call the action to set the service type
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden xl:flex w-full justify-between items-center py-4 px-4 xl:px-4 ${
          isHome ? "bg-white" : "bg-primary"
        } z-50 ${
          isPvp ? "static" : "sticky"
        } top-0 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
      >
        {/* Logo */}
        <div
          className="min-w-[180px] xl:min-w-[200px] cursor-pointer"
          onClick={() => router.push("/")}
        >
          {isHome ? (
            <Image
              src={logo}
              alt="Company Logo"
              height={32}
              width={201}
              className="w-full h-auto max-h-[32px] object-contain"
            />
          ) : (
            <Image
              src={Whitelogo.src}
              alt="Company Logo"
              height={32}
              width={201}
              className="w-full h-auto max-h-[32px] object-contain"
            />
          )}
        </div>

        {/* Navigation Bar */}
        <nav className="flex flex-1 justify-center items-center mx-4 md:text-base xl:text-lg">
          <div
            className={`flex whitespace-nowrap justify-center gap-2 xl:gap-5 ${
              isHome ? "text-primary" : "text-white"
            } `}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1 cursor-pointer transition-colors">
                  <span className="font-[Duplet] text-bodyRegular ">
                    Services
                  </span>
                  <ArrowDown fill={isHome ? "#132D47" : "#ffff"} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                  {services.map((service) => (
                    <DropdownMenuItem
                      key={service}
                      onClick={() => {
                        setServices(service);
                        router.push("/services");
                      }}
                      textValue={service}
                    >
                      {service}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="font-[Duplet] text-bodyRegular cursor-pointer ">
              Know your vaidya
            </span>
            {/* <div
              className="flex items-center gap-1 cursor-pointer transition-colors"
              onClick={() => router.push("/products")}
            >
              <span className="font-[Duplet] text-bodyRegular ">Products</span>
              <ArrowDown fill={isHome ? "#132D47" : "#ffff"} />
            </div> */}
            <span className="font-[Duplet] text-bodyRegular cursor-pointer  transition-colors">
              Find a clinic
            </span>

            {/* <Link href={"/about-us"} className="font-[Duplet] text-bodyRegular cursor-pointer transition-colors">
              About Us
            </Link> */}
            <div className="flex items-center gap-1 cursor-pointer transition-colors">
              <span className="font-[Duplet] text-bodyRegular">
                Knowledge Hub
              </span>
              <ArrowDown fill={isHome ? "#132D47" : "#ffff"} />
            </div>
            <Link
              href={"/contact-us"}
              className="font-[Duplet] text-bodyRegular cursor-pointer transition-colors"
            >
              Contact us
            </Link>
          </div>
        </nav>

        {/* Buttons */}
        <div>
          <div className="flex gap-12">
            <Link href={"/franchise"}>
              <CustomButton
                mainWidth="170px"
                labelWidth="170px"
                labelWidthHover="140px"
                labelBackground={isHome ? "#ffff" : "#132D47"}
                labelBackgroundHover={isHome ? "#132D47" : "#ffff"}
                labelTextColor={isHome ? "#132D47" : "#ffff"}
                labelTextColorHover={isHome ? "#FFFF" : "#132D47"}
                arrowFill={isHome ? "#132D47" : "#ffff"}
                arrowFillHover={isHome ? "#FFFF" : "#132D47"}
                labelText="Franchise"
                labelBorderColor={isHome ? "#132D47" : "#ffff"}
                iconPosition="2px"
                iconPositionHover="px"
              />
            </Link>
            {/* <Button showIcon>Robin</Button> */}
            {/* <CsButton>Robin</CsButton> */}
            <div className="relative -ml-5">
              <CustomButton
                mainWidth="120px"
                labelWidth="120px"
                labelWidthHover="80px"
                labelBackground="#81DE76"
                labelBackgroundHover="#81DE76"
                labelTextColor="#132D47"
                labelTextColorHover="#132D47"
                arrowFill="#132D47"
                arrowFillHover="#132D47"
                labelText="Shop"
                labelBorderColor="#81DE76"
                iconPosition="0px"
                iconPositionHover="0px"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`xl:hidden flex w-full justify-between items-center py-4 px-4 ${
          isHome ? "bg-white" : "bg-primary"
        } z-50 sticky top-0 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        {/* Logo */}
        <div className="w-[160px]">
          {isHome ? (
            <Image
              src={logo.src}
              alt="Company Logo"
              height={25}
              width={201}
              className="w-full h-auto max-h-[25px] object-contain"
            />
          ) : (
            <Image
              src={Whitelogo.src}
              height={25}
              width={201}
              alt="Company Logo"
              className="w-full h-auto max-h-[25px] object-contain"
            />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="w-10 h-10 flex items-center justify-center focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon fill={!isHome ? "#ffff" : "#132D47"} />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 ">
          <div className="absolute right-0 top-0 w-[85%] sm:w-[70%] h-full bg-white overflow-y-auto animate-slideIn no-scrollbar">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="w-[160px]">
                <Image
                  src={logo}
                  width={201}
                  height={25}
                  alt="Company Logo"
                  className="w-full h-auto max-h-[25px]"
                />
              </div>
              <button
                onClick={toggleMobileMenu}
                className="w-10 h-10 flex items-center justify-center focus:outline-none"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-4">
              {/* Menu Items */}
              <div className="flex flex-col space-y-4">
                {/* Services Dropdown */}
                <div className="border-b pb-4">
                  <button
                    onClick={() => {
                      setIsServiceActive(!isServiceActive);
                    }}
                    className="flex justify-between items-center cursor-pointer w-full"
                  >
                    <span className="font-bold text-primary-dark text-base">
                      Services
                    </span>
                    <motion.div
                      animate={{ rotate: isServiceActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowDown />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isServiceActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex flex-col gap-1.5 pl-4 overflow-hidden"
                      >
                        {services.map((service, ind) => (
                          <motion.button
                            key={service + ind}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: ind * 0.05 }}
                            className="text-base text-left font-[Duplet]"
                            onClick={() => {
                              setServices(service);
                              router.push("/services");
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {service}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Products Dropdown */}
                {/* <div className="border-b pb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => router.push("/products")}
                  >
                    <span className="font-bold text-primary-dark text-base">
                      Products
                    </span>
                    <ArrowDown />
                  </div>
                </div> */}

                {/* Simple Menu Items */}
                <div className="border-b pb-4">
                  <div className="font-bold text-primary-dark text-base cursor-pointer">
                    Find a clinic
                  </div>
                </div>

                {/* Knowledge Hub Dropdown */}
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center cursor-pointer">
                    <span className="font-bold text-primary-dark text-base">
                      Knowledge Hub
                    </span>
                    <ArrowDown />
                  </div>
                </div>

                {/* Simple Menu Items */}
                {/* <div className="border-b pb-4">
                  <div className="font-bold text-primary-dark text-base cursor-pointer">
                    Careers
                  </div>
                </div>
                <div className="border-b pb-4">
                  <Link href={"/about-us"} className="font-bold text-primary-dark text-base cursor-pointer">
                    About Us
                  </Link>
                </div> */}
                <div className="border-b pb-4">
                  <Link
                    href={"/contact-us"}
                    className="font-bold text-primary-dark text-base cursor-pointer"
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              {/* Mobile Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href={"/franchise"}>
                  <CustomButton
                    mainWidth="170px"
                    labelWidth="170px"
                    labelWidthHover="140px"
                    labelBackground="#ffff"
                    labelBackgroundHover="#132D47"
                    labelTextColor="#132D47"
                    labelTextColorHover="#FFFF"
                    arrowFill="#132D47"
                    arrowFillHover="#FFFF"
                    labelText="Franchise"
                    labelBorderColor="#132D47"
                    iconPosition="2px"
                    iconPositionHover="px"
                  />
                </Link>
                <CustomButton
                  mainWidth="120px"
                  labelWidth="120px"
                  labelWidthHover="80px"
                  labelBackground="#81DE76"
                  labelBackgroundHover="#81DE76"
                  labelTextColor="#132D47"
                  labelTextColorHover="#132D47"
                  arrowFill="#132D47"
                  arrowFillHover="#132D47"
                  labelText="Shop"
                  labelBorderColor="#81DE76"
                  iconPosition="0px"
                  iconPositionHover="0px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
