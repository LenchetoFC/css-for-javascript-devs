import React from "react";
import styled from "styled-components";

import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import styles from "./styles.module.css";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper
      defaultOpen={isOpen}
      onOpenChange={onDismiss}
      onEscapeKeyDown={onDismiss}
    >
      <DialogPortal>
        <DialogOverlay className={styles.Overlay} />
        <Content className={styles.Content}>
          <VisuallyHidden>
            <DialogTitle>Mobile Nav Menu</DialogTitle>

            <DialogDescription>Navigate between shop pages</DialogDescription>
          </VisuallyHidden>

          <button onClick={onDismiss} aria-label="Close">
            <Icon id="close" strokeWidth={2} />
          </button>
          <nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </nav>
          <footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </footer>
        </Content>
      </DialogPortal>
    </Wrapper>
  );
};

const Wrapper = styled(Dialog)``;

const Content = styled(DialogContent)`
  background: grey;
  border-radius: 6px;
  position: fixed;
  right: 0;
  width: 90vw;
  left: auto;
  max-width: 400px;
  max-height: none;
  transform: none;
  height: 100%;
  top: 0;
  padding: 25px;
  animation: _contentShow_1t96g_1 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export default MobileMenu;
