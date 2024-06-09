import NavBar from "../components/nav";

function Procedures () {
    return  (
        <>
            <NavBar/>
            <div className="pt-[120px] px-[90px] sm:px-[30px] lg:px-[90px]">
                <div className="flex justify-center items-center">
                    <h2 className="font-bold">How do you want to use</h2>
                    <div className="">
                        <a className="flex justify-start items-center" href="/"><img className="w-[30%]" src="/Images/Property 1=Jacobs Logo _ Real Company _ Alphabet, Letter J Logo 1.png" alt="" /></a>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center border w-[40%] py-[40px] px-[30px] rounded-md mt-[30px] sm:w-full lg:w-[40%]">
                        <img className="w-[15%] mr-[20px] sm:w-[20%] lg:w-[15%]" src="/Images/Globe Vector Logo, Globe Drawing, Logo Drawing, Globe Sketch PNG and Vector with Transparent Background for Free Download 1.png" alt="" />
                        <div>
                            <h2 className="font-medium mb-[30px]">Build web3 and web2  apps</h2>
                            <p className="w-[90%] sm:text-[15px] sm:w-full lg:w-[90%] lg:text-[16px]">for builders and buinesses Zencoin is merge with native currency, it can be receive in both crypto and native currency</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center border w-[40%] py-[40px] px-[30px] rounded-md mt-[30px] sm:w-full lg:w-[40%]">
                        <img className="w-[15%] mr-[20px]  sm:w-[20%] lg:w-[15%]" src="/Images/Download premium psd _ image of Bank outline icon psd financial symbol by Aew about money icon, accounting, bank, bank icon, and bank transfer icon 2890882 1.png" alt="" />
                        <div>
                            <h2 className="font-medium mb-[30px]">Trade and exchange Zencoin</h2>
                            <p>Trade JPY20 in exchange platforms, dex, transact and mint globally</p>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}
export default Procedures