import styled from 'styled-components';

export const ButtonCTA = styled.button`
  width: 21.875rem;
  background: ${({ ctaType }) =>
    ctaType === "Login" ? "var(--first-orange)" : "var(--primary)"};
  color: ${({ ctaType }) =>
    ctaType === "Login" ? "var(--primary)" : "var(--first-orange)"};
  padding: 0.75rem;
  border-top: none;
  border: 0.0625rem solid var(--first-orange);
  border-radius: 0.3125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.25rem;

  @media (min-width: 300px) and (max-width: 500px) {
    width: 20rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  &:hover {
    color: ${({ ctaType }) =>
      ctaType === "Login" ? "var(--primary)" : "var(--secondary-orange)"};
    background: ${({ ctaType }) =>
      ctaType === "Login" ? "var(--secondary-orange)" : "var(--primary)"};
  }
`;