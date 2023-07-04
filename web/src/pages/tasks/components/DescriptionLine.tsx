import { styled } from "styled-components";

export const Title = styled.div`
  width: 10rem;
  margin-right: 17%;
`;
export const SocialMedia = styled.div`
  width: 10rem;
  margin-right: 17%;
`;
export const Tag = styled.div`
  width: 10rem;
  margin-right: 17%;
`;
export const Description = styled.div`
  max-width: 10rem;
  height: 1rem;
`;
export const OneTaskBox = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  display: flex;
  padding: 10px;
  height: 0.9rem;
`;

const DescriptionLine = () => {
  return (
    <>
      <OneTaskBox>
        <Title>Title</Title>
        <SocialMedia>Social Media</SocialMedia>
        <Tag>Tag</Tag>
        <Description>Description</Description>
      </OneTaskBox>
    </>
  );
};

export default DescriptionLine;
