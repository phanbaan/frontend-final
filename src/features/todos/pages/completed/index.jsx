import getDay from "../../../../assets/js/main";
import Add from "../../components/add";
import Table from "../../components/table";
import Title from "../../components/title";

const Completed = () => {
  const time = getDay();
  return (
    <div className="list">
      <div className="list__content">
        <Title
          color="#2ecc71"
          title="Danh sách công việc đã hoàn thành  ..."
          filter={true}
          date={time}
        />
        <Add />
        <Table />
      </div>
    </div>
  );
};

export default Completed;
