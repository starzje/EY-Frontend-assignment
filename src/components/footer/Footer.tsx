import React, { FC } from "react";
import { COPYRIGHT_TEXT, FOOTER_MENU } from "../../constants";

export const Footer: FC = () => {
  return (
    <footer className="py-20 text-center text-white bg-secondary-900">
      <div className="container px-4 mx-auto">
        <nav className="flex flex-col justify-around gap-8 mb-8 md:flex-row">
          {FOOTER_MENU.map((column) => (
            <div key={column.id}>
              <h3 className="mb-10 font-bold text-center">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} className="block mb-2 hover:underline">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <p className="pt-4 text-lg text-center">{COPYRIGHT_TEXT}</p>
      </div>
    </footer>
  );
};
