import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const JoinModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='JoinModal'>
            <Button className="joinButton" onClick={handleShow}>
                <FontAwesomeIcon icon='plus' />
                 Приклучи се
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Приклучи се
                    </Modal.Title>
                    <FontAwesomeIcon icon='times-circle' onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Form  onSubmit={(e) => submitHandler(e)} method='post'>
                        <Form.Group controlId="name">
                            <Form.Label>Име и Презиме(задолжително)
                            </Form.Label>
                            <Form.Control type="text" placeholder="Внесете Име и Презиме" />
                        </Form.Group>
                        <Form.Group controlId="mail">
                            <Form.Label>Emаil (задолжително)
                            </Form.Label>
                            <Form.Control type="email" placeholder="Внесете Email" />
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

export default JoinModal;