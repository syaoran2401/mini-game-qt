import React from 'react'
import QuanCuoc from './QuanCuoc'
import { useSelector } from 'react-redux'

export default function DanhSachCuoc(props) {

    const danhSachCuoc = useSelector(state => state.BaiTapXucSacReducer.danhSachCuoc)


    const renderDanhSachCuoc = () => {
        return danhSachCuoc.map((item, index) => {
            return <div key={index} className='col-4'>
                <QuanCuoc quanCuoc= {item} />
            </div>
        })
    }

    return (
        <div className='row'>
            {renderDanhSachCuoc()}
        </div>
    )
}
