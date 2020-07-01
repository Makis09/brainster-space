import React, { useState, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MyContext } from '../../Context/MyContext';


const PartnershipModal = () => {
    const {showPartnershipModal, setShowPartnershipModal} = useContext(MyContext);
    const [info, setInfo] = useState({
        name: '',
        company: '',
        phone: '',
        colaborate: ''
    })
    const [errors, setErrors] = useState({
        name: false,
        phone: false
    })
    const handleClose = () => {
        setShowPartnershipModal(false)
        setErrors({
            name: false,
            phone: false
        })
        setInfo({
            name: '',
            company: '',
            phone: '',
            colaborate: ''
        })
    };
    const submitHandler = (e) => {
        e.preventDefault()
        setErrors({
            name: info.name.length < 2,
            phone: info.phone.length < 5
        })
    }
    const handleChange = (e) => {
        let newInfo = JSON.parse(JSON.stringify(info));
        let { id, value } = e.target;
        newInfo[id] = value;
        setInfo(newInfo);
    }


    return (
        <div className='PartnershipModal'>
            <Button className="partnershipButton" onClick={() => setShowPartnershipModal(true)}>
                ПАРТНЕРСТВА
            </Button>         
               <Modal show={showPartnershipModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Приклучи се
                    </Modal.Title>
                    <FontAwesomeIcon icon='times-circle' onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => submitHandler(e)} method='post'>
                        <Form.Group controlId="name">
                            <Form.Label>Име и Презиме(задолжително)
                               {errors.name && <span>Внесете Име и Презиме</span>}
                            </Form.Label>
                            <Form.Control type="text" placeholder="Внесете Име и Презиме" onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Form.Group controlId="company">
                            <Form.Label>Име на Компанија (незадолжително)
                            </Form.Label>
                            <Form.Control type="text" placeholder="Внесете Име на вашата компанија" onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Телефонски број (задолжително)
                               {errors.phone && <span>Внесете Телефонски број</span>}
                            </Form.Label>
                            <Form.Control type="text" placeholder="Внесете Телефонски Број" onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Form.Group controlId="colaborate">
                            <Form.Label>Предлог за соработка (незадолжително)
                                <span style={{ color: 'grey' }}>{300 - info.colaborate.length}</span>
                            </Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e) => handleChange(e)} maxLength='300' />
                        </Form.Group>
                        <span style={{ marginTop: '20px' }}>
                            <Button variant="light" onClick={handleClose}>
                                ИСКЛУЧИ
                            </Button>
                            <Button className="joinButtonSubmit" type='submit'>
                                <FontAwesomeIcon icon='arrow-right' />
                                ИСПРАТИ ФОРМА
                            </Button>
                        </span>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default PartnershipModal;