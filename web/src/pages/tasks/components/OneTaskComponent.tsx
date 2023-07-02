import { styled } from "styled-components";

const Title = styled.div`
  border-style: dotted;

  line-height: 1.25rem;
  background: blue;
`;
const SocialMedia = styled.div`
  border-style: dotted;
  line-height: 1.25rem;
  background: yellow;
`;
const Tag = styled.div`
  border-style: dotted;
  line-height: 1.25rem;
  background: #d2b4de;
`;
const Description = styled.div`
  border-style: dotted;
  line-height: 1.25rem;
  background: #a6dcf5;
`;
const OneTaskBox = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-style: dotted;
  margin-top: 3px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: green;
`;
export const OneTaskComponent = ({ task }: any) => {
  return (
    <>
      <OneTaskBox>
        <Title>{task.title}</Title>
        <SocialMedia>{task.socialMedia}</SocialMedia>
        {task.tag && <Tag>{task.tag}</Tag>}
        {task.description && <Description>{task.description}</Description>}
      </OneTaskBox>
    </>
  );
};
