import styled from 'styled-components';

export const FormStyled = styled.form`
  background: var(--primary);
  padding: 1.25rem 3.125rem 3.125rem 3.125rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid var(--border);

  @media (min-width: 300px) and (max-width: 500px) {
    padding: 1.25rem 1.125rem 2.125rem 1.125rem;
    width: 22.1875rem;
  }
`;

export const FlexInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
`;