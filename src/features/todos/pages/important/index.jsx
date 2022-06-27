import getDay from "../../../../assets/js/main";
import Add from "../../components/add";
import Table from "../../components/table";
import Title from "../../components/title";
import "./style.scss";
const Important = () => {
  const time = getDay();
  return (
    <div className="list">
      <div className="list__content">
        <Title
          color="#e74c3c"
          title="Danh sách công việc quan trọng  ..."
          filter={true}
          date={time}
        />
        <Add />
        <Table />
      </div>
    </div>
  );
};

export default Important;
