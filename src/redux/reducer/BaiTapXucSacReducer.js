

const initialState = {
    danhSachCuoc: [
        {
            id: 'bau',
            hinhAnh: './img/bau.png',
            diemCuoc: 0,
        },
        {
            id: 'cua',
            hinhAnh: './img/cua.png',
            diemCuoc: 0,
        },
        {
            id: 'ca',
            hinhAnh: './img/ca.png',
            diemCuoc: 0,
        },
        {
            id: 'ga',
            hinhAnh: './img/ga.png',
            diemCuoc: 0,
        },
        {
            id: 'nai',
            hinhAnh: './img/nai.png',
            diemCuoc: 0,
        },
        {
            id: 'tom',
            hinhAnh: './img/tom.png',
            diemCuoc: 0,
        },
    ],
    tienThuong: 1000,
    mangXucSac: [
        {
            id: 'bau',
            hinhAnh: './img/bau.png',
        },
        {
            id: 'cua',
            hinhAnh: './img/cua.png',
        },
        {
            id: 'ca',
            hinhAnh: './img/ca.png',
        },
    ]
}

const BaiTapXucSacReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            const updateDanhSachCuoc = [...state.danhSachCuoc]
            const index = updateDanhSachCuoc.findIndex(item => item.id === action.quanCuoc.id);
            if (index !== -1) {
                if (action.tangGiam && state.tienThuong > 0 ) {
                    updateDanhSachCuoc[index].diemCuoc += 100;
                    state.tienThuong -= 100;
                } else if (!action.tangGiam && updateDanhSachCuoc[index].diemCuoc > 0) {
                    updateDanhSachCuoc[index].diemCuoc -= 100
                    state.tienThuong += 100;
                }
            }

            state.danhSachCuoc = updateDanhSachCuoc;
            return { ...state }

        }

        case 'DAT_CUOC_THEO_%': {
            const updateDanhSachCuoc = [...state.danhSachCuoc]
            const index = updateDanhSachCuoc.findIndex(item => item.id === action.quanCuoc.id);
            // const arrPercentage = ['25%', '50%', '75%', '100%']
            if (index !== -1) {
                if ((action.phanTram === '25%') && (state.tienThuong * 0.25) > 0) {
                    updateDanhSachCuoc[index].diemCuoc += state.tienThuong * 0.25;
                    state.tienThuong -= (state.tienThuong * 0.25)
                }

                if ((action.phanTram === '50%') && (state.tienThuong * 0.5) > 0) {
                    updateDanhSachCuoc[index].diemCuoc += state.tienThuong * 0.5;
                    state.tienThuong -= (state.tienThuong * 0.5)
                }

                if ((action.phanTram === '75%') && (state.tienThuong * 0.75) > 0) {
                    updateDanhSachCuoc[index].diemCuoc += state.tienThuong * 0.75;
                    state.tienThuong -= (state.tienThuong * 0.75)
                }

                if ((action.phanTram === '100%') && state.tienThuong > 0) {
                    updateDanhSachCuoc[index].diemCuoc += state.tienThuong;
                    state.tienThuong -= state.tienThuong
                }
            }
            state.danhSachCuoc = updateDanhSachCuoc;
            return { ...state }
        }

        case 'PLAY': {
            const arrXucSacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                const xucSacNgauNhien = state.danhSachCuoc[soNgauNhien];
                arrXucSacNgauNhien.push(xucSacNgauNhien)
            }

            state.mangXucSac = arrXucSacNgauNhien


            // xử lý tăng điểm thưởng
            const diemDat = { ...state.danhSachCuoc.diemCuoc }
            arrXucSacNgauNhien.forEach((itemXucSac, index) => {

                const indexDanhSachCuoc = state.danhSachCuoc.findIndex(item => item.id === itemXucSac.id);
                console.log(indexDanhSachCuoc)

                if (indexDanhSachCuoc !== -1) {
                    state.tienThuong += state.danhSachCuoc[indexDanhSachCuoc].diemCuoc;
                }
            })

            // Xử lý hoàn tiền
            state.danhSachCuoc.forEach((itemDanhSachCuoc, index) => {

                const indexXucSacNgauNhien = arrXucSacNgauNhien.findIndex(item => item.id === itemDanhSachCuoc.id);

                if (indexXucSacNgauNhien !== -1) {
                    state.tienThuong += itemDanhSachCuoc.diemCuoc;
                }
            })

            state.danhSachCuoc = state.danhSachCuoc.map((itemDanhSachCuoc, index) =>{
                return {...itemDanhSachCuoc,diemCuoc:0}
            })
            return { ...state }

        }

        case 'PLAY_AGAIN':{
            state.tienThuong = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((itemDanhSachCuoc, index) =>{
                return {...itemDanhSachCuoc,diemCuoc:0}
            })
            return { ...state }
        }





        default: break

    }
    return { ...state }
}

export default BaiTapXucSacReducer