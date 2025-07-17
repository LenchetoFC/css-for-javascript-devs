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
import { COLORS } from "../../constants";

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

          <UnstyledButton onClick={onDismiss} aria-label="Close">
            <Icon id="close" strokeWidth={2} />
          </UnstyledButton>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Content>
      </DialogPortal>
    </Wrapper>
  );
};

const Wrapper = styled(Dialog)``;

const Content = styled(DialogContent)`
  background: var(--color-white);
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

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > button {
    align-self: flex-end;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  a {
    font-size: calc(18 / 16 * 1rem);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    color: var(--color-gray-900);
    text-decoration: none;

    &:first-of-type {
      color: var(--color-secondary);
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  a {
    font-size: calc(14 / 16 * 1rem);
    font-weight: var(--font-weight-normal);
    color: var(--color-gray-700);
    text-decoration: none;
  }
`;

export default MobileMenu;
