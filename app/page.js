'use client'

import Faqheader from "./Faqheader";
import Accordion_Items from './accordion/Accordion_Items';

export default function Home() {
  return (
    <>
    <header className="flex items-center justify-center my-0 mx-auto w-[1440px] h-[80px] border border-black">HEADER</header>
    <main className="flex flex-col flex-grow w-[1440px] my-0 mx-auto ">
      <section className="flex h-[342px]">
        <Faqheader />
      </section>

      <section className="flex items-center justify-center pb-[96px]">
        <Accordion_Items />
      </section>

      <section className="flex items-center justify-center py-[96px]">
          <div className="flex flex-col items-center justify-center w-[768px] py-[64px]">
            <h3 className="text-primary-900 font-[600] leading-display-md tracking-[-0.72px] text-display-md mb-2xl">Stále máte na něco zeptat?</h3>
            <p className="text-tertiary-600 font-[400] leading-[30px] text-[20px] text-center mb-4xl">Pokud nenajdete odpověď na svou otázku, neváhejte nás kontaktovat prostřednictvím online chatu.</p>
          </div>
      </section>
    </main>
    <footer className="flex items-center justify-center my-0 mx-auto w-[1440px] h-[80px] border border-black">FOOTER</footer>
    </>
  );
}
