import React from 'react';
import Image from 'next/image';

const UolSubscriptionBar: React.FC = () => {
  return (
    <div className="w-full bg-white border-t border-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">

          {/* Coluna de Assinatura */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-gray-800 font-bold mb-2">Assine UOL</h3>
            <p className="text-red-600 text-sm">
              Assine o UOL e tenha acesso ilimitado a notícias, vídeos e muito mais.
            </p>
          </div>

          {/* Coluna de Telefone */}
          <div className="w-full lg:w-2/4 font-bold flex flex-col items-start">
            <h3 className="text-gray-800 mb-4">Telefone</h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <p className="text-gray-800 text-[22px]">4003-6118</p>
                <p className="text-sm text-gray-600 font-medium">Capitais</p>
              </div>
              <div>
                <p className="text-gray-800 text-[22px]">0800 703 300</p>
                <p className="text-sm text-gray-600 font-medium">Demais localidades</p>
              </div>
            </div>
          </div>

          {/* Coluna de Apps */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-gray-800 font-bold mb-2">Baixe nossos apps</h3>
            <div className="flex gap-2">
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
