import { Modal, Input, Button, Text, Textarea } from "@nextui-org/react"
import { OfferProps } from "./OfferCard";

export interface AddOfferProps {
  offerMaker: string,
  itemWanted: string,
  itemOffered: string,
  location: string,
  description: string,
  email: "string",
}

export interface AddOfferModalProps {
  visible: boolean,
  closeHandler: () => void,
  addOffer({ offerMaker, itemOffered, itemWanted, description, location, email }: AddOfferProps): void;
};

const AddOfferModal = ({ visible, closeHandler, addOffer }: AddOfferModalProps) => {

  const onClickHandler = () => {
    // TODO
    // collect info from inputs
    // addOffer();
  };

  return (
    <Modal
      blur
      closeButton
      aria-labelledby="Add offer"
      open={visible}
      onClose={closeHandler}
      css={{ margin: "0 5px 0 5px" }}
    >
      <Modal.Header>
        <Text id="Add offer" size={18}>
          Add offer
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          aria-label="I want"
          labelLeft={<span style={{ minWidth: "50px" }} >I want:</span>}
          bordered
          borderWeight="light"
        />
        <Input
          aria-label="I offer"
          labelLeft={<span style={{ minWidth: "50px" }} >I offer:</span>}
          bordered
          borderWeight="light"
        />
        <Input
          aria-label="location of the exchange"
          labelLeft={<span style={{ minWidth: "50px" }} >location of exchange:</span>}
          bordered
          borderWeight="light"
        />
        <Input
          aria-label="E-mail"
          labelLeft={<span style={{ minWidth: "50px" }} >E-mail:</span>}
          bordered
          borderWeight="light"
        />
        <Textarea
          aria-label="Additioinal information"
          placeholder="Additional information"
          bordered
          borderWeight="light"
        />
      </Modal.Body>
      <Modal.Footer css={{ display: "flex", justifyContent: "center" }}>
        <Button auto onPress={onClickHandler} css={{ backgroundColor: "$green1" }}>Add offer</Button>
      </Modal.Footer>
    </Modal>
  );
};


export default AddOfferModal;