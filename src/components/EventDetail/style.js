import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export const EventDetail = styled.div`
  background: var(--primary);
  border: 0.0625rem solid var(--border);
  border-radius: 0.625rem;
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 300px) and (max-width: 400px) {
    max-width: 18.75rem;
    padding: 1.25rem;
  }
`;

export const EventTitle = styled.h2`
  color: var(--first-orange);
`;

export const EventDescription = styled.p`
  font-size: 0.95rem;
  color: var(--primary-lightness);
  padding: 20px 0;
`;

export const CardInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 300px) and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CardTime = styled.div`
  display: flex;
  align-items: center;

  p {
    color: var(--first-orange);
    margin: 0 0.625rem;
  }
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;

  p {
    color: var(--first-orange);
    margin: 0 0.625rem;
  }
`;

export const CardViews = styled.div`
  display: flex;
  align-items: center;

  p {
    color: var(--first-orange);
    margin: 0 0.625rem;
  }
`;

export const EventAdress = styled.div`
  display: flex;
  align-items: center;

  p {
    color: var(--first-orange);
    margin: 0 0.625rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
`;