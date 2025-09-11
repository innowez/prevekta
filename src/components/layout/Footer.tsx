"use client";
import FooterLogo from "@assets/images/FooterLogo.png";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import LinkdInIcon from "@/assets/icons/LinkdInIcon";
import WhatsappIcon from "@/assets/icons/WhatsappIcon";
import FooterDesign from "@assets/images/FooterDesign.png";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#132D47] text-white w-full h-auto rounded-[20px] overflow-hidden">
      <div className="pt-1">
        <img
          src={FooterDesign.src}
          alt="Footer Design"
          className="w-full h-auto mb-6"
        />
      </div>
      <div className="py-8 px-4 md:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between flex-col lg:flex-row">
          {/* Logo and Social */}
          <div className="space-y-0 flex gap-10 lg:flex-col lg:justify-between ">
            <img
              src={FooterLogo.src}
              alt="Prevekta Logo"
              className="w-[220px] h-[36px]"
            />

            <div className="flex space-x-3">
              <FacebookIcon className="cursor-pointer" />
              <InstagramIcon className="cursor-pointer" />
              <YoutubeIcon className="cursor-pointer" />
              <LinkdInIcon className="cursor-pointer" />
              <WhatsappIcon className="cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div className="flex space-x-8 font-[Duplet]">
            <div className="space-y-6">
              <h3 className="text-xl font-bold">About</h3>
              <ul className="space-y-2 text-base">
                <li>Our Story</li>
                <li>The 4P Model</li>
                <li>Our Team</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2 text-base">
                <li>Book a Consultation</li>
                <li>Shop Products</li>
                <li>Find a Clinic</li>
                <li>Become a Franchisee</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Products</h3>
              <ul className="space-y-2 text-base">
                <li>Treeyna</li>
                <li>Trimanya</li>
                <li>Yuvrasa</li>
                <li>Juvinam</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Legal & Help</h3>
              <ul className="space-y-2 text-base">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mb-8 space-y-2.5 font-[Duplet]">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <div className="flex gap-2">
                <Phone  />
                <a
                  className="text-base font-[Duplet]"
                  href="tel:+91 99620 62060"
                >
                  +91 99620 62060
                </a>
              </div>
              <div className="flex gap-2">
                <Mail />
                <a
                  className="text-base font-[Duplet]"
                  href="mailto:info@prevektaayurveda.com"
                >
                  info@prevektaayurveda.com
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin />
                <p className="text-base font-[Duplet]">
                  2nd floor, 8/1C, DRA 90 Degrees, <br />
                  Boopathy Nagar, Kovilambakkam, <br />
                  Chennai - 600129
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col">
          {/* Logo */}
          <div className="mb-6">
            <img
              src={FooterLogo.src}
              alt="Prevekta Logo"
              className="w-[180px] h-[28px]"
            />
          </div>

          {/* Links in column */}
          <div className="flex flex-col space-y-6 font-[Duplet]">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">About</h3>
              <ul className="space-y-2 text-base">
                <li>Our Story</li>
                <li>The 4P Model</li>
                <li>Our Team</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2 text-base">
                <li>Book a Consultation</li>
                <li>Shop Products</li>
                <li>Find a Clinic</li>
                <li>Become a Franchisee</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Products</h3>
              <ul className="space-y-2 text-base">
                <li>Treeyna</li>
                <li>Trimanya</li>
                <li>Yuvrasa</li>
                <li>Juvinam</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Legal & Help</h3>
              <ul className="space-y-2 text-base">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="mb-8 space-y-2.5 font-[Duplet]">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <div className="flex gap-2">
                <Phone />
                <a
                  className="text-base font-[Duplet]"
                  href="tel:+91 99620 62060"
                >
                  +91 99620 62060
                </a>
              </div>
              <div className="flex gap-2">
                <Mail />
                <a
                  className="text-base font-[Duplet]"
                  href="mailto:info@prevektaayurveda.com"
                >
                  info@prevektaayurveda.com
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin />
                <p className="text-base font-[Duplet]">
                  2nd floor, 8/1C, DRA 90 Degrees, <br />
                  Boopathy Nagar, Kovilambakkam, <br />
                  Chennai - 600129
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex mt-6 space-x-3">
            <FacebookIcon className="cursor-pointer" />
            <InstagramIcon className="cursor-pointer" />
            <YoutubeIcon className="cursor-pointer" />
            <LinkdInIcon className="cursor-pointer" />
            <WhatsappIcon className="cursor-pointer" />
          </div>
        </div>

        {/* Bottom Section (Privacy and Terms) */}
        <div className="mt-6 border-t border-white/40 pt-2 flex flex-col md:flex-row justify-between text-base gap-1 font-[Duplet]">
          <p className="text-center md:text-left">Privacy Policy</p>
          <p className="text-center md:text-left md:mt-0">Terms & conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
