import styled from 'styled-components';

export const InputStyled = styled.input`
  background: var(--bg-secondary);
  border: 0.0625rem solid var(--border);
  border-radius: 0.625rem;
  padding: 0.75rem 0.9375rem;
  width: 21.875rem;
  margin: 0.225rem 0;

  @media (min-width: 300px) and (max-width: 500px) {
    width: 20rem;
  }
`;

export const LabelStyled = styled.label`
  display: block;
  color: var(--gray);

  &:first-child {
    padding-top: 1.5rem;
  }
`;