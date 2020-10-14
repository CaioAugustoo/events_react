import styled from "styled-components";

export const PreLoader = styled.div`
  position: absolute;
  background-color: var(--primary);
  opacity: 0.2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity 0.3s ease;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Spinner by Willian Justen
export const Spinner = styled.div`
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--first-orange);
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;