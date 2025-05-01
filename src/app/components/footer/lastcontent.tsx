import { FC } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaFlipboard,
  FaPinterestP,
} from "react-icons/fa";

const LastContent: FC = () => {
  return (
    <footer className="bg-gray-100 text-sm text-black py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">

        {/* Левая часть: текст */}
        <div className="text-center sm:text-left space-y-1">
          <p>
            1996 - 2025 UOL - O melhor conteúdo. Todos os direitos reservados.{" "}
            <a href="#" className="text-red-600 hover:underline">
              Segurança e privacidade
            </a>
          </p>
        </div>

        {/* Правая часть: соцсети */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
          <span className="text-sm">Siga UOL Esporte</span>
          <div className="flex items-center gap-4 text-gray-700">
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
