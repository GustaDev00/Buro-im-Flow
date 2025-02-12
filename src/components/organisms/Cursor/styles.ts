import styled, { css } from "styled-components";

export const Text = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;

  svg {
    margin-top: 0.2rem;
    width: 1rem;
    height: 1rem;
  }
`;

export const Cursor = styled.div<{ $type?: string | null }>`
  opacity: 1;
  width: 1rem;
  height: 1rem;
  border: 0.2rem solid #c1c1c1;
  position: fixed;
  pointer-events: none;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  transition: width 0.4s ease, height 0.4s ease, border-color 0.4s ease, background 0.4s ease,
    transform 0.4s ease, opacity 0.4s ease, scale 0.4s ease;

  ${({ $type }) => {
    if ($type === "hover") {
      return css`
        width: 6rem;
        height: 6rem;
      `;
    }
    if ($type === "cards") {
      return css`
        width: 12rem;
        height: 12rem;

        ${Text} {
          opacity: 1;
          visibility: visible;
        }
      `;
    }

    return null;
  }}

  @media (hover: none) {
    display: none;
  }

  @media (pointer: coarse) {
    display: none;
  }
`;
