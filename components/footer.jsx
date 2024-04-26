import React from "react";
import Link from "next/link";

import { footerLinks } from "@/constants";
import FooterColumn from "@/components/footerColumn";

const Footer = () => {
  return (
    <footer className="flex justify-start items-start flex-col paddings w-full gap-20 bg-slate-200">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start  flex-col">
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            carX is the world&apos;s leading community for Buy and sell vehicles
          </p>
        </div>
        <div className="flex flex-wrap  gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
          </div>
        </div>
        <div className="flexBetween  max-sm:flex-col w-full text-sm font-normal">
          <p>@ 2023 Flexibble. All rights reserved</p>
          <p className="text-gray">
            <span className="text-black font-semibold">10,214</span> projects
            submitted
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
