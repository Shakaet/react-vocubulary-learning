import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Email: support@winterdonation.com</p>
            <p>Phone: +880 123-456-789</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.64 9.13 8.34 9.88v-6.98H7.91v-2.9h2.43V9.68c0-2.41 1.45-3.74 3.67-3.74 1.06 0 2.17.2 2.17.2v2.38h-1.22c-1.2 0-1.58.74-1.58 1.5v1.79h2.69l-.43 2.9h-2.26v6.98C18.36 21.13 22 17 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M19.633 7.997c.013.176.013.352.013.528 0 5.387-4.097 11.608-11.608 11.608-2.307 0-4.457-.678-6.26-1.852.321.038.642.05.975.05 1.922 0 3.693-.678 5.106-1.81a4.1 4.1 0 01-3.835-2.845c.25.038.5.05.764.05.364 0 .728-.05 1.064-.138a4.095 4.095 0 01-3.287-4.01v-.05c.542.304 1.165.488 1.829.516a4.084 4.084 0 01-1.835-3.4c0-.748.207-1.434.57-2.033a11.616 11.616 0 008.414 4.267c-.062-.303-.088-.616-.088-.93a4.1 4.1 0 014.1-4.1c1.18 0 2.247.5 2.994 1.309a8.19 8.19 0 002.604-.992 4.07 4.07 0 01-1.8 2.27 8.31 8.31 0 002.348-.644 8.89 8.89 0 01-2.064 2.14z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M7.75 2h8.5c3.062 0 5.75 2.688 5.75 5.75v8.5c0 3.062-2.688 5.75-5.75 5.75h-8.5c-3.062 0-5.75-2.688-5.75-5.75v-8.5C2 4.688 4.688 2 7.75 2zM16 0h-8C3.58 0 0 3.58 0 8v8c0 4.42 3.58 8 8 8h8c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8zm-4 5.84c-2.85 0-5.16 2.31-5.16 5.16s2.31 5.16 5.16 5.16c2.85 0 5.16-2.31 5.16-5.16S14.85 5.84 12 5.84zm0 8.48c-1.83 0-3.32-1.49-3.32-3.32s1.49-3.32 3.32-3.32 3.32 1.49 3.32 3.32-1.49 3.32-3.32 3.32zM18.52 4.08c-.57 0-1.08.21-1.47.59-.39.39-.6.91-.59 1.47.01.56.21 1.08.6 1.47.38.38.91.59 1.46.6.56-.01 1.08-.21 1.47-.6.39-.39.59-.91.6-1.47-.01-.56-.21-1.08-.6-1.47-.39-.38-.91-.59-1.47-.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright Notice */}
          <div>
            <h2 className="text-xl font-bold mb-4">Legal</h2>
            <p>© 2024 Winter Donation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
