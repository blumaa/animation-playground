import React, { useRef, useEffect, useCallback } from "react";
import { gsap, SteppedEase, Power3, Bounce } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { useMappedState } from "redux-react-hook";
import { Draggable } from "gsap/all";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

const AaronBlumTitle = () => {
  // const mapState = useCallback((state) => {
  //   return {
  //     theme: state.themeState,
  //   };
  // }, []);

  // const { theme } = useMappedState(mapState);

  let topmoon = useRef(null);

  let path1 = useRef(null);
  let path2 = useRef(null);
  let path3 = useRef(null);
  let path4 = useRef(null);
  let path5 = useRef(null);
  let path6 = useRef(null);
  let path7 = useRef(null);
  let path8 = useRef(null);
  let path9 = useRef(null);

  let pathsolid1 = useRef(null);
  let pathsolid2 = useRef(null);
  let pathsolid3 = useRef(null);
  let pathsolid4 = useRef(null);
  let pathsolid5 = useRef(null);
  let pathsolid6 = useRef(null);
  let pathsolid7 = useRef(null);
  let pathsolid8 = useRef(null);
  let pathsolid9 = useRef(null);

  let underline1 = useRef(null);
  let underline2 = useRef(null);

  let solidunderline2 = useRef(null);
  let solidunderline1 = useRef(null);

  let splat1 = useRef(null);
  let splat2 = useRef(null);
  let splat3 = useRef(null);
  let splat4 = useRef(null);
  let splat5 = useRef(null);
  let splat6 = useRef(null);
  let splat7 = useRef(null);
  let splat8 = useRef(null);
  let splat9 = useRef(null);
  let splat10 = useRef(null);
  let splat11 = useRef(null);
  let splat12 = useRef(null);
  let splat13 = useRef(null);
  let splat14 = useRef(null);
  let splat15 = useRef(null);

  let developerR = useRef(null);
  let developerExtraR1 = useRef(null);
  let developerExtraR2 = useRef(null);
  let developerExtraR3 = useRef(null);
  let developerExtraR4 = useRef(null);
  let developerE1 = useRef(null);
  let developerP = useRef(null);
  let developerO = useRef(null);
  let developerL = useRef(null);
  let developerE2 = useRef(null);
  let developerV = useRef(null);
  let developerE3 = useRef(null);
  let developerD = useRef(null);
  let developerExtraD = useRef(null);

  let desarrolladorD1 = useRef(null);
  let desarrolladorE = useRef(null);
  let desarrolladorS = useRef(null);
  let desarrolladorA1 = useRef(null);
  let desarrolladorR1 = useRef(null);
  let desarrolladorR2 = useRef(null);
  let desarrolladorO1 = useRef(null);
  let desarrolladorL1 = useRef(null);
  let desarrolladorL2 = useRef(null);
  let desarrolladorA2 = useRef(null);
  let desarrolladorD2 = useRef(null);
  let desarrolladorO2 = useRef(null);
  let desarrolladorR3 = useRef(null);
  
  let entwicklerE1 = useRef(null);
  let entwicklerN = useRef(null);
  let entwicklerT = useRef(null);
  let entwicklerW = useRef(null);
  let entwicklerI = useRef(null);
  let entwicklerK = useRef(null);
  let entwicklerC = useRef(null);
  let entwicklerL = useRef(null);
  let entwicklerE2 = useRef(null);
  let entwicklerR = useRef(null);
  
  const developerWordCycle = () => {
    
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let tl = gsap.timeline({
      repeat: -1,
      reversed: false,
      yoyo: false,
      repeatDelay: getRandomInt(3,10),
    });
    
    const morphTime = 0.08;
    
    tl.set("#developer", {visibility:"visible"}).to(
      developerD.current,
      {
        duration: morphTime,
        morphSVG: desarrolladorD1.current,
      },
      1
      )
      .set(developerExtraD.current, { visibility: "hidden" })
      .to(developerE1.current, {
        duration: morphTime,
        morphSVG: desarrolladorE.current,
      })
      .to(developerV.current, {
        duration: morphTime,
        morphSVG: desarrolladorS.current,
      })
      .to(developerE2.current, {
        duration: morphTime,
        morphSVG: desarrolladorA1.current,
      })
      .to(developerL.current, {
        duration: morphTime,
        morphSVG: desarrolladorR1.current,
      })
      .to(developerO.current, {
        duration: morphTime,
        morphSVG: desarrolladorR2.current,
      })
      .to(developerP.current, {
        duration: morphTime,
        morphSVG: desarrolladorO1.current,
      })
      .to(developerE3.current, {
        duration: morphTime,
        morphSVG: desarrolladorL1.current,
      })
      .to(developerR.current, {
        duration: morphTime,
        morphSVG: desarrolladorL2.current,
      })
      .set(developerExtraR1.current, { visibility: "visible" })
      .to(developerExtraR1.current, {
        duration: morphTime,
        morphSVG: desarrolladorA2.current,
      })
      .set(developerExtraR2.current, { visibility: "visible" })
      .to(developerExtraR2.current, {
        duration: morphTime,
        morphSVG: desarrolladorD2.current,
      })
      .set(developerExtraR3.current, { visibility: "visible" })
      .to(developerExtraR3.current, {
        duration: morphTime,
        morphSVG: desarrolladorO2.current,
      })
      .set(developerExtraR4.current, { visibility: "visible" })
      .to(developerExtraR4.current, {
        duration: morphTime,
        morphSVG: desarrolladorR3.current,
      });

    tl.to(
      developerExtraR4.current,
      {
        duration: morphTime,
        morphSVG: entwicklerR.current,
      },
      "+=1"
    )
      .set(developerExtraR4.current, { visibility: "hidden" })
      .to(developerExtraR2.current, {
        duration: morphTime,
        morphSVG: entwicklerR.current,
      })
      .set(developerExtraR3.current, { visibility: "hidden" })
      .to(developerExtraR1.current, {
        duration: morphTime,
        morphSVG: entwicklerR.current,
      })
      .set(developerExtraR2.current, { visibility: "hidden" })
      .to(developerR.current, {
        duration: morphTime,
        morphSVG: entwicklerR.current,
      })
      .to(developerExtraR1.current, {
        duration: morphTime,
        morphSVG: entwicklerE2.current,
      })
      .to(developerE3.current, {
        duration: morphTime,
        morphSVG: entwicklerL.current,
      })
      .to(developerP.current, {
        duration: morphTime,
        morphSVG: entwicklerK.current,
      })
      .to(developerO.current, {
        duration: morphTime,
        morphSVG: entwicklerC.current,
      })
      .to(developerL.current, {
        duration: morphTime,
        morphSVG: entwicklerI.current,
      })
      .to(developerE2.current, {
        duration: morphTime,
        morphSVG: entwicklerW.current,
      })
      .to(developerV.current, {
        duration: morphTime,
        morphSVG: entwicklerT.current,
      })
      .to(developerE1.current, {
        duration: morphTime,
        morphSVG: entwicklerN.current,
      })
      .to(developerD.current, {
        duration: morphTime,
        morphSVG: entwicklerE1.current,
      });

    tl.set(
      developerExtraR3.current,
      {
        visibility: "hidden",
      },
      "+=1"
    )
      .to(developerD.current, morphTime, { morphSVG: developerD.current })
      .to(developerE1.current, morphTime, { morphSVG: developerE1.current })
      .to(developerV.current, morphTime, { morphSVG: developerV.current })
      .to(developerE2.current, morphTime, { morphSVG: developerE2.current })
      .to(developerL.current, morphTime, { morphSVG: developerL.current })
      .to(developerO.current, morphTime, { morphSVG: developerO.current })
      .to(developerP.current, morphTime, { morphSVG: developerP.current })
      .to(developerE3.current, morphTime, { morphSVG: developerE3.current })
      .to(developerR.current, morphTime, { morphSVG: developerR.current });

    return tl;
  };

  useEffect(() => {

    // Draggable.create("#topmoon");

    const master = gsap.timeline({
      reversed: false,
    });

    const twinkleSplatter = () => {
      let tl = gsap.timeline({
        reversed: false,
      });
      console.log([...Array(15).keys()]);

      const splatArray = (num) => {
        let sArr = [];
        for (let index = 0; index < num; index++) {
          sArr.push("splat" + [index + 1] + ".current");
        }
        return sArr;
      };

      console.log(splatArray(15));

      tl.staggerTo(
        [
          splat1.current,
          splat2.current,
          splat3.current,
          splat4.current,
          splat5.current,
          splat6.current,
          splat7.current,
          splat8.current,
          splat9.current,
          splat10.current,
          splat11.current,
          splat12.current,
          splat13.current,
          splat14.current,
          splat15.current,
        ],
        0.1,
        {
          opacity: 0.3,
          ease: SteppedEase.config(1),
          repeat: -1,
          repeatDelay: 0.5,
          delay: -1,
        },
        0.5
      );

      return tl;
    };

    const drawLetters = () => {
      let tl = gsap.timeline({
        reversed: false,
      });

      tl.set("#aaronBlumOutline", {visibility: "visible"})

      tl.staggerFromTo(
        [
          path1.current,
          path2.current,
          path3.current,
          path4.current,
          path5.current,
          path6.current,
          path7.current,
          path8.current,
          path9.current,
        ],
        3,
        { drawSVG: "50% 50%" },
        { drawSVG: "0% 100%", ease: Bounce.easeInOut },
        .1
      ).to([
        path1.current,
        path2.current,
        path3.current,
        path4.current,
        path5.current,
        path6.current,
        path7.current,
        path8.current,
        path9.current,
      ], 1, {opacity: 0});
      tl.set("#aaronBlumSolid", {visibility: 'visible'}, "-=1")
      tl.fromTo([
        pathsolid1.current,
        pathsolid2.current,
        pathsolid3.current,
        pathsolid4.current,
        pathsolid5.current,
        pathsolid6.current,
        pathsolid7.current,
        pathsolid8.current,
        pathsolid9.current,
      ], 3, {opacity: 0}, {opacity: 1}, "-=1")

      return tl;
    };

    const drawUnderline = () => {
      let tl = gsap.timeline({
        reversed: false,
      });

      tl.set("#underline", {visibility: 'visible'})
      tl.staggerFromTo(
          [underline1.current, underline2.current],
        .1,
          { drawSVG: 0 },
          { drawSVG: true },
          .1
        )
        // tl.from(underline1.current, {x: 200})
        tl.set("#solidunderline", {visibility: 'visible'}).fromTo(solidunderline1.current, 1, {opacity: 0}, {opacity: 1})
        // tl.to(underline1.current, {duration: 2, morphSVG: solidunderline1.current });

      return tl;
    };

    master
      .add(drawLetters)
      .addLabel("underline")
      .add(drawUnderline, "+=3")
      .add(developerWordCycle);
  }, []);
  
  return (

    <svg
      id="baselayer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="60 0 1291 592"
      className="aaron-title"
    >
      <title>portfolioanimation</title>
      {/* <g>
        <path
          fill="#252523"
          d="M1290.5,76.16 C1290.5,248.16 1290.5,420.16 1290.5,592.16 860.5,592.16 430.5,592.16 0.5,592.16 0.5,420.16 0.5,248.16 0.5,76.16 430.5,76.16 860.5,76.16 1290.5,76.16 z"
        ></path>
        <path
          d="M1388.55.92v515H99.55V.92h1289m1-1H98.55v517h1291V-.08Z"
          transform="translate(-98.55 75.74)"
        ></path>
      </g> */}
      <g id="splatter1">
        <g opacity="0.7">
          <g>
            <path
              ref={splat1}
              fill="#fff"
              d="M568.98,184.63 C569.53667,184.81 570.09333,184.99 570.65,185.17 570.20667,185.09333 569.76333,185.01667 569.32,184.94 569.20667,184.83667 569.09333,184.73333 568.98,184.63 568.98,184.63 568.98,184.63 568.98,184.63 z"
            ></path>
            <path
              ref={splat2}
              fill="#fff"
              d="M565.97,183.92 C566.51667,183.87333 567.06333,183.82667 567.61,183.78 567.53333,184.22 567.45667,184.66 567.38,185.1 566.91,184.70667 566.44,184.31333 565.97,183.92 565.97,183.92 565.97,183.92 565.97,183.92 z"
            ></path>
            <path
              ref={splat3}
              d="M645.52,459.29c-.83.83-1.77.15-2.76,1-1.77-1.53-1.74-2.9-1.15-4.64a3.38,3.38,0,0,1,4.31-.37A3.63,3.63,0,0,1,645.52,459.29Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat4}
              d="M641.92,471c-1.24-.33-.74-1.59-1-2.48a2.87,2.87,0,0,1,2.72-1.3C645.26,468.28,644.73,472.27,641.92,471Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat5}
              d="M1059,256.51c-.35-1,.49-2.63,1.82-1.92l.89.81C1061.58,256.63,1059.89,257.56,1059,256.51Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat6}
              fill="#afa086"
              transform="translate(-122.36 141.55) rotate(-4.77)"
              d="M778.54,318.45 C778.54,318.59 778.54,318.73 778.54,318.87 778.14667,318.87 777.75333,318.87 777.36,318.87 777.36,318.73 777.36,318.59 777.36,318.45 777.75333,318.45 778.14667,318.45 778.54,318.45 z"
            ></path>
            <path
              ref={splat7}
              d="M1053.68,262.86c-.47-.07-.38-.47-.45-.87.4-.46,1.69-.94,1.83,0C1054.68,262.42,1054.47,263,1053.68,262.86Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat8}
              d="M761.72,316.1l-.11-1.41c2.29-1.31,4.66.18,6.13,1.9C766.18,316.44,763.3,317.82,761.72,316.1Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat9}
              d="M1033.9,253.22c-.84-1.47-1.11-3.31,1.28-3.66a3.4,3.4,0,0,1,2.61,2.16C1037.38,253.12,1035.34,253.69,1033.9,253.22Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1121.84,357.62l.54-.09c-3.14,1.29-7.73,2.93-10.75.53-.05-1.6,2-1.67,3.49-1.93,2.82-.77,5.12,1.37,7.7.64C1122.92,357.31,1121.62,356.9,1121.84,357.62Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M503,375.39c.32.12.67.68,1.1.5l-1.59,1.7c1.8,2.68-2.6,2.14-2.38,4-3.21.69-4.75.27-7.68-1.67-1.23-2.76-.35-2.87-1.43-5.61,2.18-.6-.82-5.57,3.33-4.85,1.54-2,3.35.38,5.3-.94-1.31.46.9,1.42,1.72,1.93l1.37.14c-1.18,1.51.3,2.57,1.61,3.47C503.27,373.69,503.41,374.88,503,375.39Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1096.07,354.14c-1-.32-2.29-.26-2.86-1,.49-1.67,3.35-1.43,4.9-1.6l2.55,1.18A9.92,9.92,0,0,1,1096.07,354.14Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1086,363.07c-.47-.12-.75-.53-1.21-.46l-.1-.65c2.58-1.45,4.82,0,7.31,0C1090.71,362.5,1088,363.68,1086,363.07Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1087.15,362c-.05.39,1.18-.94,1.56-.06Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M1084.92,368.42l.19-.23-.19.23,1.16.09C1085.6,368.5,1085.22,368.85,1084.92,368.42Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1015,390.29c-.34-.08-.39-.38-.43-.7l.94.4C1015.13,389.93,1015,390.16,1015,390.29Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M938.61,332.26a1.24,1.24,0,1,1,1.17-2C939.41,331.11,940.17,332.39,938.61,332.26Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M920,378.16a1.83,1.83,0,0,1-1.91-.39c.55-.68.27-1.86,1.34-2C920.93,375.63,920.67,377.49,920,378.16Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M919.29,403.22c-1.3-.47-3.53-.87-3.25-2.71-.19-1.82.62-3,2.64-3.17,1.76-1.1,2,1.32,3.12,1.51C922.17,400.93,920.56,401.85,919.29,403.22Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M918.06,383.84c-.47.05-.94.25-1.27-.17a2,2,0,0,1,.58-1.88C918.45,381.68,919.25,383.41,918.06,383.84Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M904.57,337.42c-.64-.24-1.41-.16-1.94-.86.52-1-.36-1.94,1-2.69C906,333.46,906.62,336.45,904.57,337.42Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M925.59,397.81 C926.28333,397.49 926.97667,397.17 927.67,396.85 927.5,397.18667 927.33,397.52333 927.16,397.86 926.63667,397.84333 926.11333,397.82667 925.59,397.81 925.59,397.81 925.59,397.81 925.59,397.81 z"
            ></path>
            <path
              d="M1011.8,319.46c-1.46-.48-3.51-.61-3-2.43,1.56-3.29,6.11-1.75,8.45-1.79l.6-.08c-.55.47.45,1-.08,1.63,2.67-1,1.39,2.21,3.92,1.35A16.19,16.19,0,0,1,1011.8,319.46Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M902.08,378.67c-1.17.55-1-1-1.53-1.39a1.21,1.21,0,0,1,2.16-.21C902.94,377.8,902.49,378.14,902.08,378.67Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M890.09,343.59c-.8-.24-.42-1.17-.48-1.77.24-.63,1.2-.27,1.81-.51A1.36,1.36,0,0,1,890.09,343.59Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M889.6,360.53a1.45,1.45,0,0,1-.69-2.22c.79.07,1.66-.46,1.92.58C891.41,360.06,890,359.89,889.6,360.53Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat10}
              d="M887.4,346.13c-1.17-.94-4.35,1-3.56-1.93,1.43.46,3.06-1.67,4.47,0C888,344.7,888.13,345.61,887.4,346.13Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat11}
              d="M987.39,326.79c-1.22.15-2.28.28-2.75,1.56.38.55,1.64.69,1.31,1.66-5.22-.58-11.53,1.26-15-3.35a3.2,3.2,0,0,1,1.17-3c.92-.11,2.73-.5,3.53-1.5,2.09,1.72,5.24-1.58,7.77.12-.48-.11-.54.52-1,.86,1.83.85,4.39,1.61,6,2.95Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat12}
              d="M973.83,304.78c-1.07-3.84,4.19-2.34,6-2.56l3.59,1.7C980.73,305.62,976.87,306.86,973.83,304.78Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat13}
              fill="#fff"
              d="M877.86,380.2 C878.15333,379.66 878.44667,379.12 878.74,378.58 879.22667,379.13 879.71333,379.68 880.2,380.23 879.72333,379.77667 879.24667,379.32333 878.77,378.87 878.46667,379.31333 878.16333,379.75667 877.86,380.2 877.86,380.2 877.86,380.2 877.86,380.2 z"
            ></path>
            <path
              ref={splat14}
              d="M667.35,301.94l-.88-1.45c3.79-4,10.78-2,15.33-.51l3,1.56C679.86,304.23,672.29,304.58,667.35,301.94Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              ref={splat15}
              fill="#afa086"
              d="M866.03,376.46 C866.41333,376.66667 866.79667,376.87333 867.18,377.08 866.83667,377.22667 866.49333,377.37333 866.15,377.52 866.11,377.16667 866.07,376.81333 866.03,376.46 866.03,376.46 866.03,376.46 866.03,376.46 z"
            ></path>
            <path
              d="M951.89,300.08a9,9,0,0,1-2-1.29c-.27-1,.84-1.94,1.56-2.32,2.67-.9,5.23,0,7.19,1l.23-.46c.42-.37-.69.52-.95.87,0,1.07,1.26.45,1.9.52C957.71,299.9,954.48,301.18,951.89,300.08Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M954.27,298l.82.54c.63-1.3,0,.14,1.07-.13C954.54,297.66,955.83,299.48,954.27,298Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M945,294.61c-1.79,1.73-5.45,2-7.84,1.18-1-.65-2.48-1.69-1.07-2.76,1.89-1,4.37-2,6.72-1.55.79,1.62,2.85.93,4.28,1.37C946.89,293.79,943.55,292.79,945,294.61Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M843.57,370.67 C843.45,370.53 843.33,370.39 843.21,370.25 843.31,370.24 843.41,370.23 843.51,370.22 843.53,370.37 843.55,370.52 843.57,370.67 843.57,370.67 843.57,370.67 843.57,370.67 z"
            ></path>
            <path
              d="M910.91,221.86c-.76-.23-.39-.88-.59-1.32,1.13-2.09,4.18-1.51,6-1.38.76,1.44,1.87-.67,2.9.43C916.62,220.51,914.17,222.87,910.91,221.86Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M894.8,479.36c-1.28-3.23,2.71-2.87,4.53-3.8,5-.93,7.94,3.48,12.23,3.68l2.34,1.15C908.08,479.27,900,485.37,894.8,479.36Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M848.54,274.45c-.36-.42-1.1-.35-1.45-.92-.25-.9-.53-2.24,1.09-3l4.35-.4c.18.3-.11.47-.21.78l1.88.91C853.71,274.58,850.64,274.26,848.54,274.45Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M783.33,347.02 C783.81667,346.87 784.30333,346.72 784.79,346.57 784.64667,346.68667 784.50333,346.80333 784.36,346.92 784.01667,346.95333 783.67333,346.98667 783.33,347.02 783.33,347.02 783.33,347.02 783.33,347.02 z"
            ></path>
            <path
              d="M813.06,274.59l-.53.75c.4.54,1,.06,1.44.16-1.25,2.1-3.39,2.15-5.67,3.34-1.48-.72-3.43-1-4-3-.52-1.81,1.25-2.25,2-3.32,1.58-1,3.45,1.27,5.1-.15l-.22.43,3.3,2.14C814,274.79,813.35,275.27,813.06,274.59Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M770.03,517.1 C770.55667,517.25333 771.08333,517.40667 771.61,517.56 771.1,517.60667 770.59,517.65333 770.08,517.7 770.06333,517.5 770.04667,517.3 770.03,517.1 770.03,517.1 770.03,517.1 770.03,517.1 z"
            ></path>
            <path
              d="M866.62,432.4c-.87.55.8-1.41,1.32-.89l-2.62-1.57,3.36,1.09Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M865.52,432.07c-.09.76-1.37.41-1.83.6-.69-.71-1.64-1-1.44-2.14.25-.63,1.06-.25,1.53-.45-.44.5-1,.56-1.46,1.19a2.57,2.57,0,0,0,2.73.84c.12-.35-.2-.45-.39-.71l1.37-.47-1,.85Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M859.44,444l.35.27-.35-.27,1.48-.9C860.13,442.91,859.87,443.54,859.44,444Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M826.86,333.11c-3.75-.38-8,3.52-11.81.6-1.13-1.87.74-3.77,2.28-3.91,3.55-.72,6.19,2.05,9.47,2.6Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M785.33,264.73c-1.69,0-3.77.61-4.65-1.28-.88-2.08,1.15-1.95,1.79-2.87,1.37-.54,2.62.2,3.94.24-.07.57-.26,1.15.44,1.09C786.17,263.53,786.88,263.47,785.33,264.73Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M817.31,386.13c-1.46,0-3.3-.42-3.9-1.65a2.09,2.09,0,0,1,1.83-2.57c1.81-.16,3.84-.48,5,.83C820.83,385.11,818.54,385,817.31,386.13Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M778.61,255.78c-1,.93.83,1.38.38,1.68s-1-.49-1.13-.62l-.38-.4a2.13,2.13,0,0,1,3.19-.27C780.08,256.22,779.51,255.3,778.61,255.78Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M821.27,468.38c-1.66.59-3-.3-4.28-1.31-.24-1.56-.19-3.69,1.52-3.56C820,463.83,823.65,466.48,821.27,468.38Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M813.15,431.84c-.09.57.41.68.68.94-.46,1.6-1.68.29-2.08-.11-3.64.89-7.83,2.94-11.38-.46a3.63,3.63,0,0,1,1.48-4.11l6.36-.24-.33.29c2.73.94,4.82,1.47,7.27,3.26C814.44,431.59,813.56,431.25,813.15,431.84Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M801.7,365.58c.18-.72-.46-1.1-.74-1.66l0,.44-.6.05,0-.44c.37.1.47-.17.58-.33-.8-.92-1.9-1.13-2.27.2,2.9.16.37,2.8,2,3.52-1.75.57-5.62,1.76-6.72-1.41a4.33,4.33,0,0,1,1.79-2.86c1.35.16,3.08-.69,4.48-1.08-.24,0-.6-.09-.81.34l0,.43,2.28.08c-.31.46.48,1.24-.34,1.75l1.74.56C802.65,365.35,801.89,365,801.7,365.58Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M755.43,210c-1.5-.9-.08-2.42.6-2.92,2.11-1.59,4.48,1.22,6.24-.52C760.38,208.13,758.1,210.58,755.43,210Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M799.4,365.2c-.61.05.54-.75.56-.47l0,.42Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M798.3,366.56c-.16-.55-.8-1.06-1.22-1.59l.43-.76c-.37-.1-.29-.54-.33-1l1.32,1.33c-.29.87-1.11,1.08-.2,2l.52-1C799,366.07,798.52,366.25,798.3,366.56Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M555,261.41l1.53,1.36c.08.75-6.35-1.76-4.25,2.27-4.3-1.4-10.14.28-12.88-3.86-.46.2-1.26-.17-1.5.46l1.66,1.06c-2.86.74-6,3.05-9.11,1.55-.51-.55-1.38-1.55-.7-2.37,3.74-5.41,11.64,2.15,13.85-6.3a13.37,13.37,0,0,1,10.23-1.36l3.23-1.4c-2.53.71-.2,2.62-.7,3.73l2.14-.2-1.4,1.5,2.47,1.57C558.49,259.53,555.88,259.63,555,261.41Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M755.8,256.28c-1.59-.59-3.87.58-4.69-2-.47-2.66,2.13-1.6,3.1-2.95,1-.36,1.52,1.14,2.66.47l-.22.31C756.84,252.9,758.2,256.34,755.8,256.28Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M790.12,419.14a5.51,5.51,0,0,1-5.5.47c-.19-.7-1.21-1.33-.41-1.95,1.37-2.25,4.13-.92,6-.51C789.14,417.51,790.44,418.56,790.12,419.14Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M689.11,494.11 C689.7,494.06 690.29,494.01 690.88,493.96 690.88667,494.05 690.89333,494.14 690.9,494.23 690.30333,494.19 689.70667,494.15 689.11,494.11 689.11,494.11 689.11,494.11 689.11,494.11 z"
            ></path>
            <path
              d="M735,239.5c1.45,0-.26,1.3.38,1.66-1.16.4-3.22,1.42-4.31-.21-.42-2.1,1.07-1.5,1.8-2.56l2.66.48Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M635.93,315.7 C635.45,315.73667 634.97,315.77333 634.49,315.81 634.74333,315.46 634.99667,315.11 635.25,314.76 635.18,314.86333 635.11,314.96667 635.04,315.07 635.53,315.26333 636.02,315.45667 636.51,315.65 636.33667,315.90333 636.16333,316.15667 635.99,316.41 635.97,316.17333 635.95,315.93667 635.93,315.7 635.93,315.7 635.93,315.7 635.93,315.7 z"
            ></path>
            <path
              d="M704.93,247.28c-1,1.14-3,2.82-4.89,1.93a5.65,5.65,0,0,1-3.53-2.31c.31-3.54,4.2-2.79,6.21-4.16l-.27.32c.42,1.5,2.07,1,3,1.57A3.66,3.66,0,0,0,704.93,247.28Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M696.75,192.13c-.11.49.66.73.86,1l.74-.06c-3,.4-5.83,3.21-9,1.49-.89-1.27.92-3.56,2.58-3.85,2.38-.65,4.44.1,6.6.51Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M758.12,430.05c-1,1.62-4,2.31-6.2,1.79a3.79,3.79,0,0,1-3.11-3.15c-.29-2,1.05-3.08,2.3-3.9,1.5-.54,2.68.5,3.88-.74-1,3.36,4,.52,2.3,3.23l1.25.61A1.34,1.34,0,0,0,758.12,430.05Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M750.88,379.76l-.32.29,0-.26-.82.07.16-.72,1.51.84C751.26,379.86,751.11,379.59,750.88,379.76Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M694.42,230.65l.11,1.37c-2.06-1.06-6.71,1.91-8.22-1.77-1-2.81,2-3.51,3.73-4.71,1,1.13,1.82-.15,2.87-.23.18.27-.11.46-.24.78,2,0,.71,1.14,2.57,1.61L695,228l1.58.64C694.43,229,696.72,230.93,694.42,230.65Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M743.79,380.6c-.22-1.25,1.42-1.52,1.75-1.84l3.25.17L748,380c.44-1.89-1.53-1.15-1.9-1.28-.06.59-.73,1.06-.45,1.74,1.11,1.92,2.65.21,3.48.15l-.21.31,2,.25C748.65,381.93,745.58,383.46,743.79,380.6Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M695.19,353.44c-.29.16-.61-.1-.78-.25l-.08-1.06,1.1.51C695.31,353,695,353.15,695.19,353.44Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M662.71,266.42c.13-.3-.18-.43-.37-.71l1-.86c-.46-.25-.16,1.38.93,1.75C663.9,266,663.19,266.53,662.71,266.42Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M656.69,363.94l-.31,0-.09-1.05A.55.55,0,0,1,656.69,363.94Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M654.53,363.36c-.83,1,0,0,.27-.31l-.66-.72-1.41,1.18.34.44-.34-.44c-.57.39-.06,1.09-.17,1.55,1,.54,1.93-.46,2.76-1.31l.32.28c-1.39,1.33-3.23,1-5.35.93a2.22,2.22,0,0,1-.92-1.72c1.82-1.85,4.12-1.29,6.16-.53Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M553.76,437.93 C553.87,438.02 553.98,438.11 554.09,438.2 553.86333,438.47667 553.63667,438.75333 553.41,439.03 553.52667,438.66333 553.64333,438.29667 553.76,437.93 553.76,437.93 553.76,437.93 553.76,437.93 z"
            ></path>
            <path
              d="M590.36,268.9c-2-.4-2.07-2.4-1.42-3.84,1.19-.25,1.83-1.52,3.06-1.79,0,.3.08,2.58,1.66,1.69-1.42-.62.62-1.74,1.66-2l-1,.84c.85,1,1.86.17,3,.82l-1,.84,1.47.93C595.42,267.38,593.45,269.23,590.36,268.9Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M625.17,335.65c-2.67.55-4.79,2.26-6.85-.43-.46-1.65,1.4-2.89,2.57-3.43l3.61-.33-.27.33,1.48,1.4-.28.31,1.14.67C625.5,334.26,624.38,335.28,625.17,335.65Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M621.52,335.38c.5.55,1.38,0,1.83.14a2.55,2.55,0,0,1-1.29.88c-1.25-.51-.5-2.1-.7-2.83.82-1,2.71-.11,3.26-.75C622.4,333.61,624.38,335.27,621.52,335.38Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M621.41,334.19c.28-.21.57-.39.39-.66l0-.46.77-.07,0,.46-.45,0,.82,1Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M605.41,257.89c-.65-.26-.26-1.21-.47-1.8.93-1.44,2.63-1.3,4.31-1.45-.84.68-1.54,0-2.19,1.26l.9,1.44c.42-.64,1.28-1.18,1.79-.6C608.61,257.6,607,258.65,605.41,257.89Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M611.81,348.59l-.7-1,1.7-1.21c-.29.17-.57.36-.4.64l.5.41,1.21-1.64c.38.74,1.08.23,1.54.33l-1,.1,0,.59-.48-.25-.6,1.56,3.59-.33C615.39,348.1,613.7,349.32,611.81,348.59Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M413.83,244.89c-.41,2.51,2.31.58,3.21,1.38-.66.86-2.44-.57-2.84,1.18a2.88,2.88,0,0,0,3.51.27l.34-.05c-1.52,1.57-5.77.66-6.27,3.79.77-.11,1.72,1,1,1.68-2.61.52-3.21,2.92-5.62,3.72l1.19.6c-1.92.89-4.62.81-6.9,1.3,2.08,2.3-3.81.85-3,3-1.49-1.46-3.48-2.06-4.25-.86-2.86-1.07-6.68-3.27-7.18-6.54-1.37-1.65.12-2.17.09-4.49l.53.41c0-.8,1-1.71,0-2.31a4,4,0,0,0,2.64-2.57c-.23-1.49.94-3.22,2.27-3,.42-.38.19-.79.15-1.08a2.21,2.21,0,0,0,1.76-1.05c3-1.55,6.51-2.17,9.24-5.33l-1,.76.8,1.11,2.27-2.92c-.09,1.38-2,2.87-.84,4.09,1.25.74,2.18-.46,3.24-.78l-1,.92c1.26,1,2.84-1.32,4.56-.35-1.57,2.34.16,3.35,2,4.14l3.73-.54C415.77,241.7,413.91,243.05,413.83,244.89Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M593.47,338.54c.44-.19.39-.64.35-1.08-.7-1-1.72-.59-2.64-.84l-.35,1.12c.84,1,1.28-.75,1.87.58-.6,1.71-2.56.25-3.91.38-1.09-2,1.43-2.44,2.66-2.39,1.59-.79,2.49.67,3.73,1C594.9,337.51,594.4,338.92,593.47,338.54Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M568.74,335.15c-1.86-.58-3.73-2.54-3.21-3.66-.4-.86.45-1.4.56-1.89-1.85-.11-4.1-1.56-3-3.83,5.45-3.24,11,.64,14,2l-.95,1.16,1.57.6C575.51,333,572.7,335.07,568.74,335.15Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M306.89,356.25l.73-.15c-1,.51-1.36,1.67-2.07,2.6.53.35.91.73,1.62.44l.24-.36c-.18.65-2.52.51-1.41,2.14l.5.21c-3.35.21-3.31,3.3-6.35,3.46-1.75,3.31-5.41.62-7.44,1.22-.1-1.2-1.52-1.38-2.3-2.12l-1.3-6.07c1.06-.84,1.38-2.18,2.14-3.74-2-.5-4.25-1.69-5.23-3.34-2.07-3.12,1.58-4.23,2-6.79,1.67.53,3.29-.68,4.48-1.69l.62-.77c-.8,2.94,3.35,1.16,5.12,1.43l1-.21c-.47.7-1.69.8-1.48,1.83l2.55-.52c-.43.24-1,.36-1.34,1.07l.94.88c-.61,0-.63.6-.88,1-.06.47.61.64,1,.88l-1.05,1c1.09.72,2.16.66,2,2.22l3.69-.13-.89,1a1.73,1.73,0,0,0,1.94.35l.24-.34-.53,1.18,2.58-.21C307.94,353.85,304.63,355,306.89,356.25Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M496.13,257.55l.86.67c-2,1.43-3.41,5.38-7.61,5.6-2.42.46-3.94-.59-6.51-1.34-1.68-3.62-.23-5.78,1.93-8.61,1.93.51,5.07-2,7.24-2l.44-.51-1,1.18,5.26.95C496.11,254.65,496.61,256.3,496.13,257.55Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M462.31,378.77 C462.32,378.87 462.33,378.97 462.34,379.07 461.98667,379.10333 461.63333,379.13667 461.28,379.17 461.27,379.07 461.26,378.97 461.25,378.87 461.60333,378.83667 461.95667,378.80333 462.31,378.77 462.31,378.77 462.31,378.77 462.31,378.77 z"
            ></path>
            <path
              d="M541.17,315a1.3,1.3,0,0,1,.37-.79c-.38.64.82,1.88,1.48.91C542.62,315.56,541.28,316,541.17,315Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M528.06,314.82l.35.4c.44-.05-1.74.95-.86,1.92-3.66,2.87-5.83-4.37-9.15.26-2.33-1.89-5.52-.45-6.64-3.67-.44-2.55,1.82-4.2,3.85-5.17l3.24-1.12c-.08.62.69.84,1.14.63l1.5-.17c-.81,2.24,2.19.51,3.11,1.8l-.45.05c.55,2.24,2.82.75,3.94,2.46l1.24.32C529.6,313.56,528.42,314,528.06,314.82Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M431.91,320c1.11.29-1.75.7-.09,1.55-1.65.24-1.11,2-2.27,2.46l.35.25c-2.72-.69-1.43,4-5.81,2.36-1.5,2.35-3.41-1.34-4.95-.36-2.66-2.38-3-3.69-2.42-7,1.17-2.62,1-.89,2.7-3.75l1.05-1.22c1.1,2.29,1.59-2.84,3.18-.45,1.18-.33,1.81-1.36,3.2-1.24a1.14,1.14,0,0,0-.29,1.11c.85.66,1.86,0,2.62.08l-.15,1.1,1.92.49c-.42.21-.35.66-.29,1.13l1.22.12C432.9,318.34,429.55,318.66,431.91,320Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M327.65,379.55 C328.5,379.33 329.35,379.11 330.2,378.89 329.70333,379.06 329.20667,379.23 328.71,379.4 328.35667,379.45 328.00333,379.5 327.65,379.55 327.65,379.55 327.65,379.55 327.65,379.55 z"
            ></path>
            <path
              d="M358.3,261.47l.18,1.06c-1.31-.25-.76,1.19-1.29,1.74-2.21.22-5.22,1.21-6.21-.79l.22-3.4c1.18.38,2-1.28,3-1.91,0,1.23,2.1.09,2,.28l-.24.48c1.46.09,1.83.47,3.25,1.31C358.37,260.08,357.87,260.78,358.3,261.47Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M258.68,335.55 C258.69667,335.65 258.71333,335.75 258.73,335.85 258.21667,335.93667 257.70333,336.02333 257.19,336.11 257.17333,336.01 257.15667,335.91 257.14,335.81 257.65333,335.72333 258.16667,335.63667 258.68,335.55 258.68,335.55 258.68,335.55 258.68,335.55 z"
            ></path>
            <path
              d="M334.22,182.26c-2.09.36-4.54-1.21-3.44-3.56a4.31,4.31,0,0,1,4.23-1.48C337.1,177.78,337.71,182.3,334.22,182.26Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M316.34,306c.35,1,0,.78.07,2.15-1.11.67-3.16,1.49-4.45.54a3.12,3.12,0,0,1-.7-3.56c1.17-1.33,1-.67,2.4-1.55,1.25.7,3,.67,3.12,2.34Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M308.21,312.82c-.31-.71.09-1.11.45-1.64.64,0,1.65.29,1.35,1.27Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M334.57,246.68c-.48,1-1.82,1.53-3.25,1.65-.32-.7-1.67-1.07-.72-2a5.09,5.09,0,0,1,3.12-1.65c.42.53,1.47,1,.32,1.79Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M332.55,246.26l-.52-.21c-.68.74,1.31-1.8,1.64,0C333.55,247.29,332.91,246.5,332.55,246.26Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M288.4,230.61l2.06.36c-1.49,0-2.1,1.07-2.87,2.14a1.11,1.11,0,0,0,.68.94c-1.17-.07-1.66.8-2.55,1.28l1.07,1.2c-4.11.19-10.21,4.08-14.06-.85l-.38-5.79.38.22c.57-2.91,2.91-3.54,3.93-5.89l-.16-.76,2.19,1c.74-1.23.6.48,1.67.11l2.75-2.09c.26.55-.33.83-.58,1.19.9,1.2,1.65,0,2.38-.48-.4,1.3,1.44,2.17,3.42,3.77.24-.52.72-.45,1.21-.55-.78.16-1,1-1.39,1.35l.06.31,2.8-.09C290.77,229.22,287.67,228.62,288.4,230.61Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M290.9,285.47c-.92,1-.82,1.42,0,2.19l.56.34c.59-.27-1.17.54-1.63-.12-.79.76.17,2.43-1.79,2.22-1,1.29.95,1.49,1.29,2.36-1.81.51-2.06-1.42-3.91-.29-1.08,3.93-5.1.12-6.61,2.14-.3.05-2.1.6-2.38-.73-.67,0-.66.77-.94,1-2-.32-3.16-3.49-4.52-3-1.19-.35-1.26-1.43-2.32-1.8a1.61,1.61,0,0,0-1.15-1.61c2.15-1.9-3.13-1.64-.38-3.19.24-1.12-1.43-1.23-1.77-1.46.72-.31,1.84.37,2.62-.59-3.48-1.72,1.65-2.87-.09-5.57.8.61,1.71-.38,1.71-1.14l-.16-.73c2,1.07,2.51-2,3.75-2.25.81-.82,4.27,1.75,5.5-1.61,1.25-1,2.56,3.66,4.58.94l.87-1.29c1.21,1.15-1.68,2,.12,2.92,1.67.28,1-1.28,2.05-1.81-.07.49-2.27,3.88,1.11,3.79l2.47-1.28c-.27,1-1,2.08-1,3.14,1,1.79,2.53-1.13,2.46.27-.67.62-1.88,1-1.16,2.1l2.92.93C291,281.89,292.64,284.67,290.9,285.47Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M211.34,259.18c.2.14.4.38.7.17.21,1.49-1.83,3.38-.72,5.15-2.69.66-1,4.61-4.09,4.28-1.18.62.12,2.46-1.95,1.61a1.22,1.22,0,0,0-.17,1.29c-3.39-.2-6.1,2.27-9.3.89-1.77.32-2.1-2.26-4-1.14l.59-.93c-1.05-1.45-4.24-1.38-3.08-4L188,264.91c1.16-1.4,1.21-3.15,1.14-5.3.76-1,3.37-1.38,2.4-3.15,2.44.31,1.44-2.27,2.36-3.31l1,.54.82-1.45c.29.52,0,1.24.69,1.36,1.74-.46,2.43-1.75,3.27-3.07.08.3.35.71,0,1.11,1.25.94,1.38-1.14,2.6-1.12l.18.72,1.43-.35-.21.51c1.31,1.23,2.39-.58,3.5-.85,0,.62-1.09,1.67,0,2.16l2,1.09c.05-.47.5-.58,1-.7l-.54,2.46c1.57.88,1.88-1.85,3.22-1.25C210,255.78,212.86,257.27,211.34,259.18Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M257.66,349.63c-.32-.69-1.31-.91-1.23-1.85.4-1.68,2.42-1.1,3-.44C258.37,348.68,259.76,349.28,257.66,349.63Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M255.15,414.19c-.63.45-1.06-.06-1.61-.4-.85-1,.54-2.15,1.14-2.76,1.64-.09.14.59,1.76,1A2.22,2.22,0,0,1,255.15,414.19Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M202,290.11c-1.05-.2-2,.53-2.94-.48.31-.69,0-2,1-2.47l1.07-.28c1,.55-1.86,1.73.54,2.06l.51-1.24C202.31,288.62,202.82,289.42,202,290.11Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M210.54,343.49a8.23,8.23,0,0,1,0,3c-1.27,1.91-3.34,2.45-5.58,3-2.94-1.43-4.7-1.43-5-4.31-1.58-.51,1.18-2.2-1.12-2.38.77-.67,3-1.41,1.19-2.67,0,1.12,2.33-.3,2.86-.75l-.16-.58c.46-.12,1,.83,1.66.18.28-1.95,1.85.3,2.84-.76-.37.42-.1.83,0,1.25.46.51,1.24-.16,1.89-.18l.22-.38-.59.79,1.95,1.37-.54.93,1.16.16Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M200.79,335.89c-.29.72-2.86.75-2.09,2.42-.68-.12-1,.58-1.14,1.11l.2.73c-.5-.66-1.12,0-1.62,0-.53.45.09.94.1,1.54-.61-.44-1.17-.17-1.78-.62l-1.19.94c-.12-.42-.75-.4-1-.79-1.87,1.95-3.42-.75-5.2-.69-1.81-.13-.91-3.22-3.53-2.79,2-3.39-2.5-4.18-.39-8.25.31-.09.71-.35,1.14,0,1-.59.27-1.95-.35-2.42.76-.22,1.23.29,1.8.59.13-3,3.72-1.88,4.66-3.22.21,1.38,1.7-.27,2.4.48l.56-.92,0,1.57c.67-.5,1.67.18,2.06-1.33,1.19,1.41.78,4,3.09,2.94-.79.68-.25,1.48-.21,2.27C202.28,330,198.11,334.41,200.79,335.89Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M159.23,325.76c-.4,1.4,1.48,1.63,2,1.64a2,2,0,0,0-.22,2c.52.63,1.14,0,1.62,0-.33,1-3.17.29-2.16,2l1,.49-1.6,1.25,1.46,1c-1,0-3,1.36-2.22,3l1.27,1.5c-.24.25-.64.05-.88-.19-1.54.8,1.38,2.91-1.14,2.75,1.27,2,.23,4.52.92,5.72-1.32-.05-.57,1.3-.89,1.89-.59.19-1.07-.31-1.64,0,.58,1.89-1.35-.22-1.55,1.26-1.31,0-2.91-1.46-3.88.12.74-2.31-2.09-2-2.68-3.29-2.28,1,1.13,2.51-.25,3.88-1.58-1.4-.47-4.14-3.55-3.48l-.73,1.34c-.77-.4-1.61-2.5-2.54-.79l-1.7-1.7-1.1.69c-.29-.42,0-1.13-.72-1.24-.63.05-.6.67-.81,1.05a3.18,3.18,0,0,0-2-2.56l-1.06.82-.89-2.74c-2.16,1-.4-2.25-2.9-1.79,1.65-2.09-1.65-2.5-2.54-2.7.52-.47,1.47-.61,1.19-1.47.16-2.12-1.84-.55-2.7-1.07l2-.94c.17-1-.66-2-1.25-2.81l-.46.15c-.28-.86,2.25-2.91-.22-3.26.37,0,.43-.29.65-.67.22-1.34-1.56-1.11-1.84-2,.37-.43,3.67,2,3.21-1l-1.34-3.07,2.16,2c3.77-2.43-1.19-6.92,3.3-8.65.35,1.65,2.28,1.36,3.16.93,2.14-.68.47-3.33,2.91-3.61.4,2.89,4.41,2.27,5.51,1,1.05-1,.09-2.41,1.07-3,.63.91-.94,3.46,1.29,4.2l1.55-1.6c-.41.91.46,2.09,1.28,2.62l1.17-1.15c.06.76-.91,2,.61,2l1.64-1.16c.38.69-.94,1.26-.07,1.95.58.29,1.84,1.15,2.31-.07.68-.51-.75,1.93,1.41,1.95l1.37-.4c-.39.92-1.64,1.75-.54,3.16l2.58-.75c-.29.7-1.25,1.31-.69,2.11l2.49.05C160.67,323.94,159,324.27,159.23,325.76Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M375.37,354.84c-1.69,0-3.59,1.41-4.91-1-.18-2-.25-6,2.83-4.93l.62-.9,2.38,1.44c-1,1.54,1.85,2,.6,3.59C376.18,353.32,374.86,353.7,375.37,354.84Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M365.73,352l-2,1.09Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M261.17,430.97 C262.04667,430.46 262.92333,429.95 263.8,429.44 263.82333,429.58 263.84667,429.72 263.87,429.86 264.09333,429.67667 264.31667,429.49333 264.54,429.31 264.58,429.55667 264.62,429.80333 264.66,430.05 263.49667,430.35667 262.33333,430.66333 261.17,430.97 261.17,430.97 261.17,430.97 261.17,430.97 z"
            ></path>
            <path
              d="M356.43,359.16c.28-.2.47.06.79.16-.53.42-1,.49-1.34,1l1.91.44c-1.43.53-1.83,1.7-2.36,3l.33.26c-1.83,2.46-5.49,3.18-8.1,3-2-.87-4.2-2.89-6.56-1.68-1-1.08,1.45-1.22,0-1.86s-2.25-3.12-3.45-4.6c2-1.76,1.12-3,1.35-5,.46-.86,2.4-1.07,1.37-2.55l1.25,1c1.2-1,0-2.32.16-3.42l2,1.15c.6-1.8,3.5-1.88,4.58-2.7,2,1.78,3.76-1.3,4.75-2.7,1,1.23-1.75,4,.66,5.42.24-.34.28-.95.9-.92,2.07,1.34-1.75,3.07.69,3.89l3.06-3.46C356.9,353.24,354.22,355.39,356.43,359.16Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M358.46,355.9l-1.36,1Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M242.25,419.57 C242.34333,419.55333 242.43667,419.53667 242.53,419.52 242.60333,419.92333 242.67667,420.32667 242.75,420.73 242.58333,420.34333 242.41667,419.95667 242.25,419.57 242.25,419.57 242.25,419.57 242.25,419.57 z"
            ></path>
          </g>
        </g>
      </g>
      <g id="splatter2">
        <g opacity="0.7">
          <g>
            <path
              fill="#fff"
              d="M746.3,336.03 C745.87,335.81667 745.44,335.60333 745.01,335.39 745.36,335.50333 745.71,335.61667 746.06,335.73 746.14,335.83 746.22,335.93 746.3,336.03 746.3,336.03 746.3,336.03 746.3,336.03 z"
            ></path>
            <path
              fill="#fff"
              d="M748.65,336.94 C748.20667,336.92333 747.76333,336.90667 747.32,336.89 747.42333,336.52333 747.52667,336.15667 747.63,335.79 747.97,336.17333 748.31,336.55667 748.65,336.94 748.65,336.94 748.65,336.94 748.65,336.94 z"
            ></path>
            <path
              d="M901-36.55c.84-.62,1.6.08,2.59-.53A3,3,0,0,1,904-33a3.18,3.18,0,0,1-3.91-.19A3,3,0,0,1,901-36.55Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M905.62-46.1c1.07.44.47,1.45.57,2.24a2.69,2.69,0,0,1-2.6.78C902.28-44.19,903.24-47.53,905.62-46.1Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M526.5,115.8c.3.88-.43,2.25-1.57,1.64l-.76-.7C524.26,115.68,525.71,114.88,526.5,115.8Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M671.61,147.17 C671.61,147.05 671.61,146.93 671.61,146.81 671.95333,146.81333 672.29667,146.81667 672.64,146.82 672.64,146.94 672.64,147.06 672.64,147.18 672.29667,147.17667 671.95333,147.17333 671.61,147.17 671.61,147.17 671.61,147.17 671.61,147.17 z"
            ></path>
            <path
              d="M531.07,110.36c.41.06.33.41.38.75-.34.4-1.45.8-1.57,0C530.21,110.74,530.4,110.24,531.07,110.36Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M784.5,74.7v1.22c-2.08,1-4-.51-5.15-2.1C780.68,74.07,783.27,73.11,784.5,74.7Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M548,118.75c.72,1.27.94,2.85-1.11,3.15a2.91,2.91,0,0,1-2.23-1.86C545.05,118.83,546.8,118.34,548,118.75Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M472.41,28.75l-.47.08c2.72-1.13,6.69-2.56,9.31-.5,0,1.37-1.72,1.44-3,1.68-2.44.67-4.42-1.17-6.66-.53C471.47,29,472.6,29.37,472.41,28.75Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1015,54.37c-.25-.15-.47-.68-.87-.6l1.64-1.18c-1.12-2.56,2.59-1.39,2.69-3,2.88-.06,4.15.54,6.37,2.66.61,2.53-.17,2.48.32,5-2,.16-.19,4.84-3.65,3.56-1.65,1.45-2.82-.86-4.71-.06,1.2-.17-.55-1.34-1.17-1.91l-1.16-.33c1.25-1.09.15-2.23-.84-3.2C1014.49,55.77,1014.56,54.74,1015,54.37Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M494.72,31.72c.82.27,2,.23,2.47.9-.42,1.43-2.9,1.21-4.25,1.35l-2.2-1A8.58,8.58,0,0,1,494.72,31.72Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M503.51,24c.4.1.65.46,1,.4l.09.55c-2.25,1.26-4.19,0-6.36.05C499.39,24.55,501.77,23.52,503.51,24Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M502.48,24.93c0-.33-1,.82-1.36.06Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M504.44,19.43l-.17.2.17-.2-1-.08C503.84,19.36,504.18,19.06,504.44,19.43Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M565.75.9c.3.07.33.33.36.6l-.81-.35C565.59,1.2,565.67,1,565.75.9Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M631.56,52a1.32,1.32,0,0,1,.81,1.5,1.33,1.33,0,0,1-1.88.16C630.83,53,630.2,51.88,631.56,52Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M649.3,13a1.63,1.63,0,0,1,1.68.38c-.51.57-.3,1.6-1.25,1.66C648.35,15.18,648.64,13.58,649.3,13Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M650.74-8.51c1.14.44,3.12.85,2.8,2.42.1,1.58-.66,2.53-2.46,2.66-1.6.89-1.75-1.19-2.73-1.39C648.09-6.62,649.56-7.37,650.74-8.51Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M651.17,8.2c.42,0,.83-.19,1.12.18a1.74,1.74,0,0,1-.58,1.6C650.75,10,650.09,8.53,651.17,8.2Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M661.45,48.56c.55.22,1.23.18,1.67.8-.5.83.24,1.69-.94,2.29A1.59,1.59,0,0,1,661.45,48.56Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M458.42,135.31 C457.81333,135.57667 457.20667,135.84333 456.6,136.11 456.75,135.82333 456.9,135.53667 457.05,135.25 457.50667,135.27 457.96333,135.29 458.42,135.31 458.42,135.31 458.42,135.31 458.42,135.31 z"
            ></path>
            <path
              d="M567.65,61.9c1.26.41,3,.55,2.54,2.11-1.39,2.82-5.32,1.47-7.35,1.49l-.53.07c.49-.4-.37-.86.09-1.4-2.32.88-1.18-1.91-3.38-1.18A14.23,14.23,0,0,1,567.65,61.9Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M665.14,13.17c1.06-.44.87.87,1.3,1.24a1.08,1.08,0,0,1-1.92.12C664.34,13.89,664.75,13.61,665.14,13.17Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M674.37,43.74c.68.24.32,1,.34,1.55-.23.53-1.06.18-1.6.36A1.18,1.18,0,0,1,674.37,43.74Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M675.47,29.2a1.23,1.23,0,0,1,.52,1.93c-.7-.09-1.48.34-1.67-.57C673.85,29.53,675.09,29.73,675.47,29.2Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M676.82,41.66c1,.85,3.87-.73,3,1.79-1.24-.44-2.75,1.33-3.92-.17C676.2,42.87,676.16,42.08,676.82,41.66Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M589,55.88c1.06-.11,2-.22,2.42-1.32-.32-.48-1.42-.6-1.12-1.44,4.53.53,10.07-.92,13,3.1a2.72,2.72,0,0,1-1.08,2.58A5.15,5.15,0,0,0,599.09,60c-1.79-1.51-4.58,1.27-6.75-.21.41.1.48-.45.86-.73-1.58-.75-3.8-1.43-5.15-2.6Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M600.37,75c.86,3.33-3.68,1.93-5.25,2.11L592,75.62C594.4,74.17,597.77,73.15,600.37,75Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M499.58,150.97 C499.31667,151.43 499.05333,151.89 498.79,152.35 498.38,151.87 497.97,151.39 497.56,150.91 497.96333,151.30667 498.36667,151.70333 498.77,152.1 499.04,151.72333 499.31,151.34667 499.58,150.97 499.58,150.97 499.58,150.97 499.58,150.97 z"
            ></path>
            <path
              d="M864.22,95.34l.6,1.33c-3.64,3-9.39.56-13.13-1.16l-2.42-1.65C853.77,92.07,860.28,92.57,864.22,95.34Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M509.76,154.38 C509.43,154.19667 509.1,154.01333 508.77,153.83 509.07,153.71 509.37,153.59 509.67,153.47 509.7,153.77333 509.73,154.07667 509.76,154.38 509.76,154.38 509.76,154.38 509.76,154.38 z"
            ></path>
            <path
              d="M619.26,79.45A7.28,7.28,0,0,1,621,80.59c.21.9-.77,1.66-1.4,2a8,8,0,0,1-6.19-1l-.21.39a4.57,4.57,0,0,0,.84-.73c.06-.92-1.08-.41-1.64-.49C614.23,79.52,617.05,78.46,619.26,79.45Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M617.17,81.22l-.7-.48c-.57,1.11,0-.12-.94.09C616.92,81.49,615.85,79.9,617.17,81.22Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M625.11,84.29c1.59-1.45,4.75-1.59,6.8-.84.83.58,2.1,1.51.86,2.4-1.66.82-3.83,1.65-5.84,1.18-.64-1.41-2.44-.87-3.67-1.28C623.45,85,626.31,85.88,625.11,84.29Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M529.05,159.81 C529.15,159.93667 529.25,160.06333 529.35,160.19 529.26333,160.19667 529.17667,160.20333 529.09,160.21 529.07667,160.07667 529.06333,159.94333 529.05,159.81 529.05,159.81 529.05,159.81 529.05,159.81 z"
            ></path>
            <path
              d="M652.45,147.75c.63.22.3.76.46,1.15-1,1.77-3.57,1.19-5.1,1-.6-1.26-1.59.52-2.43-.46C647.6,148.78,649.72,146.79,652.45,147.75Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M675.92-73.2c1,2.83-2.61,2.37-4.31,3.11-4.58.62-7.12-3.29-11.05-3.57l-2.1-1.06C663.74-73.61,671.46-78.55,675.92-73.2Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M707.34,105.06c.29.38.92.35,1.2.86a1.93,1.93,0,0,1-1.08,2.53l-3.73.13c-.15-.26.11-.39.21-.66l-1.57-.87C702.93,104.7,705.53,105.12,707.34,105.06Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M580.15,181.97 C579.72333,182.08 579.29667,182.19 578.87,182.3 579,182.20667 579.13,182.11333 579.26,182.02 579.55667,182.00333 579.85333,181.98667 580.15,181.97 580.15,181.97 580.15,181.97 580.15,181.97 z"
            ></path>
            <path
              d="M737.64,106.83l.5-.61c-.31-.5-.81-.12-1.22-.23,1.18-1.73,3-1.63,5-2.51,1.23.72,2.87,1,3.2,2.88.33,1.58-1.2,1.84-1.9,2.71-1.41.74-2.86-1.3-4.36-.19l.22-.36-2.69-2C736.82,106.59,737.43,106.23,737.64,106.83Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M599.39,36.41 C598.92,36.25667 598.45,36.10333 597.98,35.95 598.44333,35.93333 598.90667,35.91667 599.37,35.9 599.37667,36.07 599.38333,36.24 599.39,36.41 599.39,36.41 599.39,36.41 599.39,36.41 z"
            ></path>
            <path
              d="M699.25-31.54c.82-.42-.8,1.18-1.24.71l2.29,1.47-3-1.09Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M700.23-31.2c.12-.65,1.25-.29,1.68-.43.58.64,1.42,1,1.18,1.9-.25.53-1,.17-1.4.32.42-.41,1-.43,1.38-1a2.4,2.4,0,0,0-2.42-.85c-.13.3.16.4.32.64l-1.27.33,1-.68Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M706.35-41.2l-.3-.25.3.25-1.39.7C705.67-40.27,705.94-40.8,706.35-41.2Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M729.14,55.73c3.25.56,7.17-2.52,10.32.22.87,1.69-.87,3.2-2.21,3.22-3.13.39-5.27-2.15-8.09-2.84Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M760.61,117c1.43.09,3.24-.28,3.85,1.39.61,1.83-1.1,1.6-1.71,2.35-1.19.39-2.2-.33-3.32-.44.1-.48.3-1-.29-1C759.82,118,759.21,118,760.61,117Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M740.74,10.82c1.29.1,2.89.57,3.34,1.67a1.8,1.8,0,0,1-1.78,2.08c-1.61,0-3.43.18-4.39-1C737.55,11.48,739.58,11.68,740.74,10.82Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M765.7,125.11c.91-.74-.62-1.24-.21-1.46s.8.49.91.61l.3.37a1.82,1.82,0,0,1-2.72,0C764.48,124.65,764.9,125.47,765.7,125.11Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M742.49-60c1.56-.4,2.69.45,3.81,1.4.12,1.34-.09,3.18-1.63,3C743.34-56,740.2-58.55,742.49-60Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M747.42-28.16c.12-.48-.33-.61-.56-.85.53-1.34,1.54-.14,1.87.22,3.36-.53,7.29-2,10.26,1.09a3.11,3.11,0,0,1-1.63,3.44l-5.75-.18.32-.23c-2.4-1-4.25-1.55-6.35-3.24C746.23-28,747-27.67,747.42-28.16Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M753.2,29.43c-.21.61.32,1,.54,1.47v-.38h.53v.37c-.32-.11-.43.12-.53.25.64.84,1.59,1.08,2,0-2.54-.32-.13-2.43-1.51-3.15,1.58-.38,5.08-1.16,5.83,1.63a3.84,3.84,0,0,1-1.77,2.34c-1.18-.22-2.76.4-4,.66.21,0,.52.11.73-.25V32l-2-.21c.31-.37-.33-1.09.42-1.48l-1.49-.59C752.35,29.57,753,29.93,753.2,29.43Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M781.89,166.17c1.18.88-.11,2.08-.71,2.46-1.86,1.19-3.63-1.39-5.21,0C777.65,167.37,779.72,165.44,781.89,166.17Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M755.2,29.9c.54,0-.52.61-.53.36V29.9Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M756.26,28.79a5.14,5.14,0,0,0,1,1.44l-.44.63c.32.11.23.48.23.85L756,30.49c.32-.73,1-.86.31-1.7l-.52.85C755.62,29.17,756,29.05,756.26,28.79Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M954.15,143.39,953.06,142c0-.66,5.05,2.36,3.85-1.35,3.38,1.77,8.5,1.18,10.2,5.08.41-.1,1,.32,1.31-.17l-1.23-1.14c2.48-.22,5.44-1.74,7.81,0,.35.54.93,1.51.25,2.11-3.89,4.06-9.41-3.48-12.43,3.38a11.12,11.12,0,0,1-8.67-.26l-2.87.76c2.19-.27.52-2.2,1.08-3.08l-1.81-.11,1.37-1.09-1.84-1.67C951,144.53,953.16,144.78,954.15,143.39Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M785,126.44c1.3.63,3.32-.2,3.81,2.12.19,2.31-1.92,1.2-2.84,2.29-.91.22-1.2-1.1-2.21-.61L784,130C783.89,129.25,783,126.2,785,126.44Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M767.26-15.82a5.1,5.1,0,0,1,4.94,0c.11.61,1,1.23.22,1.7-1.39,1.82-3.75.47-5.37,0C768-14.35,766.93-15.34,767.26-15.82Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M670.85,60.78 C670.32,60.77667 669.79,60.77333 669.26,60.77 669.26,60.69 669.26,60.61 669.26,60.53 669.79,60.61333 670.32,60.69667 670.85,60.78 670.85,60.78 670.85,60.78 670.85,60.78 z"
            ></path>
            <path
              d="M801.18,142.4c-1.21-.13.32-1.09-.18-1.44,1-.26,2.81-1,3.59.5.17,1.83-1,1.21-1.72,2.06l-2.19-.62Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M703.13,217.8 C703.53333,217.80333 703.93667,217.80667 704.34,217.81 704.1,218.09 703.86,218.37 703.62,218.65 703.69,218.56667 703.76,218.48333 703.83,218.4 703.43333,218.19667 703.03667,217.99333 702.64,217.79 702.80667,217.58667 702.97333,217.38333 703.14,217.18 703.13667,217.38667 703.13333,217.59333 703.13,217.8 703.13,217.8 703.13,217.8 703.13,217.8 z"
            ></path>
            <path
              d="M827.1,138.41c.91-.89,2.75-2.15,4.27-1.21a4.71,4.71,0,0,1,2.75,2.29c-.59,3-3.78,2-5.58,3l.26-.25c-.22-1.32-1.64-1.08-2.39-1.62A3.19,3.19,0,0,0,827.1,138.41Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M828.92,186.35c.13-.41-.48-.68-.61-.95h-.62c2.51-.07,5.08-2.22,7.54-.47.61,1.18-1.08,3-2.46,3.07-2,.34-3.63-.48-5.36-1Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M796.78-22.7c1-1.32,3.79-1.68,5.72-1.06A3.29,3.29,0,0,1,805-20.83c.09,1.71-1.21,2.56-2.41,3.17-1.4.35-2.36-.63-3.55.34,1.21-2.8-3.55-.76-1.79-2.95l-1.07-.62A1.13,1.13,0,0,0,796.78-22.7Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M799,21l.31-.22V21h.73l-.2.6-1.26-.84C798.71,20.84,798.82,21.09,799,21Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M834.36,153.59l0-1.18c1.62,1.09,5.77-1,6.68,2.26.56,2.49-2,2.81-3.55,3.69-.73-1.06-1.52,0-2.4-.06-.12-.25.14-.39.27-.65-1.65-.17-.48-1-2-1.61l.26-.25-1.25-.69C834.2,155,832.47,153.14,834.36,153.59Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M805.38,20.78c.08,1.09-1.39,1.2-1.71,1.44l-2.86-.39.77-.85c-.56,1.58,1.25,1.1,1.56,1.24.11-.5.74-.85.55-1.45-.81-1.73-2.32-.39-3.07-.39l.22-.26-1.79-.37C801.18,19.27,804,18.2,805.38,20.78Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M845.47,48.45c.27-.12.52.14.65.28l0,.92-.91-.54C845.32,48.83,845.59,48.71,845.47,48.45Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M864.45,126.17c-.13.25.12.39.24.65l-.92.63c.36.27.28-1.16-.6-1.59C863.41,126.38,864.06,126,864.45,126.17Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M880.1,43.51h.26l0,.9C879.78,44.51,879.41,43.74,880.1,43.51Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M881.92,44.24c.83-.77,0,0-.28.23l.5.69,1.37-.86-.25-.41.25.41c.54-.27.17-.93.32-1.3-.79-.56-1.74.19-2.56.82l-.25-.28c1.36-1,2.94-.54,4.78-.21a1.87,1.87,0,0,1,.61,1.56c-1.8,1.39-3.75.67-5.44-.2Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M785.17,121.21 C785.08667,121.12333 785.00333,121.03667 784.92,120.95 785.15,120.73667 785.38,120.52333 785.61,120.31 785.46333,120.61 785.31667,120.91 785.17,121.21 785.17,121.21 785.17,121.21 785.17,121.21 z"
            ></path>
            <path
              d="M925.55,132.37c1.66.6,1.43,2.3.71,3.45-1,.06-1.73,1.06-2.79,1.13,0-.26.25-2.21-1.19-1.65,1.11.71-.73,1.4-1.64,1.49l.94-.59c-.59-1-1.54-.37-2.4-1.06l.93-.59-1.11-1C921.11,133,923,131.68,925.55,132.37Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M904.14,71.27c2.36-.16,4.4-1.35,5.85,1.19.19,1.46-1.56,2.29-2.63,2.61l-3.14-.15.27-.25-1.11-1.36.28-.24-.9-.7C903.69,72.41,904.78,71.68,904.14,71.27Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M907.25,71.94c-.36-.54-1.18-.2-1.56-.35a2.22,2.22,0,0,1,1.22-.59c1,.58.17,1.85.26,2.5-.83.74-2.34-.23-2.89.25C906.28,73.34,904.78,71.68,907.25,71.94Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M907.2,73c-.27.15-.54.26-.42.52v.39l-.67,0v-.4l.4,0-.59-.94Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M911.59,139.91c.51.3.07,1.07.18,1.59-1,1.12-2.36.8-3.78.73.79-.49,1.29.18,2-.82l-.57-1.33c-.43.49-1.21.85-1.57.3C908.88,139.78,910.34,139.07,911.59,139.91Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M917.24,61.86l.48.94-1.62.82c.27-.1.54-.23.43-.49l-.38-.41L914.89,64c-.23-.68-.9-.33-1.29-.47l.92,0,0-.51.39.28.71-1.26-3.15-.16C914.08,61.84,915.7,61,917.24,61.86Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1068.06,179.48c.77-2-1.78-.89-2.38-1.72.7-.61,1.9.91,2.53-.49a2.35,2.35,0,0,0-2.82-.85l-.29,0c1.52-1.05,4.83.47,5.79-2.08-.65,0-1.23-1.13-.55-1.6,2.22,0,3.14-1.89,5.25-2.14l-.87-.71c1.73-.41,3.93.14,5.89.13-1.3-2.3,3.29-.06,3-2,1,1.5,2.48,2.37,3.32,1.51,2.15,1.43,4.87,4,4.69,6.83.81,1.64-.5,1.8-.9,3.76l-.36-.44c-.18.66-1.15,1.24-.39,1.94a3.3,3.3,0,0,0-2.62,1.67c-.08,1.3-1.34,2.53-2.38,2.07-.41.24-.3.62-.32.88a1.78,1.78,0,0,0-1.62.55c-2.68.75-5.71.68-8.48,2.85l1-.46-.45-1.08-2.37,2.06c.33-1.15,2.1-2.08,1.41-3.3-.88-.84-1.85,0-2.76.08l1-.6c-.84-1.1-2.54.61-3.77-.51,1.69-1.7.45-2.85-.93-3.84l-3.13-.21A3.43,3.43,0,0,0,1068.06,179.48Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M931.77,72.7c-.4.1-.42.49-.44.87.47,1,1.4.73,2.16,1.06l.45-.91c-.6-.93-1.21.47-1.54-.74.74-1.37,2.24.14,3.41.2.67,1.87-1.54,1.89-2.59,1.68-1.47.46-2.05-.9-3.07-1.36C930.41,73.39,931,72.25,931.77,72.7Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M952.53,78.87c1.53.75,2.85,2.65,2.26,3.54.22.79-.58,1.13-.74,1.54,1.56.33,3.29,1.87,2,3.64-5.1,2-9.31-2-11.7-3.58l1-.86-1.26-.72C946.44,79.81,949.13,78.41,952.53,78.87Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1178.06,107.11l-.64,0c.92-.22,1.5-1.1,2.29-1.72-.36-.41-.6-.81-1.26-.72l-.28.25c.29-.51,2.22.11,1.64-1.49l-.37-.27c2.85.54,3.49-2,6.07-1.52,2.19-2.38,4.66.63,6.49.59-.19,1,1,1.5,1.44,2.29l-.25,5.34c-1.07.46-1.63,1.49-2.61,2.61a7.71,7.71,0,0,1,3.61,4c1,3.07-2.24,3.15-3.12,5.18-1.28-.82-2.88-.14-4.09.44l-.68.51c1.3-2.28-2.53-1.69-3.94-2.29l-.91,0c.54-.48,1.58-.31,1.63-1.21l-2.23-.12a1.89,1.89,0,0,0,1.34-.6l-.59-.93c.5.15.66-.37.94-.61s-.37-.66-.61-.94l1.08-.59c-.75-.83-1.66-1-1.19-2.28l-3.1-.68,1-.62a1.47,1.47,0,0,0-1.54-.71l-.28.23.7-.87-2.2-.38C1176.67,108.88,1179.68,108.62,1178.06,107.11Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1002.47,155.18l-.6-.69c1.89-.91,3.65-4.05,7.16-3.56,2.08,0,3.18,1.13,5.19,2.17.82,3.33-.72,4.92-2.94,7-1.51-.74-4.49.88-6.28.51l-.44.36,1-.85-4.21-1.6C1002.05,157.65,1001.88,156.18,1002.47,155.18Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M856.33,182.97 C856.33333,182.88333 856.33667,182.79667 856.34,182.71 856.64333,182.72667 856.94667,182.74333 857.25,182.76 857.24667,182.84667 857.24333,182.93333 857.24,183.02 856.93667,183.00333 856.63333,182.98667 856.33,182.97 856.33,182.97 856.33,182.97 856.33,182.97 z"
            ></path>
            <path
              d="M973.22,99.87c0,.26-.29.49-.43.61.42-.49-.43-1.71-1.12-1C972.07,99.14,973.28,99,973.22,99.87Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M984.32,101.87l-.24-.39c-.38,0,1.61-.55,1-1.5,3.53-1.88,4.29,4.58,7.79,1.15,1.69,2,4.61,1.21,5.07,4.11,0,2.23-2.18,3.28-4,3.81l-2.9.46c.16-.52-.46-.82-.87-.71l-1.29-.08c1-1.77-1.78-.76-2.36-2l.39,0c-.14-2-2.27-1.06-3-2.68l-1-.46C982.83,102.7,983.89,102.52,984.32,101.87Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1066.25,113c-.87-.45,1.6-.28.36-1.29,1.42.1,1.28-1.47,2.33-1.67l-.25-.27c2.16,1.07,1.92-3.14,5.3-1,1.69-1.71,2.63,1.74,4.11,1.2,1.8,2.47,1.85,3.64.76,6.32-1.45,2-1,.58-2.93,2.67l-1.1.84c-.51-2.12-1.84,2.11-2.74-.18-1,.06-1.75.81-2.89.46a1,1,0,0,0,.44-.88c-.6-.7-1.56-.37-2.19-.53l.33-.9-1.53-.76c.39-.1.41-.49.44-.9l-1-.32C1065.13,114.23,1068,114.57,1066.25,113Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M969.64,203.41 C968.89333,203.44333 968.14667,203.47667 967.4,203.51 967.84333,203.45667 968.28667,203.40333 968.73,203.35 969.03333,203.37 969.33667,203.39 969.64,203.41 969.64,203.41 969.64,203.41 969.64,203.41 z"
            ></path>
            <path
              d="M1116.38,175.84l0-.92c1,.47.85-.85,1.39-1.21,1.83.25,4.49,0,4.91,1.87l-.83,2.81c-.89-.54-1.9.68-2.85,1,.2-1-1.69-.49-1.55-.62l.29-.36c-1.16-.36-1.39-.75-2.38-1.74A.67.67,0,0,0,1116.38,175.84Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#fff"
              d="M1018.39,253.18 C1018.39333,253.09333 1018.39667,253.00667 1018.4,252.92 1018.83333,252.94667 1019.26667,252.97333 1019.7,253 1019.69667,253.09 1019.69333,253.18 1019.69,253.27 1019.25667,253.24 1018.82333,253.21 1018.39,253.18 1018.39,253.18 1018.39,253.18 1018.39,253.18 z"
            ></path>
            <path
              d="M1120.61,246.91c1.73.11,3.37,1.9,2.05,3.65a3.36,3.36,0,0,1-3.64.43C1117.47,250.12,1117.84,246.21,1120.61,246.91Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1159.59,147.05c-.08-.92.17-.65.39-1.8,1-.34,2.91-.63,3.78.44a2.74,2.74,0,0,1-.17,3.13c-1.24.86-.95.35-2.3.8-.88-.83-2.3-1.16-2.08-2.59Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1167.72,143c.1.65-.32.9-.72,1.27-.52-.15-1.3-.59-.84-1.35Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1132.8,192.84a3.08,3.08,0,0,1,3-.72c.12.65,1.14,1.23.19,1.82a4.21,4.21,0,0,1-2.84.75c-.24-.53-1-1.1.09-1.56Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1134.35,193.59l.38.28c.69-.48-1.41,1.24-1.32-.33C1133.75,192.52,1134.11,193.32,1134.35,193.59Z"
              transform="translate(-98.55 75.74)"
              fill="#fff"
            ></path>
            <path
              d="M1166.64,215.81l-1.57-.74c1.19.31,1.9-.45,2.73-1.18a1,1,0,0,0-.35-.93c.93.31,1.5-.31,2.31-.52l-.61-1.23c3.33.72,9-1.23,11.06,3.71l-.91,4.9-.26-.26c-1.06,2.3-3.06,2.33-4.36,4.07l0,.67L1173.1,223c-.85.87-.37-.53-1.3-.44l-2.63,1.15c-.1-.51.44-.62.71-.87-.47-1.19-1.32-.32-2-.1.59-1-.7-2.12-2-3.88-.29.39-.66.22-1.08.2.66,0,1-.59,1.39-.83l0-.26-2.26-.52C1164.46,216.46,1166.81,217.62,1166.64,215.81Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1176.1,169.53c1-.62,1-1,.5-1.82l-.38-.4c-.54.1,1.06-.21,1.29.45.81-.47.38-2.07,1.93-1.47,1.12-.85-.45-1.45-.54-2.24,1.59,0,1.37,1.62,3.12,1.08,1.73-3,4.18,1,5.84-.37.26,0,1.84,0,1.79,1.14.53.15.7-.48,1-.6,1.54.72,1.8,3.62,3,3.54.89.57.71,1.48,1.49,2a1.4,1.4,0,0,0,.58,1.6c-2.16,1.08,2.17,2.07-.39,2.73-.43.88.88,1.35,1.11,1.62-.64.09-1.4-.73-2.24-.11,2.43,2.22-2,2-1.14,4.64-.51-.69-1.46-.07-1.62.56l0,.64c-1.39-1.35-2.45,1.07-3.5,1-.82.49-3.08-2.38-4.79.16-1.23.59-1.29-3.6-3.5-1.77l-1,.9c-.74-1.22,1.79-1.34.52-2.46-1.3-.59-1.1.84-2,1.07.16-.39,2.66-2.75-.1-3.4l-2.27.54c.42-.75,1.26-1.51,1.44-2.41-.44-1.71-2.29.4-1.94-.75.68-.37,1.74-.45,1.39-1.51l-2.18-1.39C1175.29,172.5,1174.51,169.82,1176.1,169.53Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1234.29,209.32c-.13-.17-.24-.41-.52-.31.17-1.28,2.23-2.37,1.75-4.09,2.29.08,1.85-3.57,4.25-2.6,1.08-.23.48-2.06,1.93-.86.41-.24.42-.63.43-1,2.66,1,5.41-.4,7.64,1.5,1.48.17,1.14,2.38,2.92,1.91l-.69.63c.5,1.45,3,2.16,1.5,4.08l.65,1.58c-1.25.88-1.7,2.32-2.15,4.11-.83.64-3,.33-2.64,2-1.86-.83-1.67,1.53-2.65,2.17l-.65-.68-1,1c-.11-.5.31-1-.23-1.29-1.49,0-2.34.87-3.31,1.75,0-.26-.11-.66.3-.9-.78-1.08-1.36.61-2.32.3l0-.64-1.22,0,.28-.38c-.76-1.31-2-.07-3-.11.15-.51,1.24-1.13.46-1.8l-1.3-1.36c-.14.38-.53.36-.94.35l1-1.91c-1-1.1-1.92,1.09-2.83.28C1234.59,212.45,1232.64,210.54,1234.29,209.32Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1217.48,123.52c.1.65.87,1.07.59,1.83-.72,1.29-2.25.33-2.62-.35C1216.67,124.13,1215.66,123.32,1217.48,123.52Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1234.67,70.68c.65-.23.89.3,1.26.71.47,1.06-1,1.65-1.61,2-1.41-.32,0-.52-1.25-1.22A1.9,1.9,0,0,1,1234.67,70.68Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1248.92,186c.8.41,1.74,0,2.24,1.1-.41.5-.44,1.69-1.39,1.8l-.93,0c-.65-.69,1.9-1,.05-1.83l-.69.9C1248.34,187.11,1248.12,186.32,1248.92,186Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1254.73,139.79a7.13,7.13,0,0,1,.73-2.46c1.49-1.27,3.32-1.22,5.3-1.17,2.06,1.89,3.49,2.32,3,4.77,1.17.8-1.5,1.53.34,2.23-.8.37-2.78.45-1.62,1.92.29-.92-2-.32-2.51-.06l0,.51c-.4,0-.62-.93-1.31-.55-.69,1.55-1.43-.7-2.49-.06.4-.26.28-.66.29-1-.25-.53-1-.17-1.58-.31l-.28.26.68-.51-1.27-1.61.67-.63-.91-.41Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1260.84,148.43c.42-.53,2.52.06,2.29-1.5.52.26.93-.25,1.2-.64l0-.65c.24.66.9.29,1.3.43.55-.24.16-.8.3-1.3.39.51.91.42,1.3.94l1.2-.48c0,.38.51.52.65.92,2-1.12,2.59,1.5,4.05,1.92,1.43.57-.06,2.87,2.18,3.2-2.44,2.28,1,4.07-1.72,6.87-.28,0-.66.11-.93-.28-.94.24-.69,1.54-.31,2.08-.67,0-.92-.55-1.31-.95-.84,2.46-3.46.56-4.54,1.46.16-1.18-1.44-.18-1.83-1l-.68.62.42-1.28c-.66.25-1.31-.55-2,.6-.62-1.45.34-3.51-1.79-3.17.8-.37.56-1.16.71-1.83C1258.22,152.92,1262.66,150.29,1260.84,148.43Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1292,167.15c.67-1.05-.79-1.71-1.18-1.83a1.81,1.81,0,0,0,.68-1.58c-.26-.65-.92-.27-1.31-.4.53-.78,2.64.54,2.26-1.15l-.66-.65,1.61-.63-.92-1.2c.81.27,2.8-.36,2.56-1.93l-.65-1.56c.26-.14.53.12.66.38,1.45-.24-.38-2.75,1.61-1.95-.52-2,1-3.77.71-4.93,1.06.39.8-.92,1.2-1.32.53,0,.79.54,1.34.42,0-1.71,1,.53,1.57-.63,1,.38,2,2,3.18.93-1.2,1.69,1.16,2.22,1.32,3.4,2.11-.25-.27-2.35,1.2-3.11.92,1.56-.69,3.51,2,3.79l.93-.91c.52.53.66,2.48,1.84,1.32l.94,1.84,1.06-.27c.13.41-.27.93.26,1.2s.66-.39.93-.65a2.75,2.75,0,0,0,.93,2.62l1.06-.39v2.48c2-.25-.26,1.95,1.87,2.23-1.87,1.28.67,2.49,1.33,2.89-.53.25-1.33.11-1.33.89-.68,1.69,1.33.93,1.88,1.58l-1.88.24a3.53,3.53,0,0,0,.27,2.62h.41c0,.77-2.55,1.79-.68,2.73-.28-.14-.41.12-.68.37-.53,1,1,1.32,1,2.09-.41.26-2.42-2.61-2.82,0l.27,2.87-1.21-2.2c-3.64,1-.83,6-4.85,6.21.14-1.44-1.47-1.71-2.29-1.59-1.88,0-1.22,2.6-3.23,2.19.42-2.48-2.95-3-4.15-2.25-1.09.53-.69,1.95-1.63,2.2-.27-.91,1.63-2.59,0-3.78l-1.64.9c.56-.64.16-1.83-.36-2.48l-1.23.63c.14-.64,1.24-1.41,0-1.82l-1.61.52c-.13-.66,1.08-.78.56-1.57-.4-.39-1.19-1.44-1.88-.54-.67.26,1.09-1.41-.65-2h-1.2c.55-.66,1.77-1,1.23-2.47l-2.26,0c.41-.51,1.34-.77,1.08-1.57l-2-.65C1290.35,168.3,1291.82,168.45,1292,167.15Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1120.3,94.23c1.42.35,3.31-.45,3.94,1.81-.24,1.7-1,5-3.34,3.57l-.7.63-1.73-1.69c1.12-1.09-1.17-2,.2-3.12C1119.32,95.34,1120.51,95.29,1120.3,94.23Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1127.87,98.48l1.86-.54Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M1035.02,172.72 C1034.18,172.97667 1033.34,173.23333 1032.5,173.49 1032.50667,173.36667 1032.51333,173.24333 1032.52,173.12 1032.29667,173.23 1032.07333,173.34 1031.85,173.45 1031.86333,173.23667 1031.87667,173.02333 1031.89,172.81 1032.93333,172.78 1033.97667,172.75 1035.02,172.72 1035.02,172.72 1035.02,172.72 1035.02,172.72 z"
            ></path>
            <path
              d="M1137.12,94.32c-.27.12-.38-.13-.63-.28.53-.25.92-.22,1.33-.59l-1.52-.75c1.31-.17,1.89-1.06,2.6-2.06l-.23-.28c2-1.72,5.28-1.53,7.46-.86,1.5,1.15,2.94,3.29,5.18,2.78.58,1.1-1.48.71-.35,1.56s1.25,3.07,1.94,4.56c-2,1.06-1.55,2.25-2.17,3.92-.56.62-2.23.39-1.67,1.84l-.85-1.08c-1.21.58-.51,1.93-.83,2.83l-1.47-1.39c-.87,1.38-3.31.85-4.38,1.3-1.33-1.9-3.42.31-4.53,1.31-.57-1.22,2.27-3,.54-4.68-.27.24-.43.75-.94.6-1.47-1.53,2.09-2.23.2-3.39l-3.26,2.3C1135.53,99.2,1138.22,97.91,1137.12,94.32Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              d="M1134.76,96.66l1.34-.57Z"
              transform="translate(-98.55 75.74)"
              fill="#afa086"
            ></path>
            <path
              fill="#afa086"
              d="M1048.58,186.08 C1048.5,186.07667 1048.42,186.07333 1048.34,186.07 1048.36,185.72 1048.38,185.37 1048.4,185.02 1048.46,185.37333 1048.52,185.72667 1048.58,186.08 1048.58,186.08 1048.58,186.08 1048.58,186.08 z"
            ></path>
          </g>
        </g>
      </g>
      {/* <g id="moon">
        <path
          id="circlebackground"
          d="M420.84,313.42c0,64.89-49.18,117.5-109.86,117.5s-109.86-52.61-109.86-117.5S250.31,195.92,311,195.92C371.55,196.19,420.59,248.64,420.84,313.42Z"
          transform="translate(-98.55 75.74)"
          fill="#565656"
        ></path>
        <g id="innerobjects">
          <path
            id="shine2"
            d="M214.52,296.21a3.7,3.7,0,0,1-.66-.07,3.57,3.57,0,0,1-2.62-4.21h0a112.79,112.79,0,0,1,18.27-43.6,3.2,3.2,0,0,1,4.68-.71,3.75,3.75,0,0,1,.67,5,105.42,105.42,0,0,0-17.07,40.73,3.42,3.42,0,0,1-3.27,2.87Z"
            transform="translate(-98.55 75.74)"
            fill="#cdcdcd"
          ></path>
          <path
            id="shine1"
            d="M246.53,237.55a3.47,3.47,0,0,1-3.35-3.58,3.7,3.7,0,0,1,1.15-2.7A102.88,102.88,0,0,1,255,222.59a3.22,3.22,0,0,1,4.62,1.08,3.74,3.74,0,0,1-.94,4.89,96.33,96.33,0,0,0-10,8.11A3.21,3.21,0,0,1,246.53,237.55Z"
            transform="translate(-98.55 75.74)"
            fill="#cdcdcd"
          ></path>
          <path
            fill="#cdcdcd"
            id="hole6"
            d="M199.72,359.06 C199.72,369.04531 192.15361,377.14 182.82,377.14 173.48639,377.14 165.92,369.04531 165.92,359.06 165.92,349.07469 173.48639,340.98 182.82,340.98 192.15361,340.98 199.72,349.07469 199.72,359.06 z"
          ></path>
          <path
            id="hole5"
            d="M418.74,336.39a122.5,122.5,0,0,1-11.14,33c-9.29-1-16-9.9-15.09-19.83s9.25-17.16,18.53-16.14A16.2,16.2,0,0,1,418.74,336.39Z"
            transform="translate(-98.55 75.74)"
            fill="#cdcdcd"
          ></path>
          <path
            fill="#cdcdcd"
            id="hole4"
            d="M208.33,435.08 C208.33,445.06531 200.76361,453.16 191.43,453.16 182.09639,453.16 174.53,445.06531 174.53,435.08 174.53,425.09469 182.09639,417 191.43,417 200.76361,417 208.33,425.09469 208.33,435.08 z"
          ></path>
          <path
            fill="#cdcdcd"
            id="hole3"
            d="M256.73,447.34 C256.73,454.11101 251.59918,459.6 245.27,459.6 238.94082,459.6 233.81,454.11101 233.81,447.34 233.81,440.56899 238.94082,435.08 245.27,435.08 251.59918,435.08 256.73,440.56899 256.73,447.34 z"
          ></path>
          <path
            fill="#cdcdcd"
            id="hole2"
            d="M270.12,365.23 C270.12,372.00101 264.98918,377.49 258.66,377.49 252.33082,377.49 247.2,372.00101 247.2,365.23 247.2,358.45899 252.33082,352.97 258.66,352.97 264.98918,352.97 270.12,358.45899 270.12,365.23 z"
          ></path>
          <path
            fill="#cdcdcd"
            id="hole1"
            d="M254.81,335.78 C254.81,339.16551 252.24459,341.91 249.08,341.91 245.91541,341.91 243.35,339.16551 243.35,335.78 243.35,332.39449 245.91541,329.65 249.08,329.65 252.24459,329.65 254.81,332.39449 254.81,335.78 z"
          ></path>
        </g>
      </g> */}
      <g id="ufo">
        <path
          id="wheels"
          d="M311,341.24c-5,0-9.18,4.41-9.18,9.81s4.13,9.82,9.18,9.82,9.18-4.42,9.18-9.82S316.07,341.24,311,341.24Zm24.48-6.55c-5.05,0-9.18,4.42-9.18,9.82s4.13,9.82,9.18,9.82,9.18-4.42,9.18-9.82S340.55,334.69,335.5,334.69Zm-49,0c-5.05,0-9.18,4.42-9.18,9.82s4.13,9.82,9.18,9.82,9.18-4.42,9.18-9.82S291.59,334.69,286.54,334.69Z"
          transform="translate(-98.55 75.74)"
          fill="#324d5b"
        ></path>
        <path
          id="base"
          d="M282.87,309.66c15.53-10.23,40.7-10.23,56.23,0s15.53,26.83,0,37-40.7,10.22-56.23,0S267.34,319.88,282.87,309.66Z"
          transform="translate(-98.55 75.74)"
          fill="#dfd8c8"
        ></path>
        <path
          id="baseshadow"
          d="M286.7,344.18c-15-9.9-15.53-25.69-1.53-35.92-.77.41-1.53.9-2.3,1.4-15.53,10.22-15.53,26.83,0,37s40.7,10.22,56.23,0c.53-.33,1.07-.74,1.53-1.07C325,354.41,301.46,353.92,286.7,344.18Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          id="saucer"
          d="M276.37,291.41c19.12-12.11,50.1-12.11,69.23,0s19.12,31.83,0,43.94-50.11,12.1-69.23,0S257.24,303.6,276.37,291.41Z"
          transform="translate(-98.55 75.74)"
          fill="#324d5b"
        ></path>
        <path
          id="saucershadow"
          d="M348.73,332.16c-19.12,12.1-50.1,12.1-69.23,0-15.45-9.82-18.43-24.47-9-36.17-12.93,12.11-10.94,28.72,5.89,39.44,19.12,12.11,50.1,12.11,69.23,0a39.15,39.15,0,0,0,8.95-7.77A46.78,46.78,0,0,1,348.73,332.16Z"
          transform="translate(-98.55 75.74)"
          fill="#2d4552"
        ></path>
        <path
          id="bubble"
          d="M311,266c16.91,0,30.6,14.64,30.6,32.72s-13.69,26.18-30.6,26.18-30.6-8.1-30.6-26.18S294.12,266,311,266Z"
          transform="translate(-98.55 75.74)"
          fill="#e4e7e7"
        ></path>
        <path
          id="leftbubble"
          d="M280.42,298.69c0,18,13.62,26.1,30.37,26.18H311V266C294.12,266,280.42,280.61,280.42,298.69Z"
          transform="translate(-98.55 75.74)"
          fill="#d8dbdb"
        ></path>
        <path
          id="head"
          d="M311,324.87c6.89,0,13.24-1.31,18.36-4.17v-22c0-10.88-8.18-19.63-18.36-19.63s-18.36,8.75-18.36,19.63v22C297.79,323.56,304.14,324.87,311,324.87Z"
          transform="translate(-98.55 75.74)"
          fill="#3db39e"
        ></path>
        <path
          id="lefthead"
          d="M292.66,298.69v22a38,38,0,0,0,18.21,4.17H311V279.06C300.85,279.06,292.66,287.89,292.66,298.69Z"
          transform="translate(-98.55 75.74)"
          fill="#3aaa96"
        ></path>
        <path
          id="eyebackground"
          d="M311,292.15c5.05,0,9.18,4.41,9.18,9.81s-4.13,9.82-9.18,9.82-9.18-4.42-9.18-9.82S306,292.15,311,292.15Z"
          transform="translate(-98.55 75.74)"
          fill="#fff"
        ></path>
        <path
          id="leftshadow"
          d="M311,292.15c-5,0-9.18,4.41-9.18,9.81s4.13,9.82,9.18,9.82Z"
          transform="translate(-98.55 75.74)"
          fill="#f2f2f2"
        ></path>
        <path
          id="eye"
          d="M311,297.06a4.92,4.92,0,1,1-4.59,4.9A4.76,4.76,0,0,1,311,297.06Z"
          transform="translate(-98.55 75.74)"
          fill="#324d5b"
        ></path>
        <path
          id="lefteye"
          d="M311,297.06a4.92,4.92,0,0,0,0,9.81Z"
          transform="translate(-98.55 75.74)"
          fill="#2f4956"
        ></path>
      </g>
      <g id="topmoon" ref={topmoon}>
        <path
          id="circlebackground-2"
          data-name="circlebackground"
          d="M420.84,313.42c0,64.89-49.18,117.5-109.86,117.5s-109.86-52.61-109.86-117.5S250.31,195.92,311,195.92C371.55,196.19,420.59,248.64,420.84,313.42Z"
          transform="translate(-98.55 75.74)"
          fill="#565656"
        ></path>
        <g id="innerobjects-2" data-name="innerobjects">
          <path
            id="shine2-2"
            data-name="shine2"
            d="M214.52,296.21a3.7,3.7,0,0,1-.66-.07,3.57,3.57,0,0,1-2.62-4.21h0a112.79,112.79,0,0,1,18.27-43.6,3.2,3.2,0,0,1,4.68-.71,3.75,3.75,0,0,1,.67,5,105.42,105.42,0,0,0-17.07,40.73,3.42,3.42,0,0,1-3.27,2.87Z"
            transform="translate(-98.55 75.74)"
            fill="#cdcdcd"
          ></path>
          <path
            id="shine1-2"
            data-name="shine1"
            d="M246.53,237.55a3.47,3.47,0,0,1-3.35-3.58,3.7,3.7,0,0,1,1.15-2.7A102.88,102.88,0,0,1,255,222.59a3.22,3.22,0,0,1,4.62,1.08,3.74,3.74,0,0,1-.94,4.89,96.33,96.33,0,0,0-10,8.11A3.21,3.21,0,0,1,246.53,237.55Z"
            transform="translate(-98.55 75.74)"
            fill="#cdcdcd"
          ></path>
          <path
            fill="#cdcdcd"
            data-name="hole6"
            id="hole6-2"
            d="M199.72,359.06 C199.72,369.04531 192.15361,377.14 182.82,377.14 173.48639,377.14 165.92,369.04531 165.92,359.06 165.92,349.07469 173.48639,340.98 182.82,340.98 192.15361,340.98 199.72,349.07469 199.72,359.06 z"
          ></path>
          <path
            id="hole5-2"
            data-name="hole5"
            d="M418.74,336.39a122.5,122.5,0,0,1-11.14,33c-9.29-1-16-9.9-15.09-19.83s9.25-17.16,18.53-16.14A16.2,16.2,0,0,1,418.74,336.39Z"
            transform="translate(-98.55 75.74)"
            fill="#cdcdcd"
          ></path>
          <path
            fill="#cdcdcd"
            data-name="hole4"
            id="hole4-2"
            d="M208.33,435.08 C208.33,445.06531 200.76361,453.16 191.43,453.16 182.09639,453.16 174.53,445.06531 174.53,435.08 174.53,425.09469 182.09639,417 191.43,417 200.76361,417 208.33,425.09469 208.33,435.08 z"
          ></path>
          <path
            fill="#cdcdcd"
            data-name="hole3"
            id="hole3-2"
            d="M256.73,447.34 C256.73,454.11101 251.59918,459.6 245.27,459.6 238.94082,459.6 233.81,454.11101 233.81,447.34 233.81,440.56899 238.94082,435.08 245.27,435.08 251.59918,435.08 256.73,440.56899 256.73,447.34 z"
          ></path>
          <path
            fill="#cdcdcd"
            data-name="hole2"
            id="hole2-2"
            d="M270.12,365.23 C270.12,372.00101 264.98918,377.49 258.66,377.49 252.33082,377.49 247.2,372.00101 247.2,365.23 247.2,358.45899 252.33082,352.97 258.66,352.97 264.98918,352.97 270.12,358.45899 270.12,365.23 z"
          ></path>
          <path
            fill="#cdcdcd"
            data-name="hole1"
            id="hole1-2"
            d="M254.81,335.78 C254.81,339.16551 252.24459,341.91 249.08,341.91 245.91541,341.91 243.35,339.16551 243.35,335.78 243.35,332.39449 245.91541,329.65 249.08,329.65 252.24459,329.65 254.81,332.39449 254.81,335.78 z"
          ></path>
        </g>
      </g>
      <g id="aaronBlumOutline">
        <path
          ref={path1}
          d="M326.73,131.4H272.21l-9.27,33.83H246.58L285.11,29.16h28.72l38.53,136.07H336ZM298.38,36.15l-22,80.09h46.16l-22-80.09Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke="#3a4a6fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        ></path>
        <path
          ref={path2}
          d="M436.33,148.9h-2.19q-4.35,9.72-12.08,14.38A31,31,0,0,1,405.79,168a42.23,42.23,0,0,1-16.54-3.21,37.26,37.26,0,0,1-13.35-9.53,45.48,45.48,0,0,1-9-15.45,62.77,62.77,0,0,1-3.27-21.19v-3.11a62.13,62.13,0,0,1,3.27-21,45.48,45.48,0,0,1,9-15.45,38.54,38.54,0,0,1,13.35-9.63,40.33,40.33,0,0,1,16.18-3.3,33,33,0,0,1,16.81,4.37A29.9,29.9,0,0,1,434.14,84h2.19V68.81H450.5V145.4q0,5.83,4.91,5.83H460v14h-9.63A13.06,13.06,0,0,1,440.23,161a15.54,15.54,0,0,1-3.9-10.89Zm-29.08,4.66A27.22,27.22,0,0,0,419,151a26.3,26.3,0,0,0,9.18-7.2,35,35,0,0,0,6-11.17,45.25,45.25,0,0,0,2.19-14.49v-2.33a44.66,44.66,0,0,0-2.19-14.29,34,34,0,0,0-6.08-11.17,28.2,28.2,0,0,0-9.27-7.29,25.94,25.94,0,0,0-11.54-2.63A26.65,26.65,0,0,0,395.61,83a27.77,27.77,0,0,0-9.17,7.1,32.71,32.71,0,0,0-6.09,11.08,44.55,44.55,0,0,0-2.18,14.28v3.11q0,16.53,8.08,25.76T407.25,153.56Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke="#3a4a6fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        ></path>
        <path
          ref={path3}
          d="M477,68.81h32.71V81.64h2.18a24.44,24.44,0,0,1,9.82-11.76,27.81,27.81,0,0,1,14.54-3.79q13.62,0,22,9.52t8.9,27.8l-14.9,2.33q0-13.41-6-19.34a20.14,20.14,0,0,0-14.72-5.93,19.22,19.22,0,0,0-9.72,2.34A20.06,20.06,0,0,0,515,89.22a28.77,28.77,0,0,0-4,9.53,51,51,0,0,0-1.27,11.66v40.82h22.9v14H474.86v-14h20.72V82.81H477Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke="#3a4a6fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        ></path>
        <path
          ref={path4}
          d="M678.41,118.18a56.63,56.63,0,0,1-3.72,21.29A47.19,47.19,0,0,1,664.78,155a41.57,41.57,0,0,1-14.45,9.62,46.45,46.45,0,0,1-34.44,0A41.77,41.77,0,0,1,601.53,155a47,47,0,0,1-9.9-15.55,56.43,56.43,0,0,1-3.73-21.29v-2.33a55.91,55.91,0,0,1,3.73-21.09,47.53,47.53,0,0,1,10-15.65,42.26,42.26,0,0,1,14.45-9.72,45.88,45.88,0,0,1,34.17,0,42.26,42.26,0,0,1,14.45,9.72,47.72,47.72,0,0,1,10,15.65,56.11,56.11,0,0,1,3.72,21.09Zm-45.25,35.38a29.73,29.73,0,0,0,12.08-2.43A28.09,28.09,0,0,0,655,144a34,34,0,0,0,6.54-11.18,42.93,42.93,0,0,0,2.36-14.68v-2.33a41.8,41.8,0,0,0-2.36-14.29A34,34,0,0,0,655,90.39a30.17,30.17,0,0,0-9.82-7.29,28.67,28.67,0,0,0-24,0,30.13,30.13,0,0,0-9.81,7.29,33.84,33.84,0,0,0-6.55,11.17,41.8,41.8,0,0,0-2.36,14.29v2.33a42.93,42.93,0,0,0,2.36,14.68A33.89,33.89,0,0,0,611.35,144a28,28,0,0,0,9.72,7.09A29.81,29.81,0,0,0,633.16,153.56Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke="#3a4a6fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        ></path>
        <path
          ref={path5}
          d="M718.76,165.23H704.58V68.81h14.18V85.14h2.18q8.35-19,29.08-19,15.63,0,24.9,10.4t9.27,31.2v57.54H770V110.8q0-15.17-6.36-22.75t-17.26-7.58q-12.92,0-20.27,9.43t-7.36,25.17Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke="#3a4a6fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        ></path>
        <path
          ref={path6}
          d="M921.59,150.06h10.9V44.32h-10.9V29.16H973a44.08,44.08,0,0,1,16.09,2.72,34.88,34.88,0,0,1,11.81,7.38,30.21,30.21,0,0,1,7.27,11.18,39.55,39.55,0,0,1,2.45,14.09v2.34a31,31,0,0,1-1.63,10.3,28.75,28.75,0,0,1-4.55,8.36,29.86,29.86,0,0,1-6.81,6.32,31.59,31.59,0,0,1-8.45,4v2.33a30.52,30.52,0,0,1,15.26,10.4q6.18,7.68,6.18,18.76v2.33a39.56,39.56,0,0,1-2.45,14.1,31.06,31.06,0,0,1-7.27,11.27,34,34,0,0,1-11.81,7.48A44.08,44.08,0,0,1,973,165.23H921.59Zm26.17-60.64h24.72q10.9,0,17.26-6t6.36-16.52V65.7q0-9.91-6.72-15.65t-17.45-5.73H947.76Zm0,60.64h24.17q10.73,0,17.45-5.73t6.72-15.84v-1.17q0-10.5-6.36-16.62t-17.26-6.12H947.76Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke="#3a4a6fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        ></path>
        <path
          ref={path7}
          d="M1038.27,151.23H1071V43.15h-31.62v-14h45.8V151.23h32.71v14h-79.6Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke="#3a4a6fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        ></path>
        <path
          ref={path8}
          d="M1213.84,68.81H1228v96.42h-14.17v-17.5h-2.19a38.82,38.82,0,0,1-11.45,14.77q-7.08,5.44-18,5.45a35.17,35.17,0,0,1-13.72-2.63,28,28,0,0,1-10.72-7.87,37.2,37.2,0,0,1-6.91-13,60.09,60.09,0,0,1-2.45-18.08V68.81h14.17V124.4q0,15.16,5.82,22.16t17.81,7q12.9,0,20.26-9.43t7.37-25.17Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke="#3a4a6fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        ></path>
        <path
          ref={path9}
          d="M1347.42,165.23h-14.18V96q0-6.8-2.9-11.17t-9.27-4.38a11.77,11.77,0,0,0-9.73,4.77q-3.72,4.76-3.72,14.67v65.32h-14.18v-70a16.69,16.69,0,0,0-3.27-10.6,10.53,10.53,0,0,0-8.72-4.18,11.58,11.58,0,0,0-10.09,5.06q-3.54,5.06-3.55,13.22v66.48h-14.17V68.81h14.17v10.5H1270q2.36-6.81,6.9-10a18.1,18.1,0,0,1,10.72-3.21,16,16,0,0,1,10.82,3.69,19.16,19.16,0,0,1,5.91,9.53h2.18q6.17-13.22,19.62-13.22,10.18,0,15.73,6.9t5.54,18Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke="#3a4a6fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        ></path>
      </g>
      <g id="aaronBlumSolid">
        <path
          ref={pathsolid1}
          d="M326.73,131.4H272.21l-9.27,33.83H246.58L285.11,29.16h28.72l38.53,136.07H336ZM298.38,36.15l-22,80.09h46.16l-22-80.09Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={pathsolid2}
          d="M436.33,148.9h-2.19q-4.35,9.72-12.08,14.38A31,31,0,0,1,405.79,168a42.23,42.23,0,0,1-16.54-3.21,37.26,37.26,0,0,1-13.35-9.53,45.48,45.48,0,0,1-9-15.45,62.77,62.77,0,0,1-3.27-21.19v-3.11a62.13,62.13,0,0,1,3.27-21,45.48,45.48,0,0,1,9-15.45,38.54,38.54,0,0,1,13.35-9.63,40.33,40.33,0,0,1,16.18-3.3,33,33,0,0,1,16.81,4.37A29.9,29.9,0,0,1,434.14,84h2.19V68.81H450.5V145.4q0,5.83,4.91,5.83H460v14h-9.63A13.06,13.06,0,0,1,440.23,161a15.54,15.54,0,0,1-3.9-10.89Zm-29.08,4.66A27.22,27.22,0,0,0,419,151a26.3,26.3,0,0,0,9.18-7.2,35,35,0,0,0,6-11.17,45.25,45.25,0,0,0,2.19-14.49v-2.33a44.66,44.66,0,0,0-2.19-14.29,34,34,0,0,0-6.08-11.17,28.2,28.2,0,0,0-9.27-7.29,25.94,25.94,0,0,0-11.54-2.63A26.65,26.65,0,0,0,395.61,83a27.77,27.77,0,0,0-9.17,7.1,32.71,32.71,0,0,0-6.09,11.08,44.55,44.55,0,0,0-2.18,14.28v3.11q0,16.53,8.08,25.76T407.25,153.56Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={pathsolid3}
          d="M477,68.81h32.71V81.64h2.18a24.44,24.44,0,0,1,9.82-11.76,27.81,27.81,0,0,1,14.54-3.79q13.62,0,22,9.52t8.9,27.8l-14.9,2.33q0-13.41-6-19.34a20.14,20.14,0,0,0-14.72-5.93,19.22,19.22,0,0,0-9.72,2.34A20.06,20.06,0,0,0,515,89.22a28.77,28.77,0,0,0-4,9.53,51,51,0,0,0-1.27,11.66v40.82h22.9v14H474.86v-14h20.72V82.81H477Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={pathsolid4}
          d="M678.41,118.18a56.63,56.63,0,0,1-3.72,21.29A47.19,47.19,0,0,1,664.78,155a41.57,41.57,0,0,1-14.45,9.62,46.45,46.45,0,0,1-34.44,0A41.77,41.77,0,0,1,601.53,155a47,47,0,0,1-9.9-15.55,56.43,56.43,0,0,1-3.73-21.29v-2.33a55.91,55.91,0,0,1,3.73-21.09,47.53,47.53,0,0,1,10-15.65,42.26,42.26,0,0,1,14.45-9.72,45.88,45.88,0,0,1,34.17,0,42.26,42.26,0,0,1,14.45,9.72,47.72,47.72,0,0,1,10,15.65,56.11,56.11,0,0,1,3.72,21.09Zm-45.25,35.38a29.73,29.73,0,0,0,12.08-2.43A28.09,28.09,0,0,0,655,144a34,34,0,0,0,6.54-11.18,42.93,42.93,0,0,0,2.36-14.68v-2.33a41.8,41.8,0,0,0-2.36-14.29A34,34,0,0,0,655,90.39a30.17,30.17,0,0,0-9.82-7.29,28.67,28.67,0,0,0-24,0,30.13,30.13,0,0,0-9.81,7.29,33.84,33.84,0,0,0-6.55,11.17,41.8,41.8,0,0,0-2.36,14.29v2.33a42.93,42.93,0,0,0,2.36,14.68A33.89,33.89,0,0,0,611.35,144a28,28,0,0,0,9.72,7.09A29.81,29.81,0,0,0,633.16,153.56Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={pathsolid5}
          d="M718.76,165.23H704.58V68.81h14.18V85.14h2.18q8.35-19,29.08-19,15.63,0,24.9,10.4t9.27,31.2v57.54H770V110.8q0-15.17-6.36-22.75t-17.26-7.58q-12.92,0-20.27,9.43t-7.36,25.17Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={pathsolid6}
          d="M921.59,150.06h10.9V44.32h-10.9V29.16H973a44.08,44.08,0,0,1,16.09,2.72,34.88,34.88,0,0,1,11.81,7.38,30.21,30.21,0,0,1,7.27,11.18,39.55,39.55,0,0,1,2.45,14.09v2.34a31,31,0,0,1-1.63,10.3,28.75,28.75,0,0,1-4.55,8.36,29.86,29.86,0,0,1-6.81,6.32,31.59,31.59,0,0,1-8.45,4v2.33a30.52,30.52,0,0,1,15.26,10.4q6.18,7.68,6.18,18.76v2.33a39.56,39.56,0,0,1-2.45,14.1,31.06,31.06,0,0,1-7.27,11.27,34,34,0,0,1-11.81,7.48A44.08,44.08,0,0,1,973,165.23H921.59Zm26.17-60.64h24.72q10.9,0,17.26-6t6.36-16.52V65.7q0-9.91-6.72-15.65t-17.45-5.73H947.76Zm0,60.64h24.17q10.73,0,17.45-5.73t6.72-15.84v-1.17q0-10.5-6.36-16.62t-17.26-6.12H947.76Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={pathsolid7}
          d="M1038.27,151.23H1071V43.15h-31.62v-14h45.8V151.23h32.71v14h-79.6Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={pathsolid8}
          d="M1213.84,68.81H1228v96.42h-14.17v-17.5h-2.19a38.82,38.82,0,0,1-11.45,14.77q-7.08,5.44-18,5.45a35.17,35.17,0,0,1-13.72-2.63,28,28,0,0,1-10.72-7.87,37.2,37.2,0,0,1-6.91-13,60.09,60.09,0,0,1-2.45-18.08V68.81h14.17V124.4q0,15.16,5.82,22.16t17.81,7q12.9,0,20.26-9.43t7.37-25.17Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={pathsolid9}
          d="M1347.42,165.23h-14.18V96q0-6.8-2.9-11.17t-9.27-4.38a11.77,11.77,0,0,0-9.73,4.77q-3.72,4.76-3.72,14.67v65.32h-14.18v-70a16.69,16.69,0,0,0-3.27-10.6,10.53,10.53,0,0,0-8.72-4.18,11.58,11.58,0,0,0-10.09,5.06q-3.54,5.06-3.55,13.22v66.48h-14.17V68.81h14.17v10.5H1270q2.36-6.81,6.9-10a18.1,18.1,0,0,1,10.72-3.21,16,16,0,0,1,10.82,3.69,19.16,19.16,0,0,1,5.91,9.53h2.18q6.17-13.22,19.62-13.22,10.18,0,15.73,6.9t5.54,18Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
      </g>
      <g id="developer">
        <path
          ref={developerD}
          d="M823,337h-1.27a16.39,16.39,0,0,1-3.21,4.51,19.38,19.38,0,0,1-4.22,3.16,20.25,20.25,0,0,1-4.8,1.86,20.48,20.48,0,0,1-4.85.62,24.86,24.86,0,0,1-9.8-1.92,23.54,23.54,0,0,1-8-5.53,25.46,25.46,0,0,1-5.37-9,35.39,35.39,0,0,1-1.95-12.23v-1.81a34.39,34.39,0,0,1,2-12.12,27.12,27.12,0,0,1,5.37-9,22.6,22.6,0,0,1,7.91-5.59,24.5,24.5,0,0,1,9.59-1.91,20.85,20.85,0,0,1,10.07,2.53,16.89,16.89,0,0,1,7.22,7.84H823V266.64h8.22v78.92H823Zm-17.5,1.8a16.19,16.19,0,0,0,6.85-1.46,16.6,16.6,0,0,0,5.53-4.17,20.37,20.37,0,0,0,3.75-6.49,24.5,24.5,0,0,0,1.37-8.4v-1.35a24.27,24.27,0,0,0-1.37-8.29,20.32,20.32,0,0,0-3.75-6.48,17.21,17.21,0,0,0-5.58-4.23,15.79,15.79,0,0,0-6.8-1.52,16.45,16.45,0,0,0-6.91,1.47,16.23,16.23,0,0,0-5.58,4.17,19.15,19.15,0,0,0-3.69,6.42,24.5,24.5,0,0,0-1.32,8.23v1.81a25.15,25.15,0,0,0,1.32,8.45,18.44,18.44,0,0,0,3.69,6.37,16.15,16.15,0,0,0,5.53,4.06A16.91,16.91,0,0,0,805.54,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerExtraD}
          d="M823,337h-1.27a16.39,16.39,0,0,1-3.21,4.51,19.38,19.38,0,0,1-4.22,3.16,20.25,20.25,0,0,1-4.8,1.86,20.48,20.48,0,0,1-4.85.62,24.86,24.86,0,0,1-9.8-1.92,23.54,23.54,0,0,1-8-5.53,25.46,25.46,0,0,1-5.37-9,35.39,35.39,0,0,1-1.95-12.23v-1.81a34.39,34.39,0,0,1,2-12.12,27.12,27.12,0,0,1,5.37-9,22.6,22.6,0,0,1,7.91-5.59,24.5,24.5,0,0,1,9.59-1.91,20.85,20.85,0,0,1,10.07,2.53,16.89,16.89,0,0,1,7.22,7.84H823V266.64h8.22v78.92H823Zm-17.5,1.8a16.19,16.19,0,0,0,6.85-1.46,16.6,16.6,0,0,0,5.53-4.17,20.37,20.37,0,0,0,3.75-6.49,24.5,24.5,0,0,0,1.37-8.4v-1.35a24.27,24.27,0,0,0-1.37-8.29,20.32,20.32,0,0,0-3.75-6.48,17.21,17.21,0,0,0-5.58-4.23,15.79,15.79,0,0,0-6.8-1.52,16.45,16.45,0,0,0-6.91,1.47,16.23,16.23,0,0,0-5.58,4.17,19.15,19.15,0,0,0-3.69,6.42,24.5,24.5,0,0,0-1.32,8.23v1.81a25.15,25.15,0,0,0,1.32,8.45,18.44,18.44,0,0,0,3.69,6.37,16.15,16.15,0,0,0,5.53,4.06A16.91,16.91,0,0,0,805.54,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerE1}
          d="M853.08,320.3q.31,8.35,4.85,13.42t12.65,5.07a20.67,20.67,0,0,0,6.43-.9,14.74,14.74,0,0,0,4.69-2.48,13.25,13.25,0,0,0,3.16-3.66,21.45,21.45,0,0,0,1.95-4.46l7.8,2.26a24.77,24.77,0,0,1-8.17,12.68q-6,4.9-16.07,4.91a25,25,0,0,1-10.28-2.09,23.08,23.08,0,0,1-8.07-5.92,27.9,27.9,0,0,1-5.27-9.13,34.69,34.69,0,0,1-1.89-11.73v-2.7a30.23,30.23,0,0,1,1.95-10.94,26.39,26.39,0,0,1,5.42-8.74,25.62,25.62,0,0,1,8.17-5.75,24.78,24.78,0,0,1,10.18-2.08,23.08,23.08,0,0,1,11.12,2.53A24.85,24.85,0,0,1,893.82,305a26.47,26.47,0,0,1,1.42,8.12v7.21Zm17.5-23.9a17.57,17.57,0,0,0-6.49,1.19,16.09,16.09,0,0,0-5.27,3.32,17.59,17.59,0,0,0-3.69,5,19.27,19.27,0,0,0-1.84,6.26H887a17,17,0,0,0-1.63-6.54,15.81,15.81,0,0,0-3.69-5,16.69,16.69,0,0,0-5.17-3.16A16.32,16.32,0,0,0,870.58,296.4Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerV}
          d="M942.68,345.56H926.45l-18.24-55.92h9.7l16,51.86h1.26l16-51.86h9.7Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerE2}
          d="M982.1,320.3q.31,8.35,4.85,13.42t12.65,5.07a20.67,20.67,0,0,0,6.43-.9,14.64,14.64,0,0,0,4.69-2.48,13.29,13.29,0,0,0,3.17-3.66,22.57,22.57,0,0,0,2-4.46l7.8,2.26a24.83,24.83,0,0,1-8.17,12.68q-6,4.9-16.08,4.91a25.06,25.06,0,0,1-10.28-2.09,23.14,23.14,0,0,1-8.06-5.92,27.73,27.73,0,0,1-5.27-9.13,34.44,34.44,0,0,1-1.9-11.73v-2.7a30.23,30.23,0,0,1,2-10.94,26.25,26.25,0,0,1,5.43-8.74,25.51,25.51,0,0,1,8.17-5.75,24.77,24.77,0,0,1,10.17-2.08,23,23,0,0,1,11.12,2.53A24.82,24.82,0,0,1,1022.85,305a26.78,26.78,0,0,1,1.42,8.12v7.21Zm17.5-23.9a17.48,17.48,0,0,0-6.48,1.19,16.09,16.09,0,0,0-5.27,3.32,17.59,17.59,0,0,0-3.69,5,19.28,19.28,0,0,0-1.85,6.26h33.74a17.22,17.22,0,0,0-1.64-6.54,15.81,15.81,0,0,0-3.69-5,16.64,16.64,0,0,0-5.16-3.16A16.38,16.38,0,0,0,999.6,296.4Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerL}
          d="M1040.61,337.44h19V274.75h-18.34v-8.11h26.56v70.8h19v8.12h-46.17Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerO}
          d="M1154.45,318.27a32.84,32.84,0,0,1-2.16,12.35,27.3,27.3,0,0,1-5.74,9,24.24,24.24,0,0,1-8.38,5.58,26.95,26.95,0,0,1-20,0,24.33,24.33,0,0,1-8.33-5.58,27.3,27.3,0,0,1-5.74-9,32.84,32.84,0,0,1-2.16-12.35v-1.35a32.49,32.49,0,0,1,2.16-12.23,27.48,27.48,0,0,1,5.8-9.08,24.41,24.41,0,0,1,8.38-5.64,26.64,26.64,0,0,1,19.81,0,24.45,24.45,0,0,1,8.39,5.64,27.62,27.62,0,0,1,5.79,9.08,32.49,32.49,0,0,1,2.16,12.23Zm-26.24,20.52a17.28,17.28,0,0,0,7-1.41,16.4,16.4,0,0,0,5.64-4.11,19.78,19.78,0,0,0,3.79-6.48,25,25,0,0,0,1.37-8.52v-1.35a24.27,24.27,0,0,0-1.37-8.29,19.68,19.68,0,0,0-3.79-6.48,17.67,17.67,0,0,0-5.7-4.23,16.67,16.67,0,0,0-13.91,0,17.53,17.53,0,0,0-5.69,4.23,19.53,19.53,0,0,0-3.8,6.48,24.27,24.27,0,0,0-1.37,8.29v1.35a25,25,0,0,0,1.37,8.52,19.63,19.63,0,0,0,3.8,6.48,16.21,16.21,0,0,0,5.64,4.11A17.25,17.25,0,0,0,1128.21,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerP}
          d="M1176,368.11h-8.23V289.64H1176v8.79h1.26a18.7,18.7,0,0,1,7.59-7.72,21.59,21.59,0,0,1,10.54-2.65,22.49,22.49,0,0,1,9.17,1.91,23,23,0,0,1,7.65,5.53,26.51,26.51,0,0,1,5.27,8.91,34.75,34.75,0,0,1,2,12.06v2.25a36.14,36.14,0,0,1-1.9,12.18,25.88,25.88,0,0,1-5.22,8.91,22.08,22.08,0,0,1-7.75,5.47,24,24,0,0,1-9.38,1.86,22.65,22.65,0,0,1-5.16-.62,20.28,20.28,0,0,1-5-1.92,21.42,21.42,0,0,1-4.37-3.16,16.41,16.41,0,0,1-3.38-4.45H1176Zm17.5-29.32a16.86,16.86,0,0,0,7-1.41,16.55,16.55,0,0,0,5.54-4,18.29,18.29,0,0,0,3.69-6.31,25.1,25.1,0,0,0,1.31-8.35v-2.25a24.18,24.18,0,0,0-1.31-8.17A19,19,0,0,0,1206,302a16.76,16.76,0,0,0-5.59-4.11,16.41,16.41,0,0,0-6.9-1.47,15.66,15.66,0,0,0-6.86,1.52,17.45,17.45,0,0,0-5.53,4.23,20.11,20.11,0,0,0-3.74,6.48,24,24,0,0,0-1.37,8.29v1.35a24.27,24.27,0,0,0,1.37,8.4,20.16,20.16,0,0,0,3.74,6.49,16.7,16.7,0,0,0,5.53,4.17A16.21,16.21,0,0,0,1193.46,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerE3}
          d="M1240.15,320.3q.31,8.35,4.85,13.42t12.65,5.07a20.67,20.67,0,0,0,6.43-.9,14.64,14.64,0,0,0,4.69-2.48,13.09,13.09,0,0,0,3.16-3.66,22,22,0,0,0,2-4.46l7.8,2.26a24.83,24.83,0,0,1-8.17,12.68q-6,4.9-16.08,4.91a25.06,25.06,0,0,1-10.28-2.09,23.14,23.14,0,0,1-8.06-5.92,27.73,27.73,0,0,1-5.27-9.13,34.44,34.44,0,0,1-1.9-11.73v-2.7a30.23,30.23,0,0,1,2-10.94,26.25,26.25,0,0,1,5.43-8.74,25.51,25.51,0,0,1,8.17-5.75,24.77,24.77,0,0,1,10.17-2.08,23.06,23.06,0,0,1,11.12,2.53A24.82,24.82,0,0,1,1280.9,305a26.78,26.78,0,0,1,1.42,8.12v7.21Zm17.5-23.9a17.48,17.48,0,0,0-6.48,1.19,16.09,16.09,0,0,0-5.27,3.32,17.59,17.59,0,0,0-3.69,5,19.28,19.28,0,0,0-1.85,6.26h33.74a17.22,17.22,0,0,0-1.64-6.54,15.81,15.81,0,0,0-3.69-5,16.64,16.64,0,0,0-5.16-3.16A16.38,16.38,0,0,0,1257.65,296.4Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerR}
          d="M1295.71,289.64h19v7.44H1316a14.13,14.13,0,0,1,5.69-6.82,17.41,17.41,0,0,1,21.19,3.32q4.85,5.54,5.16,16.12l-8.64,1.36q0-7.79-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.79,11.79,0,0,0-4,3.72,16.61,16.61,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V297.75h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={developerExtraR1}
          id="extraR1"
          d="M1295.71,289.64h19v7.44H1316a14.13,14.13,0,0,1,5.69-6.82,17.41,17.41,0,0,1,21.19,3.32q4.85,5.54,5.16,16.12l-8.64,1.36q0-7.79-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.79,11.79,0,0,0-4,3.72,16.61,16.61,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V297.75h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          id="extraR2"
          ref={developerExtraR2}
          d="M1295.71,289.64h19v7.44H1316a14.13,14.13,0,0,1,5.69-6.82,17.41,17.41,0,0,1,21.19,3.32q4.85,5.54,5.16,16.12l-8.64,1.36q0-7.79-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.79,11.79,0,0,0-4,3.72,16.61,16.61,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V297.75h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          id="extraR3"
          ref={developerExtraR3}
          d="M1295.71,289.64h19v7.44H1316a14.13,14.13,0,0,1,5.69-6.82,17.41,17.41,0,0,1,21.19,3.32q4.85,5.54,5.16,16.12l-8.64,1.36q0-7.79-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.79,11.79,0,0,0-4,3.72,16.61,16.61,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V297.75h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          id="extraR4"
          ref={developerExtraR4}
          d="M1295.71,289.64h19v7.44H1316a14.13,14.13,0,0,1,5.69-6.82,17.41,17.41,0,0,1,21.19,3.32q4.85,5.54,5.16,16.12l-8.64,1.36q0-7.79-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.79,11.79,0,0,0-4,3.72,16.61,16.61,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V297.75h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
      </g>
      <g id="desarrollador">
        <path
          ref={desarrolladorD1}
          d="M565,337h-1.27a16.39,16.39,0,0,1-3.21,4.51,19.38,19.38,0,0,1-4.22,3.16,20.25,20.25,0,0,1-4.8,1.86,20.48,20.48,0,0,1-4.85.62,24.86,24.86,0,0,1-9.8-1.92,23.44,23.44,0,0,1-8-5.53,25.31,25.31,0,0,1-5.37-9,35.38,35.38,0,0,1-2-12.23v-1.81a34.38,34.38,0,0,1,2-12.12,27.12,27.12,0,0,1,5.37-9,22.6,22.6,0,0,1,7.91-5.59,24.5,24.5,0,0,1,9.59-1.91,20.85,20.85,0,0,1,10.07,2.53,16.89,16.89,0,0,1,7.22,7.84H565V266.64h8.22v78.92H565Zm-17.5,1.8a16.19,16.19,0,0,0,6.85-1.46,16.6,16.6,0,0,0,5.53-4.17,20.37,20.37,0,0,0,3.75-6.49,24.5,24.5,0,0,0,1.37-8.4v-1.35a24.27,24.27,0,0,0-1.37-8.29,20.32,20.32,0,0,0-3.75-6.48,17.21,17.21,0,0,0-5.58-4.23,15.82,15.82,0,0,0-6.8-1.52,16.42,16.42,0,0,0-6.91,1.47A16.23,16.23,0,0,0,535,302a19.15,19.15,0,0,0-3.69,6.42,24.5,24.5,0,0,0-1.32,8.23v1.81a25.15,25.15,0,0,0,1.32,8.45,18.44,18.44,0,0,0,3.69,6.37,16.15,16.15,0,0,0,5.53,4.06A16.91,16.91,0,0,0,547.49,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorE}
          d="M595,320.3q.32,8.35,4.85,13.42t12.65,5.07a20.67,20.67,0,0,0,6.43-.9,14.74,14.74,0,0,0,4.69-2.48,13.25,13.25,0,0,0,3.16-3.66,21.45,21.45,0,0,0,2-4.46l7.8,2.26a24.83,24.83,0,0,1-8.17,12.68q-6,4.9-16.07,4.91A25,25,0,0,1,602,345.05a23.08,23.08,0,0,1-8.07-5.92A27.9,27.9,0,0,1,588.7,330a34.69,34.69,0,0,1-1.89-11.73v-2.7a30,30,0,0,1,2-10.94,26.39,26.39,0,0,1,5.42-8.74,25.62,25.62,0,0,1,8.17-5.75,24.78,24.78,0,0,1,10.18-2.08,23.08,23.08,0,0,1,11.12,2.53A24.85,24.85,0,0,1,635.77,305a26.47,26.47,0,0,1,1.42,8.12v7.21Zm17.5-23.9a17.57,17.57,0,0,0-6.49,1.19,16.09,16.09,0,0,0-5.27,3.32,17.59,17.59,0,0,0-3.69,5,19.27,19.27,0,0,0-1.84,6.26H629a17,17,0,0,0-1.63-6.54,15.81,15.81,0,0,0-3.69-5,16.69,16.69,0,0,0-5.17-3.16A16.32,16.32,0,0,0,612.53,296.4Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorS}
          d="M664.39,304.07a7,7,0,0,0,3.21,6.2q3.23,2.14,11.76,2.82,9.17.78,14,4.68t4.79,11.33v.67a16.76,16.76,0,0,1-1.53,7.28,16,16,0,0,1-4.21,5.46,18.45,18.45,0,0,1-6.54,3.44,31.3,31.3,0,0,1-18.87-.56,21.69,21.69,0,0,1-7.27-4.62,19.49,19.49,0,0,1-4.38-6.54,23.33,23.33,0,0,1-1.68-7.39l7.8-2a15.35,15.35,0,0,0,4.64,10.32q4.11,3.89,11,3.89a16.19,16.19,0,0,0,9.33-2.43,7.8,7.8,0,0,0,3.53-6.82c0-3.15-1.16-5.41-3.48-6.76s-6.08-2.22-11.28-2.59q-9.06-.69-13.91-4.51t-4.85-11.17v-.67a14.71,14.71,0,0,1,1.58-6.94,15,15,0,0,1,4.27-5,19,19,0,0,1,6.06-3.05,24.59,24.59,0,0,1,7.06-1,25,25,0,0,1,9.07,1.52,20.33,20.33,0,0,1,6.53,3.95,16.9,16.9,0,0,1,4.06,5.58,22.53,22.53,0,0,1,1.85,6.31l-7.8,2A12.29,12.29,0,0,0,685,299a13.64,13.64,0,0,0-9.23-3,17.76,17.76,0,0,0-4.27.51,11.88,11.88,0,0,0-3.63,1.52,8,8,0,0,0-2.53,2.54A6.56,6.56,0,0,0,664.39,304.07Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorA1}
          d="M756,336.09h-1.26a17.75,17.75,0,0,1-16.45,11.05,24.51,24.51,0,0,1-9.59-1.86,21.83,21.83,0,0,1-7.75-5.53,26.38,26.38,0,0,1-5.21-9,36.26,36.26,0,0,1-1.9-12.29v-1.81a35.87,35.87,0,0,1,1.9-12.17,26.38,26.38,0,0,1,5.21-9,22.38,22.38,0,0,1,7.75-5.59,23.49,23.49,0,0,1,9.38-1.91,19.05,19.05,0,0,1,9.75,2.53,17.44,17.44,0,0,1,6.91,7.84H756v-8.79h8.23v44.42c0,2.25.94,3.38,2.84,3.38h2.64v8.12h-5.59a7.57,7.57,0,0,1-5.85-2.48,9,9,0,0,1-2.27-6.32Zm-16.86,2.7a15.87,15.87,0,0,0,6.8-1.46,15.28,15.28,0,0,0,5.32-4.17,20.24,20.24,0,0,0,3.48-6.49,26.36,26.36,0,0,0,1.26-8.4v-1.35a26.11,26.11,0,0,0-1.26-8.29,19.71,19.71,0,0,0-3.53-6.48,16.45,16.45,0,0,0-5.38-4.23,15.06,15.06,0,0,0-6.69-1.52,15.38,15.38,0,0,0-6.75,1.47,16,16,0,0,0-5.32,4.11,19.07,19.07,0,0,0-3.53,6.43,25.77,25.77,0,0,0-1.27,8.28v1.81q0,9.58,4.69,14.94A15.44,15.44,0,0,0,739.13,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorR1}
          d="M779.61,289.64h19v7.44h1.27a14.13,14.13,0,0,1,5.69-6.82,17.41,17.41,0,0,1,21.19,3.32q4.85,5.54,5.16,16.12l-8.64,1.36q0-7.79-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.79,11.79,0,0,0-4,3.72,16.61,16.61,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68h13.28v8.12H778.34v-8.12h12V297.75H779.61Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorR2}
          d="M844.12,289.64h19v7.44h1.27a14.13,14.13,0,0,1,5.69-6.82,17.41,17.41,0,0,1,21.19,3.32q4.85,5.54,5.16,16.12l-8.64,1.36q0-7.79-3.48-11.22a11.68,11.68,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.79,11.79,0,0,0-4,3.72,16.82,16.82,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68h13.29v8.12H842.85v-8.12h12V297.75H844.12Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorO1}
          d="M960.92,318.27a32.84,32.84,0,0,1-2.17,12.35,27.3,27.3,0,0,1-5.74,9,24.15,24.15,0,0,1-8.38,5.58,26.95,26.95,0,0,1-20,0,24.19,24.19,0,0,1-8.32-5.58,27.32,27.32,0,0,1-5.75-9,32.84,32.84,0,0,1-2.16-12.35v-1.35a32.49,32.49,0,0,1,2.16-12.23,27.48,27.48,0,0,1,5.8-9.08,24.41,24.41,0,0,1,8.38-5.64,26.66,26.66,0,0,1,19.82,0,24.5,24.5,0,0,1,8.38,5.64,27.62,27.62,0,0,1,5.79,9.08,32.49,32.49,0,0,1,2.17,12.23Zm-26.25,20.52a17.28,17.28,0,0,0,7-1.41,16.4,16.4,0,0,0,5.64-4.11,19.78,19.78,0,0,0,3.79-6.48,25,25,0,0,0,1.37-8.52v-1.35a24.27,24.27,0,0,0-1.37-8.29,19.68,19.68,0,0,0-3.79-6.48,17.74,17.74,0,0,0-5.69-4.23,16.69,16.69,0,0,0-13.92,0,17.53,17.53,0,0,0-5.69,4.23,19.7,19.7,0,0,0-3.8,6.48,24.27,24.27,0,0,0-1.37,8.29v1.35a25,25,0,0,0,1.37,8.52,19.8,19.8,0,0,0,3.8,6.48,16.21,16.21,0,0,0,5.64,4.11A17.25,17.25,0,0,0,934.67,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorL1}
          d="M976.1,337.44h19V274.75H976.73v-8.11h26.56v70.8h19v8.12H976.1Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorL2}
          d="M1040.61,337.44h19V274.75h-18.34v-8.11h26.56v70.8h19v8.12h-46.17Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorA2}
          d="M1143.07,336.09h-1.27a17.75,17.75,0,0,1-16.44,11.05,24.51,24.51,0,0,1-9.59-1.86,21.74,21.74,0,0,1-7.75-5.53,26.56,26.56,0,0,1-5.22-9,36.51,36.51,0,0,1-1.9-12.29v-1.81a36.12,36.12,0,0,1,1.9-12.17,26.56,26.56,0,0,1,5.22-9,22.28,22.28,0,0,1,7.75-5.59,23.49,23.49,0,0,1,9.38-1.91,19.11,19.11,0,0,1,9.75,2.53,17.42,17.42,0,0,1,6.9,7.84h1.27v-8.79h8.22v44.42q0,3.38,2.85,3.38h2.63v8.12h-5.58a7.57,7.57,0,0,1-5.85-2.48,9,9,0,0,1-2.27-6.32Zm-16.87,2.7a15.84,15.84,0,0,0,6.8-1.46,15.31,15.31,0,0,0,5.33-4.17,20.42,20.42,0,0,0,3.47-6.49,26.08,26.08,0,0,0,1.27-8.4v-1.35a25.83,25.83,0,0,0-1.27-8.29,19.71,19.71,0,0,0-3.53-6.48,16.42,16.42,0,0,0-5.37-4.23,15.13,15.13,0,0,0-6.7-1.52,15.31,15.31,0,0,0-6.74,1.47,16.08,16.08,0,0,0-5.33,4.11,19.24,19.24,0,0,0-3.53,6.43,26,26,0,0,0-1.26,8.28v1.81q0,9.58,4.69,14.94A15.4,15.4,0,0,0,1126.2,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorD2}
          d="M1210.11,337h-1.26a16.42,16.42,0,0,1-3.22,4.51,19.09,19.09,0,0,1-4.21,3.16,20.74,20.74,0,0,1-9.65,2.48,24.86,24.86,0,0,1-9.8-1.92,23.35,23.35,0,0,1-8-5.53,25.33,25.33,0,0,1-5.38-9,35.62,35.62,0,0,1-2-12.23v-1.81a34.62,34.62,0,0,1,2-12.12,27.3,27.3,0,0,1,5.38-9A22.51,22.51,0,0,1,1182,290a24.5,24.5,0,0,1,9.59-1.91,20.88,20.88,0,0,1,10.07,2.53,16.94,16.94,0,0,1,7.22,7.84h1.26V266.64h8.22v78.92h-8.22Zm-17.5,1.8a16.24,16.24,0,0,0,6.86-1.46,16.7,16.7,0,0,0,5.53-4.17,20.16,20.16,0,0,0,3.74-6.49,24.5,24.5,0,0,0,1.37-8.4v-1.35a24.27,24.27,0,0,0-1.37-8.29,20.11,20.11,0,0,0-3.74-6.48,17.24,17.24,0,0,0-5.59-4.23,15.75,15.75,0,0,0-6.8-1.52,16.37,16.37,0,0,0-6.9,1.47,16.18,16.18,0,0,0-5.59,4.17,19.49,19.49,0,0,0-3.69,6.42,24.5,24.5,0,0,0-1.32,8.23v1.81a25.15,25.15,0,0,0,1.32,8.45,18.76,18.76,0,0,0,3.69,6.37,16.18,16.18,0,0,0,5.54,4.06A16.83,16.83,0,0,0,1192.61,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorO2}
          d="M1283.48,318.27a32.84,32.84,0,0,1-2.16,12.35,27.32,27.32,0,0,1-5.75,9,24.15,24.15,0,0,1-8.38,5.58,26.92,26.92,0,0,1-20,0,24.23,24.23,0,0,1-8.33-5.58,27.32,27.32,0,0,1-5.75-9,32.84,32.84,0,0,1-2.16-12.35v-1.35a32.49,32.49,0,0,1,2.16-12.23,27.64,27.64,0,0,1,5.8-9.08,24.5,24.5,0,0,1,8.38-5.64,26.66,26.66,0,0,1,19.82,0,24.41,24.41,0,0,1,8.38,5.64,27.64,27.64,0,0,1,5.8,9.08,32.49,32.49,0,0,1,2.16,12.23Zm-26.25,20.52a17.25,17.25,0,0,0,7-1.41,16.4,16.4,0,0,0,5.64-4.11,19.8,19.8,0,0,0,3.8-6.48,25,25,0,0,0,1.37-8.52v-1.35a24.27,24.27,0,0,0-1.37-8.29,19.7,19.7,0,0,0-3.8-6.48,17.63,17.63,0,0,0-5.69-4.23,16.69,16.69,0,0,0-13.92,0,17.74,17.74,0,0,0-5.69,4.23,19.51,19.51,0,0,0-3.79,6.48,24,24,0,0,0-1.37,8.29v1.35a24.72,24.72,0,0,0,1.37,8.52,19.61,19.61,0,0,0,3.79,6.48,16.4,16.4,0,0,0,5.64,4.11A17.25,17.25,0,0,0,1257.23,338.79Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={desarrolladorR3}
          d="M1295.71,289.64h19v7.44H1316a14.13,14.13,0,0,1,5.69-6.82,17.41,17.41,0,0,1,21.19,3.32q4.85,5.54,5.16,16.12l-8.64,1.36q0-7.79-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.79,11.79,0,0,0-4,3.72,16.61,16.61,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V297.75h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
      </g>
      <g id="entwickler">
        <path
          ref={entwicklerE1}
          d="M718.78,266.64h44.7v8.79H727.64v26.16h35.21v8.79H727.64v26.38h36.47v8.8H718.78Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={entwicklerN}
          d="M790.78,345.56h-8.22V289.64h8.22v9.47h1.27q4.85-11.06,16.86-11.05,9.06,0,14.44,6t5.38,18.1v33.37h-8.22V314q0-8.79-3.69-13.19a12.4,12.4,0,0,0-10-4.4,14.08,14.08,0,0,0-11.75,5.47q-4.27,5.47-4.27,14.6Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={entwicklerT}
          d="M845.28,289.64h16.44v-23H870v23h20.23v8.11H870v36.31c0,2.25.94,3.38,2.84,3.38h14.86v8.12H869.84a7.57,7.57,0,0,1-5.85-2.48,9,9,0,0,1-2.27-6.32v-39H845.28Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={entwicklerW}
          d="M956.8,345.56H941.63L935.3,293.7H934l-6.33,51.86H912.53l-8.22-55.92h8.43l7,51.86H921l6.11-51.86h15.18l6.11,51.86h1.27l7-51.86H965Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={entwicklerI}
          d="M977.36,337.44H995.7V297.75H979.26v-8.11h24.67v47.8H1021v8.12H977.36Zm15-64.49a7.88,7.88,0,0,1,2.16-5.58,7.05,7.05,0,0,1,10.44,0,8.29,8.29,0,0,1,0,11.16,7.05,7.05,0,0,1-10.44,0A7.88,7.88,0,0,1,992.33,273Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={entwicklerC}
          d="M1089.52,325.71a30,30,0,0,1-2.9,8.57,24.17,24.17,0,0,1-5.22,6.82,22.5,22.5,0,0,1-7.38,4.46,26.6,26.6,0,0,1-9.38,1.58,28.22,28.22,0,0,1-10.38-1.92,25,25,0,0,1-8.59-5.58,26.52,26.52,0,0,1-5.85-9,32,32,0,0,1-2.16-12.17v-1.35a32.63,32.63,0,0,1,2.16-12.18,27,27,0,0,1,5.85-9.13,25.89,25.89,0,0,1,8.59-5.75,26.75,26.75,0,0,1,10.38-2,25.75,25.75,0,0,1,9.17,1.58,23.28,23.28,0,0,1,7.44,4.45,23.93,23.93,0,0,1,5.27,6.82,27.92,27.92,0,0,1,2.79,8.57l-8.22,2a19.15,19.15,0,0,0-1.53-5.69,15.94,15.94,0,0,0-3.27-4.85,15.25,15.25,0,0,0-5-3.33,17.67,17.67,0,0,0-6.85-1.24,16.9,16.9,0,0,0-7.11,1.52,18.07,18.07,0,0,0-5.85,4.29,19.88,19.88,0,0,0-4,6.59,23.8,23.8,0,0,0-1.42,8.35v1.35a24,24,0,0,0,1.42,8.51,18.12,18.12,0,0,0,4,6.37,17.58,17.58,0,0,0,5.9,4,18.66,18.66,0,0,0,7.27,1.41,16.6,16.6,0,0,0,6.8-1.29,15.88,15.88,0,0,0,8.22-8.18,20.91,20.91,0,0,0,1.64-5.63Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={entwicklerK}
          d="M1118.61,312.86h1.8l19.92-23.22h10.12v.67l-21.72,25.6v2L1153,344.88v.68h-10.12L1120.62,321h-2v24.58h-8.22V266.64h8.22Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={entwicklerL}
          d="M1169.63,337.44h19V274.75h-18.34v-8.11h26.56v70.8h19v8.12h-46.17Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={entwicklerE2}
          d="M1240.15,320.3q.33,8.35,4.85,13.42t12.65,5.07a20.62,20.62,0,0,0,6.43-.9,14.64,14.64,0,0,0,4.69-2.48,13.29,13.29,0,0,0,3.17-3.66,22.57,22.57,0,0,0,2-4.46l7.8,2.26a24.83,24.83,0,0,1-8.17,12.68q-6,4.9-16.08,4.91a25.06,25.06,0,0,1-10.28-2.09,23.14,23.14,0,0,1-8.06-5.92,27.9,27.9,0,0,1-5.27-9.13,34.44,34.44,0,0,1-1.9-11.73v-2.7a30.23,30.23,0,0,1,2-10.94,26.25,26.25,0,0,1,5.43-8.74,25.51,25.51,0,0,1,8.17-5.75,24.77,24.77,0,0,1,10.17-2.08,23,23,0,0,1,11.12,2.53A24.82,24.82,0,0,1,1280.9,305a26.47,26.47,0,0,1,1.42,8.12v7.21Zm17.5-23.9a17.48,17.48,0,0,0-6.48,1.19,16.09,16.09,0,0,0-5.27,3.32,17.59,17.59,0,0,0-3.69,5,19,19,0,0,0-1.84,6.26h33.73a17,17,0,0,0-1.64-6.54,15.81,15.81,0,0,0-3.69-5,16.64,16.64,0,0,0-5.16-3.16A16.34,16.34,0,0,0,1257.65,296.4Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
        <path
          ref={entwicklerR}
          d="M1295.71,289.64h19v7.44H1316a14.13,14.13,0,0,1,5.69-6.82,17.41,17.41,0,0,1,21.19,3.32q4.85,5.54,5.16,16.12l-8.64,1.36q0-7.79-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.79,11.79,0,0,0-4,3.72,16.61,16.61,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V297.75h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#3a4a6fff"
        ></path>
      </g>
      <g id="educator">
        <path
          d="M853.08,319.91q.31,8.34,4.85,13.41t12.65,5.08a20.67,20.67,0,0,0,6.43-.9A14.94,14.94,0,0,0,881.7,335a13.44,13.44,0,0,0,3.16-3.67,21.37,21.37,0,0,0,1.95-4.45l7.8,2.25a24.76,24.76,0,0,1-8.17,12.69q-6,4.91-16.07,4.9a24.83,24.83,0,0,1-10.28-2.09,23.18,23.18,0,0,1-8.07-5.91,28,28,0,0,1-5.27-9.14,34.67,34.67,0,0,1-1.89-11.72v-2.71a30.18,30.18,0,0,1,1.95-10.93,26.19,26.19,0,0,1,5.42-8.74,25.47,25.47,0,0,1,8.17-5.75,24.79,24.79,0,0,1,10.18-2.09,23.09,23.09,0,0,1,11.12,2.54,24.87,24.87,0,0,1,12.12,14.37,26.52,26.52,0,0,1,1.42,8.12v7.22Zm17.5-23.9a17.57,17.57,0,0,0-6.49,1.18,16.29,16.29,0,0,0-5.27,3.33,17.54,17.54,0,0,0-3.69,5,19.42,19.42,0,0,0-1.84,6.26H887a17.13,17.13,0,0,0-1.63-6.54,15.92,15.92,0,0,0-3.69-5,17,17,0,0,0-5.17-3.16A16.31,16.31,0,0,0,870.58,296Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M952.06,336.59H950.8a16.27,16.27,0,0,1-3.22,4.51,18.92,18.92,0,0,1-4.22,3.16,19.36,19.36,0,0,1-4.79,1.86,20.61,20.61,0,0,1-4.85.62,24.83,24.83,0,0,1-9.8-1.92,23.18,23.18,0,0,1-8-5.52,25.42,25.42,0,0,1-5.38-9,35.64,35.64,0,0,1-2-12.24v-1.8a34.54,34.54,0,0,1,2-12.12,27.25,27.25,0,0,1,5.38-9,22.61,22.61,0,0,1,7.91-5.58,24.33,24.33,0,0,1,9.59-1.92,20.89,20.89,0,0,1,10.07,2.54A16.85,16.85,0,0,1,950.8,298h1.26v-31.8h8.22v78.92h-8.22Zm-17.5,1.81a16,16,0,0,0,6.85-1.47,16.51,16.51,0,0,0,5.54-4.17,20,20,0,0,0,3.74-6.48,24.59,24.59,0,0,0,1.37-8.4v-1.35a24.23,24.23,0,0,0-1.37-8.29,20,20,0,0,0-3.74-6.48,17,17,0,0,0-5.59-4.23,15.61,15.61,0,0,0-6.8-1.52,16.35,16.35,0,0,0-12.49,5.63,19.64,19.64,0,0,0-3.69,6.43,24.5,24.5,0,0,0-1.32,8.23v1.8a25.21,25.21,0,0,0,1.32,8.46,19,19,0,0,0,3.69,6.37,16.18,16.18,0,0,0,5.54,4.06A16.83,16.83,0,0,0,934.56,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1013.41,289.24h8.22v55.92h-8.22V335h-1.26a22.66,22.66,0,0,1-6.64,8.56,16.63,16.63,0,0,1-10.44,3.16,20.53,20.53,0,0,1-8-1.52,16.4,16.4,0,0,1-6.22-4.57,21.37,21.37,0,0,1-4-7.55,34.88,34.88,0,0,1-1.43-10.49V289.24h8.22v32.25q0,8.79,3.38,12.85t10.33,4.06a14.06,14.06,0,0,0,11.75-5.47q4.27-5.48,4.27-14.6Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1089.52,325.32a30.1,30.1,0,0,1-2.9,8.57,24.31,24.31,0,0,1-5.22,6.82,22.58,22.58,0,0,1-7.38,4.45,26.64,26.64,0,0,1-9.38,1.58,28.22,28.22,0,0,1-10.38-1.92,24.71,24.71,0,0,1-8.59-5.58,26.58,26.58,0,0,1-5.85-9,32,32,0,0,1-2.16-12.18v-1.35a32.63,32.63,0,0,1,2.16-12.18,27,27,0,0,1,5.85-9.13,26,26,0,0,1,8.59-5.75,26.94,26.94,0,0,1,10.38-2,26,26,0,0,1,9.17,1.58,23.49,23.49,0,0,1,7.43,4.45,23.79,23.79,0,0,1,5.27,6.83,27.61,27.61,0,0,1,2.8,8.56l-8.22,2a19.45,19.45,0,0,0-1.53-5.69,16.06,16.06,0,0,0-3.27-4.85,15.07,15.07,0,0,0-5-3.32,17.52,17.52,0,0,0-6.85-1.24,16.75,16.75,0,0,0-7.11,1.52,17.9,17.9,0,0,0-5.85,4.28,19.93,19.93,0,0,0-4,6.6,23.75,23.75,0,0,0-1.42,8.34v1.35a24,24,0,0,0,1.42,8.52,18.21,18.21,0,0,0,4,6.37,17.58,17.58,0,0,0,5.9,4,18.66,18.66,0,0,0,7.27,1.41,16.44,16.44,0,0,0,6.8-1.3,15.82,15.82,0,0,0,8.22-8.17,21,21,0,0,0,1.64-5.64Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1143.07,335.69h-1.27a17.71,17.71,0,0,1-16.44,11.05,24.51,24.51,0,0,1-9.59-1.86,21.72,21.72,0,0,1-7.75-5.52,26.61,26.61,0,0,1-5.22-9,36.51,36.51,0,0,1-1.9-12.29v-1.8a36.22,36.22,0,0,1,1.9-12.18,26.56,26.56,0,0,1,5.22-9,22.39,22.39,0,0,1,7.75-5.58,23.32,23.32,0,0,1,9.38-1.92,19.11,19.11,0,0,1,9.75,2.54,17.32,17.32,0,0,1,6.9,7.84h1.27v-8.8h8.22v44.42q0,3.39,2.85,3.39h2.63v8.11h-5.58a7.54,7.54,0,0,1-5.85-2.48,9,9,0,0,1-2.27-6.31Zm-16.87,2.71a15.7,15.7,0,0,0,6.8-1.47,15.2,15.2,0,0,0,5.33-4.17,20.26,20.26,0,0,0,3.47-6.48,26.17,26.17,0,0,0,1.27-8.4v-1.35a25.79,25.79,0,0,0-1.27-8.29,19.61,19.61,0,0,0-3.53-6.48,16.16,16.16,0,0,0-5.37-4.23,15,15,0,0,0-6.7-1.52,15.44,15.44,0,0,0-6.74,1.46,16.12,16.12,0,0,0-5.33,4.12,19.19,19.19,0,0,0-3.53,6.42,26.11,26.11,0,0,0-1.26,8.29v1.8q0,9.58,4.69,14.94A15.41,15.41,0,0,0,1126.2,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1167.84,289.24h16.45v-23h8.22v23h20.24v8.12h-20.24v36.3q0,3.39,2.84,3.39h14.87v8.11H1192.4a7.54,7.54,0,0,1-5.85-2.48,9,9,0,0,1-2.26-6.31v-39h-16.45Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1283.48,317.88a32.79,32.79,0,0,1-2.16,12.34,27.32,27.32,0,0,1-5.75,9,23.88,23.88,0,0,1-8.38,5.58,26.92,26.92,0,0,1-20,0,24,24,0,0,1-8.33-5.58,27.32,27.32,0,0,1-5.75-9,32.79,32.79,0,0,1-2.16-12.34v-1.35a32.51,32.51,0,0,1,2.16-12.24,27.59,27.59,0,0,1,5.8-9.07,24.5,24.5,0,0,1,8.38-5.64,26.54,26.54,0,0,1,19.82,0,24.41,24.41,0,0,1,8.38,5.64,27.59,27.59,0,0,1,5.8,9.07,32.51,32.51,0,0,1,2.16,12.24Zm-26.25,20.52a17.25,17.25,0,0,0,7-1.41,16.3,16.3,0,0,0,5.64-4.12,19.6,19.6,0,0,0,3.8-6.48,24.91,24.91,0,0,0,1.37-8.51v-1.35a24.23,24.23,0,0,0-1.37-8.29,19.6,19.6,0,0,0-3.8-6.48,17.45,17.45,0,0,0-5.69-4.23,16.69,16.69,0,0,0-13.92,0,17.35,17.35,0,0,0-5.69,4.23,19.41,19.41,0,0,0-3.79,6.48,24,24,0,0,0-1.37,8.29v1.35a24.67,24.67,0,0,0,1.37,8.51,19.41,19.41,0,0,0,3.79,6.48,16.3,16.3,0,0,0,5.64,4.12A17.25,17.25,0,0,0,1257.23,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1295.71,289.24h19v7.44H1316a14.18,14.18,0,0,1,5.69-6.82,17.4,17.4,0,0,1,21.19,3.33q4.85,5.52,5.16,16.12l-8.64,1.35q0-7.77-3.48-11.22a11.69,11.69,0,0,0-8.54-3.43,11.21,11.21,0,0,0-5.64,1.35,11.59,11.59,0,0,0-4,3.72,16.56,16.56,0,0,0-2.32,5.52,29.82,29.82,0,0,0-.74,6.77v23.68H1328v8.11h-33.52v-8.11h12V297.36h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
      </g>
      <g id="profesor">
        <path
          d="M853.39,367.71h-8.22V289.24h8.22V298h1.27a18.73,18.73,0,0,1,7.59-7.73,21.7,21.7,0,0,1,10.54-2.65,22.34,22.34,0,0,1,9.17,1.92,23,23,0,0,1,7.64,5.52,26.63,26.63,0,0,1,5.28,8.91,34.79,34.79,0,0,1,2,12.06v2.26a36.18,36.18,0,0,1-1.9,12.18,25.89,25.89,0,0,1-5.22,8.9,22,22,0,0,1-7.75,5.47,24,24,0,0,1-9.38,1.86,22.58,22.58,0,0,1-5.16-.62,19.52,19.52,0,0,1-5-1.92,21.71,21.71,0,0,1-4.38-3.15,16.63,16.63,0,0,1-3.37-4.46h-1.27Zm17.5-29.31a16.91,16.91,0,0,0,7-1.41,16.65,16.65,0,0,0,5.54-4,18.32,18.32,0,0,0,3.68-6.32,24.82,24.82,0,0,0,1.32-8.34v-2.26a24,24,0,0,0-1.32-8.17,18.94,18.94,0,0,0-3.68-6.31,16.89,16.89,0,0,0-5.59-4.12,16.6,16.6,0,0,0-6.91-1.46,15.51,15.51,0,0,0-6.85,1.52,17.06,17.06,0,0,0-5.53,4.23,20,20,0,0,0-3.74,6.48,24,24,0,0,0-1.38,8.29v1.35a24.35,24.35,0,0,0,1.38,8.4,20,20,0,0,0,3.74,6.48,16.47,16.47,0,0,0,5.53,4.17A16,16,0,0,0,870.89,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M908.63,289.24h19v7.44h1.26a14.23,14.23,0,0,1,5.69-6.82,17.4,17.4,0,0,1,21.19,3.33q4.85,5.52,5.17,16.12l-8.65,1.35q0-7.77-3.48-11.22a11.67,11.67,0,0,0-8.53-3.43,11.21,11.21,0,0,0-5.64,1.35,11.62,11.62,0,0,0-4,3.72,16.77,16.77,0,0,0-2.32,5.52,29.84,29.84,0,0,0-.73,6.77v23.68h13.28v8.11H907.37v-8.11h12V297.36H908.63Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1025.43,317.88a32.79,32.79,0,0,1-2.16,12.34,27.32,27.32,0,0,1-5.75,9,23.88,23.88,0,0,1-8.38,5.58,26.92,26.92,0,0,1-20,0,24,24,0,0,1-8.33-5.58,27.32,27.32,0,0,1-5.75-9,32.79,32.79,0,0,1-2.16-12.34v-1.35a32.51,32.51,0,0,1,2.16-12.24,27.59,27.59,0,0,1,5.8-9.07,24.5,24.5,0,0,1,8.38-5.64,26.54,26.54,0,0,1,19.82,0,24.41,24.41,0,0,1,8.38,5.64,27.59,27.59,0,0,1,5.8,9.07,32.51,32.51,0,0,1,2.16,12.24ZM999.18,338.4a17.25,17.25,0,0,0,7-1.41,16.3,16.3,0,0,0,5.64-4.12,19.6,19.6,0,0,0,3.8-6.48,24.91,24.91,0,0,0,1.37-8.51v-1.35a24.23,24.23,0,0,0-1.37-8.29,19.6,19.6,0,0,0-3.8-6.48,17.35,17.35,0,0,0-5.69-4.23,16.69,16.69,0,0,0-13.92,0,17.45,17.45,0,0,0-5.69,4.23,19.41,19.41,0,0,0-3.79,6.48,24,24,0,0,0-1.37,8.29v1.35a24.67,24.67,0,0,0,1.37,8.51,19.41,19.41,0,0,0,3.79,6.48,16.3,16.3,0,0,0,5.64,4.12A17.25,17.25,0,0,0,999.18,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1040.08,289.24h16.13V275a9,9,0,0,1,2.27-6.32,7.57,7.57,0,0,1,5.85-2.48H1085v8.12h-17.71q-2.85,0-2.85,3.38v11.5h21.82v8.12h-21.82v47.8h-8.22v-47.8h-16.13Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1111.13,319.91q.31,8.34,4.85,13.41t12.65,5.08a20.67,20.67,0,0,0,6.43-.9,14.83,14.83,0,0,0,4.69-2.48,13.44,13.44,0,0,0,3.16-3.67,21.37,21.37,0,0,0,1.95-4.45l7.8,2.25a24.76,24.76,0,0,1-8.17,12.69q-6,4.91-16.07,4.9a24.86,24.86,0,0,1-10.28-2.09,23.05,23.05,0,0,1-8.06-5.91,28,28,0,0,1-5.28-9.14,34.67,34.67,0,0,1-1.89-11.72v-2.71a30.18,30.18,0,0,1,1.95-10.93,26,26,0,0,1,5.43-8.74,25.36,25.36,0,0,1,8.17-5.75,24.71,24.71,0,0,1,10.17-2.09,23.09,23.09,0,0,1,11.12,2.54,24.87,24.87,0,0,1,12.12,14.37,26.56,26.56,0,0,1,1.43,8.12v7.22Zm17.5-23.9a17.48,17.48,0,0,0-6.48,1.18,16.18,16.18,0,0,0-5.27,3.33,17.18,17.18,0,0,0-3.69,5,19.43,19.43,0,0,0-1.85,6.26h33.73a17.13,17.13,0,0,0-1.63-6.54,15.92,15.92,0,0,0-3.69-5,17,17,0,0,0-5.17-3.16A16.27,16.27,0,0,0,1128.63,296Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1180.49,303.67a7,7,0,0,0,3.22,6.2q3.21,2.14,11.75,2.82,9.16.8,14,4.68t4.79,11.33v.68a16.85,16.85,0,0,1-1.52,7.27,16.09,16.09,0,0,1-4.22,5.47,18.52,18.52,0,0,1-6.54,3.44,31.41,31.41,0,0,1-18.87-.57,21.38,21.38,0,0,1-7.27-4.62,19.32,19.32,0,0,1-4.37-6.54,23,23,0,0,1-1.69-7.38l7.8-2a15.35,15.35,0,0,0,4.64,10.31q4.11,3.9,11,3.89c3.87,0,7-.8,9.33-2.42a7.81,7.81,0,0,0,3.53-6.82c0-3.16-1.16-5.41-3.48-6.77s-6.08-2.21-11.28-2.59q-9.06-.67-13.91-4.51t-4.85-11.16v-.68a14.64,14.64,0,0,1,1.58-6.93,15.1,15.1,0,0,1,4.27-5,19,19,0,0,1,6.06-3,24.25,24.25,0,0,1,7.06-1,24.94,24.94,0,0,1,9.07,1.52,20.86,20.86,0,0,1,6.54,3.95,17.08,17.08,0,0,1,4,5.58A22.59,22.59,0,0,1,1213,305l-7.8,2a12.24,12.24,0,0,0-4.06-8.45,13.64,13.64,0,0,0-9.22-3.05,17.64,17.64,0,0,0-4.27.51,12.19,12.19,0,0,0-3.64,1.52,8.17,8.17,0,0,0-2.53,2.54A6.61,6.61,0,0,0,1180.49,303.67Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1283.48,317.88a32.79,32.79,0,0,1-2.16,12.34,27.32,27.32,0,0,1-5.75,9,23.88,23.88,0,0,1-8.38,5.58,26.92,26.92,0,0,1-20,0,24,24,0,0,1-8.33-5.58,27.32,27.32,0,0,1-5.75-9,32.79,32.79,0,0,1-2.16-12.34v-1.35a32.51,32.51,0,0,1,2.16-12.24,27.59,27.59,0,0,1,5.8-9.07,24.5,24.5,0,0,1,8.38-5.64,26.54,26.54,0,0,1,19.82,0,24.41,24.41,0,0,1,8.38,5.64,27.59,27.59,0,0,1,5.8,9.07,32.51,32.51,0,0,1,2.16,12.24Zm-26.25,20.52a17.25,17.25,0,0,0,7-1.41,16.3,16.3,0,0,0,5.64-4.12,19.6,19.6,0,0,0,3.8-6.48,24.91,24.91,0,0,0,1.37-8.51v-1.35a24.23,24.23,0,0,0-1.37-8.29,19.6,19.6,0,0,0-3.8-6.48,17.35,17.35,0,0,0-5.69-4.23,16.69,16.69,0,0,0-13.92,0,17.45,17.45,0,0,0-5.69,4.23,19.41,19.41,0,0,0-3.79,6.48,24,24,0,0,0-1.37,8.29v1.35a24.67,24.67,0,0,0,1.37,8.51,19.41,19.41,0,0,0,3.79,6.48,16.3,16.3,0,0,0,5.64,4.12A17.25,17.25,0,0,0,1257.23,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1295.71,289.24h19v7.44H1316a14.18,14.18,0,0,1,5.69-6.82,17.4,17.4,0,0,1,21.19,3.33q4.85,5.52,5.16,16.12l-8.64,1.35q0-7.77-3.48-11.22a11.69,11.69,0,0,0-8.54-3.43,11.21,11.21,0,0,0-5.64,1.35,11.59,11.59,0,0,0-4,3.72,16.56,16.56,0,0,0-2.32,5.52,29.82,29.82,0,0,0-.74,6.77v23.68H1328v8.11h-33.52v-8.11h12V297.36h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
      </g>
      <g id="pedagoge">
        <path
          d="M855.71,312.69v32.47h-8.85V266.24h26.35a25.84,25.84,0,0,1,9.91,1.75,20.19,20.19,0,0,1,7,4.68,19.51,19.51,0,0,1,4.22,6.82,23.56,23.56,0,0,1,1.42,8.17v3.39a24.06,24.06,0,0,1-1.42,8.23,19.51,19.51,0,0,1-4.27,6.93,20.34,20.34,0,0,1-7.06,4.73,25.41,25.41,0,0,1-9.81,1.75Zm0-8.79h16.45q14.76,0,14.76-13.53v-2a13.11,13.11,0,0,0-3.64-9.64Q879.64,275,872.16,275H855.71Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M949.53,335.69h-1.26a17.71,17.71,0,0,1-16.45,11.05,24.51,24.51,0,0,1-9.59-1.86,21.8,21.8,0,0,1-7.75-5.52,26.61,26.61,0,0,1-5.22-9,36.52,36.52,0,0,1-1.89-12.29v-1.8a36.23,36.23,0,0,1,1.89-12.18,26.56,26.56,0,0,1,5.22-9,22.48,22.48,0,0,1,7.75-5.58,23.32,23.32,0,0,1,9.38-1.92,19.06,19.06,0,0,1,9.75,2.54,17.34,17.34,0,0,1,6.91,7.84h1.26v-8.8h8.22v44.42q0,3.39,2.85,3.39h2.64v8.11h-5.59a7.54,7.54,0,0,1-5.85-2.48,9,9,0,0,1-2.27-6.31Zm-35.21-63.13a7.92,7.92,0,0,1,2.16-5.59,7.05,7.05,0,0,1,10.44,0,8.3,8.3,0,0,1,0,11.17,7.05,7.05,0,0,1-10.44,0A7.88,7.88,0,0,1,914.32,272.56Zm18.35,65.84a15.76,15.76,0,0,0,6.8-1.47,15.16,15.16,0,0,0,5.32-4.17,20.48,20.48,0,0,0,3.48-6.48,26.45,26.45,0,0,0,1.26-8.4v-1.35a26.07,26.07,0,0,0-1.26-8.29,19.8,19.8,0,0,0-3.53-6.48,16.3,16.3,0,0,0-5.38-4.23,15,15,0,0,0-6.69-1.52,15.52,15.52,0,0,0-6.75,1.46,16.08,16.08,0,0,0-5.32,4.12,19,19,0,0,0-3.54,6.42,26.11,26.11,0,0,0-1.26,8.29v1.8q0,9.58,4.69,14.94A15.45,15.45,0,0,0,932.67,338.4Zm2.74-65.84a7.92,7.92,0,0,1,2.16-5.59A7,7,0,0,1,948,267a8.3,8.3,0,0,1,0,11.17,7,7,0,0,1-10.43,0A7.88,7.88,0,0,1,935.41,272.56Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1016.57,336.59h-1.26a16.07,16.07,0,0,1-3.22,4.51,19.09,19.09,0,0,1-4.21,3.16,19.43,19.43,0,0,1-4.8,1.86,20.54,20.54,0,0,1-4.85.62,24.86,24.86,0,0,1-9.8-1.92,23.28,23.28,0,0,1-8-5.52,25.57,25.57,0,0,1-5.38-9,35.64,35.64,0,0,1-2-12.24v-1.8a34.31,34.31,0,0,1,2-12.12,27.06,27.06,0,0,1,5.37-9,22.7,22.7,0,0,1,7.91-5.58,24.33,24.33,0,0,1,9.59-1.92,20.86,20.86,0,0,1,10.07,2.54,16.8,16.8,0,0,1,7.22,7.84h1.26v-31.8h8.23v78.92h-8.23Zm-17.49,1.81a16,16,0,0,0,6.85-1.47,16.47,16.47,0,0,0,5.53-4.17,20,20,0,0,0,3.74-6.48,24.35,24.35,0,0,0,1.37-8.4v-1.35a24,24,0,0,0-1.37-8.29,20,20,0,0,0-3.74-6.48,16.93,16.93,0,0,0-5.58-4.23,15.67,15.67,0,0,0-6.8-1.52,16.35,16.35,0,0,0-12.5,5.63,19.64,19.64,0,0,0-3.69,6.43,24.5,24.5,0,0,0-1.31,8.23v1.8a25.22,25.22,0,0,0,1.31,8.46,19,19,0,0,0,3.69,6.37,16.28,16.28,0,0,0,5.54,4.06A16.91,16.91,0,0,0,999.08,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1078.56,335.69h-1.27a17.71,17.71,0,0,1-16.44,11.05,24.47,24.47,0,0,1-9.59-1.86,21.63,21.63,0,0,1-7.75-5.52,26.29,26.29,0,0,1-5.22-9,36.26,36.26,0,0,1-1.9-12.29v-1.8a36,36,0,0,1,1.9-12.18,26.24,26.24,0,0,1,5.22-9,22.29,22.29,0,0,1,7.75-5.58,23.29,23.29,0,0,1,9.38-1.92,19.11,19.11,0,0,1,9.75,2.54,17.32,17.32,0,0,1,6.9,7.84h1.27v-8.8h8.22v44.42q0,3.39,2.85,3.39h2.63v8.11h-5.59a7.54,7.54,0,0,1-5.85-2.48,9,9,0,0,1-2.26-6.31Zm-16.87,2.71a15.7,15.7,0,0,0,6.8-1.47,15.07,15.07,0,0,0,5.32-4.17,20.09,20.09,0,0,0,3.48-6.48,26.17,26.17,0,0,0,1.27-8.4v-1.35a25.79,25.79,0,0,0-1.27-8.29,19.61,19.61,0,0,0-3.53-6.48,16.16,16.16,0,0,0-5.37-4.23,15,15,0,0,0-6.7-1.52,15.52,15.52,0,0,0-6.75,1.46,16.18,16.18,0,0,0-5.32,4.12,19,19,0,0,0-3.53,6.42,26.11,26.11,0,0,0-1.26,8.29v1.8q0,9.58,4.69,14.94A15.41,15.41,0,0,0,1061.69,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1144.86,336.59h-1.26a17.52,17.52,0,0,1-6.91,7.61,18.66,18.66,0,0,1-9.54,2.54,25.7,25.7,0,0,1-9.91-1.92,24.2,24.2,0,0,1-8.17-5.52,25.94,25.94,0,0,1-5.58-9,34,34,0,0,1-2.06-12.24v-1.8a32.78,32.78,0,0,1,2.11-12.12,27.65,27.65,0,0,1,5.59-9,23.47,23.47,0,0,1,8.11-5.58,25.16,25.16,0,0,1,9.7-1.92,18.52,18.52,0,0,1,10,2.65,17.88,17.88,0,0,1,6.7,7.73h1.26v-8.8h8.22v69.68a9,9,0,0,1-2.26,6.31,7.57,7.57,0,0,1-5.85,2.48h-34v-8.12H1142c1.89,0,2.84-1.12,2.84-3.38Zm-17.5,1.81a16.09,16.09,0,0,0,6.86-1.47,16.57,16.57,0,0,0,5.53-4.17,20,20,0,0,0,3.74-6.48,24.59,24.59,0,0,0,1.37-8.4v-1.35a24.23,24.23,0,0,0-1.37-8.29,20,20,0,0,0-3.74-6.48,16.87,16.87,0,0,0-5.59-4.23,15.61,15.61,0,0,0-6.8-1.52,16.35,16.35,0,0,0-12.49,5.63,19.64,19.64,0,0,0-3.69,6.43,24.5,24.5,0,0,0-1.32,8.23v1.8a25.21,25.21,0,0,0,1.32,8.46,19,19,0,0,0,3.69,6.37,16.18,16.18,0,0,0,5.54,4.06A16.83,16.83,0,0,0,1127.36,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1219,317.88a32.79,32.79,0,0,1-2.16,12.34,27.32,27.32,0,0,1-5.75,9,23.88,23.88,0,0,1-8.38,5.58,26.92,26.92,0,0,1-20,0,24,24,0,0,1-8.33-5.58,27.32,27.32,0,0,1-5.75-9,32.79,32.79,0,0,1-2.16-12.34v-1.35a32.51,32.51,0,0,1,2.16-12.24,27.59,27.59,0,0,1,5.8-9.07,24.41,24.41,0,0,1,8.38-5.64,26.54,26.54,0,0,1,19.82,0,24.5,24.5,0,0,1,8.38,5.64,27.59,27.59,0,0,1,5.8,9.07,32.51,32.51,0,0,1,2.16,12.24Zm-26.25,20.52a17.25,17.25,0,0,0,7-1.41,16.3,16.3,0,0,0,5.64-4.12,19.58,19.58,0,0,0,3.79-6.48,24.67,24.67,0,0,0,1.37-8.51v-1.35a24,24,0,0,0-1.37-8.29,19.58,19.58,0,0,0-3.79-6.48,17.45,17.45,0,0,0-5.69-4.23,16.69,16.69,0,0,0-13.92,0,17.35,17.35,0,0,0-5.69,4.23,19.6,19.6,0,0,0-3.8,6.48,24.23,24.23,0,0,0-1.37,8.29v1.35a24.91,24.91,0,0,0,1.37,8.51,19.6,19.6,0,0,0,3.8,6.48,16.21,16.21,0,0,0,5.64,4.12A17.25,17.25,0,0,0,1192.72,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1273.89,336.59h-1.27a17.56,17.56,0,0,1-6.9,7.61,18.72,18.72,0,0,1-9.54,2.54,25.62,25.62,0,0,1-9.91-1.92,24.1,24.1,0,0,1-8.17-5.52,25.82,25.82,0,0,1-5.59-9,34,34,0,0,1-2-12.24v-1.8a33,33,0,0,1,2.1-12.12,27.65,27.65,0,0,1,5.59-9,23.5,23.5,0,0,1,8.12-5.58,25.09,25.09,0,0,1,9.7-1.92,18.57,18.57,0,0,1,10,2.65,17.93,17.93,0,0,1,6.69,7.73h1.27v-8.8h8.22v69.68a9,9,0,0,1-2.27,6.31,7.57,7.57,0,0,1-5.85,2.48h-34v-8.12H1271c1.9,0,2.85-1.12,2.85-3.38Zm-17.5,1.81a16,16,0,0,0,6.85-1.47,16.47,16.47,0,0,0,5.53-4.17,20.21,20.21,0,0,0,3.75-6.48,24.59,24.59,0,0,0,1.37-8.4v-1.35a24.23,24.23,0,0,0-1.37-8.29,20.21,20.21,0,0,0-3.75-6.48,16.93,16.93,0,0,0-5.58-4.23,15.64,15.64,0,0,0-6.8-1.52,16.31,16.31,0,0,0-12.49,5.63,19.64,19.64,0,0,0-3.69,6.43,24.5,24.5,0,0,0-1.32,8.23v1.8a25.21,25.21,0,0,0,1.32,8.46,19,19,0,0,0,3.69,6.37,16.15,16.15,0,0,0,5.53,4.06A16.91,16.91,0,0,0,1256.39,338.4Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1304.67,319.91q.32,8.34,4.85,13.41t12.65,5.08a20.71,20.71,0,0,0,6.43-.9,14.94,14.94,0,0,0,4.69-2.48,13.44,13.44,0,0,0,3.16-3.67,21.37,21.37,0,0,0,2-4.45l7.8,2.25a24.82,24.82,0,0,1-8.17,12.69q-6,4.91-16.08,4.9a24.82,24.82,0,0,1-10.27-2.09,23.18,23.18,0,0,1-8.07-5.91,28,28,0,0,1-5.27-9.14,34.67,34.67,0,0,1-1.9-11.72v-2.71a30.18,30.18,0,0,1,2-10.93,26,26,0,0,1,5.43-8.74,25.47,25.47,0,0,1,8.17-5.75,24.79,24.79,0,0,1,10.18-2.09,23.09,23.09,0,0,1,11.12,2.54,24.87,24.87,0,0,1,12.12,14.37,26.52,26.52,0,0,1,1.42,8.12v7.22Zm17.5-23.9a17.57,17.57,0,0,0-6.49,1.18,16.29,16.29,0,0,0-5.27,3.33,17.54,17.54,0,0,0-3.69,5,19.42,19.42,0,0,0-1.84,6.26h33.73a17.13,17.13,0,0,0-1.63-6.54,15.92,15.92,0,0,0-3.69-5,17.2,17.2,0,0,0-5.17-3.16A16.31,16.31,0,0,0,1322.17,296Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
      </g>
      <g id="writer">
        <path
          d="M1021.32,344.75h-15.18l-6.33-51.87h-1.26l-6.33,51.87H977l-8.22-55.93h8.44l7,51.87h1.27l6.11-51.87h15.18l6.11,51.87h1.27l7-51.87h8.43Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1037.66,288.82h19v7.45h1.27a14.2,14.2,0,0,1,5.69-6.83,17.44,17.44,0,0,1,21.19,3.33q4.85,5.52,5.16,16.12l-8.64,1.36q0-7.78-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.59,11.59,0,0,0-4,3.72,16.53,16.53,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68h13.28v8.12h-33.52v-8.12h12V296.94h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1106.39,336.63h18.34V296.94h-16.45v-8.12H1133v47.81H1150v8.12h-43.64Zm15-64.49a7.88,7.88,0,0,1,2.16-5.58,7.05,7.05,0,0,1,10.44,0,8.29,8.29,0,0,1,0,11.16,7.05,7.05,0,0,1-10.44,0A7.88,7.88,0,0,1,1121.35,272.14Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1167.84,288.82h16.45v-23h8.22v23h20.24v8.12h-20.24v36.31q0,3.38,2.84,3.38h14.87v8.12H1192.4a7.57,7.57,0,0,1-5.85-2.48,9,9,0,0,1-2.26-6.32v-39h-16.45Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1240.15,319.49q.31,8.34,4.85,13.42t12.65,5.07a20.67,20.67,0,0,0,6.43-.9,14.64,14.64,0,0,0,4.69-2.48,13.19,13.19,0,0,0,3.17-3.67,22.48,22.48,0,0,0,2-4.45l7.8,2.26a24.83,24.83,0,0,1-8.17,12.68q-6,4.9-16.08,4.9a25.05,25.05,0,0,1-10.28-2.08,23.14,23.14,0,0,1-8.06-5.92,27.73,27.73,0,0,1-5.27-9.13,34.49,34.49,0,0,1-1.9-11.73v-2.7a30.23,30.23,0,0,1,2-10.94,26.25,26.25,0,0,1,5.43-8.74,25.36,25.36,0,0,1,8.17-5.75,24.77,24.77,0,0,1,10.17-2.08,23,23,0,0,1,11.12,2.53,25,25,0,0,1,7.7,6.26,25.29,25.29,0,0,1,4.43,8.12,26.47,26.47,0,0,1,1.42,8.12v7.21Zm17.5-23.9a17.48,17.48,0,0,0-6.48,1.18,16.29,16.29,0,0,0-5.27,3.33,17.59,17.59,0,0,0-3.69,5,19.3,19.3,0,0,0-1.85,6.25h33.74a17.13,17.13,0,0,0-1.64-6.54,16,16,0,0,0-3.69-5,16.8,16.8,0,0,0-5.16-3.15A16.34,16.34,0,0,0,1257.65,295.59Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1295.71,288.82h19v7.45H1316a14.2,14.2,0,0,1,5.69-6.83,17.44,17.44,0,0,1,21.19,3.33q4.85,5.52,5.16,16.12l-8.64,1.36q0-7.78-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.59,11.59,0,0,0-4,3.72,16.53,16.53,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V296.94h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
      </g>
      <g id="escritor">
        <path
          d="M853.08,319.49q.31,8.34,4.85,13.42T870.58,338a20.67,20.67,0,0,0,6.43-.9,14.74,14.74,0,0,0,4.69-2.48,13.15,13.15,0,0,0,3.16-3.67,21.37,21.37,0,0,0,1.95-4.45l7.8,2.26a24.77,24.77,0,0,1-8.17,12.68q-6,4.9-16.07,4.9a25,25,0,0,1-10.28-2.08,23.08,23.08,0,0,1-8.07-5.92,27.9,27.9,0,0,1-5.27-9.13,34.73,34.73,0,0,1-1.89-11.73v-2.7a30.23,30.23,0,0,1,1.95-10.94,26.25,26.25,0,0,1,5.43-8.74,25.25,25.25,0,0,1,8.17-5.75,24.7,24.7,0,0,1,10.17-2.08,23.08,23.08,0,0,1,11.12,2.53,24.85,24.85,0,0,1,12.12,14.38,26.47,26.47,0,0,1,1.42,8.12v7.21Zm17.5-23.9a17.48,17.48,0,0,0-6.48,1.18,16.22,16.22,0,0,0-5.28,3.33,17.59,17.59,0,0,0-3.69,5,19.54,19.54,0,0,0-1.84,6.25H887a17.13,17.13,0,0,0-1.63-6.54,16,16,0,0,0-3.69-5,16.73,16.73,0,0,0-5.17-3.15A16.32,16.32,0,0,0,870.58,295.59Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M922.44,303.26a7,7,0,0,0,3.22,6.2c2.14,1.43,6.06,2.36,11.75,2.82q9.17.78,14,4.67t4.79,11.33V329a16.68,16.68,0,0,1-1.53,7.27,16,16,0,0,1-4.21,5.47,18.36,18.36,0,0,1-6.54,3.44,31.51,31.51,0,0,1-18.87-.56,21.55,21.55,0,0,1-7.27-4.63,19.13,19.13,0,0,1-4.37-6.54,23,23,0,0,1-1.69-7.38l7.8-2a15.4,15.4,0,0,0,4.64,10.32q4.11,3.89,11,3.89a16.19,16.19,0,0,0,9.33-2.43A7.8,7.8,0,0,0,948,329c0-3.15-1.16-5.41-3.48-6.76s-6.08-2.22-11.28-2.6q-9.06-.68-13.91-4.51t-4.85-11.16v-.67a14.71,14.71,0,0,1,1.58-6.94,15,15,0,0,1,4.27-5,19,19,0,0,1,6.06-3.05,24.25,24.25,0,0,1,7.06-1,24.73,24.73,0,0,1,9.07,1.52,20.49,20.49,0,0,1,6.53,3.94,17,17,0,0,1,4.06,5.59,22.53,22.53,0,0,1,1.85,6.31l-7.8,2a12.25,12.25,0,0,0-4.06-8.46,13.63,13.63,0,0,0-9.22-3,17.64,17.64,0,0,0-4.27.51,11.7,11.7,0,0,0-3.64,1.52,8,8,0,0,0-2.53,2.53A6.62,6.62,0,0,0,922.44,303.26Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1025,324.9a30.3,30.3,0,0,1-2.9,8.57,24.17,24.17,0,0,1-5.22,6.82,22.77,22.77,0,0,1-7.38,4.46,26.64,26.64,0,0,1-9.38,1.57,28.34,28.34,0,0,1-10.38-1.91,24.91,24.91,0,0,1-8.59-5.58,26.4,26.4,0,0,1-5.86-9,32,32,0,0,1-2.16-12.17v-1.36a32.58,32.58,0,0,1,2.16-12.17,26.82,26.82,0,0,1,5.86-9.13,25.79,25.79,0,0,1,8.59-5.75,26.68,26.68,0,0,1,10.38-2,26,26,0,0,1,9.17,1.57,23.33,23.33,0,0,1,7.43,4.46,23.61,23.61,0,0,1,5.27,6.82,28.2,28.2,0,0,1,2.8,8.57l-8.23,2a19.5,19.5,0,0,0-1.52-5.7,16,16,0,0,0-3.27-4.84,15.25,15.25,0,0,0-5-3.33,17.52,17.52,0,0,0-6.85-1.24,17,17,0,0,0-7.12,1.52A18.29,18.29,0,0,0,987,301.4a20,20,0,0,0-4,6.59,23.79,23.79,0,0,0-1.42,8.34v1.36A24,24,0,0,0,983,326.2a18.24,18.24,0,0,0,4,6.37,17.72,17.72,0,0,0,5.91,4,18.62,18.62,0,0,0,7.27,1.41,16.44,16.44,0,0,0,6.8-1.3,16,16,0,0,0,5-3.38,16.29,16.29,0,0,0,3.27-4.79,21.24,21.24,0,0,0,1.64-5.64Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1037.66,288.82h19v7.45h1.27a14.2,14.2,0,0,1,5.69-6.83,17.44,17.44,0,0,1,21.19,3.33q4.85,5.52,5.16,16.12l-8.64,1.36q0-7.78-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.59,11.59,0,0,0-4,3.72,16.53,16.53,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68h13.28v8.12h-33.52v-8.12h12V296.94h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1106.39,336.63h18.34V296.94h-16.45v-8.12H1133v47.81H1150v8.12h-43.64Zm15-64.49a7.88,7.88,0,0,1,2.16-5.58,7.05,7.05,0,0,1,10.44,0,8.29,8.29,0,0,1,0,11.16,7.05,7.05,0,0,1-10.44,0A7.88,7.88,0,0,1,1121.35,272.14Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1167.84,288.82h16.45v-23h8.22v23h20.24v8.12h-20.24v36.31q0,3.38,2.84,3.38h14.87v8.12H1192.4a7.57,7.57,0,0,1-5.85-2.48,9,9,0,0,1-2.26-6.32v-39h-16.45Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1283.48,317.46a32.84,32.84,0,0,1-2.16,12.35,27.32,27.32,0,0,1-5.75,9,24.15,24.15,0,0,1-8.38,5.58,27.05,27.05,0,0,1-20,0,24.23,24.23,0,0,1-8.33-5.58,27.32,27.32,0,0,1-5.75-9,32.84,32.84,0,0,1-2.16-12.35v-1.35a32.49,32.49,0,0,1,2.16-12.23,27.64,27.64,0,0,1,5.8-9.08,24.5,24.5,0,0,1,8.38-5.64,26.66,26.66,0,0,1,19.82,0,24.41,24.41,0,0,1,8.38,5.64,27.48,27.48,0,0,1,5.8,9.08,32.49,32.49,0,0,1,2.16,12.23ZM1257.23,338a17.25,17.25,0,0,0,7-1.41,16.4,16.4,0,0,0,5.64-4.11,19.75,19.75,0,0,0,3.8-6.49,24.86,24.86,0,0,0,1.37-8.51v-1.35a24.23,24.23,0,0,0-1.37-8.29,19.7,19.7,0,0,0-3.8-6.48,17.63,17.63,0,0,0-5.69-4.23,16.69,16.69,0,0,0-13.92,0,17.74,17.74,0,0,0-5.69,4.23,19.51,19.51,0,0,0-3.79,6.48,24,24,0,0,0-1.37,8.29v1.35a24.63,24.63,0,0,0,1.37,8.51,19.56,19.56,0,0,0,3.79,6.49,16.4,16.4,0,0,0,5.64,4.11A17.25,17.25,0,0,0,1257.23,338Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1295.71,288.82h19v7.45H1316a14.2,14.2,0,0,1,5.69-6.83,17.44,17.44,0,0,1,21.19,3.33q4.85,5.52,5.16,16.12l-8.64,1.36q0-7.78-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.59,11.59,0,0,0-4,3.72,16.53,16.53,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V296.94h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
      </g>
      <g id="schriftstellor">
        <path
          d="M500.47,288.6a15.35,15.35,0,0,0-1.42-6.77A13.72,13.72,0,0,0,495.2,277a17.49,17.49,0,0,0-5.58-2.93,21.56,21.56,0,0,0-6.65-1,19.26,19.26,0,0,0-5.79.85,16.43,16.43,0,0,0-4.91,2.42,11.7,11.7,0,0,0-3.42,3.89,11,11,0,0,0-1.27,5.36v.67a11.5,11.5,0,0,0,1.27,5.58,11.15,11.15,0,0,0,3.74,3.95,22.5,22.5,0,0,0,6.17,2.7,69.7,69.7,0,0,0,8.64,1.86q11.6,1.92,17.08,7.28T510,322v1.35a25.82,25.82,0,0,1-1.63,9.31,19.73,19.73,0,0,1-4.85,7.27,22.23,22.23,0,0,1-8,4.73,32.54,32.54,0,0,1-11,1.69,33.22,33.22,0,0,1-12.49-2.19A25.13,25.13,0,0,1,463,338a26.38,26.38,0,0,1-5.54-9.14,33.45,33.45,0,0,1-1.89-11.44v-3.38h8.85v2.71q0,10.36,5.32,15.55t14.81,5.19c5.49,0,9.61-1.3,12.39-3.89a13.43,13.43,0,0,0,4.16-10.32v-.67q0-6.19-4.26-9.47T483,308.44A49.12,49.12,0,0,1,472.91,306a25.21,25.21,0,0,1-7.65-4.29,17.77,17.77,0,0,1-4.84-6.37,21,21,0,0,1-1.69-8.79v-1.35a19.83,19.83,0,0,1,1.79-8.46,20.1,20.1,0,0,1,5-6.65,22.41,22.41,0,0,1,7.69-4.34,33,33,0,0,1,21,.39,25.15,25.15,0,0,1,8.28,5.13,21.36,21.36,0,0,1,5.11,7.56,24.15,24.15,0,0,1,1.74,9.07v4.74h-8.86Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M573.42,324.9a30.3,30.3,0,0,1-2.9,8.57,24.17,24.17,0,0,1-5.22,6.82,22.77,22.77,0,0,1-7.38,4.46,26.64,26.64,0,0,1-9.38,1.57,28.42,28.42,0,0,1-10.38-1.91,25,25,0,0,1-8.59-5.58,26.52,26.52,0,0,1-5.85-9,31.84,31.84,0,0,1-2.17-12.17v-1.36a32.38,32.38,0,0,1,2.17-12.17,27,27,0,0,1,5.85-9.13,25.89,25.89,0,0,1,8.59-5.75,26.75,26.75,0,0,1,10.38-2,26,26,0,0,1,9.17,1.57,23.33,23.33,0,0,1,7.43,4.46,23.61,23.61,0,0,1,5.27,6.82,27.93,27.93,0,0,1,2.8,8.57l-8.22,2a19.83,19.83,0,0,0-1.53-5.7,16,16,0,0,0-3.27-4.84,15.25,15.25,0,0,0-5-3.33,17.52,17.52,0,0,0-6.85-1.24,17,17,0,0,0-7.12,1.52,18.29,18.29,0,0,0-5.85,4.29,20,20,0,0,0-4,6.59,23.79,23.79,0,0,0-1.42,8.34v1.36a24,24,0,0,0,1.42,8.51,18.24,18.24,0,0,0,4,6.37,17.72,17.72,0,0,0,5.91,4,18.66,18.66,0,0,0,7.27,1.41,16.44,16.44,0,0,0,6.8-1.3,16,16,0,0,0,4.95-3.38,16.29,16.29,0,0,0,3.27-4.79,21.24,21.24,0,0,0,1.64-5.64Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M597.24,344.75H589V265.83h8.22V299h1.27a20.72,20.72,0,0,1,6.8-8.57,17.81,17.81,0,0,1,10.7-3.15,17.62,17.62,0,0,1,13.86,6q5.31,6,5.32,18.09v33.38H627V313.18q0-8.79-3.69-13.19a12.4,12.4,0,0,0-10-4.4,14.08,14.08,0,0,0-11.75,5.47q-4.28,5.46-4.27,14.6Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M650.58,288.82h19v7.45h1.27a14.2,14.2,0,0,1,5.69-6.83,17.44,17.44,0,0,1,21.19,3.33q4.84,5.52,5.16,16.12l-8.64,1.36q0-7.78-3.48-11.22a11.68,11.68,0,0,0-8.54-3.44,11.24,11.24,0,0,0-5.64,1.35,11.68,11.68,0,0,0-3.95,3.72,16.73,16.73,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68h13.29v8.12H649.32v-8.12h12V296.94H650.58Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M719.31,336.63h18.34V296.94H721.21v-8.12h24.66v47.81H763v8.12H719.31Zm15-64.49a7.88,7.88,0,0,1,2.16-5.58,7.05,7.05,0,0,1,10.44,0,8.29,8.29,0,0,1,0,11.16,7.05,7.05,0,0,1-10.44,0A7.88,7.88,0,0,1,734.28,272.14Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M782,288.82h16.13v-14.2a9,9,0,0,1,2.27-6.31,7.52,7.52,0,0,1,5.84-2.48h20.67v8.11H809.23q-2.85,0-2.85,3.38v11.5H828.2v8.12H806.38v47.81h-8.22V296.94H782Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M845.28,288.82h16.44v-23h8.22v23h20.24v8.12H869.94v36.31q0,3.38,2.85,3.38h14.86v8.12H869.84a7.57,7.57,0,0,1-5.85-2.48,9,9,0,0,1-2.27-6.32v-39H845.28Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M922.44,303.26a7,7,0,0,0,3.21,6.2c2.15,1.43,6.07,2.36,11.76,2.82q9.17.78,14,4.67t4.79,11.33V329a16.68,16.68,0,0,1-1.53,7.27,16,16,0,0,1-4.21,5.47,18.36,18.36,0,0,1-6.54,3.44,31.51,31.51,0,0,1-18.87-.56,21.55,21.55,0,0,1-7.27-4.63,19.3,19.3,0,0,1-4.38-6.54,23.21,23.21,0,0,1-1.68-7.38l7.8-2a15.4,15.4,0,0,0,4.64,10.32q4.11,3.89,11,3.89a16.19,16.19,0,0,0,9.33-2.43A7.8,7.8,0,0,0,948,329c0-3.15-1.16-5.41-3.48-6.76s-6.08-2.22-11.28-2.6q-9.06-.68-13.91-4.51t-4.85-11.16v-.67a14.71,14.71,0,0,1,1.58-6.94,15,15,0,0,1,4.27-5,19,19,0,0,1,6.06-3.05,24.25,24.25,0,0,1,7.06-1,24.73,24.73,0,0,1,9.07,1.52,20.49,20.49,0,0,1,6.53,3.94,17,17,0,0,1,4.06,5.59,22.53,22.53,0,0,1,1.85,6.31l-7.8,2a12.29,12.29,0,0,0-4.06-8.46,13.64,13.64,0,0,0-9.23-3,17.76,17.76,0,0,0-4.27.51,11.64,11.64,0,0,0-3.63,1.52,7.94,7.94,0,0,0-2.53,2.53A6.62,6.62,0,0,0,922.44,303.26Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M974.3,288.82h16.45v-23H999v23h20.24v8.12H999v36.31q0,3.38,2.85,3.38h14.86v8.12H998.86a7.57,7.57,0,0,1-5.85-2.48,9,9,0,0,1-2.26-6.32v-39H974.3Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1046.62,319.49q.32,8.34,4.85,13.42t12.64,5.07a20.73,20.73,0,0,0,6.44-.9,14.85,14.85,0,0,0,4.69-2.48,13.15,13.15,0,0,0,3.16-3.67,21.37,21.37,0,0,0,1.95-4.45l7.8,2.26a24.83,24.83,0,0,1-8.17,12.68q-6,4.9-16.08,4.9a25,25,0,0,1-10.27-2.08,23.08,23.08,0,0,1-8.07-5.92,27.9,27.9,0,0,1-5.27-9.13,34.73,34.73,0,0,1-1.9-11.73v-2.7a30.23,30.23,0,0,1,1.95-10.94,26.25,26.25,0,0,1,5.43-8.74,25.36,25.36,0,0,1,8.17-5.75,24.77,24.77,0,0,1,10.17-2.08,23.1,23.1,0,0,1,11.13,2.53,24.85,24.85,0,0,1,12.12,14.38,26.47,26.47,0,0,1,1.42,8.12v7.21Zm17.49-23.9a17.55,17.55,0,0,0-6.48,1.18,16.29,16.29,0,0,0-5.27,3.33,17.59,17.59,0,0,0-3.69,5,19.29,19.29,0,0,0-1.84,6.25h33.73a17.31,17.31,0,0,0-1.63-6.54,16,16,0,0,0-3.69-5,17,17,0,0,0-5.17-3.15A16.34,16.34,0,0,0,1064.11,295.59Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1105.12,336.63h19V273.94h-18.35v-8.11h26.57v70.8h19v8.12h-46.17Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1169.63,336.63h19V273.94h-18.34v-8.11h26.56v70.8h19v8.12h-46.17Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1240.15,319.49q.33,8.34,4.85,13.42t12.65,5.07a20.62,20.62,0,0,0,6.43-.9,14.64,14.64,0,0,0,4.69-2.48,13.19,13.19,0,0,0,3.17-3.67,22.48,22.48,0,0,0,2-4.45l7.8,2.26a24.83,24.83,0,0,1-8.17,12.68q-6,4.9-16.08,4.9a25.05,25.05,0,0,1-10.28-2.08,23.14,23.14,0,0,1-8.06-5.92,27.9,27.9,0,0,1-5.27-9.13,34.49,34.49,0,0,1-1.9-11.73v-2.7a30.23,30.23,0,0,1,2-10.94,26.25,26.25,0,0,1,5.43-8.74,25.36,25.36,0,0,1,8.17-5.75,24.77,24.77,0,0,1,10.17-2.08,23,23,0,0,1,11.12,2.53,25,25,0,0,1,7.7,6.26,25.29,25.29,0,0,1,4.43,8.12,26.47,26.47,0,0,1,1.42,8.12v7.21Zm17.5-23.9a17.48,17.48,0,0,0-6.48,1.18,16.29,16.29,0,0,0-5.27,3.33,17.59,17.59,0,0,0-3.69,5,19,19,0,0,0-1.84,6.25h33.73a17.13,17.13,0,0,0-1.64-6.54,16,16,0,0,0-3.69-5,16.8,16.8,0,0,0-5.16-3.15A16.34,16.34,0,0,0,1257.65,295.59Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
        <path
          d="M1295.71,288.82h19v7.45H1316a14.2,14.2,0,0,1,5.69-6.83,17.44,17.44,0,0,1,21.19,3.33q4.85,5.52,5.16,16.12l-8.64,1.36q0-7.78-3.48-11.22a11.7,11.7,0,0,0-8.54-3.44,11.21,11.21,0,0,0-5.64,1.35,11.59,11.59,0,0,0-4,3.72,16.53,16.53,0,0,0-2.32,5.53,29.74,29.74,0,0,0-.74,6.76v23.68H1328v8.12h-33.52v-8.12h12V296.94h-10.75Z"
          transform="translate(-98.55 75.74)"
          fill="#a39274"
        ></path>
      </g>

      <g id="solidunderline" data-name="underline">
        <path
          ref={solidunderline2}
          d="M1320.31,219.74l.45.08,1.6.13c1.88-.47,5.6,0,10.49.46,0-.18-.4-.39,1.33-.36,7.74.9,3.88.27,9.52.29a36.15,36.15,0,0,1-4.74-.46l10.8.56c-1.46-.44-2.65-.91-.82-1.07-1-.78,2.57-1.37,4-2-1.93-.22-3.46-.42-4.18-.57.28-.28,2.14-.28,4.41-.18a3.78,3.78,0,0,0-.69-.27,3.78,3.78,0,0,1,.69.27c1.5.07,3.17.19,4.71.32-.86-.15-1.72-.31-1.28-.41l-6.49-.45c-.21-.08,0-.12.4-.15l-1.69.06,1.27.27c.44.17-.44.2-1.31.23a16.1,16.1,0,0,1-3-.39l-3.48.08c-1.34.45,9.06.94,3.4,1.05l-1.72-.26a73.32,73.32,0,0,0-7.81,0c-2.55-.81-7.38,0-7.76-.9-9.92-1.11-22.95-1.15-32.84-2.69-1.76.49-1.83,1.62-6.19,2.08-.86-.14-2.16-.32-1.71-.42l-3.05.15a27.32,27.32,0,0,1,4.75.45c-4.77,0,2.13.63,1.69.92l-6.51-.06.76.17c11.59.86,23.15,2.14,34.74,3.14Z"
          transform="translate(-98.55 75.74)"
          fill={"#ec6543ff"}
          stroke={"#ec6543ff"}
          strokeMiterlimit="10"
        />
        <path
          ref={solidunderline1}
          d="M1122.27,200.82l.11.68-80.31-.25c-28.44,0-58.33,0-88.95.46s-62,1.1-93.33,2.16c-15.68.61-31.37,1.18-47,2-7.79.4-15.57.76-23.31,1.21l-23.08,1.35,2.85-2.7c-16.3,1.68-33.69,3.13-50.85,3.95-8.57.42-17.09.64-25.4.79l-24.1.28,11.88,1c-11,1.05-38.91.34-56.11-.62l1.72-.6c23.62.65-1.59-.29,8.05-1.68l4.12-.14-2.39-.44-4.12.15c.48-.36.14-.87,4-.84l-5.48-.31c-11.73-2.27-11.73-3.79-10.17-5.76-3.12.16.07,2.19-13.17,1.24l1.74-.63-7.27.47-7.28.55-6.51-.8c-2.59.22-4.73.53-6.89.7s-4.32.29-7,.28l-1.56,1.4c-11.91.31-25.29,1.68-38.61,3.35s-26.6,3.53-38.49,4.6c-5,2-18,1.8-31.19,5.18l6,.46c7.33-.22,19.29-1.56,32.3-3.18s27.18-3.47,38.84-4.28l-.83.85c-4.85.73-8.3,1.73-14.36,2.07l-1.42,1.51c5.35,1.72,15.7.28,25.85-1.35s20.12-3.45,24.37-3.27c9,.33,6.07,1.17,2,1.81s-9.28,1.32-5,1c-4.88.69-6.27,1.22-5.5,1.59s3.69.61,7.48.84l12.64.8c4.22.35,8,.68,10.06,1.1,5.73.78,13.16,1.39,21.59,1.94s17.86,1.08,27.56,1.56,19.69.9,29.2,1.2,18.54.46,26.3.58l85.32-4c14.67-.64,29.21-1,43-1.52s26.94-.77,38.74-1.26c5.67-.11,12.19-.59,19-1.19s13.94-1.34,20.81-1.86c13.74-1.06,26.49-1.71,33.8.26,14.16,0,28.32-.06,42.49.1l-.9.77c41.32-.32,86.94-2.08,125.55-2,16.85.14,22-1.69,29.61.59,33.44,2.19,73,.59,105.67,1.94-.09-.68,4.49-1.19-1.53-1.83a199.36,199.36,0,0,1-24.33-1.43c-7-.83-11.89-1.88-12.15-2.82l6.26.41-11.13-1.91-7.2.32c-1.82-.52-2.63-.91-2.75-1.2-12.28-1.16-23-3-35.69-4.5A297.77,297.77,0,0,1,1122.27,200.82Z"
          transform="translate(-98.55 75.74)"
          fill={"#ec6543ff"}
          stroke={"#ec6543ff"}
          strokeMiterlimit="10"
        />
      </g>

      <g id="underline">
        <path
          ref={underline2}
          d="M1320.31,219.4l.45.08,1.6.13c1.88-.47,5.6-.05,10.49.46,0-.18-.4-.39,1.33-.36,7.74.9,3.88.27,9.52.3a35.84,35.84,0,0,1-4.74-.47l10.8.57c-1.46-.45-2.65-.92-.82-1.08-1-.77,2.57-1.37,4-2-1.93-.23-3.46-.43-4.18-.58.28-.28,2.14-.28,4.41-.18a3.26,3.26,0,0,0-.69-.26,3.26,3.26,0,0,1,.69.26c1.5.07,3.17.19,4.71.32-.86-.15-1.72-.3-1.28-.41l-6.49-.45c-.21-.08,0-.12.4-.15l-1.69.06,1.27.27c.44.17-.44.2-1.31.23a16.1,16.1,0,0,1-3-.39l-3.48.08c-1.34.45,9.06.94,3.4,1.05l-1.72-.26a73.32,73.32,0,0,0-7.81,0c-2.55-.81-7.38,0-7.76-.9-9.92-1.1-22.95-1.15-32.84-2.68-1.76.48-1.83,1.61-6.19,2.07-.86-.14-2.16-.31-1.71-.42l-3.05.15a27.32,27.32,0,0,1,4.75.45c-4.77,0,2.13.63,1.69.92l-6.51-.06.76.17c11.59.86,23.15,2.15,34.74,3.14Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke={"#ec6543ff"}
          strokeMiterlimit="10"
        />
        <path
          ref={underline1}
          d="M1122.27,200.48l.11.68-80.31-.25c-28.44,0-58.33,0-88.95.46s-62,1.1-93.33,2.16c-15.68.61-31.37,1.18-47,2-7.79.4-15.57.77-23.31,1.22l-23.08,1.34,2.85-2.7c-16.3,1.68-33.69,3.13-50.85,3.95-8.57.42-17.09.64-25.4.79l-24.1.28,11.88,1c-11,1.05-38.91.35-56.11-.62l1.72-.59c23.62.65-1.59-.3,8.05-1.69l4.12-.14-2.39-.44-4.12.15c.48-.36.14-.86,4-.83l-5.48-.31c-11.73-2.28-11.73-3.8-10.17-5.76-3.12.15.07,2.18-13.17,1.23l1.74-.63-7.27.47-7.28.55L588,202c-2.59.22-4.73.53-6.89.7s-4.32.29-7,.28l-1.56,1.41c-11.91.3-25.29,1.68-38.61,3.34s-26.6,3.53-38.49,4.6c-5,2-18,1.8-31.19,5.18l6,.46c7.33-.22,19.29-1.56,32.3-3.18s27.18-3.46,38.84-4.28l-.83.85c-4.85.73-8.3,1.73-14.36,2.07l-1.42,1.51c5.35,1.73,15.7.28,25.85-1.35s20.12-3.45,24.37-3.27c9,.34,6.07,1.17,2,1.81s-9.28,1.32-5,1c-4.88.69-6.27,1.23-5.5,1.59s3.69.62,7.48.84l12.64.8c4.22.35,8,.68,10.06,1.1,5.73.78,13.16,1.39,21.59,1.94s17.86,1.08,27.56,1.56,19.69.9,29.2,1.2,18.54.47,26.3.58l85.32-4c14.67-.64,29.21-1,43-1.52s26.94-.76,38.74-1.26c5.67-.11,12.19-.59,19-1.19s13.94-1.34,20.81-1.86c13.74-1.06,26.49-1.71,33.8.27,14.16,0,28.32-.07,42.49.09l-.9.77c41.32-.32,86.94-2.07,125.55-2,16.85.13,22-1.7,29.61.58,33.44,2.19,73,.59,105.67,1.95-.09-.69,4.49-1.2-1.53-1.84a199.36,199.36,0,0,1-24.33-1.43c-7-.83-11.89-1.88-12.15-2.82l6.26.41-11.13-1.91-7.2.32c-1.82-.52-2.63-.91-2.75-1.2-12.28-1.15-23-3-35.69-4.5A297.77,297.77,0,0,1,1122.27,200.48Z"
          transform="translate(-98.55 75.74)"
          fill="none"
          stroke={"#ec6543ff"}
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
};
export default AaronBlumTitle;
