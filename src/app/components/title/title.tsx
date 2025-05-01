import Image from "next/image";

const Title = () => {
  return (
    <div className="bg-white max-w-2xl mx-auto border-t border-gray-100 flex flex-col">
      <div >
        <span className="text-red-600 text-sm font-medium hidden lg:block">
          Esporte
        </span>
      </div>
      <h2 className="lg:text-[40px] text-[30px] lg:p-0 p-5 font-bold text-gray-800 lg:leading-[1.5] leading-[1.2]  mb-5 mt-5 lg:m-0">
        Mbappé marca, mas França só empata com a Polônia e avança como 2<sup>a</sup> do grupo
      </h2>
      <div className="lg:flex lg:flex-row lg:mt-10 flex flex-col ">
        <div className="lg:block hidden w-[50%] pe-10">
          <p className="leading-[1.6] text-[20px]">
            Na volta de Mbappé, a França apenas empatou em 1 a 1 com a Polônia e deixou escapar a liderança do Grupo D da Eurocopa. O resultado nesta terça-feira (25), somado à vitória da Áustria sobre a Holanda, derrubou os franceses para a segunda colocação… 
          </p>
        </div>
        <div className="lg:w-[50%] w-[100%] flex justify-center">
          <Image src="/mbapeNews.jpg" alt="#Mbape" width={300} height={300}></Image>
        </div>
        <div className="lg:hidden block w-[100%] p-5">
          <p className="leading-[1.6] text-[20px]">
            Na volta de Mbappé, a França apenas empatou em 1 a 1 com a Polônia e deixou escapar a liderança do Grupo D da Eurocopa. O resultado nesta terça-feira (25), somado à vitória da Áustria sobre a Holanda, derrubou os franceses para a segunda colocação… 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;