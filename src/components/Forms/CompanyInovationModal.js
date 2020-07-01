import React, {useContext} from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MyContext } from '../../Context/MyContext';

const CompanyInovationModal = () =>{
    const {showCompanyInovationModal, setShowCompanyInovationModal} = useContext(MyContext);

    const submitHandler = (e) => {
        e.preventDefault()
    }
    const handleClose = () => {
        setShowCompanyInovationModal(false)
    }
    return(
        <div className='CompanyInovationModal'>
            <Modal show={showCompanyInovationModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                       Внесете податоци
                    </Modal.Title>
                    <FontAwesomeIcon icon='times-circle' onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Form  onSubmit={(e) => submitHandler(e)} method='post'>
                        <Form.Group controlId="name">
                            <Form.Label>Име и Презиме
                            </Form.Label>
                            <Form.Control type="text" placeholder="Внесете Име и Презиме"/>
                        </Form.Group>
                        <Form.Group controlId="company">
                            <Form.Label>Име на Компанија
                            </Form.Label>
                            <Form.Control type="text" placeholder="Внесете Име на вашата компанија"/>
                        </Form.Group>
                        <Form.Group controlId="mail">
                            <Form.Label>Emаil
                            </Form.Label>
                            <Form.Control type="email" placeholder="Внесете Email" />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Телефонски број
                            </Form.Label>
                            <Form.Control type="text" placeholder="Внесете Телефонски Број"/>
                        </Form.Group>
                        <Form.Group controlId="colaborate">
                            <Form.Label>Потреби на компанијата</Form.Label>
                            <Form.Control as="textarea" rows="3" maxLength='300' />
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

export default CompanyInovationModal;