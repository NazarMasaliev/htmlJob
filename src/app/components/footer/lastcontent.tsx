import { FC } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaFlipboard, FaPinterestP } from "react-icons/fa";

const LastContent: FC = () => {
  return (
    <footer className="bg-gray-100 text-sm text-black py-10 flex flex-col sm:flex-row justify-center items-center w-[100%]">
      <div className="w-[85%] flex justify-between">
        <div className="text-center sm:text-left space-y-1">
          <p>
            1996 - 2025 UOL - O melhor conteúdo. Todos os direitos reservados.{" "}
            <a href="#" className="text-red-600 hover:underline">Segurança e privacidade</a>
          </p>
        </div>

        <div className="flex items-center space-x-5 mt-2 sm:mt-0">
          <span className="text-sm">Siga UOL Esporte</span>
          <div className="flex items-center space-x-5 text-gray-700">
            <a href="#"><FaFacebookF className="w-5 h-5" /></a>
            <a href="#"><FaInstagram className="w-5 h-5" /></a>
            <a href="#"><FaYoutube className="w-5 h-5" /></a>
            <a href="#"><FaFlipboard className="w-5 h-5" /></a>
            <a href="#"><FaPinterestP className="w-5 h-5" /></a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default LastContent;
