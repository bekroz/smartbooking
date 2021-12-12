import { MMKV } from 'react-native-mmkv';
import * as storage from 'redux-storage';
const storage = new MMKV();

const storage = new MMKV({
  id: `user-${userId}-storage`,
  path: `${USER_DIRECTORY}/storage`,
  encryptionKey: 'some-encryption-key',
});