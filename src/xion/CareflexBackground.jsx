import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const CareflexBackground = () => {
    const title = useRef(null)
    const liquid = useRef(null)
    const timeline = useRef(null)

    const topBubble1 = useRef(null)
    const topBubble2 = useRef(null)
    const topBubble3 = useRef(null)

    const beakerBubble1 = useRef(null)
    const beakerBubble2 = useRef(null)
    const beakerBubble3 = useRef(null)

    const beakerFill = useRef(null)

    useEffect(() => {
        // liquid movement in bottle
        gsap.fromTo(
            liquid.current,
            { rotation: -2, transformOrigin: 'center bottom' },
            {
                rotation: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power3.inOut',
                duration: 3,
            }
        )
    }, [])

    useEffect(() => {
        const smallBubbleArr = [
            beakerBubble1.current,
            beakerBubble2.current,
            beakerBubble3.current,
        ]

        gsap.set(smallBubbleArr, { opacity: 0 })
    }, [])

    useEffect(() => {
        const bigBubbleArr = [
            topBubble2.current,
            topBubble1.current,
            topBubble3.current,
        ]
        const smallBubbleArr = [
            beakerBubble1.current,
            beakerBubble2.current,
            beakerBubble3.current,
        ]
        function bubbles() {
            let tl = gsap.timeline()

            tl.fromTo(
                smallBubbleArr,
                2,
                {
                    opacity: 0,
                },
                { opacity: 1 }
            )

            tl.fromTo(
                smallBubbleArr,
                { opacity: 1 },
                {
                    transformOrigin: 'center',
                    scale: 0.7,
                    repeat: 3,
                    y: -140,
                    x: 1,
                    opacity: 0,
                    yoyo: false,
                    stagger: {
                        each: 0.4,
                        ease: 'bounce3.in',
                    },
                },
                0.7
            )

            tl.to(
                beakerFill.current,
                5,
                {
                    transformOrigin: 'center',
                    repeat: 0,
                    y: -150,
                    x: 1,
                    yoyo: false,
                },
                0.7
            )

            tl.to(bigBubbleArr, 0.5, {
                transformOrigin: 'center',
                scale: 0.5,
                x: 20,
                y: -40,
                opacity: 0,
                repeat: 0,
                stagger: {
                    each: 0.1,
                    ease: 'power3.out',
                },
            })
            return tl
        }
        timeline.current = gsap.timeline({ paused: true, repeat: -1 })

        timeline.current.add(bubbles)
    }, [])

    const onMouseEnterHandler = () => {
        timeline.current.play()
    }
    const onMouseLeaveHandler = () => {
        timeline.current.reverse()
    }

    return (
        <div className="gallery-window">
            <svg
                id="careflex-background"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1737.12 1450.8"
            >
                <title>background</title>
                <g id="Ebene_1" data-name="Ebene 1">
                    <path
                        className="cls-1"
                        d="M1442.1,79S637.8,34.9,608.4,574.3s770,735.6,922,573.8S1942.3,814.6,1721.7,231C1654.2,98,1442.1,79,1442.1,79Z"
                        transform="translate(-69.8 -15.7)"
                    />
                    <path
                        className="cls-1"
                        d="M234.4,568.7C156,688.2-255,1374.8,920.5,1422.7s820.5-806,820.5-806S1640.2,93.7,1059.7,324,312.8,449.2,234.4,568.7Z"
                        transform="translate(-69.8 -15.7)"
                    />
                    <path
                        className="cls-1"
                        d="M1117.3,452.5s-463-625-759.3-333.3-92.6,1463,296.3,1338S978.4,875,1061.7,754.1,1117.3,452.5,1117.3,452.5Z"
                        transform="translate(-69.8 -15.7)"
                    />
                </g>
                <g id="Ebene_2" data-name="Ebene 2">
                    <g id="roundbottle">
                        <path
                            className="cls-2"
                            d="M439,1108.2V970h15.1V940.6H352V970h15.1v138.2a144.93,144.93,0,0,0-60.5,248.6H499.4a144.4,144.4,0,0,0,48.5-108.2C548,1181,501.6,1124.2,439,1108.2Z"
                            transform="translate(-69.8 -15.7)"
                        />
                        <path
                            ref={liquid}
                            className="cls-3"
                            d="M397.2,1197.3c-38.5-19.4-69.8-21.6-94.5-15.6a120.07,120.07,0,0,0,20.4,155.7H482.9a120.1,120.1,0,0,0,37.3-115.9C495.5,1228,456.1,1226.9,397.2,1197.3Z"
                            transform="translate(-69.8 -15.7)"
                        />
                    </g>
                    <g>
                        {/* atoms */}
                        <circle
                            className="cls-4"
                            cx="1053.7"
                            cy="54.9"
                            r="19.5"
                        />
                        <circle
                            className="cls-4"
                            cx="1189.2"
                            cy="82.9"
                            r="23.1"
                        />
                        <circle
                            className="cls-4"
                            cx="1061.5"
                            cy="221.7"
                            r="27.6"
                        />
                        <rect
                            className="cls-4"
                            x="1146.92"
                            y="62.74"
                            width="4.2"
                            height="90.4"
                            transform="translate(68.7 649.68) rotate(-34.25)"
                        />
                        <rect
                            className="cls-4"
                            x="1101.94"
                            y="189.28"
                            width="101.69"
                            height="4.2"
                            transform="translate(420.64 1138.4) rotate(-64.9)"
                        />
                        <rect
                            className="cls-4"
                            x="1168.98"
                            y="121.05"
                            width="95.5"
                            height="4.2"
                            transform="translate(11.51 561.77) rotate(-27.59)"
                        />
                        <path
                            className="cls-5"
                            d="M1111.1,70.7a1,1,0,0,1-1.1-1c-.5-10.6,11.1-14,11.2-14.1a1.05,1.05,0,0,1,1.3.7,1,1,0,0,1-.7,1.3c-.4.1-10.1,3-9.7,11.9a1.11,1.11,0,0,1-1,1.2Z"
                            transform="translate(-69.8 -15.7)"
                        />
                        <path
                            className="cls-5"
                            d="M1242.3,95.4a1,1,0,0,1-1.1-1c-.5-10.6,11.1-14,11.2-14.1a1.05,1.05,0,0,1,1.3.7,1,1,0,0,1-.7,1.3c-.4.1-10.1,3-9.7,11.9,0,.7-.4,1.2-1,1.2Z"
                            transform="translate(-69.8 -15.7)"
                        />
                        <path
                            className="cls-5"
                            d="M1114,232.8a1,1,0,0,1-1.1-1c-.5-10.6,11.1-14,11.2-14.1a1.05,1.05,0,0,1,1.3.7,1,1,0,0,1-.7,1.3c-.4.1-10.1,3-9.7,11.9a1,1,0,0,1-1,1.2Z"
                            transform="translate(-69.8 -15.7)"
                        />
                    </g>
                    <g>
                        {/* papers */}
                        <g>
                            <path
                                className="cls-4"
                                d="M184.8,349.2a42.89,42.89,0,0,1-42.9-42.9v-183l-13.2-.9L105.2,89.8l34.7-.3h3.2l28.7.6H331.5a23.79,23.79,0,0,1,23.8,23.8V349.1H184.8Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <path
                                className="cls-2"
                                d="M69.8,126a36.2,36.2,0,0,1,72.4,0Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <g>
                                <image
                                    className="cls-6"
                                    width="251"
                                    height="66"
                                    transform="translate(98.7 285.28) scale(0.98)"
                                    xlinkHref="data:image/png;base64,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"
                                />
                                <path
                                    className="cls-2"
                                    d="M404.7,309.6a39.48,39.48,0,0,1-39.5,39.3,28.1,28.1,0,0,1-2.9-.1v.1H180.5A39.5,39.5,0,0,0,220,309.8H325.8Z"
                                    transform="translate(-69.8 -15.7)"
                                />
                            </g>
                        </g>
                        <rect
                            className="cls-2"
                            x="96"
                            y="254.9"
                            width="165.1"
                            height="10.8"
                        />
                        <rect
                            className="cls-2"
                            x="96"
                            y="227.2"
                            width="165.1"
                            height="10.8"
                        />
                        <rect
                            className="cls-2"
                            x="96"
                            y="199.5"
                            width="165.1"
                            height="10.8"
                        />
                        <rect
                            className="cls-2"
                            x="96"
                            y="171.7"
                            width="165.1"
                            height="10.8"
                        />
                        <rect
                            className="cls-2"
                            x="96"
                            y="144"
                            width="165.1"
                            height="10.8"
                        />
                        <g>
                            <path
                                className="cls-7"
                                d="M271.9,386A42.89,42.89,0,0,1,229,343.1V160l-13.2-.9-23.5-32.6,36.8.7v-.4H418.6a23.79,23.79,0,0,1,23.8,23.8V386Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <path
                                className="cls-2"
                                d="M156.8,162.7a36.2,36.2,0,0,1,72.4,0Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <g>
                                <image
                                    className="cls-6"
                                    width="251"
                                    height="65"
                                    transform="translate(185.73 322.28) scale(0.98)"
                                    xlinkHref="data:image/png;base64,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"
                                />
                                <path
                                    className="cls-2"
                                    d="M491.7,346.4a39.48,39.48,0,0,1-39.5,39.3,28.1,28.1,0,0,1-2.9-.1v.1H267.6a39.5,39.5,0,0,0,39.5-39.1H412.9Z"
                                    transform="translate(-69.8 -15.7)"
                                />
                            </g>
                        </g>
                        <rect
                            className="cls-2"
                            x="183.1"
                            y="291.7"
                            width="165.1"
                            height="10.8"
                        />
                        <rect
                            className="cls-2"
                            x="183.1"
                            y="264"
                            width="165.1"
                            height="10.8"
                        />
                        <rect
                            className="cls-2"
                            x="183.1"
                            y="236.2"
                            width="165.1"
                            height="10.8"
                        />
                        <rect
                            className="cls-2"
                            x="183.1"
                            y="208.5"
                            width="165.1"
                            height="10.8"
                        />
                        <rect
                            className="cls-2"
                            x="183.1"
                            y="180.7"
                            width="165.1"
                            height="10.8"
                        />
                    </g>
                    <g>
                        <g>
                            {/* hands and family */}
                            <g id="o06LnY">
                                <path
                                    className="cls-7"
                                    d="M1566.9,770.3c-.2,13.4-9.4,23.1-22.8,23.6-10.7.4-21.5.2-32.2,0-7.2-.1-8.7-3.6-9-10.9a50.47,50.47,0,0,0-4.6-20c-3.9-8.1-9.3-15.5-14.8-22.6a120.2,120.2,0,0,1-25-63.8q-2.55-28.8-4.6-57.6c-.3-4.2-.5-8.9,5.1-9.8s6.5,4,7.8,7.9c3.8,11.1,7.8,22.1,11.1,33.3,4,13.5,10.7,25,21.3,34.3,4.9,4.4,9.4,9.3,14.1,13.9,3.2,3.2,6.9,4,10.3.7,3.6-3.5,3.3-7.5-.2-11-8.2-8.4-16.8-16.4-24.5-25.2-2-2.3-3.1-7.5-1.8-10,1-2,6.8-3.6,9.4-2.5,26.8,10.8,49.3,26.8,56.8,56.5C1566.5,720.1,1567,762.7,1566.9,770.3Z"
                                    transform="translate(-69.8 -15.7)"
                                />
                            </g>
                            <path
                                className="cls-2"
                                d="M1569.1,805.7h-69.2a5.91,5.91,0,0,1-5.9-5.9V788.4a5.91,5.91,0,0,1,5.9-5.9h69.2a5.91,5.91,0,0,1,5.9,5.9v11.4A5.91,5.91,0,0,1,1569.1,805.7Z"
                                transform="translate(-69.8 -15.7)"
                            />
                        </g>
                        <g>
                            <g id="o06LnY-2" data-name="o06LnY">
                                <path
                                    className="cls-7"
                                    d="M1621.6,770.3c.2,13.4,9.4,23.1,22.8,23.6,10.7.4,21.5.2,32.2,0,7.2-.1,8.7-3.6,9-10.9a50.47,50.47,0,0,1,4.6-20c3.9-8.1,9.3-15.5,14.8-22.6a120.2,120.2,0,0,0,25-63.8q2.55-28.8,4.6-57.6c.3-4.2.5-8.9-5.1-9.8s-6.5,4-7.8,7.9c-3.8,11.1-7.8,22.1-11.1,33.3-4,13.5-10.7,25-21.3,34.3-4.9,4.4-9.4,9.3-14.1,13.9-3.2,3.2-6.9,4-10.3.7-3.6-3.5-3.3-7.5.2-11,8.2-8.4,16.8-16.4,24.5-25.2,2-2.3,3.1-7.5,1.8-10-1-2-6.8-3.6-9.4-2.5-26.8,10.8-49.3,26.8-56.8,56.5C1621.9,720.1,1621.5,762.7,1621.6,770.3Z"
                                    transform="translate(-69.8 -15.7)"
                                />
                            </g>
                            <path
                                className="cls-2"
                                d="M1619.4,805.7h69.2a5.91,5.91,0,0,0,5.9-5.9V788.4a5.91,5.91,0,0,0-5.9-5.9h-69.2a5.91,5.91,0,0,0-5.9,5.9v11.4A5.91,5.91,0,0,0,1619.4,805.7Z"
                                transform="translate(-69.8 -15.7)"
                            />
                        </g>
                        <g>
                            <path
                                className="cls-2"
                                d="M1564.4,517.5h0a39.43,39.43,0,0,0-39.3,39.3v35.7a2,2,0,0,0,2,2H1546V621c0,4,1.3,5.3,2.9,5.3h31.2c1.6,0,2.9-1.3,2.9-5.3V594.5h18.9a2,2,0,0,0,2-2V556.8A39.74,39.74,0,0,0,1564.4,517.5Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <circle
                                className="cls-2"
                                cx="1494.6"
                                cy="470.4"
                                r="21.5"
                            />
                            <path
                                className="cls-2"
                                d="M1626.9,517.5h0a39.43,39.43,0,0,0-39.3,39.3v35.7a2,2,0,0,0,2,2h18.9V621c0,4,1.3,5.3,2.9,5.3h31.2c1.6,0,2.9-1.3,2.9-5.3V594.5h18.9a2,2,0,0,0,2-2V556.8C1666.1,535.2,1648.4,517.5,1626.9,517.5Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <circle
                                className="cls-2"
                                cx="1557.1"
                                cy="470.4"
                                r="21.5"
                            />
                            <path
                                className="cls-2"
                                d="M1678.5,578.5h0a17.8,17.8,0,0,0-17.7,17.7v16.1a.9.9,0,0,0,.9.9h8.5v12c0,1.8.6,2.4,1.3,2.4h14c.7,0,1.3-.6,1.3-2.4v-12h8.5a.9.9,0,0,0,.9-.9V596.2A17.67,17.67,0,0,0,1678.5,578.5Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <circle
                                className="cls-2"
                                cx="1608.7"
                                cy="548.6"
                                r="9.7"
                            />
                            <path
                                className="cls-2"
                                d="M1511.7,578.5h0a17.8,17.8,0,0,0-17.7,17.7v16.1a.9.9,0,0,0,.9.9h8.5v12c0,1.8.6,2.4,1.3,2.4h14c.7,0,1.3-.6,1.3-2.4v-12h8.5a.9.9,0,0,0,.9-.9V596.2A17.67,17.67,0,0,0,1511.7,578.5Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <circle
                                className="cls-2"
                                cx="1441.9"
                                cy="548.6"
                                r="9.7"
                            />
                        </g>
                    </g>
                    <g
                        id="beaker_bubbles"
                        data-name="beaker bubbles"
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}
                    >
                        <path
                            className="cls-7"
                            d="M1555.5,161.2l-8.4-4.5-48.5-26.1-9.1-4.9a6.11,6.11,0,0,0-8.3,2.5l-1,1.8a6.11,6.11,0,0,0,2.5,8.3l8.4,4.5L1307.5,484.5a27.87,27.87,0,0,0,11.4,37.7h0a27.87,27.87,0,0,0,37.7-11.4l183.6-341.7,8.4,4.5a6.11,6.11,0,0,0,8.3-2.5l1-1.8A5.9,5.9,0,0,0,1555.5,161.2Z"
                            transform="translate(-69.8 -15.7)"
                        />
                        <g>
                            <path
                                ref={topBubble2}
                                className="cls-2"
                                d="M1590.3,38.2a34.94,34.94,0,0,0-31.6,20A35,35,0,0,1,1590.3,93a34,34,0,0,1-3.4,14.9c1.1.1,2.2.2,3.4.2a35,35,0,0,0,0-69.9Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <circle
                                ref={topBubble3}
                                className="cls-2"
                                cx="1471.4"
                                cy="17.5"
                                r="17.5"
                            />
                            <path
                                ref={topBubble1}
                                id="bubble"
                                className="cls-2"
                                d="M1548.9,64.4a31.3,31.3,0,1,0,31.3,31.3A31.28,31.28,0,0,0,1548.9,64.4Zm-2.8,9.6a24.52,24.52,0,0,0-15.8,24.1c0,1.2-.7,2.2-1.7,2.2h0a1.93,1.93,0,0,1-1.7-2.1c-.5-21.7,18.2-28.4,18.3-28.4.9-.3,1.8.4,2.1,1.5A2.36,2.36,0,0,1,1546.1,74Z"
                                transform="translate(-69.8 -15.7)"
                            />
                        </g>
                        <path
                            className="cls-3"
                            d="M1407.2,320.5l-89.1,165.8a18.44,18.44,0,0,0,7.5,24.9h0a18.44,18.44,0,0,0,24.9-7.5l94.6-176C1434.7,326,1421,322.6,1407.2,320.5Z"
                            transform="translate(-69.8 -15.7)"
                        />
                        <path
                            ref={beakerFill}
                            id="beaker_fill"
                            className="cls-3"
                            d="M1407.2,320.5l-89.1,165.8a18.44,18.44,0,0,0,7.5,24.9h0a18.44,18.44,0,0,0,24.9-7.5l94.6-176C1434.7,326,1421,322.6,1407.2,320.5Z"
                            transform="translate(-69.8 -15.7)"
                        />
                        <g id="beaker_bubbles-2" data-name="beaker bubbles">
                            <path
                                ref={beakerBubble1}
                                id="bubble-2"
                                data-name="bubble"
                                className="cls-2"
                                d="M1409.43,334.29a5,5,0,1,0,5,5A5,5,0,0,0,1409.43,334.29Zm-.45,1.53a3.93,3.93,0,0,0-2.53,3.85c0,.19-.11.35-.27.35h0a.31.31,0,0,1-.27-.34,4.67,4.67,0,0,1,2.92-4.53c.15,0,.29.06.34.24A.38.38,0,0,1,1409,335.82Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <path
                                ref={beakerBubble2}
                                id="bubble-3"
                                data-name="bubble"
                                className="cls-2"
                                d="M1390.51,376.55a10,10,0,1,0,10,10A10,10,0,0,0,1390.51,376.55Zm-.89,3.07a7.83,7.83,0,0,0-5,7.7.63.63,0,0,1-.55.7h0a.62.62,0,0,1-.54-.67,9.33,9.33,0,0,1,5.85-9.07c.29-.1.57.13.67.48A.76.76,0,0,1,1389.62,379.62Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <path
                                ref={beakerBubble3}
                                id="bubble-4"
                                data-name="bubble"
                                className="cls-2"
                                d="M1410.73,355.07a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,1410.73,355.07Zm-.67,2.31a5.87,5.87,0,0,0-3.79,5.77c0,.29-.16.53-.4.53h0a.47.47,0,0,1-.41-.51,7,7,0,0,1,4.38-6.8c.22-.07.43.09.51.36A.59.59,0,0,1,1410.06,357.38Z"
                                transform="translate(-69.8 -15.7)"
                            />
                        </g>
                    </g>
                    {/* <g>
        // this may be used later
        <path className="cls-7" d="M1555.5,161.2l-8.4-4.5-48.5-26.1-9.1-4.9a6.11,6.11,0,0,0-8.3,2.5l-1,1.8a6.11,6.11,0,0,0,2.5,8.3l8.4,4.5L1307.5,484.5a27.87,27.87,0,0,0,11.4,37.7h0a27.87,27.87,0,0,0,37.7-11.4l183.6-341.7,8.4,4.5a6.11,6.11,0,0,0,8.3-2.5l1-1.8A5.9,5.9,0,0,0,1555.5,161.2Z" transform="translate(-69.8 -15.7)"/>
        <g>
          <path className="cls-2" d="M1590.3,38.2a34.94,34.94,0,0,0-31.6,20A35,35,0,0,1,1590.3,93a34,34,0,0,1-3.4,14.9c1.1.1,2.2.2,3.4.2a35,35,0,0,0,0-69.9Z" transform="translate(-69.8 -15.7)"/>
          <circle className="cls-2" cx="1471.4" cy="17.5" r="17.5"/>
          <path className="cls-2" d="M1548.9,64.4a31.3,31.3,0,1,0,31.3,31.3A31.28,31.28,0,0,0,1548.9,64.4Zm-2.8,9.6a24.52,24.52,0,0,0-15.8,24.1c0,1.2-.7,2.2-1.7,2.2h0a1.93,1.93,0,0,1-1.7-2.1c-.5-21.7,18.2-28.4,18.3-28.4.9-.3,1.8.4,2.1,1.5A2.36,2.36,0,0,1,1546.1,74Z" transform="translate(-69.8 -15.7)"/>
        </g>
        <path className="cls-3" d="M1407.2,320.5l-89.1,165.8a18.44,18.44,0,0,0,7.5,24.9h0a18.44,18.44,0,0,0,24.9-7.5l94.6-176C1434.7,326,1421,322.6,1407.2,320.5Z" transform="translate(-69.8 -15.7)"/>
      </g> */}
                    <path
                        className="cls-3"
                        d="M822.1,81.6c.1-3-2.1-2.9-4.2-2.9H725.4c-3.3,0-4.3,1.2-4.3,4.3.2,14.7-.3,29.4.4,44.1,1,22.6,10.1,41.7,27.5,56.2,6.4,5.4,13.8,9.7,20.8,14.5,1.5,1,2.2,1,3.7,0,1.2-.8,2.4-1.8,3.7-2.5,24.2-13.4,40.6-32.8,43.6-60.8C822.7,117,821.8,99.2,822.1,81.6ZM795,133.4a1.11,1.11,0,0,1-1.1,1.1H776.8v17.1a1.11,1.11,0,0,1-1.1,1.1h-8a1.11,1.11,0,0,1-1.1-1.1V134.5H749.5a1.11,1.11,0,0,1-1.1-1.1v-8a1.11,1.11,0,0,1,1.1-1.1h17.1V107.2a1.11,1.11,0,0,1,1.1-1.1h8a1.11,1.11,0,0,1,1.1,1.1v17.1h17.1a1.11,1.11,0,0,1,1.1,1.1Z"
                        transform="translate(-69.8 -15.7)"
                    />
                    <g>
                        <g>
                            <path
                                className="cls-2"
                                d="M450.7,743.5l17.1-19.6c9.9-11.3,8.3-29-3.5-39.3l-2.9-2.5c-11.8-10.3-29.6-9.5-39.5,1.9l-17.1,19.6Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <path
                                className="cls-2"
                                d="M397.8,711.6l-17.1,19.6c-9.9,11.3-8.3,29,3.5,39.3l2.9,2.5c11.8,10.3,29.6,9.5,39.5-1.9l17.1-19.6Z"
                                transform="translate(-69.8 -15.7)"
                            />
                        </g>
                        <g>
                            <path
                                className="cls-7"
                                d="M468.3,744c-17.3,3.4-31.1,19.2-30.1,37.3s16.3,32.4,33.8,34Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <path
                                className="cls-7"
                                d="M480.2,814.9c17.3-3.4,31.1-19.2,30.1-37.3s-16.3-32.4-33.8-34Z"
                                transform="translate(-69.8 -15.7)"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                className="cls-4"
                                d="M873,1167.9h-5.4l-31.2-.1h-5.8a3.54,3.54,0,0,0-3.5,3.5v1.2a3.54,3.54,0,0,0,3.5,3.5H836l-1,220.2a15.83,15.83,0,0,0,15.7,15.9h0a15.83,15.83,0,0,0,15.9-15.7l1-220.2H873a3.54,3.54,0,0,0,3.5-3.5v-1.2A3.56,3.56,0,0,0,873,1167.9Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <rect
                                className="cls-4"
                                x="769.4"
                                y="1133"
                                width="25.1"
                                height="25.1"
                            />
                        </g>
                        <g>
                            <path
                                className="cls-7"
                                d="M953.2,1167.9h-5.4l-31.2-.1h-5.8a3.54,3.54,0,0,0-3.5,3.5v1.2a3.54,3.54,0,0,0,3.5,3.5h5.4l-1,220.2a15.83,15.83,0,0,0,15.7,15.9h0a15.83,15.83,0,0,0,15.9-15.7l1-220.2h5.4a3.54,3.54,0,0,0,3.5-3.5v-1.2A3.56,3.56,0,0,0,953.2,1167.9Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <rect
                                className="cls-7"
                                x="849.5"
                                y="1133"
                                width="25.1"
                                height="25.1"
                            />
                        </g>
                        <g>
                            <path
                                className="cls-4"
                                d="M1033.4,1167.9H1028l-31.2-.1H991a3.54,3.54,0,0,0-3.5,3.5v1.2a3.54,3.54,0,0,0,3.5,3.5h5.4l-1,220.2a15.83,15.83,0,0,0,15.7,15.9h0a15.83,15.83,0,0,0,15.9-15.7l1-220.2h5.4a3.54,3.54,0,0,0,3.5-3.5v-1.2A3.63,3.63,0,0,0,1033.4,1167.9Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <rect
                                className="cls-4"
                                x="929.7"
                                y="1133"
                                width="25.1"
                                height="25.1"
                            />
                        </g>
                        <rect x="993.6" y="1189.5" width="8.9" height="241.2" />
                        <polygon
                            className="cls-2"
                            points="1002.5 1246.3 1002.5 1237.4 730.6 1237.4 730.6 1189.5 721.7 1189.5 721.7 1237.4 721.7 1246.3 721.7 1341.9 721.7 1350.8 721.7 1421.8 721.7 1430.8 730.6 1430.8 1002.5 1430.8 1002.5 1421.8 730.6 1421.8 730.6 1350.8 1002.5 1350.8 1002.5 1341.9 730.6 1341.9 730.6 1246.3 1002.5 1246.3"
                        />
                    </g>
                    <g id="clipboard">
                        <rect
                            className="cls-8"
                            x="1365.7"
                            y="947.6"
                            width="314.4"
                            height="418.9"
                        />
                        <path
                            className="cls-2"
                            d="M1658.9,928.1h-17.4v-6.3a8.6,8.6,0,0,0-8.6-8.6h-77.5a8.6,8.6,0,0,0-8.6,8.6v6.3h-17.4a14.3,14.3,0,0,0-14.3,14.3v35.9h158V942.4A14.15,14.15,0,0,0,1658.9,928.1Z"
                            transform="translate(-69.8 -15.7)"
                        />
                        <g>
                            <path
                                className="cls-2"
                                d="M1525.6,1137a7.75,7.75,0,0,0-1.8-5.5c-2-2-5-2-8-2h-27.3q-70.65,0-141.3-.1h-.1c-3.6,0-6,.8-7.6,2.4-2.1,2.1-2.3,5.2-2.3,7.7q.15,14.7,0,29.4c-.1,16.8-.1,34.1.6,51.1,1.8,42.3,18.9,77.3,51,104,8.2,6.8,17.2,12.7,26,18.5,4,2.6,8,5.3,12,8a7.92,7.92,0,0,0,4.6,1.8,9.32,9.32,0,0,0,4.7-1.7c.7-.5,1.4-1,2.2-1.5a37,37,0,0,1,4.4-2.9c48.4-26.8,75.5-64.6,80.7-112.5,2.4-22.2,2.3-45,2.2-67C1525.5,1156.9,1525.4,1146.9,1525.6,1137Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <path
                                className="cls-3"
                                d="M1487.1,1216h-42.8v-42.8a2.86,2.86,0,0,0-2.8-2.8h-20.1a2.86,2.86,0,0,0-2.8,2.8V1216h-42.8a2.86,2.86,0,0,0-2.8,2.8v20.1a2.86,2.86,0,0,0,2.8,2.8h42.8v42.8a2.86,2.86,0,0,0,2.8,2.8h20.1a2.86,2.86,0,0,0,2.8-2.8v-42.8h42.8a2.86,2.86,0,0,0,2.8-2.8v-20.1A2.8,2.8,0,0,0,1487.1,1216Z"
                                transform="translate(-69.8 -15.7)"
                            />
                        </g>
                        <g>
                            <path
                                className="cls-2"
                                d="M1440.3,1117.3V979.2h53.5v-16h-61.5a8,8,0,0,0-8,8v146.1Z"
                                transform="translate(-69.8 -15.7)"
                            />
                            <path
                                className="cls-2"
                                d="M1750.9,963.3h-61.5v16h53.5v398.9H1440.3v-15.3h-16v23.3a8,8,0,0,0,8,8h318.6a8,8,0,0,0,8-8v-415A7.94,7.94,0,0,0,1750.9,963.3Z"
                                transform="translate(-69.8 -15.7)"
                            />
                        </g>
                        <rect
                            className="cls-2"
                            x="1394.9"
                            y="1005.5"
                            width="254.8"
                            height="14.2"
                        />
                        <rect
                            className="cls-2"
                            x="1394.9"
                            y="1056.4"
                            width="254.8"
                            height="14.2"
                        />
                        <rect
                            className="cls-2"
                            x="1480.3"
                            y="1107.3"
                            width="169.5"
                            height="14.2"
                        />
                        <rect
                            className="cls-2"
                            x="1480.3"
                            y="1158.2"
                            width="169.5"
                            height="14.2"
                        />
                        <rect
                            className="cls-2"
                            x="1480.3"
                            y="1209.1"
                            width="169.5"
                            height="14.2"
                        />
                        <rect
                            className="cls-2"
                            x="1480.3"
                            y="1260"
                            width="169.5"
                            height="14.2"
                        />
                        <rect
                            className="cls-2"
                            x="1480.3"
                            y="1311"
                            width="169.5"
                            height="14.2"
                        />
                    </g>
                    <g id="trianglebottle">
                        <path
                            className="cls-7"
                            d="M97.8,1356.8H346.3a13,13,0,0,0,11.1-19.7L252.1,1162.2V1055.9h12.7v-24.6H179.3v24.6H192v106.3L86.7,1337.1A13,13,0,0,0,97.8,1356.8Z"
                            transform="translate(-69.8 -15.7)"
                        />
                        <path
                            className="cls-3"
                            d="M279.7,1236.3H164.5L113,1321.9a10.48,10.48,0,0,0,9,15.9H322.3a10.48,10.48,0,0,0,9-15.9Z"
                            transform="translate(-69.8 -15.7)"
                        />
                    </g>
                    <g>
                        <rect
                            className="cls-7"
                            x="36.5"
                            y="676"
                            width="145.8"
                            height="21.8"
                        />
                        <path
                            className="cls-4"
                            d="M238.2,576.7l-.5-.1v-3.3H225.3L127,547.1l-3.8,14.3,56.4,15a36.21,36.21,0,0,1,21.5,33V631a36.24,36.24,0,0,1-29,35.4H106.4v9.7h60.9v15.5h70.4v-113Z"
                            transform="translate(-69.8 -15.7)"
                        />
                        <polygon
                            className="cls-4"
                            points="91.9 517.6 66.5 511.3 55.5 552 57.5 552.5 54.4 564.9 59.1 566.1 58.1 570 70 573 71 569.1 75.8 570.3 78.9 557.8 80.8 558.3 91.9 517.6"
                        />
                    </g>
                    <g id="mainlogo" ref={title}>
                        <path
                            className="cls-9"
                            d="M990.6,645.8c5.4,20.9,14.4,50.7,13.7,82.4,37.2,6.4,56.6,11.9,66.8,16.9,12.1-16.7,27.2-36.4,45.2-54.1,1.6-2.2,3.9-3.3,5-8.6,1-5.9-6.8-11.3-14.5-7.8-1.2.4-3.6,2.4-4.6,3.2-14.2,11.6-36,34-56.1,30-21.1-4.1-29.8-47.8-39-66-6.7-13.3-18.5-3.6-16.5,4m83.6,34.2a18.32,18.32,0,1,0-23.9,10,18.41,18.41,0,0,0,23.9-10M793.6,603.7c52.2,72.2,65.3,153.4,68,201.3,25.7-1.5,51.8-5.9,67.7-10.5,3.2-.9,6.1-1.7,9-2.5-.1-4.5-.1-8.9-.1-14.4,0-3,0-6,.2-9a57.19,57.19,0,0,1-14.7-2c-25.8-7.3-37.3-25-39.4-39.1-1.3-8.6,1-15.8,5.9-19,2.3-1.5,7.3-3.4,14.6,1.3,20.7,13.7,29.7,15,41.8,14.6,15-49.9,45.9-96,56.1-111.8,6.3-9.8-5.8-28.9-21.3-13.4-21.3,21.2-53.8,78.6-85.3,74.7-30.5-3.8-63.4-61.3-77.9-83.9-15-18.5-35.8-1.8-24.6,13.7m104.6,43.5a27.07,27.07,0,1,0-28.9-25.1,27,27,0,0,0,28.9,25.1M789.4,703.7a13.77,13.77,0,1,0-7.2,18.1,13.76,13.76,0,0,0,7.2-18.1m-64.9,14.8c34.6,26.9,49.3,51.1,59.5,71.4,1.2,2.4,2.5,5,4,7.5,8,2,16.9,4.1,26.9,5.9a131.94,131.94,0,0,0,15,1.7c-18.7-40.3-6.5-97-.5-121.5,1.4-5.8-5.1-21.5-9.9-11.4-6.7,13.8-17.9,56.9-33.8,59.7-16.3,2.9-40.9-15.6-51.7-24-10.2-6.4-17.2,4.7-9.5,10.7m425.3-179.8a136.24,136.24,0,0,0-20.7-44.6,122.8,122.8,0,0,0-36.8-33.9,147.8,147.8,0,0,0-45.4-17.9,155.41,155.41,0,0,0-48.8-3.4,127.72,127.72,0,0,0-48,14.4,136,136,0,0,0-38.7,31,165.48,165.48,0,0,0-13.9,18.5c-1.5-1.2-2.9-2.5-4.4-3.7A162.17,162.17,0,0,0,866.6,482a127.73,127.73,0,0,0-62.2-13.9c-21.5.6-42.1,7.2-60.2,16.6-4.5,2.4-9,5-13.1,7.7a130.61,130.61,0,0,0-12.6,9.1,127.24,127.24,0,0,0-21.9,22.1A119.83,119.83,0,0,0,673,580.3c-2.8,20.2-.6,40.5,4.8,59.3a166.26,166.26,0,0,0,25.9,51.9,148.65,148.65,0,0,0,10.9,12.9,41.29,41.29,0,0,1,6.2-5.6c-15.5-23.8-31.4-58-32.1-94.9,0-64.9,51.8-117.4,115.8-117.4,47.6,0,88.4,29.1,106.2,70.8h0a1,1,0,0,0,.8.5c.3,0,.3-.2.5-.5,7.4-53.9,54.6-96.1,110.6-96.1,61.9,0,112,50.7,112,113.3,0,19-2.6,35.3-13.2,60.8-4.1,9.2-10.1,19-16.9,28.6a20.9,20.9,0,0,1,2.5-.1,43.38,43.38,0,0,1,22.3,6.3,168.66,168.66,0,0,0,17.2-37.1,173.91,173.91,0,0,0,8.2-46.4,161.38,161.38,0,0,0-4.9-47.9"
                            transform="translate(-69.8 -15.7)"
                        />
                        <path
                            className="cls-10"
                            d="M990.5,731.9a163.43,163.43,0,0,0-38.2-1.7c-15.3.8-25.5,1.4-50.7-15.3-2.3-1.5-5.7-3-8.2-1.3-2.9,1.8-4.2,7.1-3.3,13.2,1.8,12.3,12.1,27.7,35.2,34.3,7.8,2.2,16.5,1.9,24.2,1.6,11.2-.4,21.9-.9,23.5,8.6,3,16.9-11.5,20.7-31.4,26-3.4.9-7,1.8-10.7,2.9-26.8,7.7-82.3,15-117,9-11.6-2-21.6-4.6-30.5-6.8-10.8-2.7-19.3-4.8-25.4-4.8-3.1,0-5.4.6-7,1.7-2.2,1.5-4.7,3.8-4.6,6.2.2,2.8,5.5,7.4,13.3,11.4,43.6,20.9,93,32,142.9,32a331.74,331.74,0,0,0,101.2-15.6s2.2-.7,2.5-.9c42.4-13.8,71-41.6,71.3-69.2a23.44,23.44,0,0,0-1.3-6.6c-1.8-5.3-18.4-14-85.8-24.7"
                            transform="translate(-69.8 -15.7)"
                        />
                        {/* <path
            className="cls-11"
            d="M1133.8,980.1l-21.9-30.7,20.8-29.8h-12.3l-15.2,22.7-15-22.7h-13.4l21.2,30.2-22.3,30.3H1089l15.3-23.2,15.3,23.2ZM1058,941.4h-28.2c1.2-8.9,6.8-14.8,14.7-14.8,8.5,0,13.7,5.9,13.5,14.8m11.2,2.6c0-13.9-7.2-25.4-24.2-25.4-17.2,0-27,13.5-27,31.6,0,21.3,10,31,28.6,31a52.26,52.26,0,0,0,20.4-3.8l-1-8.9a43.27,43.27,0,0,1-17.6,3.8c-12.9,0-19.6-6.9-19.1-23.1h39.5a36.59,36.59,0,0,0,.4-5.2m-66.5-52.7H991.8v88.8h10.9Zm-26.2,15.9V898H934.7v82.1h11.2V942.9H975v-9H945.9V907.3h30.6Z"
            transform="translate(-69.8 -15.7)"
          /> */}
                        {/* <path
            className="cls-9"
            d="M904.2,941.8H882c.9-7.3,5.4-12,11.8-12s10.7,4.4,10.4,12m15.5,3.5c0-15-7.8-27-25.4-27-18.1,0-28.3,13.6-28.3,32.1,0,21.3,10.7,30.9,29.9,30.9a59.72,59.72,0,0,0,21.7-3.9l-1.5-12a43.8,43.8,0,0,1-17.6,3.8c-11.2,0-16.8-5.5-16.7-16.8h37.5a62,62,0,0,0,.4-7.1m-58.8-27c-10.5-.9-16.3,5.8-19.2,13.5h-.2a84.47,84.47,0,0,0,1.1-12.2H827.9v60.5h15.6V955.4c0-16.8,5.6-24.1,16.8-21.8Zm-65.7,36.5c0,7.3-5.2,14.6-12.9,14.6-4.5,0-7.2-2.6-7.2-6.4,0-4.9,3.6-9.6,20.1-9.6v1.4Zm16,25.3c-.2-5-.4-10.7-.4-15.6V939.3c0-13.1-5.5-21-24.9-21a66.09,66.09,0,0,0-21.7,3.8l1.3,13a39.82,39.82,0,0,1,17.9-4.7c8.8,0,11.8,3.3,11.8,9.6v3.3c-20.6,0-34.9,7.7-34.9,22.1,0,9.7,6.3,15.9,17.3,15.9,9,0,16.4-4.7,19.3-11.6l.1.1a67.41,67.41,0,0,0-.6,10.2h14.8Zm-59.3-2.6-1.8-14.1a44.33,44.33,0,0,1-15.9,3.4c-16.5,0-24-10-24-27.9,0-15.9,7.5-27.5,22.9-27.5a61,61,0,0,1,16.5,2.4l1.7-14.4a66.94,66.94,0,0,0-17.4-2.2c-27.5,0-41.1,18.2-41.1,44.3,0,20.4,9.2,39.5,38,39.5a58.39,58.39,0,0,0,21.1-3.5"
            transform="translate(-69.8 -15.7)"
          /> */}
                    </g>
                </g>
            </svg>
            <div className="gallery-label">hover over beaker</div>
        </div>
    )
}

export default CareflexBackground
