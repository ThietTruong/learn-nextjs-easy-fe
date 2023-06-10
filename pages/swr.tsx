import * as React from "react";
import { StudentDetail } from "@/components/swr/StudentDetail";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [detailList, setDetailList] = React.useState<number[]>([1, 1, 1]);
  const handleAddStudentClick = () => {
    setDetailList([...detailList, 1]);
  };
  return (
    <div>
      <h1>SWR palay ground</h1>
      <button onClick={handleAddStudentClick}>Add student</button>
      <ul>
        {detailList.map((_item, index) => {
          return <StudentDetail key={index} studentId="lea11ziflg8xoiza"></StudentDetail>;
        })}
      </ul>
      {/* <StudentDetail studentId="lea11ziflg8xoiza"></StudentDetail>;
      <StudentDetail studentId="lea11ziflg8xoiza"></StudentDetail>; */}
    </div>
  );
}
