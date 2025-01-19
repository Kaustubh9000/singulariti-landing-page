

export default function Home() {
  return (
    <main>
      <div className="flex-col">
        <div className="">
          <div className="w-full overflow-hidden">
            {/* Home */}
            <section id="home" className="w-full min-h-screen py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center
             text-center bg-[url('/background-image.svg')] bg-[length:100%_100%] bg-no-repeat">
              <div className="px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="space-y-4">
                    <h2 className="text-font-yellow text-xl font-semibold tracking-wide text-start  md:text-3xl">
                      ***<br />WelCome To</h2>
                    <h1 className="text-6xl sm:text-9xl">
                      Singulariti</h1>
                    <p className="mx-auto max-w-[700px] font-semibold text-font-yellow text-xl md:text-3xl text-end">
                      New Era Of Internet</p>
                  </div>
                  <div className="flex flex-col items-center lg:space-x-14 sm:flex-row gap-4 mt-8 p-8">
                    <button className="font-semibold rounded-xl lg:text-lg px-4 h-14 bg-[#E2DFD0]/75 hover:bg-white/80 text-black border-2 border-white/50 shadow-inner shadow-white/80"
                    >Download For Mac</button>
                    <button className="font-semibold rounded-xl lg:text-lg px-4 h-14 bg-[#E2DFD0]/75 hover:bg-white/80 text-black border-2 border-white/50 shadow-inner shadow-white/80"
                    >Download For Windows</button>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
        {/*  */}
        <div className="">
          <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                The Browser All You Need
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-yellow-400">
                From Search to Action The Browser That Does It All
              </p>
            </div>
            {/* Product Image Placeholder */}
            <div className="mt-6 w-full max-w-4xl mx-auto">
              <div className="aspect-[16/9] bg-white/80 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-xl">Product Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 items-center" id="features">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl tracking-tighter text-center sm:text-5xl">** Features **</h2>
            <div className="mx-auto my-4 max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col min-h-screen py-8 items-center space-y-4 p-4">
                  <h3 className="text-4xl">{feature.title}</h3>
                  <p className="text-center text-xl">{feature.description}</p>
                  {/* Product Image Placeholder */}
                  <div className="flex w-full max-w-4xl mx-auto">
                    <div className="aspect-[10/6] bg-cover w-full rounded-lg items-baseline" style={{ backgroundImage: `url(${feature.backgroundImage})` }}>
                      <p className="w-full text-4xl h-10 text-end my-4 pr-6">{feature.shortcut}</p>
                      <video className="relative mx-auto w-[85%] rounded-lg">
                        <source
                          src={feature.video}
                          type="video/mp4"
                          height={10}
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="=px-4 md:px-6">
            <h2 className="text-3xl tracking-tighter text-center sm:text-5xl">** Features In Queue**</h2>
            <div className="mx-auto max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              {featuresInQueue.map((feature, index) => (
                <div key={index} className="grid md:grid-cols-2 p-4 items-center">
                  <div className={index % 2 == 1 ? "items-start align-bottom p-8 md:order-last" : "items-start align-bottom p-8"}>
                    <h3 className="text-4xl text-font-yellow">{feature.title}</h3>
                    <p className="text-justify text-xl">{feature.description}</p>
                  </div>
                  {/* Product Image Placeholder */}
                  <div className="flex w-full max-w-4xl mx-auto p-8">
                    <video className="aspect-[28/25] mx-auto rounded-lg bg-white/80" >
                      <source
                        src={feature.video}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Other Features */}
          <div className="=px-4 md:px-6 bg-[url('/f4-bg.svg')] bg-no-repeat bg-cover w-full min-h-screen">
            <div className="container mx-auto px-4 py-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-center max-w-6xl mx-auto mb-20">
                A Seamless and Secure Browsing Experience
              </h1>
              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {perks.map((perk, index) => (
                  <div key={index} className="relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                    {perk.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl mb-6 text-center">
                    {perk.subTitle}
                  </h3>
                  <p className="text-lg leading-relaxed text-justify">
                    {perk.description}
                  </p>
                </div>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* Downloads */}
        <section className="min-h-screen flex flex-col items-center justify-center p-4" id="download">
          <div className="px-4 md:px-6">
            <h1 className="text-7xl tracking-tighter text-[300%] md:text-[500%] lg:text-[700%]"
            >Give A Try to <br />Singulariti</h1>
            <div className="flex flex-col items-center lg:space-x-14 sm:flex-row gap-4 mt-8 p-8 w-full">
              <button className="font-semibold rounded-xl lg:text-lg px-4 h-14 bg-[#E2DFD0]/75 hover:bg-white/80 text-black border-2 border-white/50 shadow-inner shadow-white/80"
              >Download For Mac</button>
              <button className="font-semibold rounded-xl lg:text-lg px-4 h-14 bg-[#E2DFD0]/75 hover:bg-white/80 text-black border-2 border-white/50 shadow-inner shadow-white/80"
              >Download For Windows</button>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}

const features = [
  {
    title: "AI Web Search",
    description: "Singulariti lets you search the internet, & provide direct answers, compare information across sources, and deliver the best answers with credible citations.",
    backgroundImage: "f1-bg.svg",
    shortcut: "Shift + Enter",
    video: "https://docs.material-tailwind.com/demo.mp4"

  },
  {
    title: "Custom Pages",
    description: "Singulariti lets you create custom web pages by combining information from various sites, tailoring them to your specific needs.",
    backgroundImage: "f2-bg.svg",
    shortcut: "Shift + Enter + C",
    video: "https://docs.material-tailwind.com/demo.mp4"
  },
  {
    title: "Spaces",
    description: "Create dedicated spaces for different purposes to stay organized. Effortlessly manage work, study, hobbies, and more in one window with Spaces and Profiles.",
    backgroundImage: "f3-bg.svg",
    shortcut: "",
    video: "https://docs.material-tailwind.com/demo.mp4"
  },
]

const featuresInQueue = [
  {
    title: "Aster Browse",
    description: "Ask Aster to handle any task on the web, and it will perform all the necessary actions to complete it on your behalf—your personal assistant for seamless browsing.",
    video: "https://docs.material-tailwind.com/demo.mp4"
  },
  {
    title: "Magic Cursor",
    description: "Unlock the full potential of AI with the Magic Cursor. From summarizing content and rewriting text to correcting grammar and generating ideas, the Magic Cursor helps with any task all over the internet where your cursor is in action.",
    video: "https://docs.material-tailwind.com/demo.mp4"
  },
  {
    title: "Clips",
    description: "Hold Ctrl and hover over any link to instantly preview the page, no clicks required. See the content at a glance before you decide to open it.",
    video: "https://docs.material-tailwind.com/demo.mp4"
  },
  {
    title: "Translate",
    description: "Instantly translate any webpage into your preferred language, regardless of whether the page supports internationalization.",
    video: "https://docs.material-tailwind.com/demo.mp4"
  }
]

const perks = [
  {
    title: "Ads-Free Browsing",
    subTitle: "No Interruptions, Just Browsing",
    description: "Enjoy a smooth, uninterrupted browsing experience with no ads. We believe your time online should be free from distractions, allowing you to focus on what matters."
  },
  {
    title: "Security",
    subTitle: "Your Privacy, Our Priority",
    description: "Your data is fully secure with us. We never sell your information, and most of your data is stored directly on your device to ensure your privacy remains intact."
  }
]