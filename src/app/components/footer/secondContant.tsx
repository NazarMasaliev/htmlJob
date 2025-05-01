// components/UolSubscriptionBar.tsx
import React from 'react';
import Image from 'next/image';


const UolSubscriptionBar: React.FC = () => {
  return (
    <div className="w-[90%] bg-white py-4 border-t border-gray-200 flex justify-center pt-10 mt-10 pb-10">
      <div className="container mx-auto px-4 w-full">
        <div className="w-full flex gap-8 items-center">
          {/* Coluna de Assinatura */}
          <div className="flex flex-col w-[25%] ">
            <h3 className="text-gray-800 font-bold mb-6">Assine UOL</h3>
            <p className="text-red-600 text-sm">
              Assine o UOL e tenha acesso ilimitado a notícias, vídeos e muito mais.
            </p>
          </div>

          {/* Coluna de Telefone */}
          <div className="flex flex-col w-[50%]  font-bold items-center">

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className='flex flex-col'>
                <h3 className="text-gray-800  mb-6">Telefone</h3>
                <p className="text-gray-800 text-[22px]">4003-6118</p>
                <p className="text-sm text-gray-600 font-medium">Capitais</p>
              </div>
              <div>
                <h3 className="text-gray-800  mb-12"></h3>
                <p className="text-gray-800 text-[22px]">0800 703 300</p>
                <p className="text-sm text-gray-600 font-medium">Demais localidades</p>
              </div>
            </div>
          </div>

          {/* Coluna de Apps */}
          <div className="flex flex-col w-[25%] items-start ">
            <h3 className="text-gray-800 font-bold mb-2 ms-2">Baixe nossos apps</h3>
            <div className="flex flex-row gap-2">

              <div className="w-32 h-10 relative">
                <Image
                  src="/appstore.jpg"
                  alt="Download na App Store"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>


              <div className="w-32 h-10 relative">
                <Image
                  src="/googleplay.png"
                  alt="Download no Google Play"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UolSubscriptionBar;