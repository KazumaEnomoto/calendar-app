import React, { useEffect, useRef, useState } from 'react'

const CustomerDetail = () => {
    const birthYearRef = useRef(null);
    const birthMonthRef = useRef(null);
    const birthDayRef = useRef(null);

    const [age, setAge] = useState('');

    const today = new Date();
    const initialDate = { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDay() };
    const [birthDate, setBirthDate] = useState(initialDate);

    const handleSelect = (e) => {
        const { name, value } = e.target;
        setBirthDate({ ...birthDate, [name]: value });
        console.log(birthDate);

        const birthDayOfThisYear = new Date(today.getFullYear(), birthDate.month, birthDate.day);
        setAge(today.getFullYear() - birthDate.year);
        if (today < birthDayOfThisYear) {
            setAge(age - 1);
        }
    }

    const generateYear = () => {
        for (let i = 1900; i <= today.getFullYear(); i++) {
            let option = document.createElement('option');
            option.value = i;
            option.text = i;
            birthYearRef.current.appendChild(option);
        }
    }

    const generateMonth = () => {
        for (let i = 1; i <= 12; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.text = i;
            birthMonthRef.current.appendChild(option);
        }
    }

    const generateDay = () => {
        const lastDayOfTargetMonth = new Date(birthYearRef.current.value, birthMonthRef.current.value, 0).getDate();
        //console.log(lastDayOfTargetMonth);
        for(let i = 1; i <= lastDayOfTargetMonth; i++){
            let option = document.createElement('option');
            option.value = i;
            option.text = i;
            birthDayRef.current.appendChild(option);
        }
    }

    useEffect(() => {
        generateYear();
        generateMonth();
        generateDay();
    });

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
                    <select ref={birthYearRef} value={birthDate.year} name="year" onChange={(e) => handleSelect(e)} />年
                    <select ref={birthMonthRef} value={birthDate.month} name="month" onChange={(e) => handleSelect(e)} />月
                    <select ref={birthDayRef} value={birthDate.day} name="day" onChange={(e) => handleSelect(e)} />日
                </div>
            </div>
            <div className='formField'>
                <label>年齢</label>
                <div>{age}歳</div>
            </div>
        </div>
    )
}

export default CustomerDetail