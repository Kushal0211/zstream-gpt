import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import GptButton from "../buttons/GptButton";
import { toggleSearchView } from "../utils/gptSlice";


const Header = () => {

    const user = useSelector(store => store.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const HandleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    const toggleGptHandling = () => {
        console.log("Toggling GPT handling clicked");
        dispatch(toggleSearchView())
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe(); // Clean up listener on unmount
    }, []);


    return (
        <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 fixed top-0 left-0 w-full z-10">
            {/* Flex container to align logo left and button right */}
            <div className="flex items-center justify-between">
                <img
                    className="w-56"
                    src= {LOGO}
                    alt="logo"
                />
                
                {user && <GptButton onClick={toggleGptHandling}/>}
            

                {user && <div>

                    <button className="text-white font-semibold px-4 py-2 border absolute right-9 border-white rounded"
                        onClick={HandleSignOut}
                    >
                        Sign Out
                    </button>

                    <img
                        className="w-10 h-10 right-40 absolute rounded-full"
                        src={user.photoURL}
                        alt="userphoto"
                    />
                </div>
                }

            </div>
        </div>
    );
};

export default Header;
