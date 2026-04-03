import Link from "next/link";
import KeyboardViewerWrapper from "@/components/KeyboardViewerWrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <section className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        
        <nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight text-zinc-100">
              Max<span className="text-amber-400">-58</span>
            </Link>
            <div className="flex gap-8 text-sm text-zinc-500">
              <Link href="#exploded" className="hover:text-zinc-100 transition-colors">3D View</Link>
              <Link href="#specs" className="hover:text-zinc-100 transition-colors">Specs</Link>
              <Link href="https://github.com/max-hill-4/max-58" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </nav>

        <div className="relative z-10 text-center px-6 pt-20">
          <p className="text-zinc-500 text-sm tracking-widest uppercase mb-4">Split Mechanical Keyboard</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
            <span className="text-zinc-100">MAX</span>
            <span className="text-amber-400">-58</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Wireless. Split. Open source.
            <br />
            Built for comfort, designed for makers.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://github.com/max-hill-4/max-58"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-zinc-100 text-zinc-950 rounded font-medium hover:bg-amber-400 transition-all"
            >
              <span className="flex items-center gap-2">
                Build Yours
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link href="#exploded" className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded font-medium hover:border-zinc-500 hover:text-zinc-100 transition-all">
              See Inside
            </Link>
          </div>
        </div>
      </section>

      <section id="exploded" className="py-16 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Exploded View</h2>
            <p className="text-zinc-500 max-w-lg mx-auto">Based on actual PCB outline. Toggle between exploded and assembled views.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <KeyboardViewerWrapper />
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto mt-12">
            <ComponentCard number={1} name="Keycaps" desc="1u & 1.5u low profile" />
            <ComponentCard number={2} name="Switches" desc="Gateron GLP hotswap" />
            <ComponentCard number={3} name="PCB" desc="Custom nRF52840" />
            <ComponentCard number={4} name="Battery" desc="JST connected power" />
            <ComponentCard number={5} name="Case" desc="3D printed or plate" />
          </div>
        </div>
      </section>

      <section id="specs" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8">Specifications</h2>
              <div className="space-y-1">
                <SpecRow label="Layout" value="6x4+4 keys per side" />
                <SpecRow label="MCU" value="nRF52840 x2" />
                <SpecRow label="Connectivity" value="Bluetooth LE" />
                <SpecRow label="Firmware" value="ZMK / QMK" />
                <SpecRow label="Switches" value="Gateron LP KS-27/KS-33" />
                <SpecRow label="Keycaps" value="56x 1u + 2x 1.5u" />
                <SpecRow label="Battery" value="JST with power switch" />
                <SpecRow label="Display" value="nice!view / OLED" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-6">Bill of Materials</h3>
              <p className="text-zinc-400 mb-6">
                Full component list, PCB files, and build guide available on GitHub.
              </p>
              <Link
                href="https://github.com/max-hill-4/max-58"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                View full BOM
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8">Based on Open Source</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
            Max-58 is a fork of Allium58 by beekeeb, which is based on Lily58 Pro by kata0510.
            Full credit to the original creators.
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            <CreditLink name="Allium58" url="https://github.com/beekeeb/Allium58" author="beekeeb" />
            <CreditLink name="Lily58" url="https://github.com/kata0510/Lily58" author="kata0510" />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <p>MIT License. Open source hardware.</p>
          <Link
            href="https://github.com/max-hill-4/max-58"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-zinc-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Source
          </Link>
        </div>
      </footer>
    </div>
  );
}

function ComponentCard({ number, name, desc }: { number: number; name: string; desc: string }) {
  return (
    <div className="text-center p-4">
      <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center text-sm font-bold mx-auto mb-3">
        {number}
      </div>
      <h3 className="font-semibold text-zinc-100 mb-1">{name}</h3>
      <p className="text-xs text-zinc-500">{desc}</p>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-3 border-b border-zinc-800">
      <span className="text-zinc-500">{label}</span>
      <span className="text-zinc-200 font-medium">{value}</span>
    </div>
  );
}

function CreditLink({ name, url, author }: { name: string; url: string; author: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-6 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-colors"
    >
      <span className="text-lg font-semibold text-zinc-100 mb-1">{name}</span>
      <span className="text-sm text-zinc-500">by {author}</span>
    </a>
  );
}