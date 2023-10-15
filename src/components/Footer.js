import Link from 'next/link';

const Footer = () => {
  return (
      <div className="flex items-center py-4">
          <a href="https://weberapp.blogspot.com/p/privacy-policy.html" className="text-white-500 hover:underline mr-4">Policy</a>
          <a href="https://weberapp.blogspot.com/p/terms-of-use.html" className="text-white-500 hover:underline">Terms-of-use</a>
      </div>
  
  );
};

export default Footer;
