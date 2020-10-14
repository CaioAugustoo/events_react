import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 2.375rem 0.9375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardStyled = styled.div`
  max-width: 27.5rem;
  min-height: 13.125rem;
  background: var(--primary);
  border-radius: 0.625rem;
  padding: 0.625rem 1.25rem;
  border: 0.0625rem solid var(--border);
  cursor: pointer;
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    transform: translateY(-0.3125rem);
    box-shadow: 0rem 1.25rem 1.25rem rgba(0, 0, 0, 0.05);
  }
`;

export const CardTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--first-orange);
  font-weight: 400;
  font-size: 1.35rem;
  
  @media(min-width: 300px) and (max-width: 400px) {
    max-width: 220px;
  }
`;

export const CardType = styled.h4`
  opacity: 0.3;
  color: var(--primary-lightness);
  font-weight: 500;
`;

export const CardDescription = styled.p`
  opacity: 0.7;
  display: block;
  display: -webkit-box;
  margin: 15px 0;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primary-lightness);
  font-weight: 400;
  font-size: 0.95rem;
`;

export const CardInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTime = styled.div`
  p {
    color: var(--first-orange);
    margin: 0 0.625rem;
  }
`;

export const CardDate = styled.div`
  p {
    color: var(--first-orange);
    margin: 0 0.625rem;
  }
`;

export const CardViews = styled.div`
  p {
    color: var(--first-orange);
    margin: 0 0.625rem;
  }
`;