import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Button = (props: any) => {
   const [isActive, setActive] = useState(false);

   return (
      <Basic onClick={() => setActive(!isActive)}>
         {props.text}
         {props.icon && <FontAwesomeIcon className={isActive ? 'icon active' : 'icon'} icon={faChevronDown} />}
      </Basic>
   );
};

const Basic = styled.button`
   background-color: white;
   color: #3f3f3f;
   border: 1px solid #dddddd;
   height: 50px;
   width: 100%;
   border-radius: 5px;
   font-size: 16px;
   font-weight: 600;
   .icon {
      width: 13px;
      margin-left: 5px;
      transition: 0.3s;
   }
   .icon.active {
      transform: rotateZ(-180deg);
   }

   &:hover {
      color: #444bff;
   }
`;

export const SquareButton = styled(Basic)`
   height: 50px !important;
   background-color: #6a6ff2 !important;
   color: white !important;
   border-radius: 8px !important;
   &:hover {
      background-color: #444bff !important;
      color: white !important;
      border-radius: 8px !important;
   }
`;
