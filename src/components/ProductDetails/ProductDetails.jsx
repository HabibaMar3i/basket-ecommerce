import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

export default function ProductDetails({ isOpen, onOpenChange, product }) {
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Test</ModalHeader>
              <ModalBody>
                <div className="">
                  <h1>{product.name}</h1>
                </div>
              </ModalBody>
              <ModalFooter>
                <p>Related products</p>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
