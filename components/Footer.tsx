
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-white rounded-sm rotate-45 flex items-center justify-center">
                    <div className="w-4 h-4 bg-black"></div>
                </div>
                <span className="text-4xl font-black tracking-tighter uppercase italic">Hyper</span>
            </div>
            <p className="text-gray-500 max-w-md font-light leading-relaxed">
                Hyper is a high-end luxury brand affiliated to GAC AION, dedicated to the development of the top-level pure electric supercar industry in China.
            </p>
        </div>

        <div>
            <h5 className="text-red-600 font-bold uppercase tracking-widest mb-6 text-sm">Location</h5>
            <p className="text-gray-400 font-light">
                GAC AION NEW ENERGY AUTOMOBILE CO., LTD.<br />
                Panyu District, Guangzhou City,<br />
                Guangdong Province, China
            </p>
        </div>

        <div>
            <h5 className="text-red-600 font-bold uppercase tracking-widest mb-6 text-sm">Links</h5>
            <ul className="space-y-4 text-gray-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Press Room</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hyper APP</a></li>
            </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-600">© 2024 HYPER SSR. ALL RIGHTS RESERVED.</span>
        <div className="flex space-x-8">
            {['IG', 'FB', 'TW', 'YT'].map(social => (
                <a key={social} href="#" className="text-[10px] font-bold tracking-widest hover:text-red-600 transition-colors">{social}</a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
