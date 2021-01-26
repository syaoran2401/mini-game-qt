import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSpring, animated, config } from 'react-spring'

export default function DiemCuoc(props) {


    const tienThuong = useSelector(state => state.BaiTapXucSacReducer.tienThuong)
    const dispathch = useDispatch()

    const tienThuongAnimation = useSpring(
        {
            number: Math.round((tienThuong *100)/100),
            from: { number: 0 },
            config: {duration: 1000}
        })

    return (
        <div id='BaiTapGameBauCua'>
            <h3 className='text-info text-center pt-3' style={{ fontSize: '60px' }}>GAME BẦU CUA CYBERLEARN</h3>

            <div className='text-center my-3 bg-danger' style={{ fontSize: '25px', borderRadius: '5%', width: '25%', margin: '0 auto', textAlign: 'center' }} >
                <h5 className='text-white' style={{ display: 'inline-block' }}>Tiền Thưởng: </h5>
                <animated.p style={tienThuongAnimation} className='text-warning ml-1'>
                    {/* {(Math.round((tienThuongAnimation.number) * 100) / 100).toLocaleString()} */}
                    {tienThuongAnimation.number}
                    </animated.p>
            </div>

            <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
                <button className='bg-success p-3 border-0 text-white' style={{ borderRadius: '10%' }} onClick={() => {
                    dispathch({
                        type: 'PLAY_AGAIN',
                    })
                }}>Chơi Lại</button>
            </div>
        </div>
    )
}
