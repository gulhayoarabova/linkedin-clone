import { auth, provider ,signInWithPopup} from "../../firebase";

export function signInApi() {
//   return (dispatch) => {
    signInWithPopup(auth,provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
//   };
}
