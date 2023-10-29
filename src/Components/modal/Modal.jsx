import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function MyModal({title, children, show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} 
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{children}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

