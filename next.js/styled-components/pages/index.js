import styled from 'styled-components'
import db from '../db.json';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.success};
`
export default function Home() {
    return (
        <div Style={{ backgroundImage: `url(${db.bg})`}}></div>
    );
}
