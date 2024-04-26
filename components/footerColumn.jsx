import React from "react";
import Link from "next/link";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href='/' key={link}>{link}</Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
