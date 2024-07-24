import React from 'react'
import { TextInput, Button } from '@gravity-ui/uikit';
import contact_small from '../assets/contact_small.jpg';
import contact_big from '../assets/contact_big.jpg';

export default function ContactPage() {
    return (
        <div className='contact-page'>
            <div className='container-tiny'>
                <div className='form__wrapper'>
                    <div className='form__title'>
                        <h2>Contact Us</h2>
                    </div>
                    <div className='form__inputs'>
                        <TextInput className='form__input' placeholder='Name' />
                        <TextInput className='form__input' placeholder='Phone' />
                        <TextInput className='form__input' placeholder='Email' />
                        <TextInput className='form__input' placeholder='Message' size='xl' />
                        <Button className='form__button'>
                            Send
                        </Button>
                    </div>
                    <div className='form__photo'>
                        <picture>
                            <source media="(max-width: 768px)" srcSet={contact_small} alt='contact' />
                            <source media="(min-width: 767px)" srcSet={contact_big} alt='contact' />
                            <img src={contact_big} alt='contact' />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
