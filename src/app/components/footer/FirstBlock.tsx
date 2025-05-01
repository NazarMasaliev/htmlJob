// components/UolFooter.tsx
import React from 'react';
import Link from 'next/link';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumn {
  title: string | null;
  links: FooterLink[];
}

const UolFooter: React.FC = () => {
  const footerColumns: FooterColumn[] = [
    {
      title: "Sobre o UOL",
      links: [
        { text: "Conheça nossa história", href: "#" },
        { text: "Denuncie", href: "#" },
        { text: "Fale conosco", href: "#" },
        { text: "Imprensa", href: "#" },
        { text: "SAC", href: "#" },
        { text: "Segurança e privacidade", href: "#" },
        { text: "Termos de Uso", href: "#" },
        { text: "Aviso de Direitos autorais", href: "#" },
        { text: "Carreiras", href: "#" },
      ]
    },
    {
      title: "Para Você",
      links: [
        { text: "PagBank", href: "#" },
        { text: "Assine UOL", href: "#" },
        { text: "Tenha um email @uol", href: "#" },
        { text: "Bate-Papo UOL", href: "#" },
        { text: "UOL Antivírus", href: "#" },
        { text: "UOL Play", href: "#" },
        { text: "UOL Leia+", href: "#" },
        { text: "Libertadores 2025", href: "#" },
      ]
    },
    {
      title: null,
      links: [
        { text: "Clube UOL", href: "#" },
        { text: "UOL Resolve", href: "#" },
        { text: "UOL Sexo", href: "#" },
        { text: "UOL Wi-Fi", href: "#" },
        { text: "Assistência técnica", href: "#" },
        { text: "Passei Direto", href: "#" },
        { text: "UOL Educação", href: "#" },
        { text: "UOL Afiliados", href: "#" },
      ]
    },
    {
      title: "Para seu negócio",
      links: [
        { text: "Anuncie no UOL", href: "#" },
        { text: "Cloud Computing", href: "#" },
        { text: "Conecte", href: "#" },
        { text: "Crie seu blog", href: "#" },
        { text: "Crie seu site", href: "#" },
        { text: "Crie sua loja virtual", href: "#" },
        { text: "Dicas para o seu negócio", href: "#" },
        { text: "Venda sem maquininha", href: "#" },
      ]
    },
    {
      title: null,
      links: [
        { text: "Email marketing", href: "#" },
        { text: "Email profissional", href: "#" },
        { text: "Hospedagem", href: "#" },
        { text: "Maquininha de cartão", href: "#" },
        { text: "PagBank", href: "#" },
        { text: "Registre um domínio", href: "#" },
        { text: "Vende Fácil", href: "#" },
      ]
    },
    {
      title: "Aplicativos",
      links: [
        { text: "UOL Notícias", href: "#" },
        { text: "Placar UOL", href: "#" },
        { text: "UOL Cotações", href: "#" },
        { text: "Bate-Papo UOL", href: "#" },
        { text: "UOL Mail", href: "#" },
        { text: "Meu UOL", href: "#" },
      ]
    },
  ];

  return (
    <footer className="w-[90%] bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto w-full">
        <div className="w-full flex lg:flex-row  flex-wrap justify-between items-start xl:gap-20 lg:gap-8">
          {footerColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col space-y-7">
              {column.title != null ? 
              <>
              <h3 className="text-gray-700 font-bold mb-10">{column.title}</h3>
              </>

              :<>
              <div className='mt-10'></div>
              </> }
              <ul className="space-y-7">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 text-md transition duration-150"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default UolFooter;