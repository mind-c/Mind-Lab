import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginState } from './Structure';
import { AnimatePresence, motion } from "framer-motion";
import User from './Context';
import { app } from '../Firebase';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
const auth = getAuth();
export default () => {
    const [user, setUser] = useContext(User);
    const [state, setState] = useState(false)
    const [profile, setProfile] = useState(false)

    const [isOpen, setIsOpen] = useState(false);
    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Resourses", path: "resources" },

        { title: "Interaction", path: "interaction" },

        { title: "FAQ", path: "faq" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };


    }, [])


    return (<>
        <nav className={` bg-transparent  border-b nav-1  w-full z-40 md:text-sm ${state ? "shadow-lg rounded-xl border  mt-2 md:shadow-none md:border-none  md:mt-0" : ""}`}>


            <div className="lg:gap-x-14 items-center  w-full mx-auto pr-4 pl-4 lg:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <Link className='cursor-pointer' to={"home"}>
                    <svg width="107" height="40" viewBox="0 0 107 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#28B889"/>
<path d="M8.8331 8.90909H14.3324L20.1406 23.0795H20.3878L26.196 8.90909H31.6953V30H27.37V16.2724H27.195L21.7369 29.897H18.7915L13.3335 16.2209H13.1584V30H8.8331V8.90909Z" fill="#FDFFFF"/>
<path d="M47.8963 31V9.18182H52.5092V27.1967H61.8629V31H47.8963ZM69.4988 31.3089C68.4547 31.3089 67.5243 31.1278 66.7076 30.7656C65.8908 30.3963 65.2445 29.853 64.7686 29.1357C64.2999 28.4112 64.0655 27.5092 64.0655 26.4297C64.0655 25.5206 64.2324 24.7571 64.5662 24.1392C64.9 23.5213 65.3546 23.0241 65.9299 22.6477C66.5051 22.2713 67.1586 21.9872 67.8901 21.7955C68.6287 21.6037 69.4029 21.4688 70.2125 21.3906C71.1642 21.2912 71.9313 21.1989 72.5137 21.1136C73.0961 21.0213 73.5186 20.8864 73.7814 20.7088C74.0442 20.5312 74.1756 20.2685 74.1756 19.9205V19.8565C74.1756 19.1818 73.9625 18.6598 73.5364 18.2905C73.1174 17.9212 72.5208 17.7365 71.7466 17.7365C70.9299 17.7365 70.28 17.9176 69.7971 18.2798C69.3141 18.6349 68.9945 19.0824 68.8382 19.6222L64.6408 19.2812C64.8539 18.2869 65.2729 17.4276 65.8979 16.7031C66.5229 15.9716 67.329 15.4105 68.3162 15.0199C69.3105 14.6222 70.4611 14.4233 71.7679 14.4233C72.677 14.4233 73.5471 14.5298 74.378 14.7429C75.2161 14.956 75.9583 15.2862 76.6046 15.7337C77.258 16.1811 77.7729 16.7564 78.1493 17.4595C78.5257 18.1555 78.714 18.9901 78.714 19.9631V31H74.41V28.7308H74.2821C74.0194 29.2422 73.6678 29.6932 73.2275 30.0838C72.7871 30.4673 72.258 30.7692 71.6401 30.9893C71.0222 31.2024 70.3084 31.3089 69.4988 31.3089ZM70.7985 28.1768C71.4661 28.1768 72.0556 28.0455 72.5669 27.7827C73.0783 27.5128 73.4796 27.1506 73.7708 26.696C74.062 26.2415 74.2076 25.7266 74.2076 25.1513V23.4148C74.0655 23.5071 73.8702 23.5923 73.6216 23.6705C73.3801 23.7415 73.1067 23.8089 72.8013 23.8729C72.4959 23.9297 72.1905 23.983 71.8851 24.0327C71.5797 24.0753 71.3027 24.1143 71.0542 24.1499C70.5215 24.228 70.0563 24.3523 69.6586 24.5227C69.2608 24.6932 68.9519 24.924 68.7317 25.2152C68.5115 25.4993 68.4015 25.8544 68.4015 26.2805C68.4015 26.8984 68.6252 27.3707 69.0726 27.6974C69.5272 28.017 70.1025 28.1768 70.7985 28.1768ZM82.3201 31V9.18182H86.8585V17.3849H86.997C87.1958 16.9446 87.4835 16.4972 87.8599 16.0426C88.2434 15.581 88.7406 15.1974 89.3514 14.892C89.9693 14.5795 90.7363 14.4233 91.6525 14.4233C92.8457 14.4233 93.9466 14.7358 94.9551 15.3608C95.9636 15.9787 96.7697 16.9126 97.3734 18.1626C97.9771 19.4055 98.2789 20.9645 98.2789 22.8395C98.2789 24.6648 97.9842 26.206 97.3947 27.4631C96.8123 28.7131 96.0169 29.6612 95.0083 30.3075C94.0069 30.9467 92.8848 31.2663 91.6419 31.2663C90.7612 31.2663 90.0119 31.1207 89.394 30.8295C88.7832 30.5384 88.2825 30.1726 87.8919 29.7322C87.5012 29.2848 87.2029 28.8338 86.997 28.3793H86.7946V31H82.3201ZM86.7626 22.8182C86.7626 23.7912 86.8975 24.6399 87.1674 25.3643C87.4373 26.0888 87.8279 26.6534 88.3393 27.0582C88.8507 27.456 89.4721 27.6548 90.2037 27.6548C90.9423 27.6548 91.5673 27.4524 92.0787 27.0476C92.59 26.6357 92.9771 26.0675 93.2399 25.343C93.5098 24.6115 93.6447 23.7699 93.6447 22.8182C93.6447 21.8736 93.5133 21.0426 93.2505 20.3253C92.9877 19.608 92.6007 19.0469 92.0893 18.642C91.5779 18.2372 90.9494 18.0348 90.2037 18.0348C89.465 18.0348 88.84 18.2301 88.3287 18.6207C87.8244 19.0114 87.4373 19.5653 87.1674 20.2827C86.8975 21 86.7626 21.8452 86.7626 22.8182Z" fill="#FDFFFF"/>
</svg>








                    </Link>
                    <div className="md:hidden">
                        <button className="menu-btn text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 items-center mt-8 md:mt-0  md:flex ${state ? 'block' : 'hidden'} `}>
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="  text-white text-lg cursor-pointer font-semibold  hover:text-[#29B888] px-3 rounded py-1.5">
                                        <Link smooth={true} duration={2000} to={item.path} className="block">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <style>
                        {`.btn-login{
                background: linear-gradient(90deg, #1AB69D 0%, #31B978 100%);
                box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.05);
            }`}
                    </style>
                    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 my-3 lg:my-0 md:flex md:space-y-0 md:mt-0">
                        {!user.login ? (
                            <Link to='login' smooth={true} duration={2000} className="flex btn-login cursor-pointer items-center font-semibold justify-center gap-x-1 py-2.5 px-6  text-white  text-lg   bg-bg-logo   rounded md:inline-flex">
                                Login

                            </Link>) : (<><img src='/images/WhatsApp Image 2024-02-18 at 9.51.19 AM.jpeg' onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer w-10 h-10 rounded-full' />
                            </>)
                        }
                    </div>
                </div>
            </div>
        </nav>
        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} setUser={setUser} />
    </>

    )
}
const SpringModal = (props) => {

    const { isOpen, setIsOpen, user, setUser } = props;
    const handleLogout = () => {
        auth.signOut().then(() => {

            toast.success('User signed out successfully');
            setUser({ login: false })
            setIsOpen(!isOpen)
            // You can perform additional actions after sign out if needed
        }).catch((error) => {
            toast.error('Error signing out:', error);
        });
    };
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur lg:p-8 p-3 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#28B889] text-white lg:p-6 p-3 rounded-lg lg:w-2/4 w-full  shadow-xl cursor-default relative overflow-hidden"
                    >
                        <div className="relative w-full h-full z-10">
                            <h3 className="lg:text-3xl text-xl font-bold text-left mb-2">
                                Profile
                            </h3>
                            <div className=" w-full  grid grid-cols-2 gap-5  pt-5 grid-rows-3">
                                <div>
                                    <h4 className="text-md font-normal">Name</h4>
                                    <p className="text-gray-100 text-2xl font-semibold">{user.name}</p>
                                </div>
                                <div>
                                    <h4 className="text-md font-normal">User Name</h4>
                                    <p className="text-gray-100 text-2xl font-semibold">{user.username}</p>
                                </div>
                                {user.description && <><div>
                                    <h4 className="text-md font-normal">Graduation Year</h4>
                                    <p className="text-gray-100 text-2xl font-semibold">{user.description[0]?.selectedOption || null}</p>
                                </div>
                                    <div>
                                        <h4 className="text-md font-normal">CGPA</h4>
                                        <p className="text-gray-100 text-2xl font-semibold">{user.description[1]?.selectedOption || null}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-md font-normal">Branch</h4>
                                        <p className="text-gray-100 text-2xl font-semibold">{user.description[2]?.selectedOption || null}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-md font-normal">Interest</h4>
                                        <p className="text-gray-100 text-2xl font-semibold">{user.description[3]?.selectedOption || null}</p>
                                    </div>  </>}
                            </div>
                            <div className="flex justify-end items-end pt-10  w-full  ">

                                <button
                                    onClick={handleLogout}
                                    className="bg-transparent px-3 hover:bg-white/10 lg:mr-5 transition-colors flex justify-center items-center text-white font-semibold  py-2 rounded"
                                >
                                    Logout
                                </button>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="bg-white  transition-opacity lg:mr-5 text-[#28B889] font-semibold px-5 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};