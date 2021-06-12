import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import {
  Content,
  Overlay,
  Header,
  Body,
  Filter,
  Clouse,
  ModalWrapper,
} from "./style";

export const Modal = ({ show, onClose, children }) => {
  const contentRef = useRef(null);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);

    window.addEventListener("click", backDropHandler);
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const backDropHandler = (e) => {
      console.log(contentRef.current?.contains(e.target))
  };

  const modalContent = show ? (
    <Overlay>
      <ModalWrapper ref={contentRef}>
        <Content>
          <Header>
            <Clouse onClick={handleCloseClick}>x</Clouse>
          </Header>
          <Body>{children}</Body>
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
