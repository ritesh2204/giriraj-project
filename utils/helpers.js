import axios from 'axios';
import { setCookie, parseCookies } from 'nookies';


// To retrieve the user's name and role from a cookie
const cookies = parseCookies();
const viewProfileURL = cookies.userProfileUrl;

console.log("View profile ==>",viewProfileURL)

export const BASE_URL = 'http://216.48.189.160:1113';

export const userSignIn = async (name, password) => {
            var data;
            const options = {
              method: 'POST',
              url: `${BASE_URL}/login`,
              headers: {
                'Content-Type': 'application/json',
                'xtoken': '11111',
              },
              data: {
                fullName: name,
                password: password,
              },
            };
            await axios
              .request(options)
              .then(function (response) {
                if (response.status == 200) {
                  data = response.data;
                  alert(`${response.data.message}`);
                }
              })
              .catch(function (error) {
                if (error) {
                  alert(JSON.stringify(error));
                }
              });
            console.log('userSignIn response ==>', data);
            return data;
          };

          export const getUserProfile = async () => {
            var data;
            const options = {
              method: 'GET',
              url: `${BASE_URL}${viewProfileURL}`,
              headers: {
                'Content-Type': 'application/json',
                'xtoken': '11111',
              },
            };
            await axios
              .request(options)
              .then(function (response) {
                if (response.status == 200) {
                  data = response.data;
                  // alert(`${response.data.message}`);
                }
              })
              .catch(function (error) {
                if (error) {
                  // alert(JSON.stringify(error));
                  console.log('getuserprofileError ==>', error)
                }
              });
            console.log('getUserProfile response ==>', data);
            return data;
          };