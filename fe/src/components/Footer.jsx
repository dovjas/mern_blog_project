import React from 'react';
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500 p-10">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white mb-2 md:mb-0">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Best</span>
          Blog
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4">
        <div className="flex flex-col items-center">
          <Footer.Title title="About" className="mb-1"/>
          <Footer.LinkGroup col>
            <Footer.Link 
              href="https://www.google.lt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className="flex flex-col items-center">
          <Footer.Title title="Follow Us"className="mb-1" />
          <Footer.LinkGroup col>
            <Footer.Link 
              href="https://www.google.lt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className="flex flex-col items-center">
          <Footer.Title title="Legal" className="mb-1"/>
          <Footer.LinkGroup col>
            <Footer.Link 
              href="https://www.google.lt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className="flex flex-col items-center">
          <Footer.Title title="Resources"className="mb-1" />
          <Footer.LinkGroup col>
            <Footer.Link 
              href="https://www.google.lt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Best Blog. All rights reserved.</p>
      </div>
    </Footer>
  );
}
