import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import Profile from '../../components/mypage/Profile';
import Point from '../../components/mypage/Point';
import { useSetRecoilState } from 'recoil';
import { mypageAttendingMeetings, mypageHostMeetings, myProfile } from '../../atoms/mypage/atoms';
import { useEffect } from 'react';
import axios from 'axios';
import MyMeetings_mypage from '../../components/mypage/MyMeetings_mypage';
import { api } from '../../util/token';

const Mypage = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const setMyInfo = useSetRecoilState(myProfile);

   const setHostMeetings = useSetRecoilState(mypageHostMeetings);
   const setAttendingMeetings = useSetRecoilState(mypageAttendingMeetings);

   useEffect(() => {
      console.log(axios.defaults.headers.common.Authorization);
      // 통신
      axios
         .all([
            api.get(API_URI + '/mypage/profile', {
               // headers: {
               //    Authorization: localStorage.getItem('AccessToken')
               // }
            }),
            api.get(API_URI + '/mypage/meetings/hosts?page=1&size=20', {
               // headers: {
               //    Authorization: localStorage.getItem('AccessToken')
               // }
            }),
            api.get(API_URI + '/mypage/meetings/participants?page=1&size=20', {
               // headers: {
               //    Authorization: localStorage.getItem('AccessToken')
               // }
            })
         ])
         .then(
            axios.spread((res1, res2, res3) => {
               setMyInfo(res1.data);
               setHostMeetings(res2.data);
               setAttendingMeetings(res3.data);
               console.log(res3);
            })
         )
         .catch(err => console.log(err));
   }, []);

   return (
      <>
         <MyCategory />
         <CenterSection>
            <Profile />
            <Point />
            <MyMeetings_mypage />
         </CenterSection>
      </>
   );
};

export default Mypage;
