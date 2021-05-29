import styled from 'styled-components';

function Header() {
	return (
		<HeaderSC>
			<h1>Spamtector</h1>
		</HeaderSC>
	);
}
const HeaderSC = styled.div`
	h1 {
		color: #5465ff;
	}
`;

export default Header;
