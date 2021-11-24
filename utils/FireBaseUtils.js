import auth from '@react-native-firebase/auth';

export default class FirebaseUtil {
  static signIn = async (email, password) => {
    return await auth().signInWithEmailAndPassword(email, password);
  };

  static signUp = async (email, password) => {
    return await auth().createUserWithEmailAndPassword(email, password);
  };

  static signOut = async () => {
    return await auth().signOut();
  };

  static resetPass = async email => {
    return await auth().sendPasswordResetEmail(email);
  };
}
