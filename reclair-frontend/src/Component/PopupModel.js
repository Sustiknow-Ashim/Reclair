import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import popupVideo from '../Video/videoForPopup.mp4'

export default function PopupModel() {
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate()
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    const handleVideoEnded = () => {
        setIsVideoEnded(true)
    }
    return (
        <>
            <button
                className="btn btn-primary active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Get Started
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Reclair Energy
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-black "
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-black text-white ">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto z-40">
                                    {!isVideoEnded && <video className="w-screen z-40" autoPlay onEnded={handleVideoEnded} controls>
                                        <source className="w-30 h-30 z-40" src={popupVideo} type='video/mp4' />

                                    </video>}

                                    {isVideoEnded &&
                                        (<div className="text-center">
                                            <p>The video has finished playing.</p>
                                            <div className="mt-4">
                                                <button
                                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4"
                                                    onClick={()=>{navigate('solarEnquery')}}
                                                >
                                                    Do Project With Us
                                                </button>
                                                <button
                                                    className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                                                    // onClick={handleMoreInfo}
                                                >
                                                    Buy Project From Us
                                                </button>
                                            </div>
                                        </div>
                                        
                                    )}
                                </div>
                                {/*footer*/}
                                {/* <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        // className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
                </>
            ) : null}
        </>
    );
}













// import { useState, useRef } from 'react';

// export default function PopupModel() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isVideoFinished, setIsVideoFinished] = useState(false);
//     const videoRef = useRef(null);

//     const handleOpenPopup = () => {
//         setIsOpen(true);
//         setIsVideoFinished(false);
//     };

//     const handleClosePopup = () => {
//         setIsOpen(false);
//     };

//     const handleVideoEnded = () => {
//         setIsVideoFinished(true);
//     };

//     const handleReplayVideo = () => {
//         setIsVideoFinished(false);
//         videoRef.current.play();
//     };

//     const handleMoreInfo = () => {
//         // Do something when the "More Info" button is clicked
//     };

//     return (
//         <>
//             <button
//                 className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//                 onClick={handleOpenPopup}
//             >
//                 Open Popup
//             </button>

//             {isOpen && (
//                 <div className="fixed z-10 inset-0 overflow-y-auto">
//                     <div className="flex items-center justify-center min-h-screen">
//                         {/* <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//                             <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//                         </div> */}

//                         <div className="bg-white rounded-lg shadow-lg p-8">
//                             {!isVideoFinished && (
//                                 <iframe
//                                     ref={videoRef}
//                                     width="560"
//                                     height="315"
//                                     src={popupVideo}
//                                     title="YouTube video player"
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                     allowFullScreen
//                                     onEnded={handleVideoEnded}
//                                     onended={()=>{console.log('object')}}
//                                 ></iframe>
//                             )}

//                             {isVideoFinished && (
//                                 <div className="text-center">
//                                     <p>The video has finished playing.</p>
//                                     <div className="mt-4">
//                                         <button
//                                             className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4"
//                                             onClick={handleReplayVideo}
//                                         >
//                                             Replay Video
//                                         </button>
//                                         <button
//                                             className="bg-green-500 text-white font-bold py-2 px-4 rounded"
//                                             onClick={handleMoreInfo}
//                                         >
//                                             More Info
//                                         </button>
//                                     </div>
//                                 </div>
//                             )}

//                             <button
//                                 className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
//                                 onClick={handleClosePopup}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
