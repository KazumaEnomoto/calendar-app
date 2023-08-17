import React, { useRef, useState } from 'react'

const CustomerDetail = () => {
    const birthYearRef = useRef(null);
    const birthMonthRef = useRef(null);
    const birthDayRef = useRef(null);

    const [age, setAge] = useState('');

    const [birthYear, setBirthYear] = useState(new Date().getFullYear());
    const [birthMonth, setBirthMonth] = useState(new Date().getMonth() + 1 );
    const [birthDay, setBirthDay] = useState(new Date().getDay());

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
                    <select ref={birthYearRef} value={birthYear}/>年
                    <select ref={birthMonthRef} value={birthMonth}/>月
                    <select ref={birthDayRef} value={birthDay}/>日
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