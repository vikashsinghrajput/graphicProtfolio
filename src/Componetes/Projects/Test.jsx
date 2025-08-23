import { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

const productTabs = [
  { id: 'macbook-air', name: 'MacBook Air', active: true },
  { id: 'macbook-pro', name: 'MacBook Pro', active: false },
  { id: 'imac', name: 'iMac', active: false },
  { id: 'mac-mini', name: 'Mac mini', active: false },
  { id: 'mac-studio', name: 'Mac Studio', active: false },
  { id: 'studio-display', name: 'Studio Display', active: false },
  { id: 'mac-pro', name: 'Mac Pro', active: false },
  { id: 'pro-display-xdr', name: 'Pro Display XDR', active: false }
];

const features = [
  {
    icon: '📏',
    title: 'Lightweight and less than two centimeters thin, so you can take MacBook Air anywhere you go'
  },
  {
    icon: '💻',
    title: 'The powerful 10-core CPU and up to 10-core GPU of the Apple M4 chip keep things running smoothly'
  },
  {
    icon: '🔋',
    title: 'Up to 18 hours of battery life, so you can leave your charger at home¹'
  },
  {
    icon: '🖥️',
    title: 'The 13.6-inch Liquid Retina display supports 1 billion colours²'
  },
  {
    icon: '📹',
    title: 'The 1MP Center Stage camera keeps you centred in the frame during video calls, even as you move around'
  },
  {
    icon: '🌟',
    title: 'Built for Apple Intelligence. Personal, private, powerful.³'
  }
];

export default function AppleStoreLayout() {
  const [selectedSize, setSelectedSize] = useState('13');
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(true);

  const colors = ['Space Gray', 'Silver', 'Gold', 'Rose Gold'];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
     

      {/* Main Content with Dark Overlay */}
      <div className="relative">
        {/* Background Content (Darkened) */}
      

        {/* Modal Overlay */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center p-4 z-50 overflow-hidden">
            <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto ">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-100 p-6 ">
                <div className="flex justify-between items-center mb-4">
                  <button 
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                
                {/* Product Tabs */}
                <div className="flex space-x-2 overflow-x-auto">
                  {productTabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                        tab.active
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8  ">
                <div className="grid grid-cols-1 gap-12 ">
                  {/* Left Side - Product Image */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-8 text-center">
                      <img
                        src="https://img.freepik.com/free-psd/kids-school-flyer-templates_47987-29109.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="MacBook Air"
                        className="w-full mx-auto object-cover rounded-lg"
                      />
                      
                    </div>
                    

                
                  </div>

   
                 
                </div>

      
              </div>

               <div className=" ">
                <div className="grid grid-cols-1 gap-12 ">
                  {/* Left Side - Product Image */}
                  <div className="">
                    <div className="bg-gray-50 rounded-2xl p-8 text-center">
                      <img
                        src="https://img.freepik.com/free-psd/kids-school-flyer-templates_47987-29109.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="MacBook Air"
                        className="w-full mx-auto object-cover rounded-lg"
                      />
                      
                    </div>
                    

                
                  </div>

                
                 
                </div>

             
              
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}