import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "../Buttons";
import {
  Content,
  Overlay,
  Body,
  Filter,
  Clouse,
  ModalWrapper,
  Flow,
} from "./style";

export const Modal = ({
  show,
  onClose,
  children,
  actions = false,
  action,
  actionText,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <Overlay>
      <ModalWrapper>
        <Content>
          <Body>{children}</Body>
          {!actions ? (
            <Clouse onClick={handleCloseClick}>Cerrar</Clouse>
          ) : (
            <Flow>
              <Clouse onClick={handleCloseClick}>Cerrar</Clouse>
              <Button action={action}>{actionText}</Button>
            </Flow>
          )}
        </Content>
      </ModalWrapper>
      <Filter></Filter>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
