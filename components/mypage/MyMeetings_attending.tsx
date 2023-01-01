import { MeetingWrapper } from './mypage.style';
import MyMeetingCard from './MyMeetingCard';
import { useRecoilValue } from 'recoil';
import { attendingMeeting_closed, attendingMeeting_opened } from '../../atoms/mypage/selector';

const MyMeetings_attending = () => {
   const attending_openedMeetings = useRecoilValue(attendingMeeting_opened);
   const attending_closedMeetings = useRecoilValue(attendingMeeting_closed);

   return (
      <>
         {/* 참여 예정 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  참여 예정 모임<span>{attending_openedMeetings.length}개</span>
               </p>
            </div>
            {attending_openedMeetings.length > 0 ? attending_openedMeetings.map((meeting: any) => <MyMeetingCard data={meeting} key={meeting.meetingId} />):
               <div className="card-basic empty">
               <button>모임 찾아보기</button>
               </div>
            }
         </MeetingWrapper>

         {/* 모집 종료된 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  모집 종료된 모임<span>{attending_closedMeetings.length}개</span>
               </p>
            </div>
            {attending_closedMeetings.length > 0 ? attending_closedMeetings.map((meeting: any) => <MyMeetingCard data={meeting} key={meeting.meetingId} />):
               <div className="card-basic empty">
               <button>모집 종료된 모임이 없습니다.</button>
               </div>
            }
         </MeetingWrapper>
      </>
   );
};


export default MyMeetings_attending;