import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUp from '../../components/sign-up/sign-up.component'

const SignIt = () => {
 
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRed = createUserDocumentFromAuth(user);
    }
 
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser} >Sign in with Google Popup</button>
            <SignUp />
        </div>
    )
}

export default SignIt;

