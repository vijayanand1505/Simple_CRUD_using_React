import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const Popup = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ expense, amount, date });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Calculate Expense
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Expense Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Shopping, Travel, etc"
                name="expense"
                id="inputExpense"
                required
                value={expense}
                autoFocus
                onChange={(e) => setExpense(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                id="inputAmount"
                value={amount}
                required
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                id="inputDate"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button variant="primary" type="submit">
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
