import "./App.css";
import BaseSection from "./components/BaseSection";
import FAQ from "./components/FAQ";
// import tutorBg from

function App() {
  return (
    <div className="w-full">
      <section id="hero" className="w-full h-[100dvh] bg-[#EBF5FE]">
        <BaseSection>
          <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
            <span
              data-aos="fade-right"
              data-aos-once="true"
              className="text-base text-gradient font-semibold uppercase"
            >
              Sign Up Today
            </span>
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
            >
              Create your{" "}
              <span className="text-header-gradient">Personal Tutor</span> on
              website
            </h1>
            <p
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="paragraph hidden sm:block"
            >
              Empower Your Learning Journey! Create your customized tutor on our
              website and embark on a personalized educational adventure
              tailored just for you.
            </p>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
            >
              <a
                className="max-w-full rounded bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
                href="/list"
              >
                <button className="px-4 py-2">Get Started</button>
              </a>
            </div>
          </div>
          <div className="hidden sm:block col-span-12 lg:col-span-6">
            <div className="w-full">
              <img
                data-aos="fade-up"
                data-aos-once="true"
                src="/img/tutor_bg.png"
                className="-mt-4"
                alt=""
              />
            </div>
          </div>
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src={"/img/pattern/ellipse-1.png"}
            className="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src={"/img/pattern/ellipse-2.png"}
            className="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src={"/img/pattern/ellipse-3.png"}
            className="hidden sm:block absolute bottom-56 right-24 w-6"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src={"/img/pattern/star.png"}
            className="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
            alt=""
          />
        </BaseSection>
      </section>

      <section className="w-full h-[100dvh]">
        <div
          data-aos="fade-down"
          className="relative max-w-[1200px] h-full items-center px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden aos-init aos-animate"
          data-v-b444fb2c=""
        >
          <div className="col-span-12 lg:col-span-7">
            <div className="w-full">
              <img src="/img/chat_bg.jpeg" alt="" className="w-[95%]" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
            <h2 className="text-4xl font-semibold">
              <span className="text-[25px]">🚀</span> Welcome to{" "}
              <span className="text-header-gradient">Mint Tutor!</span>
            </h2>
            <p className="paragraph">
              Welcome to MintTutor, where we revolutionize your learning
              experience! We shape the future of education, creating a virtual
              world where learning and chatting come together seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced trading tools section */}
      <section
        className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden"
        data-v-b444fb2c=""
      >
        <div className="w-full py-16 flex flex-col items-center">
          <h2
            data-aos="flip-down"
            className="text-3xl sm:text-4xl font-semibold text-center aos-init aos-animate"
            data-v-b444fb2c=""
          >
            What can you expect?
          </h2>
          <div
            data-aos="fade-up"
            className="relative w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8 aos-init aos-animate"
            data-v-b444fb2c=""
          >
            <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
              {/* <img src="/_nuxt/img/sign-up.4afd242.png" alt="" className="max-w-[245px] mx-auto"/>  */}
              <p className="text-[50px] mx-auto">🤖</p>
              <h3 className="text-xl text-neutral-800 font-semibold">
                Virtual Tutors
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Unique virtual tutors created using cutting-edge Minting (NFT)
                technology, providing expertise in various fields.{" "}
              </p>
            </div>
            <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
              <p className="text-[50px] mx-auto">💬</p>
              <h3 className="text-xl text-neutral-800 font-semibold">
                Real-time Chat
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Engage in real-time conversations with tutors whenever you need,
                fostering interactive and effective learning.
              </p>
            </div>
            <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
              <p className="text-[50px] mx-auto">📚</p>
              <h3 className="text-xl text-neutral-800 font-semibold">
                Tailored Learning Paths
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Receive personalized learning paths designed to meet your
                individual needs, ensuring efficient and learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-leading security section */}
      <section className="w-full my-24"></section>

      {/* Getting started section */}
      <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden"></section>

      {/* FAQ section */}
      <FAQ />
      <div className="w-full my-10 flex justify-center">
        <a
          href="#navbar"
          className="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
        >
          <span>Back to top</span>
        </a>
      </div>
    </div>
  );
}

export default App;
