import { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import QRCode from "react-qr-code";
import { formatAddress } from "../utils/func";
import { UseMetaMask } from "../hooks/UseMetaMask";
import Loading from "./Loading";
import Timer from "./Timer";
import AOS from "aos";
import "aos/dist/aos.css";

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
  const navRef = useRef<HTMLDivElement>(null);
  const {
    wallet,
    intervalId,
    QrUrl,
    connectKlip,
    resetKlip,
    isConnecting,
    connectMetaMask,
    disconnect,
  } = UseMetaMask();
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum as any);
        setWeb3(web);
        console.log(web3);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      AOS.init();
    }
    if (wallet?.accounts?.length === 0) {
      if (window.location.pathname === "/list") {
        setShowModal(true);
      }
    } else {
      setShowModal(false);
      handleInitModal();
    }
  }, [wallet, window.location.pathname]);

  const handleConnect = () => {
    setShowModal(true);
  };

  const handleConnectMetamask = async () => {
    try {
      await connectMetaMask();
    } catch (error) {
      console.log(error);
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    handleInitModal();
  };

  const handleInitModal = () => {
    resetKlip(intervalId);
  };

  const handleToggleMenu = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("hidden");
    }
  };

  return (
    <div id="navbar">
      <header className="bg-[#EBF5FE] p-4 dark:bg-slate-900/75">
        <div className="container mx-auto max-w-[1200px] flex justify-between items-center">
          <div className="text-white text-xl font-semibold">
            <a className="text-header-gradient" href="/">
              Mint Tutor
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-4 transition-menu opacity-100">
            <a href="/list" className="text-slate-700 hover:text-gray-500">
              Get Started
            </a>
            {wallet.accounts.length < 1 ? (
              <button
                className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-gray-border-300 ring-offset-2 ring-offset-slate-50 
                focus:outline-none focus:ring-2 
                dark:bg-slate-700 dark:text-slate-200 dark:border-transparent"
                onClick={handleConnect}
              >
                Connect Wallet
              </button>
            ) : (
              <button
                className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-gray-border-300 ring-offset-2 ring-offset-slate-50 
                focus:outline-none focus:ring-2 
                dark:bg-slate-700 dark:text-slate-200 dark:border-transparent"
                onClick={disconnect}
              >
                {wallet.accounts.length > 0 && (
                  <div>
                    <p>{formatAddress(wallet.accounts[0])}</p>
                  </div>
                )}
              </button>
            )}
          </nav>

          <div className="md:hidden">
            <button
              id="menu-toggle"
              onClick={handleToggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Moblle */}
      <nav
        ref={navRef}
        className="hidden flex flex-col transition-menu bg-blue-500 p-4 dark:bg-slate-900/75"
      >
        <a href="/list" className="text-center hover:text-gray-500">
          TUTOR
        </a>
        {wallet.accounts.length < 1 ? (
          <button
            className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-gray-border-300 ring-offset-2 ring-offset-slate-50 
          focus:outline-none focus:ring-2 
          dark:bg-slate-700 dark:text-slate-200 dark:border-transparent"
            onClick={handleConnect}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-gray-border-300 ring-offset-2 ring-offset-slate-50 
          focus:outline-none focus:ring-2 
          dark:bg-slate-700 dark:text-slate-200 dark:border-transparent"
            onClick={disconnect}
          >
            Disconnect
          </button>
        )}
      </nav>
      {showModal && (
        <div id="modal">
          <div
            className="fixed z-10 inset-0 bg-black bg-opacity-50 backdrop-blur-sm
        flex justify-center items-center"
            onClick={handleCloseModal}
          ></div>
          <div className="shell absolute right-0 left-0 overflow-hidden rounded-none md:rounded-3xl">
            <div className="flex justify-between text-center">
              <h3>Connect wallet</h3>
              <svg
                onClick={handleCloseModal}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="modal-body">
              {QrUrl.length > 0 ? (
                <div className="m-4 space-y-2" onClick={handleInitModal}>
                  <div className="flex items-center">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        ></path>
                      </svg>
                      <p>뒤로가기</p>
                    </div>
                  </div>
                  <div className="text-center">Scan QR code</div>
                  <div
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: 100,
                      width: "100%",
                    }}
                  >
                    <QRCode
                      size={356}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={QrUrl}
                      viewBox={`0 0 256 256`}
                    />
                    <Timer />
                  </div>
                </div>
              ) : (
                <div className="m-4 space-y-2">
                  <div
                    className="block cursor-pointer"
                    onClick={handleConnectMetamask}
                  >
                    <button
                      disabled={isConnecting}
                      type="button"
                      className="button px-[22px] flex w-full items-center justify-center"
                      data-testid="button-connnect-wallet-injected"
                    >
                      {isConnecting ? (
                        <Loading />
                      ) : (
                        <>
                          <img
                            src="/img/logo/logo_metamask.png"
                            height="28"
                            width="28"
                            className="-mt-1 mr-2"
                            alt="MetaMask"
                          />
                          MetaMask
                        </>
                      )}
                    </button>
                  </div>
                  <div className="block cursor-pointer" onClick={connectKlip}>
                    <button
                      disabled={isConnecting}
                      type="button"
                      className="button px-[22px] flex w-full items-center justify-center gap-2"
                    >
                      <div className="flex justify-center w-[28px]">
                        <img
                          src="/img/logo/logo_klip.png"
                          className="max-w-[50px]"
                          width="50"
                          alt="Klip"
                        />
                      </div>
                      <span>Klip</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
