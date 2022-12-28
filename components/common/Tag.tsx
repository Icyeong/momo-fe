import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { mainTagList } from '../../atoms';

interface TagProps {
   label: string;
   onClick?: (e: React.MouseEvent) => void;
}

export const Tag = ({ label, ...props }: TagProps) => {
   const [tags, setTags] = useRecoilState(mainTagList);

   const Toggle = () => {
      setActive(!active);

      if (tags.includes(label)) {
         const newTag = tags.filter(el => el !== label);
         setTags(newTag);
      } else {
         setTags(tags.concat(label));
      }
   };

   const isActive = () => {
      return tags.includes(label);
   };

   const [active, setActive] = useState(isActive);

   return (
      <TagCompo onClick={Toggle} className={active ? 'active' : ''} {...props}>
         {label}
      </TagCompo>
   );
};

const TagCompo = styled.li`
   display: inline-block;
   font-size: 16px;
   padding: 5px 10px;
   border-radius: 30px;
   margin: 15px 10px 15px 0;
   cursor: pointer;
   transition: background-color 0.3s;
   &.active {
      background-color: #d4e6ff;
      font-weight: 700;
      color: #6a6ff2;
   }
`;
