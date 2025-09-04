import { useRef, useState } from "react";
import Header from "./Header";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { useNavigate} from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BACKGROUND, USER_AVATAR } from "../utils/constants";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    const HandleValidateData = (e) => {
        e.preventDefault();
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: USER_AVATAR,
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid : uid, email:email, displayName:displayName, photoURL:photoURL }));
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(errorMessage);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorCode + " : " + errorMessage)
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " : " + errorMessage)
                });
        }
    }

    return (
        <div >
            <div>
                <Header />
            </div>

            <div className="absolute">
                <img src={BACKGROUND}
                    alt="background"
                />
            </div>
            <form
                onSubmit={HandleValidateData}
                className="w-3/12 bg-orange-700 bg-opacity-80 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-4">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignIn && <input
                    ref={name}
                    type="text"
                    placeholder="Enter Your Name"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                />}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                />

                {/* Error Message */}
                {errorMessage && (
                    <p className="text-red-300 font-semibold">{errorMessage}</p>
                )}

                <button className="p-4 my-6 w-full bg-red-700 rounded-lg" onClick={HandleValidateData}
                >
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <p
                    className="mx-5 cursor-pointer"
                    onClick={toggleSignIn}
                >
                    {isSignIn ? "New To Zstrean? Sign Up Now" : "Already registered with us? Sign in now"}
                </p>
            </form>
        </div>
    );
}

export default Login;