// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
// import { colors } from "../../styling";
// import flowerBorder from '../../images/flower-border.png'

// export const Banner = styled.nav`
// background: ${colors.mediumBlue};
// height: 500px;
// display: flex;
// justify-content: space-between;
// alignItems: 'center', 
// textAlign: 'center'
// `;

// export const Nav = styled.nav`
// background: ${colors.navyBlue};
// height: 85px;
// display: flex;
// justify-content: space-between;
// padding: 0.2rem calc((100vw - 1000px) / 2);
// z-index: 12;
// `;

export const NavLink = styled(Link)`
color: "#D4E9FF";
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: "#315AA5";
}
`;

// export const Bars = styled(FaBars)`
// display: none;
// color: #808080;
// @media screen and (max-width: 768px) {
// 	display: block;
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	transform: translate(-100%, 75%);
// 	font-size: 1.8rem;
// 	cursor: pointer;
// }
// `;

// export const NavMenu = styled.div`
// display: flex;
// align-items: center;
// margin-right: -24px;
// /* Second Nav */
// /* margin-right: 24px; */
// /* Third Nav */
// /* width: 100vw;
// white-space: nowrap; */
// @media screen and (max-width: 768px) {
// 	display: none;
// }
// `;
