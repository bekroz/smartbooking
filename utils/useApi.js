import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import base64 from 'react-native-base64';

const useApi = () => {
  const BASE_API_URL = 'https://api.dev.smartbooking.uz';

  // #1 API => GET IOS User authentication token
  const base64iosCode = base64.encode(
    process.env.iosISS + ':' + process.env.iosSECRET,
  );

  const encoded_ios_code =
    'VHFlbnh2TmFMTU41S3gyWHBDdmJzd2FLVGFxODJtZ3BDSkJyTmhMNFNZSFZKUGdrQXhEc0RFNG8zekI2Olc4VVJUbHJuM1laZjNwQ292UzE0eFF2OWJSUWUzMm5ZdVNuY1NERWJXcUtMTVV4Z0ZPSFkwYlFPdXdEQg==';
    
  const firstAPIconfig = {
    method: 'POST',
    url: `${BASE_API_URL}/auth/app`,
    headers: {
      Authorization: `Basic ${encoded_ios_code}`,
    },
  };

  const [authenticationToken, setAuthenticationToken] = useState(null);

  const handleIOSAuthentication = async () => {
    try {
      return await axios(firstAPIconfig).then(response => {
        console.log('AUTHENTICATION TOKEN ===>>>');
        console.log(response.data.access_token);
        setAuthenticationToken(response.data.access_token);
      });
    } catch (e) {
      alert(e);
    }
  };

  // #2 API => GET IOS User authorization token

  const [authorizationToken, setAuthorizationToken] = useState(null);

  const user_secret_outgoing_data = {
    username: 'test@smartbooking.uz',
    password: '12345678',
  };
  const secondAPIconfig = {
    url: `${BASE_API_URL}/mobile/auth/login`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authenticationToken}`,
      'Content-Type': 'application/json',
    },
    data: user_secret_outgoing_data,
  };

  const handleIOSAuthorization = async () => {
    try {
      return await axios(secondAPIconfig).then(response => {
        console.log('AUTHORIZATION TOKEN ===>>>');
        console.log(response.data.access_token);
        setAuthorizationToken(response.data.access_token);
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #3 API => GET All Hotel Properties Data of the user

  const [allHotelData, setAllHotelData] = useState(null);
  const thirdAPIconfig = {
    url: `${BASE_API_URL}/mobile/properties`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json',
    },
  };

  const getAllHotelPropertiesData = async () => {
    try {
      return await axios(thirdAPIconfig)
        .then(response => {
          console.log('ALL HOTEL PROPERTIES DATA ===>>>');
          console.log(response.data);
          setAllHotelData(response.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #4 API => GET All Hotel Properties Data of the user

  const [singleHotelData, setSingleHotelData] = useState(null);

  const fourthAPIconfig = {
    url: `${BASE_API_URL}/mobile/properties/5`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json',
    },
  };

  const getSingleHotelData = async () => {
    try {
      return await axios(fourthAPIconfig)
        .then(response => {
          console.log('SINGLE HOTEL DATA ===>>>');
          console.log(response.data);
          setSingleHotelData(response.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #5 API => GET Dashboard Data of the user

  const [dashboardData, setDashboardData] = useState(null);
  const dashboard_outgoing_data = {
    date: '2021-11-11',
  };
  const fifthAPIconfig = {
    url: `${BASE_API_URL}/mobile/48/dashboard`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json',
    },
    data: dashboard_outgoing_data,
  };

  const getDashboardData = async () => {
    try {
      return await axios(fifthAPIconfig)
        .then(response => {
          console.log('DASHBOARD DATA ===>>>');
          console.log(response.data);
          setDashboardData(response.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #6 API => GET Hotel All Reservations Data

  const [hotelAllReservationsData, setHotelAllReservationsData] =
    useState(null);
  const reservations_outgoing_data = {
    date_range_type: 'type_stay_dates',
    start_date: '2021-11-01',
    end_date: '2021-11-05',
    status: 'confirmed',
  };
  const sixAPIconfig = {
    url: `${BASE_API_URL}/mobile/48/reservations`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json',
    },
    data: reservations_outgoing_data,
  };

  const getHotelReservationsData = async () => {
    try {
      return await axios(sixAPIconfig)
        .then(response => {
          console.log('ALL RESERVATIONS DATA ===>>>');
          console.log(response.data);
          setHotelAllReservationsData(response.data.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #7 API => GET Hotel Single Reservation Data

  const [hotelSingleReservationData, setHotelSingleReservationData] =
    useState(null);

  const reservationID = '7470654901';

  const seventhAPIconfig = {
    url: `${BASE_API_URL}/mobile/48/reservations/${reservationID}`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json',
    },
  };

  const getHotelSingleReservationData = async () => {
    try {
      return await axios(seventhAPIconfig)
        .then(response => {
          console.log('SINGLE RESERVATION DATA ===>>>');
          console.log(response.data);
          setHotelSingleReservationData(response.data.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #8 API => GET Hotel Statistics By Year

  const [hotelStatisticsByYear, setHotelStatisticsByYear] = useState(null);

  const stat_by_year_outgoing_data = {
    year: '2015',
  };
  const eighthAPIconfig = {
    url: `${BASE_API_URL}/mobile/48/statistics-by-year`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json',
    },
    data: stat_by_year_outgoing_data,
  };

  const getStatisticsByYear = async () => {
    try {
      return await axios(eighthAPIconfig)
        .then(response => {
          console.log('STATISTICS BY <<< YEAR >>> DATA===>>>');
          console.log(response.data);
          setHotelStatisticsByYear(response.data.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #9 API => GET Hotel Statistics By Category

  const [hotelStatisticsByCategory, setHotelStatisticsByCategory] =
    useState(null);

  const stat_by_group_outgoing_data = {
    start_date: '2020-11-01',
    end_date: '2021-11-30',
  };
  const ninthAPIconfig = {
    url: `${BASE_API_URL}/mobile/48/statistics-by-group`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json',
    },
    data: stat_by_group_outgoing_data,
  };

  const getStatisticsByCategory = async () => {
    try {
      return await axios(ninthAPIconfig)
        .then(response => {
          console.log('STATISTICS BY <<< GROUP >>> DATA ===>>>');
          console.log(response.data);
          setHotelStatisticsByCategory(response.data.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #10 API => GET Properties Comparison Data

  const [propertiesComparisonData, setPropertiesComparisonData] =
    useState(null);

  const comparison_outgoing_data = {
    year: '2021',
    month: '11',
  };
  const tenthAPIconfig = {
    url: `${BASE_API_URL}/mobile/compare-properties`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json',
    },
    data: comparison_outgoing_data,
  };

  const getPropertiesComparisonData = async () => {
    try {
      return await axios(tenthAPIconfig)
        .then(response => {
          console.log('PROPERTIES COMPARISON DATA ===>>>');
          console.log(response.data);
          setPropertiesComparisonData(response.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #11 API => GET Property Sources Data

  const [sourcesData, setSourcesData] = useState(null);

  const eleventhAPIconfig = {
    url: `${BASE_API_URL}/mobile/48/sources`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json',
    },
  };

  const getSourcesData = async () => {
    try {
      return await axios(eleventhAPIconfig)
        .then(response => {
          console.log('SOURCES DATA ===>>>');
          console.log(response.data);
          setSourcesData(response.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  return {
    // #1
    handleIOSAuthentication,
    // #2
    handleIOSAuthorization,
    // #3
    getAllHotelPropertiesData,
    // #4
    getSingleHotelData,
    // #5
    getDashboardData,
    // #6
    getHotelReservationsData,
    // #7
    getHotelSingleReservationData,
    // #8
    getStatisticsByYear,
    // #9
    getStatisticsByCategory,
    // #10
    getPropertiesComparisonData,
    // #11
    getSourcesData,
  };
};

export default useApi;
