import styled from 'styled-components';
import { useEffect, useState } from 'react';

// date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Title } from '../../components/common/Title';
import { CenterSection } from '../../styles/style';
import { Button } from '../../stories/Button';
import Categorys from '../../components/create/Categorys';
import Tags from '../../components/create/Tags';
import OneDate from '../../components/create/Date/OneDate';
import PeriodDate from '../../components/create/Date/PeriodDate';
import DateRadio from '../../components/create/Date/DateRadio';
import FreeDate from '../../components/create/Date/FreeDate';
import Time from '../../components/create/Time';
import Price from '../../components/create/Price';
import LiTitle from '../../components/create/LiTitle';

export interface MeetingType {
  category: string;
  title: string;
  content: string;
  tags: string[];
  location: { address1: string; address2: string }[];
  dateTime: {
    datepolicy: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    dates: string[];
  };
  priceInfo: {
    pricePolicy: string;
    price: number;
  };
  notice: string;
}

const Create = () => {
  const [category, setCategory] = useState('라이프스타일');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [pricePolicy, setPricePolicy] = useState('');
  const [hourPrice, setHourPrice] = useState(0);
  const [onePrice, setOnePrice] = useState(0);
  const [notice, setNotice] = useState('');

  const [datePolicy, setDatePolicy] = useState('ONE_DAY');
  const [date, setDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(startDate);
  const [dayWeeks, setDayWeeks] = useState<number[]>([]);
  const [dates, setDates] = useState<Date[]>([]);
  const [startTime, setStartTime] = useState<any>(
    new Date().setHours(0, 0, 0, 0),
  );
  const [endTime, setEndTime] = useState<any>(new Date().setHours(0, 0, 0, 0));

  // console 확인용
  useEffect(() => {
    console.log('카테고리', category);
    console.log('타이틀', title);
    console.log('내용', content);
    console.log('태그', tags);
    console.log('주소', address1, address2);
    console.log('일정 설정', datePolicy);
    console.log('하루 일정', date);
    console.log('정기 일정', startDate, endDate);
    console.log('요일', dayWeeks);
    console.log('자유 일정', dates);
    console.log('시간', startTime, endTime);
    console.log('가격 설정', pricePolicy);
    console.log('가격', hourPrice);
    console.log('가격', onePrice);
    console.log('전달사항', notice);
  }, [
    category,
    title,
    content,
    tags,
    address1,
    address2,
    datePolicy,
    date,
    startDate,
    endDate,
    dayWeeks,
    dates,
    startTime,
    endTime,
    pricePolicy,
    hourPrice,
    onePrice,
    notice,
  ]);

  const onClickTag = (value: string) => {
    if (tags.includes(value)) {
      setTags([...tags.filter((tag) => tag !== value)]);
    } else {
      setTags([...tags, value]);
    }
  };

  const onCheckDayWeeks = (checkedDayWeeks: number) => {
    if (dayWeeks.includes(checkedDayWeeks)) {
      setDayWeeks([
        ...dayWeeks.filter((dayWeek) => dayWeek !== checkedDayWeeks),
      ]);
    } else {
      setDayWeeks([...dayWeeks, checkedDayWeeks]);
    }
  };

  return (
    <div>
      <CenterSection>
        <Title label="모임 만들기" />
        <SubTitle>지금 올라오는 모임</SubTitle>
        <Ul>
          <Li>
            <LiTitle main="카테고리" sub="카테고리를 선택해주세요." />
            <Categorys category={category} setCategory={setCategory} />
          </Li>
          <Li>
            <LiTitle main="제목" />
            <Input
              placeholder="모임 제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Li>
          <Li>
            <LiTitle main="내용" />
            <TextArea
              placeholder="모임 내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Li>
          <Li>
            <LiTitle main="태그" sub="1개 이상 선택 해주세요." />
            <Tags tags={tags} onClickTag={onClickTag} />
          </Li>
          <Li>
            <LiTitle main="위치" sub="최대 3개까지 입력이 가능 합니다." />
            <Input
              placeholder="임시 테스트용"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </Li>
          <Li>
            <LiTitle
              main="추가 주소 입력"
              sub="개인 정보 보호를 위해 정확한 주소를 입력하지 마세요."
            />
            <Input
              placeholder="예시) 스타벅스 근처 협의"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </Li>
          <Li>
            <LiTitle main="날짜 설정" />
            <DateRadio setDatePolicy={setDatePolicy} />
            {/* {datePolicy === 'ONE_DAY' && (
              <OneDate date={date} setDate={setDate} />
            )}
            {datePolicy === 'PERIOD' && (
              <PeriodDate
                startDate={startDate}
                endDate={startDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                onCheckDayWeeks={onCheckDayWeeks}
              />
            )}
            {datePolicy === 'FREE' && (
              <FreeDate dates={dates} setDates={setDates} />
            )} */}
          </Li>
          <Li>
            <LiTitle main="시간 설정" />
            {/* <Time
              startTime={startTime}
              endTime={endTime}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
            /> */}
          </Li>
          <Li>
            <LiTitle main="가격 설정" />
            <Price
              setPricePolicy={setPricePolicy}
              hourPrice={hourPrice}
              onePrice={onePrice}
              setHourPrice={setHourPrice}
              setOnePrice={setOnePrice}
            />
          </Li>
          <Li>
            <LiTitle main="전달사항" />
            <Input
              placeholder="모임 신청 전 전달 해야 할 사항이 있다면 적어 주세요."
              value={notice}
              onChange={(e) => {
                setNotice(e.target.value);
              }}
            />
          </Li>
          <Button disabled size="bigBold" label="작성완료" />
        </Ul>
      </CenterSection>
    </div>
  );
};

export default Create;

const SubTitle = styled.p`
  margin: 25px 0 20px 0;
  font-size: 18px;
  font-weight: 700;
`;

const Ul = styled.ul`
  background-color: white;
  border-radius: 15px;
  box-shadow: 1px 1px 10px 1px #dfdfdf;
  padding: 50px 60px;
`;

const Li = styled.li`
  margin-bottom: 35px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  .react-datepicker-wrapper {
    width: 192px;
  }
`;

export const RadioButtons = styled.div`
  margin-bottom: 15px;
  > label:not(:last-of-type) {
    margin-right: 25px;
  }
  input {
    margin-right: 5px;
  }
`;

export const Wave = styled.span`
  margin: 0 15px;
`;

export const CustomDatePicker = styled(DatePicker)`
  background-color: #f5f5f5;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Input = styled.input`
  background-color: #f5f5f5;
  border-radius: 15px;
  width: 100%;
  padding: 20px;
  border: none;
  outline: none;
  font-family: inherit;
`;

const TextArea = styled.textarea`
  background-color: #f5f5f5;
  border-radius: 15px;
  width: 100%;
  height: 250px;
  padding: 20px;
  border: none;
  outline: none;
  resize: none;
  font-family: inherit;
`;
