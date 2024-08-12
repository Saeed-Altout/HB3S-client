import React from "react";
import Link from "next/link";

import { routes } from "@/config";

export const Nav = () => {
  return (
    <React.Fragment>
      {routes.map(({ label, href }, index) => (
        <Link
          key={index}
          href={href}
          className="text-muted-foreground hover:text-foreground"
        >
          {label}
        </Link>
      ))}
    </React.Fragment>
  );
};
