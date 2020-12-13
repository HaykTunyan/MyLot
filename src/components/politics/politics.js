import React, { useState, useEffect } from 'react';
import { privacy_req } from '../../api/privacy/privacy.api';
import './politics.scss';
import { useIntl } from 'react-intl';

const Politics = () => {

  // const [privacyPolicy, setPrivacyPolicy] = useState('');
  // useEffect(() => {
  //   const privacy = async () => {
  //     try {
  //       const authForm = await privacy_req();

  //       setPrivacyPolicy(authForm);
  //     } catch (e) {
  //       console.log('e', e.response);
  //     }
  //   };
  //   privacy();
  // }, []);

  const intl = useIntl();


  return (
    <div className="politics">
      <div className="container">
        <h3 className="text-center Monsterrat_Medium font-22 font-weight-bold">
            {intl.messages.privacy_policy}
        </h3>
        <span>
          'MyLot'' ՍՊՆ-ն պատասխանատվություն է կրում քարտապաններին, քարտին և
          գործարքին վերաբերվող այլ տվյալների պահպանման համար: Պատասխանատու է`
          ինչպես նաև, լոտի առաքման ընթացքում լոտի ապահով փոխանցման համար: Եթե
          գնորդին անհրաժեշտ է, ապա մեր ընկերությունը կարող է քարտով կատարվող
          գործառնության իրականացումը հավաստող փաստաթղթի պատճեն տրամադրել:
          Վճարային քարտի տվյալները չեն մուտքագրվում մեր ընկերության էջում:
          Վճարման իրականացման ժամանակ, քարտի տվյալների մուտքագրման փուլում
          օգտատերը մուտքագրումը կատարում է ''ipay Arca'' համակարգում:
        </span>
      </div>
    </div>
  );
};

export default Politics;
