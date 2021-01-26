import React from 'react'
import XuatSac from './XuatSac'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachXuatSac(props) {

    const mangXucSac = useSelector(state => state.BaiTapXucSacReducer.mangXucSac)
    const dispatch = useDispatch()


    return (
        <div style={{ width: '30%', margin: '10% auto', position:'relative' }}>
            <div className='bg-white' style={{ width: '300px', height: '300px', borderRadius: '50%', position:'relative'}}>
                <div className="row" style={{position:'absolute', top:'15%'}}>
                    <div className='col-12 text-center' style={{ marginTop: '-90px', marginLeft: '90px' }}>
                        <XuatSac xucSacItem={mangXucSac[0]} />
                    </div>

                    <div className='col-6 text-center' style={{ marginTop: '-20px' }}>
                        <XuatSac xucSacItem={mangXucSac[1]} />
                    </div>

                    <div className='col-6 text-center' style={{ marginTop: '-20px', marginLeft:'-5px' }}>
                        <XuatSac xucSacItem={mangXucSac[2]} />
                    </div>
                </div>
            </div>

            <div className='text-center mt-3' style={{position:'absolute', left:'87%'}}>
                <button className='btn btn-danger' onClick={() =>{
                    dispatch({
                        type:'PLAY',
                    })
                }}>Play</button>
            </div>

        </div>
    )
}
