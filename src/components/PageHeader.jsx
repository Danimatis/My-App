import Title from "./common/title";
import Description from "./common/description";
const PageHeader = ({ title, description }) => {
  return (
    <>
      <Title title={title} />
      <Description description={description} />
    </>
  );
};
export default PageHeader;
