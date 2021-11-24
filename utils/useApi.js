import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

const useApi = () => {
  const base64iosCode = base64.encode(
    process.env.iosISS + ':' + process.env.iosSECRET,
  );

  const base64androidCode = base64.encode(
    process.env.androidISS + ':' + process.env.androidSECRET,
  );

  // #1 API => Authentification the user
  const authenticateIOSApp = async ({ base64iosCode }) => {
    try {
      return await axios.get(`${process.env.API_URL}/auth/app`, {
        headers: {
          Authorization: `Basic ${base64iosCode}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      alert(e);
    }
  };

  const authenticateANDROIDApp = async ({ base64iosCode }) => {
    try {
      return await axios.put(`${process.env.API_URL}/mobile/auth/login`, {
        headers: {
          Authorization: `Basic ${base64androidCode}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      alert(e);
    }
  };

  // #2 API => Authorization the user
  const authorizeIOSApp = async ({ base64iosCode }) => {
    try {
      await axios.put(`${process.env.API_URL}/auth/app`, {
        headers: {
          Authorization: `Bearer`,
          token_type: 'Bearer',
          'Content-Type': 'application/json',
        },
      });
      await AsyncStorage.setItem('user', JSON.stringify(data));
    } catch (e) {
      alert(e);
    }
  };

  // return await AsyncStorage.setItem('user', JSON.stringify(data));

  // #3 API => Get the hotel property data
  const getHotelPropertyData = async () => {
    try {
      return await axios.get(`${process.env.API_URL}/mobile/properties`);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  // #3 API => getInitialList
  const getInitialList = async ({ token }) => {
    try {
      return await axios.get(`${API_URL}/api/v1/initial/`, {
        headers: {
          Authorization: `JWT ${token}`,
          Connection: 'keep-alive',
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #4 API => getDevicesList
  const getDevicesList = async () => {
    try {
      return await axios.get(`${API_URL}/fcm/devices/`, config);
    } catch (e) {
      alert(e);
    }
  };

  // #5 API => getDevicesRead
  const getDevicesRead = async ({ registration_id }) => {
    try {
      return await axios.get(
        `${API_URL}/fcm/devices/${registration_id}/`,
        config,
      );
    } catch (e) {
      alert(e);
    }
  };

  // #6 API => getUserEventsList
  const getUserEventsList = async token => {
    try {
      return await axios.get(`${API_URL}/api/v1/user_event_list/`, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log('EVENT LIST ERR', e);
    }
  };

  // #7 API => getSearchHistory
  const getSearchHistory = async token => {
    try {
      return await axios.get(`${API_URL}/api/v1/user/search_history/`, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log('Search history', e.response);
    }
  };

  // #8 API => putInitialUpdate
  const putInitialUpdate = async ({
    email,
    first_name,
    last_name,
    zip_code,
    country_of_residence,
    mobile_number,
    token,
  }) => {
    try {
      await axios
        .put(
          `https://seatquestbackend.veprof.com/api/v1/initial/`,
          {
            email: email,
            first_name: first_name,
            last_name: last_name,
            zip_code: zip_code,
            country_of_residence: country_of_residence,
            mobile_number: mobile_number,
          },
          {
            headers: {
              Authorization: `JWT ${token}`,
              Connection: 'keep-alive',
            },
          },
        )
        .then(async () => {
          alert('Request has been sent!');
          const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
          };
          await AsyncStorage.setItem('user', JSON.stringify(data));
        });
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  // #9 API => putDevicesUpdate
  const putDevicesUpdate = async ({
    name,
    device_id,
    active,
    type,
    registration_id,
  }) => {
    try {
      return axios.put(
        `${API_URL}/fcm/devices/${registration_id}/`,
        {
          name: name,
          registration_id: registration_id,
          device_id: device_id,
          active: active,
          type: type,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (e) {
      alert(e);
    }
  };

  // #10 API => putDevicesCreate
  const postDevicesCreate = async ({ data_send }) => {
    console.log('data_send', data_send);
    try {
      return axios.post(
        `${API_URL}/fcm/devices/`,
        {
          registration_id: data_send.registration_id,
          type: data_send.type,
        },
        {
          headers: {
            Authorization: `JWT ${data_send.token}`,
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (e) {
      alert(e);
    }
  };

  // #11 API => postUserEventsCreate
  const postUserEventsCreate = async ({ data_send }) => {
    console.log('useApi', data_send);
    try {
      return await axios.post(
        `${API_URL}/api/v1/user_events/`,
        {
          id_name: data_send.id_name,
          name: data_send.name,
          description: data_send.description,
          platform: data_send.platform,
          date: data_send.date,
          number_of_tickets: data_send.number_of_tickets,
          url: data_send.url,
          user: data_send.user,
          location_city: data_send.locationDate?.city,
          location_country: data_send.locationDate?.country,
          location_latitude: data_send.locationDate?.latitude,
          location_longitude: data_send.locationDate?.longitude,
          location_name: data_send.locationDate?.name,
        },
        {
          headers: {
            Authorization: `JWT ${data_send.token}`,
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (e) {
      console.log(e?.response?.data);
      return Promise.reject(e?.response?.data);
    }
  };

  // #12 API => deleteDevices
  const deleteDevices = async ({ registration_id }) => {
    try {
      return axios.delete(`${API_URL}/fcm/devices/${registration_id}/`);
    } catch (e) {
      alert(e);
    }
  };

  // #13 API => deleteUserEvent
  const deleteUserEvent = async data => {
    console.log('data.token', data.id);
    try {
      return await axios.delete(`${API_URL}/api/v1/user_event/${data.id}/`, {
        headers: {
          Authorization: `JWT ${data.token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      // console.log(e?.response?.data)
      return Promise.reject(e?.response?.data);
    }
  };

  // #14 API => patchPartialUpdate
  const patchPartialUpdate = async ({
    registration_id,
    name,
    device_id,
    active,
    type,
  }) => {
    try {
      return axios.patch(
        `${API_URL}/fcm/devices/${registration_id}/`,
        {
          name: name,
          registration_id: registration_id,
          device_id: device_id,
          active: active,
          type: type,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (e) {
      alert(e);
    }
  };

  // #15 API => getPriceList
  const getPriceList = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      return await axios.get(`${API_URL}/api/v1/payments/get_price_list`, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.error('api/v1/payments/get_price_list', e.response?.data);
    }
  };

  // #16 API => createSubscription
  const createSubscription = async data => {
    try {
      const token = await AsyncStorage.getItem('token');

      return await axios.post(
        `${API_URL}/api/v1/payments/create_subscription/`,
        data,
        {
          headers: {
            Authorization: `JWT ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (e) {
      console.error('api/v1/payments/create_subscription', e.response?.data);
      return Promise.reject(e.response?.data);
    }
  };

  // #17 API => createPayment
  const createPayment = async data => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('token', token);
      return await axios.post(
        `${API_URL}/api/v1/payments/tracker_payment`,
        data,
        {
          headers: {
            Authorization: `JWT ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (e) {
      // console.error('api/v1/payments/tracker_payment', e.response?.data)
      // return Promise.reject(e.response?.data)
    }
  };

  // #18 API => getUserTrackEventsList
  const getUserTrackEventsList = async token => {
    try {
      return await axios.get(`${API_URL}/api/v1/user_events/`, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log('EVENT LIST ERR', e);
    }
  };

  // #19 API => getUserEventSingle
  const getUserEventSingle = async id => {
    try {
      const token = await AsyncStorage.getItem('token');

      return await axios.get(`${API_URL}/api/v1/user_event/${id}/`, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      // console.log(e?.response?.data)
      return Promise.reject(e?.response?.data);
    }
  };

  return {
    getEventsList,
    getSuggestionsList,
    getInitialList,
    getDevicesList,
    getDevicesRead,
    getUserEventsList,
    getSearchHistory,
    postDevicesCreate,
    postUserEventsCreate,
    putDevicesUpdate,
    putInitialUpdate,
    patchPartialUpdate,
    deleteDevices,
    deleteUserEvent,
    getPriceList,
    createSubscription,
    createPayment,
    getUserTrackEventsList,
    getUserEventSingle,
  };
};

export default useApi;
