import styled from 'styled-components';

const locationDummy = [
  { id: 1, location1: '전국', location2: ['전체'] },
  {
    id: 2,
    location1: '서울',
    location2: [
      '전체',
      '강남구',
      '강동구',
      '강북구',
      '강서구',
      '관악구',
      '광진구',
      '구로구',
      '금천구',
      '노원구',
      '도봉구',
      '동대문구',
      '동작구',
      '마포구',
      '서대문구',
      '서초구',
      '성동구',
      '성북구',
      '송파구',
      '양천구',
      '영등포구',
      '용산구',
      '은평구',
      '종로구',
      '중구',
      '중랑구',
    ],
  },
  {
    id: 3,
    location1: '경기',
    location2: [
      '전체',
      '고양시',
      '과천시',
      '광명시',
      '광주시',
      '구리시',
      '군포시',
      '김포시',
      '남양주시',
      '동두천시',
      '부천시',
      '성남시',
      '수원시',
      '시흥시',
      '안산시',
      '안성시',
      '안양시',
      '양주시',
      '오산시',
      '용인시',
      '의왕시',
      '의정부시',
      '이천시',
      '파주시',
      '평택시',
      '포천시',
      '하남시',
      '화성시',
      '가평군',
      '양평군',
      '여주군',
      '연천군',
    ],
  },
  {
    id: 4,
    location1: '인천',
    location2: [
      '전체',
      '계양구',
      '남구',
      '남동구',
      '동구',
      '부평구',
      '서구',
      '연수구',
      '중구',
      '강화군',
      '옹진군',
    ],
  },
  {
    id: 5,
    location1: '부산',
    location2: [
      '전체',
      '강서구',
      '금정구',
      '남구',
      '동구',
      '동래구',
      '부산진구',
      '북구',
      '사상구',
      '사하구',
      '서구',
      '수영구',
      '연제구',
      '영도구',
      '중구',
      '해운대구',
      '기장군',
    ],
  },
  {
    id: 6,
    location1: '대구',
    location2: [
      '전체',
      '남구',
      '달서구',
      '동구',
      '북구',
      '서구',
      '수성구',
      '중구',
      '달성군',
    ],
  },
  {
    id: 7,
    location1: '광주',
    location2: ['전체', '광산구', '남구', '동구', '북구', '서구'],
  },
  {
    id: 8,
    location1: '대전',
    location2: ['전체', '대덕구', '동구', '서구', '유성구', '중구'],
  },
  {
    id: 9,
    location1: '울산',
    location2: ['전체', '남구', '동구', '북구', '중구', '울주군'],
  },
  {
    id: 10,
    location1: '강원',
    location2: [
      '전체',
      '강릉시',
      '동해시',
      '삼척시',
      '속초시',
      '원주시',
      '춘천시',
      '태백시',
      '고성군',
      '양구군',
      '양양군',
      '영월군',
      '인제군',
      '정선군',
      '철원군',
      '평창군',
      '홍천군',
      '화천군',
      '횡성군',
    ],
  },
  {
    id: 11,
    location1: '충북',
    location2: [
      '전체',
      '제천시',
      '청주시',
      '충주시',
      '괴산군',
      '단양군',
      '보은군',
      '영동군',
      '옥천군',
      '음성군',
      '증평군',
      '진천군',
      '청원군',
    ],
  },
  {
    id: 12,
    location1: '충남',
    location2: [
      '전체',
      '공주시',
      '논산시',
      '보령시',
      '서산시',
      '아산시',
      '천안시',
      '금산군',
      '당진군',
      '부여군',
      '서천군',
      '연기군',
      '예산군',
      '청양군',
      '태안군',
      '홍성군',
    ],
  },
  {
    id: 13,
    location1: '전북',
    location2: [
      '전체',
      '군산시',
      '김제시',
      '남원시',
      '익산시',
      '전주시',
      '정읍시',
      '고창군',
      '무주군',
      '부안군',
      '순창군',
      '완주군',
      '임실군',
      '장수군',
      '진안군',
    ],
  },
  {
    id: 14,
    location1: '전남',
    location2: [
      '전체',
      '광양시',
      '나주시',
      '목포시',
      '순천시',
      '여수시',
      '강진군',
      '고흥군',
      '곡성군',
      '구례군',
      '담양군',
      '무안군',
      '보성군',
      '신안군',
      '영광군',
      '영암군',
      '완도군',
      '장성군',
      '장흥군',
      '진도군',
      '함평군',
      '해남군',
      '화순군',
    ],
  },
  {
    id: 15,
    location1: '경북',
    location2: [
      '전체',
      '경산시',
      '경주시',
      '구미시',
      '김천시',
      '문경시',
      '상주시',
      '안동시',
      '영주시',
      '영천시',
      '포항시',
      '고령군',
      '군위군',
      '봉화군',
      '성주군',
      '영덕군',
      '영양군',
      '예천군',
      '울릉군',
      '울진군',
      '의성군',
      '청도군',
      '청송군',
      '칠곡군',
    ],
  },
  {
    id: 16,
    location1: '경남',
    location2: [
      '전체',
      '거제시',
      '김해시',
      '마산시',
      '밀양시',
      '사천시',
      '양산시',
      '진주시',
      '진해시',
      '창원시',
      '통영시',
      '거창군',
      '고성군',
      '남해군',
      '산청군',
      '의령군',
      '창녕군',
      '하동군',
      '함안군',
      '함양군',
      '합천군',
    ],
  },
  {
    id: 17,
    location1: '제주',
    location2: ['전체', '서귀포시', '제주시', '남제주군', '북제주군'],
  },
];

interface LocationProps {
  location1: string;
  location2: string[];
  onClickLocation1: any;
  onClickLocation2: any;
}

const Location = ({
  location1,
  location2,
  onClickLocation1,
  onClickLocation2,
}: LocationProps) => {
  return (
    <>
      <LocationTitle>
        <div>지역</div>
        <div>상세지역</div>
      </LocationTitle>
      <LocationWrapper>
        <LocationStyle>
          {locationDummy.map((el) => (
            <li
              key={el.location1}
              onClick={() => {
                onClickLocation1(el.location1);
              }}
              className={el.location1 === location1 ? 'selected1' : ''}
            >
              {el.location1}
            </li>
          ))}
        </LocationStyle>
        <LocationStyle>
          {location1 ? (
            locationDummy.map((el) => {
              if (el.location1 === location1) {
                return el.location2.map((el, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      onClickLocation2(el);
                    }}
                    className={location2.includes(el) ? 'selected2' : ''}
                  >
                    {el}
                  </li>
                ));
              }
            })
          ) : (
            <span>지역을 선택하면 상세 지역을 확인할 수 있습니다.</span>
          )}
        </LocationStyle>
      </LocationWrapper>
    </>
  );
};

export default Location;

const LocationWrapper = styled.div`
  display: flex;
`;

const LocationTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
  > div {
    width: 50%;
    color: #9f9f9f;
  }
`;

const LocationStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 300px;
  overflow-y: scroll;

  li {
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  li.selected1 {
    background-color: #d4e6ff;
    color: #6a6ff2;
  }
  li.selected2 {
    color: #6a6ff2;
  }

  > span {
    padding: 10px;
    color: #9f9f9f;
    font-size: 14px;
  }

  /* scroll */
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dfdfdf;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
