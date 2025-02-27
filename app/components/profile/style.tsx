import styled from "styled-components";
import Image from "next/image";
import { Wrapper } from "globalStyles/globalStyles";

//Profile styles

export const ProfileWrapper = styled(Wrapper)`
  gap: 1rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
`;

export const ProfileImageContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--main-Color);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: var(--primary-white);
  &:hover {
    filter: brightness(0.8);
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled(Image)`
  width: 40px;
  height: 40px;
  
`;

export const ProfileName = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: var(--main-Color);
`;


export const Logout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const LogoutButton = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  align-self: center;
  flex-direction: row;
  display: flex;
  gap: 0.5rem;
  &:hover {
    filter: brightness(0.1);
  }
  align-items: center;
`;

export const LogoutIcon = styled(Image)`
  width: 17px;
  height: 18px;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const AdditionalInfo = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: var(--main-Color);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const WelcomeTextWrapper = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: var(--main-Color);

`;

export const WelcomeText = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: var(--theme-main-Color);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
`;

export const ParagraphStyle= styled.div`
color: #a8a8a8`