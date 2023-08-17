import React from 'react'

const CustomerDetail = () => {


    return (
        <div className="formContainer">
            <div className='formField'>
                <label>名前</label>
                <input
                    type='text'
                    placeholder='名前'
                    name='name'
                />
            </div>
            <div className='formField'>
                <label>誕生日</label>
                <div className='birthDay'>
                    <select />年
                    <select />月
                    <select />日
                </div>
            </div>
            <div className='formField'>
                <label>年齢</label>
                <div>※自動計算※</div>
            </div>
        </div>
    )
}

export default CustomerDetail