import React, { FC } from "react";
import { COPYRIGHT_TEXT, FOOTER_MENU } from "../../constants";

export const Footer: FC = () => {
  return (
    <footer className="bg-secondary-900 py-20 text-white text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around gap-8 mb-8">
          {FOOTER_MENU.map((column) => (
            <div key={column.id}>
              <h3 className="font-bold mb-10">{column.title}</h3>
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
        </div>
        <div className="text-center text-lg pt-4">{COPYRIGHT_TEXT}</div>
      </div>
    </footer>
  );
};
