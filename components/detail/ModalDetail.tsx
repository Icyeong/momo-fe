import React from 'react';
import styled from 'styled-components';

const ModalDetail = () => {
   return (
      <>
         <TitleWrap>
            <Title>창업은 아무나 하나?!</Title>
            <MbrPrtcp>단체 만남 1/7 (남은 자리 : 6명)</MbrPrtcp>
         </TitleWrap>
         <SelectSection>
            <SubTitle>시간선택</SubTitle>
            <TimeTable>
               <TimeList>
                  <span>10:00</span>
               </TimeList>
               <TimeList>
                  <span>11:00</span>
               </TimeList>
               <TimeList>
                  <span>12:00</span>
               </TimeList>
               <TimeList>
                  <span>13:00</span>
               </TimeList>
            </TimeTable>
         </SelectSection>
      </>
   );
};

export default ModalDetail;
const TitleWrap = styled.div`
   padding-bottom: 10px;
   border-bottom: 1px solid #cecece;
`;
const Title = styled.p`
   font-size: 30px;
   font-weight: 700px;
   line-height: 1.5;
`;
const MbrPrtcp = styled.p`
   font-size: 16px;
   line-height: 1.5;
   color: #6f6f6f;
`;
const SelectSection = styled.div``;
const SubTitle = styled.p`
   font-size: 16px;
   font-weight: 700;
`;

const TimeTable = styled.div``;
const TimeList = styled.div``;
