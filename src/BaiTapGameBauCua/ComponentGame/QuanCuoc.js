import React from 'react'
import { useDispatch } from 'react-redux'

import { useSpring, animated } from 'react-spring'


export default function QuanCuoc(props) {

    const { quanCuoc } = props;
    const dispatch = useDispatch();

    const [propsUseSpringIncrease, setInc] = useSpring(() => {
        return {
            to: { scale: 1 },
            from: { scale: 0.5 },
            reset: true
        }
    })

    const [propsUseSpringDecrease, setDec] = useSpring(() => {
        return {
            to: { scale: 1 },
            from: { scale: 0.5 },
            reset: true
        }
    })




    return (
        <div className='my-4'>
            <img src={quanCuoc.hinhAnh} alt="bau" style={{ width: '100%' }} />

            <div className='d-flex justify-content-around mt-2 p-2 bg-success' style={{ alignItems: 'center', fontSize: '20px', borderRadius: '5%' }} >
                <div>
                    <animated.button style={{
                        fontSize: '20px',
                        transform: propsUseSpringIncrease.scale.interpolate(scale => `scale(${scale})`)
                    }}

                        className='btn btn-danger' onClick={() => {
                            setInc({ scale: 0.8 })
                            setInc({ scale: 1.0 })
                            dispatch({
                                type: "DAT_CUOC",
                                quanCuoc,
                                tangGiam: true,
                            })
                        }}><i className='fa fa-plus'></i></animated.button>
                </div>

                <div>
                    <span style={{ color: 'yellow' }}>{(Math.round(quanCuoc.diemCuoc * 100) / 100).toLocaleString()}</span>
                </div>

                <div>
                    <animated.button className='btn btn-danger' style={{
                        fontSize: '20px',
                        transform: propsUseSpringDecrease.scale.interpolate(scale => `scale(${scale})`)
                    }} onClick={() => {
                        setDec({ scale: 0.8 })
                        setDec({ scale: 1.1 })
                        dispatch({
                            type: "DAT_CUOC",
                            quanCuoc,
                            tangGiam: false,
                        })
                    }}><i className='fa fa-minus'></i></animated.button>
                </div>
            </div>

            <div className="mt-2 d-flex justify-content-around" >
                <button className="btn btn-dark" onClick={() => {
                    dispatch({
                        type: "DAT_CUOC_THEO_%",
                        quanCuoc,
                        phanTram: "25%",
                    })
                }}>25%</button>
                <button className="btn btn-dark" onClick={() => {
                    dispatch({
                        type: "DAT_CUOC_THEO_%",
                        quanCuoc,
                        phanTram: "50%",
                    })
                }}>50%</button>
            </div>
            <div className="mt-2 d-flex justify-content-around" >
                <button className="btn btn-dark" onClick={() => {
                    dispatch({
                        type: "DAT_CUOC_THEO_%",
                        quanCuoc,
                        phanTram: "75%",
                    })
                }}>75%</button>
                <button className="btn btn-dark" onClick={() => {
                    dispatch({
                        type: "DAT_CUOC_THEO_%",
                        quanCuoc,
                        phanTram: "100%",
                    })
                }}>MAX</button>
            </div>
        </div>
    )
}
