import React, { useRef, useState } from 'react'

const CustomerDetail = () => {
    const birthYearRef = useRef(null);
    const birthMonthRef = useRef(null);
    const birthDayRef = useRef(null);

    const [age, setAge] = useState('');

    const today = new Date();
    const initialDate = { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDay() };
    const [birthDate, setBirthDate] = useState(initialDate);

    const handleSelect = (e) => {
        const { name, value} = e.target;
        setBirthDate = {...birthDate, [name]:value};

        const birthDayOfThisYear = new Date(today.getFullYear(), birthDate.month + 1, birthDate.day);
        setAge = today.getFullYear() - birthDate.year;
        if (today < birthDayOfThisYear) {
            setAge = setAge - 1;
        }
    }

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
                    <select ref={birthYearRef} value={birthDate.year} onChange={(e) => handleSelect(e)} />年
                    <select ref={birthMonthRef} value={birthDate.month} onChange={(e) => handleSelect(e)} />月
                    <select ref={birthDayRef} value={birthDate.day} onChange={(e) => handleSelect(e)} />日
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