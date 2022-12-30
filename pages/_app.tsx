import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Header from '../components/common/Header';
import { ContentLayout, GrayLayout } from '../styles/style';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const CloseModal = () => {
      setIsModalOpen(!isModalOpen);
   };
   const OpenModal = () => {
      setIsModalOpen(!isModalOpen);
   };
   useEffect(() => {
      typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
   }, []);

   return (
      <RecoilRoot>
         <GrayLayout>
            <ContentLayout>
               <Header OpenModal={OpenModal} />
               <Component {...pageProps} />
            </ContentLayout>
         </GrayLayout>
      </RecoilRoot>
   );
}

export default MyApp;
