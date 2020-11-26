/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100ve;
`;

export default function App() {
  const [takeTheme, settakeTheme] = useState('asdasd');
  const [takingTime, settakingTime] = useState(0);

  const refTakingTime = useRef(takingTime);
  useEffect(() => {
    refTakingTime.current = takingTime;
  }, [takingTime]);

  useEffect(() => {
    setInterval(() => {
      settakingTime(refTakingTime.current+1)
    }, 1000);
  }, []);

  return (
    <AppWrapper>
      <div style={{position: "absolute", top: 20, right: 20}}>
        <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection: 'row'}}>
          <p style={{color: 'white', fontSize: 36, letterSpacing: 2, fontWeight: '900', fontFamily: 'M PLUS Rounded 1c', margin: 0, textShadow: '2px 2px 0px #0257fd', '-webkit-text-stroke-width': 2, '-webkit-text-stroke-color': '#a5bff2'}}>
              💬現在のトークテーマ
            </p>
        </div>
        <div style={{background: 'white', width: 420, height: 'auto', boxShadow: '2px 2px 10px rgba(0,0,0,.25)', borderRadius: 12, padding: '16px 20px', border: '6px solid #a5bff2'}}>
          <p style={{color: 'black', fontSize: 28, fontWeight: '900', fontFamily: 'M PLUS Rounded 1c', margin: 0}}>
            {takeTheme}
          </p>
          <p style={{color: 'black', fontSize: 15, fontWeight: '700', fontFamily: 'M PLUS Rounded 1c', marginTop: 4, marginBottom: 2}}>
            トーク開始から{takingTime}秒経過
          </p>
        </div>
      </div>
      <div style={{position: "absolute", bottom: 12, left: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 0 50px #000', borderRadius: 8, padding: '16px 24px', background: 'rgba(155,155,155, 0.2)'}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingBottom: 8, marginBottom: 12, borderBottom: '8px dotted #fff'}}>
          <img src="https://207-inc.com/img/logo.png" style={{width: 120, marginBottom: 2}} alt="" />
            <p style={{color: '#000000', fontSize: 36, fontWeight: '700', fontFamily: 'M PLUS Rounded 1c', margin: 0, textShadow: '2px 2px 0px rgba(255,255,255,.9), -1px -1px 0px rgba(255,255,255,.9)'}}>
            鍋会Live
          </p>
        </div>

        <p style={{color: '#fff', letterSpacing: 2, fontSize: 22, marginTop: 6, fontWeight: '700', fontFamily: 'M PLUS Rounded 1c', margin: 0, textShadow: '2px 2px 20px #0257fd'}}>
          会社詳細は概要欄にて！
        </p>
      </div>

      

    </AppWrapper>
  );
}
