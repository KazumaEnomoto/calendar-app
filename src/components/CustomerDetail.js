import React, { useRef, useState } from 'react'

const CustomerDetail = () => {
    const birthYearRef = useRef(null);
    const birthMonthRef = useRef(null);
    const birthDayRef = useRef(null);

    const [age, setAge] = useState('');

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
                    <select ref={birthYearRef} />年
                    <select ref={birthMonthRef}/>月
                    <select ref={birthDayRef}/>日
                </div>
            </div>
            <div className='formField'>
                <label>年齢</label>
                <div>計算結果</div>
            </div>
        </div>
    )
}

export default CustomerDetail