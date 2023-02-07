import { Modal, Input, Button, Text, Textarea } from "@nextui-org/react"
import { Offer } from "@prisma/client";
import { MutableRefObject, Ref, useRef } from "react";

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
};

const AddOfferModal = ({ visible, closeHandler }: AddOfferModalProps) => {

  const wantedItemRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const offeredItemRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const locationRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const emailRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const additionalInfoRef: Ref<HTMLTextAreaElement> | undefined = useRef(null);


  const onClickHandler = () => {

    const newOffer: Omit<Offer, "id" | "number"> = {
      itemOffered: offeredItemRef?.current?.value ?? "",
      itemWanted: wantedItemRef?.current?.value ?? "",
      offerMaker: localStorage.getItem("KIUexchange_username") ?? "not found",
      offerMakerMail: emailRef?.current?.value ?? "",
      offerTakers: [],
      offerTakerMails: [],
      chosenTakerMail: null,
      exchangeLocation: locationRef.current?.value ?? "",
      description: additionalInfoRef.current?.value?.toString() ?? ""
    }

    fetch("/api/addOffer", { method: "POST", body: JSON.stringify(newOffer) });
    closeHandler();
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
          ref={wantedItemRef}
          aria-label="I want"
          labelLeft={<span style={{ minWidth: "50px" }} >I want:</span>}
          bordered
          borderWeight="light"
        />
        <Input
          ref={offeredItemRef}
          aria-label="I offer"
          labelLeft={<span style={{ minWidth: "50px" }} >I offer:</span>}
          bordered
          borderWeight="light"
        />
        <Input
          ref={locationRef}
          aria-label="location of the exchange"
          labelLeft={<span style={{ minWidth: "50px" }} >location of exchange:</span>}
          bordered
          borderWeight="light"
        />
        <Input
          ref={emailRef}
          aria-label="E-mail"
          labelLeft={<span style={{ minWidth: "50px" }} >E-mail:</span>}
          bordered
          borderWeight="light"
        />
        <Textarea
          ref={additionalInfoRef}
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