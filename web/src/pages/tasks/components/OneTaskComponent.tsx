import { Description, OneTaskBox, SocialMedia, Tag, Title } from "../styles/OneTaskComponent";

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
