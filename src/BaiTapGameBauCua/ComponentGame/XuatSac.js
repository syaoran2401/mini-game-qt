import React, { Fragment } from 'react'
import { animated, useSpring } from 'react-spring'
import '../font/BaiTapGameBauCua.css'

export default function XuatSac(props) {

    const { xucSacItem } = props;

    const [propsXoayXucSac, set] = useSpring(() => ({

        to: {
            xyz: [900, 900, 900]
        },
        from: {
            xyz: [0, 0, 0]
        },
        config: { duration: 1000 },
        reset: true,

    }))



    set({ xyz: [900, 900, 900] })

    return (
        <Fragment>
            <div className='scene ml-5'>
                <animated.div className='cube' style={{
                    transform: propsXoayXucSac.xyz.interpolate((x, y, z) => `translateZ(-5px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
                }} >
                    <div className='cube__face front' >
                        <img src={xucSacItem.hinhAnh} alt="bau" style={{ width: '100%' }} />
                    </div>

                    <div className='cube__face bottom' >
                        <img src='./img/ca.png' alt="bau" style={{ width: '100%' }} />
                    </div>

                    <div className='cube__face back' >
                        <img src='./img/cua.png' alt="bau" style={{ width: '100%' }} />
                    </div>

                    <div className='cube__face right' >
                        <img src='./img/bau.png' alt="bau" style={{ width: '100%' }} />
                    </div>

                    <div className='cube__face left' >
                        <img src='./img/nai.png' alt="bau" style={{ width: '100%' }} />
                    </div>

                    <div className='cube__face top' >
                        <img src='./img/tom.png' alt="bau" style={{ width: '100%' }} />
                    </div>
                </animated.div>
            </div>
        </Fragment>
    )
}
