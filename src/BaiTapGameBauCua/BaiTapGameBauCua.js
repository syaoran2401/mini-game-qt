import React from 'react'
import DanhSachCuoc from './ComponentGame/DanhSachCuoc'
import DanhSachXuatSac from './ComponentGame/DanhSachXuatSac'
import DiemCuoc from './ComponentGame/DiemCuoc'
import './font/BaiTapGameBauCua.css'

export default function BaiTapGameBauCua() {
    return (
        <div id='BaiTapGameBauCua'>
            <div className='container'>
            <DiemCuoc />
            <div className='row'>
                <div className='col-7'>
                    <DanhSachCuoc />
                </div>

                <div className='col-5'>
                    <DanhSachXuatSac />
                </div>
            </div>

            </div>
        </div>
    )
}
