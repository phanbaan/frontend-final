import getDay from "../../../../assets/js/main";
import Add from "../../components/add";
import Table from "../../components/table";
import Title from "../../components/title";
import "./style.scss";
const Today = () => {
  const time = getDay();
  return (
    <div className="list">
      <div className="list__content">
        <Title
          color="#323130"
          title="Ngày của tôi  ..."
          filter={true}
          date={time}
        />
        <Add />
        <Table />
      </div>
    </div>
  );
};

export default Today;
