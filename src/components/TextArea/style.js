import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0rem 0rem 0rem;

  p {
    color: var(--gray);
  }
`;

export const TextAreaStyled = styled.textarea`
  background: var(--bg-secondary);
  padding: 0.75rem 0.9375rem;
  border-radius: 0.625rem;
  width: 21.875rem;
  margin: 0.225rem 0;
  outline: none;
  color: var(--gray);
  font-family: 'Poppins';
  border: 0.0625rem solid var(--border);

  @media (min-width: 300px) and (max-width: 500px) {
    width: 20rem;
  }
`;