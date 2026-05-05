'use client';

export default function ContactPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 border-b bg-white backdrop-blur-md border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              alt="KIZ FARM Logo"
              className="h-10 w-auto object-contain"
              src="/logo.jpeg"
            />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a
              className="font-sans antialiased text-sm font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              Products
            </a>
            <a
              className="font-sans antialiased text-sm font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              Farmers
            </a>
            <a
              className="font-sans antialiased text-sm font-medium tracking-tight text-primary font-bold border-b-2 border-primary pb-1"
              href="#"
            >
              Contact
            </a>
          </nav>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-md font-label-md active:scale-95 duration-200 transition-all">
            Login
          </button>
        </div>
      </header>

      <main className="pt-32 pb-xl bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-lg">
            <h1 className="font-display-xl text-display-xl text-primary mb-xs">
              Cultivate a Connection
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Have questions about our sustainable farming practices or looking for precision agricultural systems? Our team is ready to assist you in the field.
            </p>
          </div>

          {/* Bento Layout for Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Contact Details Column */}
            <div className="lg:col-span-4 flex flex-col gap-gutter">
              {/* Address Card */}
              <div className="bg-white border border-outline-variant p-md rounded-xl soil-shadow">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="location_on"
                  >
                    location_on
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  The Homestead
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  882 Harvest Ridge Road
                  <br />
                  Emerald Valley, AG 50210
                </p>
              </div>

              {/* Communication Card */}
              <div className="bg-white border border-outline-variant p-md rounded-xl soil-shadow">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="contact_emergency"
                  >
                    contact_emergency
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Direct Line
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    className="font-body-md text-primary font-semibold hover:underline"
                    href="tel:+15550123456"
                  >
                    +1 (555) 012-3456
                  </a>
                  <a
                    className="font-body-md text-primary font-semibold hover:underline"
                    href="mailto:hello@kizfarm.com"
                  >
                    hello@kizfarm.com
                  </a>
                </div>
              </div>

              {/* Image Block (Fresh Produce) */}
              <div className="relative group overflow-hidden rounded-xl h-64 lg:flex-1 border border-outline-variant">
                <img
                  alt="fresh produce box"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Top-down view of a rustic wooden crate overflowing with vibrant red tomatoes, leafy greens, and organic root vegetables on a bright sunny day."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7gV3EId0Uf_Drc6xgbmTILw4hoMcE12vHGLxHk4OhrOnMEtN3rNSOMzWSVAa8lu9ceAUQ7t5tpi36tAKsgsK7QlHiF12xOeSDZYjeJ6tQezJ6aVvOk4WrEgSAXgsyth5UKLVr-33fe0oINonWuMrT22a-XT4LJbvefSkpfK4LJsjYQQvkCKuOwpwJJ0SHaObjZlkFeyvBQdnVq2-GUVxUCeCLg2D_uC2F_j4_wIR-iXGcEsfh9B7b4I_jtLJbNxGoXqLLOJEWBw8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-label-md uppercase tracking-widest text-[10px]">
                    Harvest Ready
                  </p>
                  <p className="font-headline-md">Farm Fresh Every Day</p>
                </div>
              </div>
            </div>

            {/* Main Form & Big Visual */}
            <div className="lg:col-span-8 flex flex-col gap-gutter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter bg-white border border-outline-variant rounded-xl overflow-hidden soil-shadow">
                {/* Contact Form */}
                <div className="p-lg">
                  <form className="flex flex-col gap-md">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-md text-on-surface-variant">
                        FULL NAME
                      </label>
                      <input
                        className="w-full bg-white border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-md text-on-surface-variant">
                        EMAIL ADDRESS
                      </label>
                      <input
                        className="w-full bg-white border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
                        placeholder="john@example.com"
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-md text-on-surface-variant">
                        YOUR MESSAGE
                      </label>
                      <textarea
                        className="w-full bg-white border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
                        placeholder="How can we help your farm grow today?"
                        rows={4}
                      ></textarea>
                    </div>
                    <button
                      className="bg-primary text-on-primary font-label-md py-md rounded-lg hover:opacity-90 transition-all active:scale-[0.98] mt-sm flex items-center justify-center gap-2"
                      type="submit"
                    >
                      <span
                        className="material-symbols-outlined"
                        data-icon="send"
                      >
                        send
                      </span>
                      SEND MESSAGE
                    </button>
                  </form>
                </div>

                {/* Side Environment Visual */}
                <div className="relative min-h-[400px]">
                  <img
                    alt="farm environment"
                    className="absolute inset-0 w-full h-full object-cover"
                    data-alt="Wide expansive view of a verdant green crop field stretching towards the horizon under a soft blue sky with rolling hills in distance."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlfeKeleVi4OdQhcT0lspOCN4SvZGSWaGZjuDsWOvYzwxb3WtrU5gDjBwe4nrzTmCP1r0nhe55_vEC0IDqIMC_syXEPV1-QmlB5UJ47gtPaY1dEY_iuEuTGOeMwf9q8ORj5ReDgWs1BB9jQSvC6DtDmOhpoqziwndkT56f5d5Yole7FHIjKh7iw_8Pue5ILNdxpwwgaoLlJ4OtFIrxGTYSudB8r0BTtEhYJjWY9VsP19IKiSKhPFouu44ngHXPymaTBeQEtbozoJk"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-lg">
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-md rounded-xl text-white text-center">
                      <span
                        className="material-symbols-outlined text-4xl mb-sm"
                        data-icon="energy_savings_leaf"
                      >
                        energy_savings_leaf
                      </span>
                      <p className="font-headline-md">Rooted in Precision</p>
                      <p className="font-caption opacity-80 uppercase tracking-widest mt-2">
                        Certified Sustainability
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map/Location Teaser */}
              <div className="h-64 rounded-xl overflow-hidden border border-outline-variant relative group">
                <img
                  alt="farm map location"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  data-alt="Abstract aerial topography map style view of organized farm plots and agricultural grids with distinct geometric patterns."
                  data-location="Kansas"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKXzawEyE_AnuNXjlCPjtsvV0meCuounsskb3wNF1IlFvgNPLgN7Zdu-l7cWASOmzjrO8DUHb2RZLtkEgXFZ8G0KGwD7lO9woIXRFYNB89n1LT3sgLgLt8PvrRs6pY-la7HFlTwJMxEwQnxiGBp8vVO1OvuD-02vZOBhZpxwq4xQ5FEEgMpxg7j_Pzod1hlNijQQheIwBoPnkggJWxhLwjfSzO6XUcJyhNTjnmjAHib-AjFjtnPVaSTsx4CaohlDVCB8hMejhB5XI"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-lg py-sm rounded-full border border-primary flex items-center gap-2 soil-shadow">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-icon="near_me"
                    >
                      near_me
                    </span>
                    <span className="font-label-md text-primary">FIND US ON THE MAP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white border-slate-200 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-lg font-bold text-primary dark:text-emerald-100">
              KIZ FARM
            </span>
            <p className="font-sans text-xs uppercase tracking-widest text-slate-500">
              © 2024 KIZ FARM. Precision Agricultural Systems.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-opacity"
              href="#"
            >
              Products
            </a>
            <a
              className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-opacity"
              href="#"
            >
              Become a Farmer
            </a>
            <a
              className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-opacity"
              href="#"
            >
              Sustainability
            </a>
            <a
              className="font-sans text-xs uppercase tracking-widest text-primary underline underline-offset-4"
              href="#"
            >
              Contact
            </a>
            <a
              className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-opacity"
              href="#"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
